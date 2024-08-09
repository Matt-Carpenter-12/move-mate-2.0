import { Container, Row } from 'react-bootstrap';
import "../assets/css/homepage.css";
import ExerciseCard from './ExerciseCard.jsx'

function GetWorkouts() {

    return (
        <>
            <Container>
                <Row >
                    <ExerciseCard />
                </Row>
            </Container >
        </>
    )
}

export default GetWorkouts;