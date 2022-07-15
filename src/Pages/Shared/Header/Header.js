import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height="30" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="color" as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="color" as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="color" as={Link} to="/home#experts">Experts</Nav.Link>
                        <Nav.Link className="color" as={Link} to="/login">Login</Nav.Link>


                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;  