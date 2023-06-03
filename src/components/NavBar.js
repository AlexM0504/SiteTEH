import { useState,useEffect } from "react";
import { Navbar, Container,Nav } from 'react-bootstrap';
import logo from '../assets/img/LOGO-tehservice-1.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Link } from "react-router-dom";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled,setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  },[])
  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }
  return (

    <Navbar expand="lg" className={scrolled? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="/about" className={activeLink === 'desprenoi' ? 'active navbar-link': 'navbar-link' } onClick={()=> onUpdateActiveLink('desprenoi')}>Despre noi</Nav.Link>
            <Nav.Link href="/photos" className={activeLink === 'foto' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('foto')}>Galerie foto</Nav.Link>
            <Nav.Link href="/autorizari" className={activeLink === 'autorizari' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('autorizari')}>Autorizari si Acreditari</Nav.Link>
          </Nav>
          <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink 
               to='#contact'
               scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                  <button className="vvd"><span>Contact</span></button>
              </HashLink>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    )
}