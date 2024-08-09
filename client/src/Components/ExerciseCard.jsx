import { useState, useEffect } from 'react';
import { Col, Card, Button, Modal, Container, Row } from 'react-bootstrap';
import Axios from 'axios';
import "../assets/css/getWorkouts.css";


function ExerciseCard() {
    const [show, setShow] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [exercises, setExercises] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = (exercise) => {
        setSelectedExercise(exercise);
        setShow(true);
    };

    const url = 'http://localhost:3001/workouts';
    const options = {
        method: 'GET'
    }

    useEffect(() => {
        
        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('response:', response)
                    response.status(error);
                }
            })
            .then(data => {
                console.log('data:', data)
                setExercises(data);
            })
            .catch(err => console.error('Fetch error:', err.message));
    }, []);

    const handleAddedExercise = () => {
        Axios.post('/workoutId/exercises', {
            name: selectedExercise.Workout,
            muscles: selectedExercise.Muscles,
            equipment: selectedExercise.Equipment,
            intensity_level: selectedExercise.Intensity_Level,
            explanation: selectedExercise.Basic_Explanation
        })
    }

    return (
        <>
            <Col xs={12} md={4} className="g-2">
                {exercises.map((w) => (
                    <Card className="exercise-card" key={w.id}>
                        <Card.Body>
                            <Card.Title>{w.Muscles}</Card.Title>
                            <Card.Subtitle className='mb-2'>{w.WorkOut}</Card.Subtitle>
                            <Card.Text>{w.Intensity_Level}</Card.Text>
                            <Button className='btn exercise-card-btn accent-btn'>+</Button>
                            <Button className='btn exercise-card-btn'>Log Exercise</Button>
                            <Button onClick={() => handleShow(w)} className='btn exercise-card-btn'>Details</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Col>

            <Modal size="lg" show={show} onHide={handleClose}>
                {selectedExercise && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedExercise.WorkOut}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <h2>{selectedExercise.WorkOut}</h2>
                                        <h4>{selectedExercise.Muscles}</h4>
                                        <h6>Equipment Needed: {selectedExercise.Equipment}</h6>
                                        {/* //TODO: onClick to add to that day's workout log */}
                                        <Button className='btn accent-btn modal-btn'>Log Exercise</Button>
                                         {/* //TODO: onClick to add exercise to a workout */}
                                        <Button onClick={handleAddedExercise} className='btn accent-btn modal-btn'>+ Add to Workout</Button>
                                         {/*TODO: Make it show only the intensity level chosen */}
                                        <h6>Beginner Sets: {selectedExercise.Beginner_Sets}</h6>
                                        <h6>Intermediate Sets: {selectedExercise.Intermediate_Sets}</h6>
                                        <h6>Expert Sets: {selectedExercise.Expert_Sets}</h6>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <video>{selectedExercise.Video}</video>
                                        <h5>Tutorial Video</h5>
                                        <p>Basic Explanation: {selectedExercise.Basic_Explanation}</p>
                                    </Col>
                                </Row>
                                <p>Long Explanation: {selectedExercise.Long_Explanation}</p>
                            </Container>
                        </Modal.Body>
                        
                        <Modal.Footer>
                            <Button className='btn exercise-card-btn' onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </>
    );
}

export default ExerciseCard;