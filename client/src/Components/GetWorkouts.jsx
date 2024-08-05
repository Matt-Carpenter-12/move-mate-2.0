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
        </>
    )
}

export default GetWorkouts;