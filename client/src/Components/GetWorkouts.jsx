import { Container, Row } from 'react-bootstrap';
import "../assets/css/getWorkouts.css";
import ExerciseCard from './ExerciseCard.jsx'

function GetWorkouts() {

    return (
        <>
            <h1 className='workouts-header'>SELECT A WORKOUT TO GET STARTED</h1>
            <Container>
                <Row >
                    <ExerciseCard />
                    {/* <ExerciseCard />
                    <ExerciseCard /> */}
                </Row>
            </Container >
        </>
    )
}

export default GetWorkouts;