import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function NavbarC() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className = "container-lg navbar-max">
      <Container className="container-nav">
        <Navbar.Brand>
            <Nav.Link href="/" className="font-weight-bold logo">Omar Jabraoui</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="https://medium.com/@omar241101skate" target="_blank">Blog</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarC