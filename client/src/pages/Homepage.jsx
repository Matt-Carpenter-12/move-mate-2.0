import { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar';
import GetWorkouts from '../Components/GetWorkouts';
import { Col, Container, Row, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import DayCard from '../Components/DayCard';
import { CiFaceSmile } from 'react-icons/ci';


function Homepage() {
    const [selectedDay, setSelectedDay] = useState('');

    const handleSelectDay = (day) => {
        // console.log(day);
        setSelectedDay(day);
    };

    const [clicked, setClick] = useState(false)

    const handleSidebar = () => {
        if(clicked === false) {
            setClick(true)
        } else {
            setClick(false)
        }
    }
    
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
        console.log(populateForm)

        getData();
    }, []);

    const showSelectedDay = <p>Adding to {<span className='accent-color'>{selectedDay}'s</span>} Workout</p>


    return (
        <>
        <Header />
        <section className="homepage">
            <Container>
                <Row>
                    <Col onClick={handleSidebar} xs={12} lg={2} className='sidebar-col'>
                        <Sidebar  populateForm={populateForm} setPopulateForm={setPopulateForm}/>
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
                                <Dropdown.Item value="Sunday" href="#" className='day-item day-item-middle' onClick={ () => handleSelectDay('Sunday')}>SUNDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle' onClick={ () => handleSelectDay('Monday')}>MONDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle' onClick={ () => handleSelectDay('Tuesday')}>TUESDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle' onClick={ () => handleSelectDay('Wednesday')}>WEDNESDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle' onClick={ () => handleSelectDay('Thursday')}>THURSDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle' onClick={ () => handleSelectDay('Friday')}>FRIDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item' onClick={ () => handleSelectDay('Saturday')}>SATURDAY</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <h5 className='day-subtitle'>
                           { !selectedDay ? "" : showSelectedDay }
                        </h5>
                        </Col>
                    </Row>
                        <GetWorkouts clicked={clicked} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Homepage;