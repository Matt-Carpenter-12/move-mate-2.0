// function Footer(){
//     return (
//         <footer className="footer">
//           <div className="container">
//             <p>&copy; {new Date().getFullYear()} MoveMate. All rights reserved.</p>
//           </div>
//         </footer>
//       );
// }

// export default Footer;

import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/images/move-mate-logo.jpeg"
import icon1 from '../assets/images/github-icon.svg'


function Footer(){
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={4}>
                        <img src={logo} alt="Logo" className="logo" />
                    </Col>
                    <Col>
                      <p>&copy; {new Date().getFullYear()} MoveMate. All rights reserved.</p>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end" >
                        <div className="social-icon">
                            <a href="https://github.com/Matt-Carpenter-12/move-mate-2.0" target="blank"> <img src={icon1} alt="GitHubg logo" className='icon' /></a>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;