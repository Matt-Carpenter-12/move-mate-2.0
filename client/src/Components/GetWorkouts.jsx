import { Container, Row } from 'react-bootstrap';
import "../assets/css/homepage.css";
import ExerciseCard from './ExerciseCard.jsx'

function GetWorkouts({ clicked, populateForm, setPopulateForm, selectedDay, setSelectedDay }) {

    return (
        <>
            <Container>
                <Row >
                    <ExerciseCard clicked={clicked} populateForm={populateForm} setPopulateForm={setPopulateForm} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
                </Row>
            </Container >
        </>
    )
}

export default GetWorkouts;