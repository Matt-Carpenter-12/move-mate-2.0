import { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar';
import GetWorkouts from '../Components/GetWorkouts';
import { Col, Container, Row } from 'react-bootstrap';
import DayCard from '../Components/DayCard';


function Homepage() {
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
                    <h1 className='workouts-header'><span className="accent-color">SELECT A DAY </span>TO GET STARTED</h1>
                    <Row>
                        <Col lg={3} className='top-row'>
                        <DayCard 
                            day='SUNDAY'
                            id='sun'
                            />
                        </Col>
                        <Col lg={3} className='top-row'>
                        <DayCard 
                            day='MONDAY'
                            id='mon'
                            />
                        </Col>
                        <Col lg={3} className='top-row'>
                            <DayCard 
                            day='TUESDAY'
                            id='tue'
                            />
                        </Col>
                        <Col lg={3} className='top-row'>
                            <DayCard 
                            day='WEDNESDAY'
                            id='wed'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className='bottom-row'>
                            <DayCard 
                            day='THURSDAY'
                            id='thur'
                            />
                        </Col>
                        <Col lg={4} className='bottom-row'>
                            <DayCard 
                            day='FRIDAY'
                            id='fri'
                            />
                        </Col>
                        <Col lg={4} className='bottom-row'>
                            <DayCard 
                            day='SATURDAY'
                            id='sat'
                            />
                        </Col>
                    </Row>
                        <GetWorkouts />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Homepage;