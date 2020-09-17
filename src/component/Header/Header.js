import React from 'react';
import { Button, Container, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Image/Group 1330.png';
import './Header.css'

const Header = () => {
    return (
        <div>
        <Navbar  className="nav" variant="dark">
        <Container style={{marginLeft: '150px'}}>
          <Navbar.Brand href="#home">
              <img style={{width: '100px'}} src={logo} alt=""/>
          </Navbar.Brand>
          <Form inline className="text-center">
            <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
          </Form>
          <Nav className="ml-auto">
            <a href="/home">Home</a>
            <a href="/destination">Destination</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
            <Button className="button">Login</Button>
          </Nav>
          </Container>
        </Navbar>
        </div>
    );
};

export default Header;