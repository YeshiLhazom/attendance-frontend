import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          
             <Link to="/dashboard">Dashboard</Link>  
             <Link to="/p-module">Module</Link>        
            <Link to="/students">Students</Link>
            <Link to="">Logout</Link>

            {/*<LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link> </LinkContainer>
              <LinkContainer to="/students"><Nav.Link>Students</Nav.Link></LinkContainer>

            <Nav.Link href="">Logout</Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
