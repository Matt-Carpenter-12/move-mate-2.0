import { useState, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
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

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">BETHANY PROCTOR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>About Me</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>My Projects</Nav.Link>
              </Nav>
                <span className="navbar-text">
                  <button className="vvd" onClick={()=>console.log('lets connect')}><a href='#signup'><span>Sign</span></a></button>
                </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}