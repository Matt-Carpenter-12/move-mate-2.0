import { useState, useEffect } from 'react';
import { Col, Card, Button, Modal, Container, Row } from 'react-bootstrap';
import "../assets/css/homepage.css";
import video from '../assets/images/example1.mp4'
import { CiCirclePlus } from "react-icons/ci";
import { FiArrowRightCircle} from 'react-icons/fi'


function ExerciseCard({ populateForm, setPopulateForm, selectedDay, setSelectedDay }) {
    const [show, setShow] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [exercises, setExercises] = useState([]);

    const [isDisabled, setIsDisabled] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = (exercise) => {
        setSelectedExercise(exercise);
        setShow(true);
    };

    //Disables the add button if a day is not selected
    useEffect(() => {
        if (selectedDay != '') {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    })

    let url = 'http://localhost:3001/workouts?';

    //Updates the url 
    if (populateForm.level != '') {
        // url += `difficulty=${populateForm.level.toLowerCase()}`
    }
    if (populateForm.muscle != '') {
        // url += `&muscle=${populateForm.muscle.toLowerCase()}`
        console.log(url)
    }

    const options = {
        method: 'GET'
    }

    //Fetches the data from the workout api
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

    //Saves the added exercises to the database
    const handleAddedExercise = async (exercise) => {
        console.log(exercise)
        console.log(selectedDay)
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    day: selectedDay,
                    exercise: 
                    {
                        name: exercise.name,
                        muscles: exercise.muscle,
                        equipment: exercise.equipment,
                        intensity_level: exercise.difficulty,
                        explanation: exercise.instructions
                    }
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            res.json(error)
            console.error(error.message)
        }
    }


    return (
        <>
            <Col xs={12} md={3} className="g-2">
                {exercises.map((w) => (
                    <Card className="exercise-card" key={w.id}>
                        <Card.Body className='exercise-card-body'>
                            <Card.Title>Bicep Curl{w.WorkOut}</Card.Title>
                            <Card.Subtitle className='mb-2'>Targets Biceps{w.Muscles}</Card.Subtitle>
                            <Card.Text>Beginner{w.Intensity_Level}</Card.Text>
                            <Button onClick={(event) => { event.preventDefault(); handleAddedExercise(w) }} disabled={isDisabled} className='btn exercise-card-btn accent-btn'><CiCirclePlus /></Button>
                            <Button onClick={() => handleShow(w)} className='btn exercise-card-btn details-btn'>Details <FiArrowRightCircle /></Button>
                        </Card.Body>
                    </Card>
                ))}
            </Col>

            <Modal size="lg" show={show} onHide={handleClose} className='modal'>
                {selectedExercise && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedExercise.WorkOut}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <h2>{selectedExercise.WorkOut}</h2>
                                        <h4>Targets <span className="accent-color">{selectedExercise.Muscles}</span></h4>
                                        <h6 className='equipment-subtitle'>Equipment Needed: {selectedExercise.Equipment}</h6>
                                        <h6 className='modal-subtitle'>Beginner Sets: {selectedExercise.Beginner_Sets}</h6>
                                        <h6 className='modal-subtitle'>Intermediate Sets: {selectedExercise.Intermediate_Sets}</h6>
                                        <h6 className='modal-subtitle'>Expert Sets: {selectedExercise.Expert_Sets}</h6>
                                    </Col>
                                    {/* <Col xs={12} md={6}>
                                        <video controls width='448' height='250'>
                                            <source src={selectedExercise.Video} type='video/mp4' />
                                            <source src={video} type='video/mp4'/>
                                        </video>
                                    </Col> */}
                                </Row>
                                <p>Instructions: {selectedExercise.Basic_Explanation}</p>
                                {/* <p>Long Explanation: {selectedExercise.Long_Explanation}</p> */}
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