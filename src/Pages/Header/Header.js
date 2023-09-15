import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
                        user ? <button onClick={userSignOut}>Sign-Out</button>
                            :
                            <Nav.Link href="/login">Login</Nav.Link>
                    }
                    <h4 className='text-primary'>{user?.email}</h4>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;