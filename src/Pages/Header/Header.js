import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, userSignOut } = useFirebase();
    console.log(user);
    return (
        <Navbar bg="dark" data-bs-theme="dark" className='mb-3'>
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#features">Facilities</Nav.Link>
                    {
                        user ? <Button variant="light" onClick={userSignOut}>Sign-Out</Button>
                            :
                            <Nav.Link href="/login">Login</Nav.Link>
                    }
                    <p className='text-primary text-center fw-bold text-break'>{user?.email}</p>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;