//page for seeing created workouts for certain days
import Header from '../Components/Header'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import MyWorkoutCards from '../Components/MyWorkoutCards';
import '../assets/css/myworkouts.css'

function MyWorkouts() {

    const [activeItem, setActiveItem] = useState(null);

    const handleOpenAccordion = (id) => {
        setActiveItem(id)
        console.log(id)
    }

    return (
        <>
            <Header />
            <div className="my-workouts">
                <h1 className='my-workouts-header'>MY WORKOUTS</h1>

                <Accordion className='accordion'>
                    <Accordion.Item eventKey="0" onClick={(e) => { handleOpenAccordion('Sunday') }}>
                        <Accordion.Header className='acc-item'>Sunday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" onClick={(e) => { handleOpenAccordion('Monday') }}>
                        <Accordion.Header className='acc-item'>Monday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" onClick={(e) => { handleOpenAccordion('Tuesday') }}>
                        <Accordion.Header className='acc-item'>Tuesday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" onClick={(e) => { handleOpenAccordion('Wednesday') }}>
                        <Accordion.Header className='acc-item'>Wednesday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" onClick={(e) => { handleOpenAccordion('Thursday') }}>
                        <Accordion.Header className='acc-item'>Thursday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards  activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" onClick={(e) => { handleOpenAccordion('Friday') }}>
                        <Accordion.Header className='acc-item'>Friday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards  activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" onClick={(e) => { handleOpenAccordion('Saturday') }}>
                        <Accordion.Header className='acc-item'>Saturday</Accordion.Header>
                        <Accordion.Body>
                            <MyWorkoutCards activeItem={activeItem} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default MyWorkouts;