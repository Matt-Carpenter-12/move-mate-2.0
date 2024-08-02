import logo from "../assets/images/move-mate-logo.jpeg";
import { useState, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

const NavTabs = () => {
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
            href="/"
            className={currentLink === '/' ? 'nav-link active' : 'nav-link'}
            onClick={() => onUpdateCurrentLink('/')}>
            HOME
          </Nav.Link>
          <Nav.Link
            href="/About-Us"
            className={currentLink === '/About-Us' ? 'nav-link active' : 'nav-link'}
            onClick={() => onUpdateCurrentLink('/About-Us')}>
            ABOUT US
          </Nav.Link>
          <Nav.Link
            href="/Login"
            className={currentLink === '/Login' ? 'nav-link active' : 'nav-link'}
            onClick={() => onUpdateCurrentLink('Login')}>
            LOGIN
          </Nav.Link>
          </Nav>
                <span className="navbar-text">
                  <button className="vvd" onClick={()=>console.log('sign me up!')}><a href='/Sign-Up'><span>SIGN UP</span></a></button>
                </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavTabs;