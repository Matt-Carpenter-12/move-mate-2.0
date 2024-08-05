import { useState } from 'react';
import { useEffect } from 'react';

function GetWorkouts() {
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
            {exercises.map((w, index) => {
                return (
                    <>
                        <Card className="card" key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body key={index}>
                                <Card.Title>{w.WorkOut}</Card.Title>
                                <Card.Text>
                                    {w.Explaination}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </>
                )

            })}
        </>
    )
}

export default GetWorkouts;