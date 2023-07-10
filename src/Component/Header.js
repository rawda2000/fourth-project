import {Container, Nav, Navbar} from 'react-bootstrap';
import { useState } from 'react';
import logo from '../Images/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";

function Header() {
    const [activlink, setActivlink] = useState ('home'); 
    const onUpdata =(value)=>{
        setActivlink (value);
    }
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='logo' width={60} height={70}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activlink ==='home'?'activ navbar-link' : 'navbar-link'} onClick={()=> onUpdata('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activlink ==='skills'?'activ navbar-link' : 'navbar-link'} onClick={()=> onUpdata('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activlink ==='projects'?'activ navbar-link' : 'navbar-link'} onClick={()=> onUpdata('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
                <div  className='social-icon'>
                    <a href='#'><FaLinkedinIn className='imgicon'/> </a>
                    <a href='#'><FaFacebookF className='imgicon'/> </a>
                    <a href='#'><FaInstagram className='imgicon'/> </a>
                </div>
                <button className='btn ml-2'><span>let’s connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;