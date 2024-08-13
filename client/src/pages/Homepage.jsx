import { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar';
import GetWorkouts from '../Components/GetWorkouts';
import { Col, Container, Row, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import DayCard from '../Components/DayCard';


function Homepage() {
    const [selectedDay, setSelectedDay] = useState('');

    const [workouts, setWorkouts] = useState([])
    const [dropdown, setDropdown] = useState('');

    const handleSelectDay = (day) => {
        console.log(day);
        setSelectedDay(day);
    };
    
    const [populateForm, setPopulateForm] = useState({ level: "", types: "", muscles: "", equipment: "" });

    useEffect(() => {
        const getData = async () => {
            try {
                const userId = sessionStorage.getItem('userId');
                const response = await fetch(`/api/users/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log("Response Data:", data);

                const equipment = JSON.parse(data.form[0].equipment);
                setPopulateForm(previous => ({ ...previous, level: data.form[0].fitnessLevel, equipment: equipment}));
            } catch (error) {
                console.error("Error:", error);
            }
        };

        getData();
    }, []);

    const showSelectedDay = <p>Adding to {<span className='accent-color'>{selectedDay}'s</span>} Workout</p>


    return (
        <>
        <Header />
        <section className="homepage">
            <Container>
                <Row>
                    <Col xs={12} lg={2} className='sidebar-col'>
                        <Sidebar populateForm={populateForm} setPopulateForm={setPopulateForm}/>
                    </Col>
                    <Col xs={12} lg={10} className='workouts-col' align="center">
                    <h1 className='workouts-header'><span className="accent-color">ADD AN EXERCISE </span>TO YOUR CUSTOM WORKOUT</h1>
                    <Row>
                        <Col lg={12}>
                        <Dropdown  className='day-dropdown' >                       
                            <Dropdown.Toggle id="dropdown-basic" className='day-toggle'>
                                SELECT A DAY
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='day-menu'>
                                <Dropdown.Item value="Sunday" href="#" className='day-item day-item-middle' onClick={ (e) => handleSelectDay('Sunday')}>SUNDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle' onClick={ (e) => handleSelectDay('Monday')}>MONDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle' onClick={ (e) => handleSelectDay('Tuesday')}>TUESDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle' onClick={ (e) => handleSelectDay('Wednesday')}>WEDNESDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle' onClick={ (e) => handleSelectDay('Thursday')}>THURSDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle' onClick={ (e) => handleSelectDay('Friday')}>FRIDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item' onClick={ (e) => handleSelectDay('Saturday')}>SATURDAY</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <h5 className='day-subtitle'>
                           { !selectedDay ? "" : showSelectedDay }
                        </h5>
                        </Col>
                    </Row>
                        <GetWorkouts populateForm={populateForm} setPopulateForm={setPopulateForm} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Homepage;