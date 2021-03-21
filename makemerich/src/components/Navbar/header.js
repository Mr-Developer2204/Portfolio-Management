import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import './header.css';

const header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">MY-PORTFOLIO</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">BALANCE</Nav.Link>
          <NavDropdown title="PORTFOLIO-BREAKUP" id="collasible-nav-dropdown">
            <NavDropdown.Item  className='PrimaryNav' href="#action/3.1">SAVINGS</NavDropdown.Item>
            <NavDropdown.Item className='PrimaryNav' href="#action/3.1">SAVINGS</NavDropdown.Item>
            <NavDropdown.Item className='PrimaryNav' href="#action/3.2">EXPENDITURE</NavDropdown.Item>
            <NavDropdown.Item className='PrimaryNav' href="#action/3.3">EMERGENCY</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='PrimaryNav' href="#action/3.4">
              YOUR WANTS
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">NEWS</Nav.Link>
          <Nav.Link href="#MARKET">MARKET</Nav.Link>
          <Nav.Link href="#HELP">HELP</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default header;
