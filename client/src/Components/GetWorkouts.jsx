import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';


function GetWorkouts() {
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
            <h1>Here are the workouts:</h1>
            <container>
                <Row xs={1} md={3} className="g-2">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col key={idx}>
                            {
                                exercises.map((w, index) => {
                                    return (
                                        <>
                                            <Card className="card" key={index} style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src="holder.js/100px180" />
                                                <Card.Body key={index}>
                                                    <Card.Title>{w.WorkOut}</Card.Title>
                                                    <Card.Text>
                                                        {w.Explaination}
                                                    </Card.Text>
                                                    <Button onClick={handleShow} className='btn-color'>More Info</Button>
                                                </Card.Body>
                                            </Card>

                                        </>
                                    )

                                })
                            }
                        </Col >
                    ))}
                </Row>
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
            </container >
        </>
    )
}

export default GetWorkouts;