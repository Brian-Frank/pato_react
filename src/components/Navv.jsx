import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navv = () => {
    return (
        <Navbar bg="primary" variant="dark">
                <Nav.Link as={Link} to="/" id='home' >Tia Pato</Nav.Link>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="tortas" id='nav'>Tortas</Nav.Link>
                    <Nav.Link as={Link} to="bandejas"id='nav'>Bandejas</Nav.Link>
                </Nav>
                <CartWidget/>
        </Navbar>
    )
}

export default Navv