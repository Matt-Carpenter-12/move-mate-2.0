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
                {
                    if (exercises.day === activeItem)
                        return (
                            exercises.exercise.map((data) => {
                                return (
                                    <Card key={data._id} style={{ width: '18rem' }} className='my-workout-card'>
                                        <Card.Body className='my-workout-card-body'>
                                            <Card.Title className='my-workout-card-title'>{data.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Targets <span className="accent-color">{data.muscles}</span></Card.Subtitle>
                                            <Card.Text>{data.intensity_level}</Card.Text>
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