//page for seeing created workouts for certain days
import Header from '../Components/Header'
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/myworkouts.css'

function MyWorkouts() { 
    return (
        <>
            <Header />
            <div className="my-workouts">
                <h1>MY WORKOUTS</h1>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default MyWorkouts;