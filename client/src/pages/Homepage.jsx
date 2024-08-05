import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';


function Homepage() {
    return (
        <>
        <Header />
        <section className="sidebar">
            <Container>
                <Row>
                    <Col xs={12} md={2}>
                        <Sidebar />
                    </Col>
                    <Col xs={12} md={10}>
                        {/* workout cards with api info */}
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Homepage;