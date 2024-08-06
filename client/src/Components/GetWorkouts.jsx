import { Container, Row } from 'react-bootstrap';
import "../assets/css/getWorkouts.css";
import ExerciseCard from './ExerciseCard.jsx'

function GetWorkouts() {

    return (
        <>
            <h1>Here are the workouts:</h1>
            <Container>
                <Row >
                    <ExerciseCard />
                    <ExerciseCard />
                    <ExerciseCard />
                </Row>
            </Container >
        </>
    )
}

export default GetWorkouts;