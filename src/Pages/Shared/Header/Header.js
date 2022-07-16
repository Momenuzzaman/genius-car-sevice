import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import Button from 'react-bootstrap/Button';
import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height="30" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="color" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="color" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="color" as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {user.displayName ? <Button onClick={logOut} variant="dark" >Logout</Button> :
                            <Nav.Link className="color" as={HashLink} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;  