import logo from "../assets/images/move-mate-logo.jpeg";
import { useState, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const [currentLink, setCurrentLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateCurrentLink = (value) => {
        setCurrentLink(value);
    }
    
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Move Mate Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="/Homepage"
                  className={currentLink === '/' ? 'nav-link active' : 'nav-link'}
                  onClick={() => onUpdateCurrentLink('/')}>
                  HOME
                </Nav.Link>
                <Nav.Link
                  href="/My-Workouts"
                  className={currentLink === '/My-Workouts' ? 'nav-link active' : 'nav-link'}
                  onClick={() => onUpdateCurrentLink('/My-Workouts')}>
                  MY WORKOUTS
                </Nav.Link>
                <Nav.Link
                  href="/Log"
                  className={currentLink === '/Log' ? 'nav-link active' : 'nav-link'}
                  onClick={() => onUpdateCurrentLink('Log')}>
                  WORKOUT LOG
                </Nav.Link>
                {/* <Nav.Link
                  href="/"
                  className={currentLink === '/' ? 'nav-link active' : 'nav-link'}
                  onClick={() => onUpdateCurrentLink('')}>
                  LOG OUT
                </Nav.Link> */}
                </Nav>
                <span className="navbar-text">
                  <button className="vvd logout-btn" onClick={()=>console.log('Ready to log out')}><a href='/'><span>LOG OUT</span></a></button>
                </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header;