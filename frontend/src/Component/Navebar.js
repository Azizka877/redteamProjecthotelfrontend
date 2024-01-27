import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css'
import profil from '../images/profil.jpg'


function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="text-dark fw-bold">Liste des hotels</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="ms-auto">
          <div className="d-flex align-items-center justify-content-between  ">
            <div class="form-group has-search me-3">
              <span class="bi bi-search form-control-feedback "></span>
              <input type="search" class=" form-control" placeholder="Recherche..."/>
            </div>
           <span class="left-pan"><i class="bi bi-bell me-3"></i></span>
           <div>
              <img src={profil} alt="Profile" className="profile_image me-3" />
            </div>
            <i class="bi bi-box-arrow-right"></i>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavbarComp;
