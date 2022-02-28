import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

const Navv = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="Inicio">Tia Pato</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="Nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="Contacto">Contacto</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default Navv
