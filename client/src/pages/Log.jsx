//page for seeing the workout history
import Header from '../Components/Header'
import { Container, Row, Col } from 'react-bootstrap';
import "../assets/css/log.css"

function Log() {
    return (
        <>
            <Header />
            <div className="log">
                <h1 className='log-header'>MY WORKOUT LOG</h1>
                <Container>
                    <Row>
                        <Col xs={12} lg={3}>
                            <h2>SELECT A DATE TO SEE YOUR <span className='accent-color'>WORKOUT HISTORY</span></h2>
                            <p>the calendar will go here!</p>
                        </Col>
                        <Col lg={9}>
                            <p>the workout cards will go here!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Log;