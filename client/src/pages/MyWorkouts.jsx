//page for seeing created workouts for certain days
import Header from '../Components/Header'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import MyWorkoutCards from '../Components/MyWorkoutCards';
import '../assets/css/myworkouts.css'

function MyWorkouts() {

    const [workouts, setWorkouts] = useState([]);
    const [activeItem, setActiveItem] = useState(null);
    const [day, setDay] = useState([]);

    const handleOpenAccordion = (id) => {
        setActiveItem(id)
        console.log(id)
    }

    useEffect(async () => {
        try {
            const response = await fetch('/api/workouts');
            const data = await response.json();

            console.log(data)
            console.log(data[0]._id)

            setWorkouts(data);
            setDay(data[0].day)

        } catch (error) {
            console.error(error.message)
        }
    }, [])

    return (
        <>
            <Header />
            <div className="my-workouts">
                <h1 className='my-workouts-header'>MY WORKOUTS</h1>

                <Accordion>
                    <Accordion eventKey="0" onClick={(e) => { handleOpenAccordion('sun') }}>
                        <Accordion.Header >Sunday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards day={day} setDay={setDay} workouts={workouts} setWorkouts={setWorkouts} activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion>

                    <Accordion.Item eventKey="1" onClick={(e) => { handleOpenAccordion('mon') }}>
                        <Accordion.Header >Monday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards day={day} setDay={setDay} workouts={workouts} setWorkouts={setWorkouts} activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" onClick={(e) => { handleOpenAccordion('tue') }}>
                        <Accordion.Header>Tuesday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards day={day} setDay={setDay} workouts={workouts} setWorkouts={setWorkouts} activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" onClick={(e) => { handleOpenAccordion('wed') }}>
                        <Accordion.Header>Wednesday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards day={day} setDay={setDay} workouts={workouts} setWorkouts={setWorkouts} activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" onClick={(e) => { handleOpenAccordion('thurs') }}>
                        <Accordion.Header>Thursday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards day={day} setDay={setDay} workouts={workouts} setWorkouts={setWorkouts} activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" onClick={(e) => { handleOpenAccordion('fri') }}>
                        <Accordion.Header>Friday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards day={day} setDay={setDay} workouts={workouts} setWorkouts={setWorkouts} activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" onClick={(e) => { handleOpenAccordion('sat') }}>
                        <Accordion.Header>Saturday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards day={day} setDay={setDay} workouts={workouts} setWorkouts={setWorkouts} activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default MyWorkouts;