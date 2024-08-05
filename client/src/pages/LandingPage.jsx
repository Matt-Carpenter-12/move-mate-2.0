import NavTabs from '../Components/NavTabs'
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import '../assets/css/landingpage.css'

function LandingPage() {
    return (
        <>
            
            <div className="landing-page-body">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12}>
                        <h1 className='header1'>PREPARE TO</h1>
                    </Col>
                </Row>
                <Row className="align-items-center">
                        <Col xs={12} md={12} xl={12}>
                        <h1 className='header2'>CHANGE</h1>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1 className='header3'>FOR THE BETTER.</h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <button><a href='/Sign-Up'>Sign Up<ArrowRightCircle /></a></button>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default LandingPage;