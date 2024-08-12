//page for seeing created workouts for certain days
import Header from '../Components/Header'
import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import '../assets/css/myworkouts.css'

function MyWorkouts() {

    const [workouts, setWorkouts] = useState([]);
    const [day, setDay] = useState([]);

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
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Sunday</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Monday</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Tuesday</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Wednesday</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Thursday</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Friday</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Saturday</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default MyWorkouts;