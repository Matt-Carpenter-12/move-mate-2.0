import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "../assets/css/getWorkouts.css";


function ExerciseCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [exercises, setExercises] = useState([]);

    const url = 'http://localhost:3001/workouts';
    const options = {
        method: 'GET'
    }

    useEffect(() => {
        console.log('workouts page loaded')
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setExercises(data);
                // console.log(data[0]);
            })
            .catch(err => console.error(err.message))
    }, [])
    console.log(exercises);

    return (
        <>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col xs={12} md={4} className="g-2" key={idx}>
                    {
                        exercises.map((w, index) => {
                            return (
                                <>
                                    <Card className="exercise-card" key={index}>
                                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                        <Card.Body key={index}>
                                            <Card.Title>{w.Muscles}</Card.Title>
                                            <Card.Subtitle className='mb-2'>{w.WorkOut}</Card.Subtitle>
                                            <Card.Text>
                                                {w.Intensity_Level}
                                            </Card.Text>
                                            <Button  className='btn exercise-card-btn'>+</Button>
                                            <Button  className='btn exercise-card-btn'>Log Exercise</Button>
                                            <Button onClick={handleShow} className='btn exercise-card-btn'>Details</Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        })
                    }
                </Col >
            ))}

            <Modal show={show} onHide={handleClose}>
                    console.log(exercises[0].workout)
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}

export default ExerciseCard