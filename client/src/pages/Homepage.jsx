import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar';
import GetWorkouts from '../Components/GetWorkouts';
import { Col, Container, Row } from 'react-bootstrap';


function Homepage() {
    return (
        <>
        <Header />
        <section className="sidebar">
            <Container>
                <Row>
                    <Col xs={12} sm={2}>
                        <Sidebar />
                    </Col>
                    <Col xs={12} sm={10}>
                        <GetWorkouts />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Homepage;