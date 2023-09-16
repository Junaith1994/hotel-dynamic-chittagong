import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom';

// {
//     
//         :
//         <Nav.Link href="/login">Login</Nav.Link>
// }
const Header = () => {
    const { user, userSignOut } = useFirebase();
    console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand href="#home">Hotel Dynamic Chittagong</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <h4 className='text-primary me-3'>{user?.displayName}</h4>
                    <Nav>
                        {
                            user ? <Button variant="light" onClick={userSignOut}>Sign-Out</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;