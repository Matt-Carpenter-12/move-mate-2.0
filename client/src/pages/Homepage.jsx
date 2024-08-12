import { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar';
import GetWorkouts from '../Components/GetWorkouts';
import { Col, Container, Row, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import DayCard from '../Components/DayCard';


function Homepage() {
    const [selectedDay, setSelectedDay] = useState('');

    const [workouts, setWorkouts] = useState([])

    const handleSelectDay = (event) => {
        console.log(event.target.value);
        setSelectedDay(event.target.value);
    };

    const [populateForm, setPopulateForm] = useState({ level: "", types: "", muscles: "", equipment: "" });

    useEffect(() => {
        const getData = async () => {
            try {
                const userId = sessionStorage.getItem('userId');
                console.log('User: ', userId);
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

    return (
        <>
        <Header />
        <section className="homepage">
            <Container>
                <Row>
                    <Col xs={12} lg={2} className='sidebar-col'>
                        <Sidebar populateForm={populateForm} setPopulateForm={setPopulateForm}/>
                    </Col>
                    <Col xs={12} lg={10} className='workouts-col'>
                    <h1 className='workouts-header'><span className="accent-color">ADD AN EXERCISE </span>TO YOUR CUSTOM WORKOUT</h1>
                    <Row>
                        <Col lg={12}>
                        <Dropdown className='day-dropdown'>                       
                            <Dropdown.Toggle id="dropdown-basic" className='day-toggle'>
                                SELECT A DAY
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='day-menu'>
                                <Dropdown.Item href="#" className='day-item day-item-middle'>SUNDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle'>MONDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle'>TUESDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle'>WEDNESDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle'>THURSDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item day-item-middle'>FRIDAY</Dropdown.Item>
                                <Dropdown.Item href="#" className='day-item'>SATURDAY</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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