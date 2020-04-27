import React from "react";
import {Nav,Navbar} from "react-bootstrap";
import "./navbar.css"
import logo from "../images/logo.png"
export const NavigationBar = () => (
  
    
      <Navbar expand="lg" bg="secondary" variant="dark">
        <Navbar.Brand href="./">
        <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
        HOME
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/projects">PROJECTS</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/skills">SKILLS</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/experience">EXPERIENCE</Nav.Link></Nav.Item> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  )