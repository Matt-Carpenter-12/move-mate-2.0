import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar';
import GetWorkouts from '../Components/GetWorkouts';
import { Col, Container, Row } from 'react-bootstrap';
import DayCard from '../Components/DayCard';


function Homepage() {
    return (
        <>
        <Header />
        <section className="homepage">
            <Container>
                <Row>
                    <Col xs={12} lg={2} className='sidebar-col'>
                        <Sidebar />
                    </Col>
                    <Col xs={12} lg={10} className='workouts-col'>
                    <h1 className='workouts-header'><span className="accent-color">SELECT A DAY </span>TO GET STARTED</h1>
                    <Row>
                        <Col lg={3} className='top-row'>
                        <DayCard 
                            day='SUNDAY'
                            id='sun'
                            />
                        </Col>
                        <Col lg={3} className='top-row'>
                        <DayCard 
                            day='MONDAY'
                            id='mon'
                            />
                        </Col>
                        <Col lg={3} className='top-row'>
                            <DayCard 
                            day='TUESDAY'
                            id='tue'
                            />
                        </Col>
                        <Col lg={3} className='top-row'>
                            <DayCard 
                            day='WEDNESDAY'
                            id='wed'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className='bottom-row'>
                            <DayCard 
                            day='THURSDAY'
                            id='thur'
                            />
                        </Col>
                        <Col lg={4} className='bottom-row'>
                            <DayCard 
                            day='FRIDAY'
                            id='fri'
                            />
                        </Col>
                        <Col lg={4} className='bottom-row'>
                            <DayCard 
                            day='SATURDAY'
                            id='sat'
                            />
                        </Col>
                    </Row>
                        <GetWorkouts />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Homepage;