import NavTabs from '../Components/NavTabs'
import { Container, Row, Col } from 'react-bootstrap'
import roger from '../assets/images/aboutimages/Roger.png'
import AboutCard from '../Components/AboutCard'
import marly from '../assets/images/aboutimages/Marly.png'
import saydeez from '../assets/images/aboutimages/Saydeez.png'
import matt from '../assets/images/aboutimages/Matt.png'
import bethany from '../assets/images/aboutimages/Bethany.png'

import '../assets/css/about.css'

const aboutdata = [
    {
    img: roger, name: 'Roger Aponte', github: 'https://github.com/rogretheekyogre', description: ''
    }, 
    {
    img: marly, name: 'Marly Valcin', github: 'https://github.com/MarlyV1', description: ''  
    },
    {
    img: saydeez, name: 'Saydeez Reyes', github: 'https://github.com/Saydeezr', description: ''  
    },
    {
    img: matt, name: 'Matt Carpenter', github: 'https://github.com/Matt-Carpenter-12', description: ''  
    },
    {
    img: bethany, name: 'Bethany Proctor', github: 'https://github.com/BethanyProctor', description: ''  
    },
]


function AboutUs() {
    return (
        <>
            <NavTabs />
            <section className='about-banner'>
                <h4>WHO WE ARE:</h4>
                <h2 className='subheader1'>Aspiring Web</h2> <h2 className='subheader2'>Developers with </h2> <h2 className='subheader3'>Big Goals</h2>
            </section>
            <Container>
                <Row>
                    <Col>    
                        <div className='about'>
                            <h2 className='about-header'>MEET THE <span className="accent-color">DEVS</span></h2>
                            <h5 className='about-subheader'>Meet your Move Mates: five MERN stack students who are all on their individual coding journies who came together to make a fitness tracker. Their goal was to use their newfound engineering skills to provide a functioning application to their community as well as show off all they have learned in the recent months. Take a look at their other impressive projects and follow them to see what new projects they dream up next.</h5>
                        
                       
                            <div className="d-flex card-section">
                                {aboutdata.map(data=>(
                                    <AboutCard info={data} key={data.name}/>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUs;