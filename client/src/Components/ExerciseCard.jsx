import { useState, useEffect } from 'react';
import { Col, Card, Button, Modal, Container, Row } from 'react-bootstrap';
import "../assets/css/homepage.css";
import video from '../assets/images/example1.mp4'
import { CiCirclePlus } from "react-icons/ci";
import { FiArrowRightCircle } from 'react-icons/fi'


function ExerciseCard({ clicked, selectedDay, setSelectedDay }) {
    const [show, setShow] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [exercises, setExercises] = useState([]);

    const [isDisabled, setIsDisabled] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = (exercise) => {
        setSelectedExercise(exercise);
        setShow(true);
    };


    useEffect(() => {

        let url = 'http://localhost:3001/workouts?';
        const level = JSON.parse(localStorage.getItem('level'))
        // console.log(level)
        const muscle = JSON.parse(localStorage.getItem('muscle'))
        // console.log(data)
        const equipment = JSON.parse(localStorage.getItem('equipment'))

        switch (true) {
            case level != null && level != 'All'  && muscle === null && muscle != 'All' && equipment === null :
                url += `Intensity_Level=${level}`
                // console.log(url)
                break;
            case level != null && level != 'All' && muscle != null && muscle != 'All' && equipment === null:
                url += `Intensity_Level=${level}&Muscles=${muscle}`
                // console.log(url)
                break;
            case level != null && level != 'All' && muscle != null && muscle != 'All' && equipment != null:
                url += `Intensity_Level=${level}&Muscles=${muscle}&Equipment=${equipment}`
                // console.log(url)
                break;
            case level === null || level === 'All' && muscle != null && muscle != 'All' && equipment === null:
                url += `Muscles=${muscle}`
                // console.log(url)
                break;
            case  level === null || level === 'All' && muscle != null && muscle != 'All' && equipment != null:
                url += `Muscles=${muscle}&Equipment=${equipment}`
                // console.log(url)
                break;
            case level != null && level != 'All' && muscle === null || muscle === 'All' && equipment != null:
                url += `Intensity_Level=${level}&Equipment=${equipment}`
            // console.log(url)
            case  level === null && level === 'All' && muscle === null && muscle === 'All' && equipment != null:
                url += `Equipment=${equipment}`
                // console.log(url)
                break;
        }
        console.log(url)

        fetch(url)
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

    }, [clicked])



    //Disables the add button if a day is not selected
    useEffect(() => {
        if (selectedDay != '') {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [selectedDay])

    let url = 'http://localhost:3001/workouts?';

    //Fetches the data from the workout api
    useEffect(() => {

        fetch(url)
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
                        name: exercise.WorkOut,
                        muscles: exercise.Muscles,
                        equipment: exercise.Equipment,
                        intensity_level: exercise.Intensity_Level,
                        explanation: exercise.Explaination
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
            {exercises.map((w) => (
                <Card className="exercise-card" key={w.id}>
                    <Card.Body className='exercise-card-body'>
                        <Card.Title>{w.WorkOut}</Card.Title>
                        <Card.Subtitle className='mb-2'>{w.Muscles}</Card.Subtitle>
                        <Card.Subtitle className='mb-2'>{w.Equipment}</Card.Subtitle>
                        <Card.Text>{w.Intensity_Level}</Card.Text>
                        <Button onClick={(event) => { event.preventDefault(); handleAddedExercise(w) }} disabled={isDisabled} className='btn exercise-card-btn accent-btn'><CiCirclePlus /></Button>
                        <Button onClick={() => handleShow(w)} className='btn exercise-card-btn details-btn'>Details <FiArrowRightCircle /></Button>
                    </Card.Body>
                </Card>
            ))}

            <Modal size="lg" show={show} onHide={handleClose} className='modal'>
                {selectedExercise && (
                    <>
                        <Modal.Header closeButton>

                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <h2>{selectedExercise.WorkOut}</h2>
                                        <h4>Targets <span className="accent-color">{selectedExercise.Muscles}</span></h4>
                                        <h6 className='equipment-subtitle'>Equipment Needed: {selectedExercise.Equipment}</h6>
                                        <h6 className='modal-subtitle'>Beginner Sets: {selectedExercise["Beginner Sets"]}</h6>
                                        <h6 className='modal-subtitle'>Intermediate Sets: {selectedExercise["Intermediate Sets"]}</h6>
                                        <h6 className='modal-subtitle'>Expert Sets: {selectedExercise["Expert Sets"]}</h6>
                                    </Col>
                                    {/* <Col xs={12} md={6}>
                                        <video controls width='448' height='250'>
                                            <source src={selectedExercise.Video} type='video/mp4' />
                                            <source src={video} type='video/mp4'/>
                                        </video>
                                    </Col> */}
                                </Row>
                                <p>Instructions: {selectedExercise.Explaination}</p>
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