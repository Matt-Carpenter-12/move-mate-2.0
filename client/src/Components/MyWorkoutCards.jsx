import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

function MyWorkoutCards({ activeItem }) {

const [workouts, setWorkouts] = useState([]);
const [day, setDay] = useState([]);

useEffect(() => {
    fetch('/api/workouts')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log('response:', response)
                response.status(error);
            }
        })
        .then(data => {
            console.log(data)
            console.log(data[0]._id)

            setWorkouts(data);
            setDay(data[0].day)
        })
        .catch(err => console.error('Fetch error:', err.message));
}, [])

    return (
        <>
            {workouts.map((exercises) => {
                { console.log(exercises.day)
                    if (exercises.day === activeItem )
                        return (
                            exercises.exercise.map((data) => {
                                return (
                                    <Card key={data._id} style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>{data.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Card.Link href="#">Card Link</Card.Link>
                                            <Card.Link href="#">Another Link</Card.Link>
                                        </Card.Body>
                                    </Card>
                                )

                            }))
                }

            })}
        </>
    )
}

export default MyWorkoutCards;