import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { auth } from '../../firebase.init';

const Login = () => {
    // States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Using firebase custom hook
    const { userSignIn, user, error, googleSignIn } = useFirebase();
    console.log(user);
    // InputBlur Handlers
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    // User Login handler
    const userLoginHandler = event => {
        event.preventDefault()
        userSignIn(auth, email, password)
    }

    //Google Sign-in handler
    const handleGoogleSignIn = () => {
        googleSignIn();
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Please Login</h1>
            <div className="row justify-content-center">
                <div className='col-md-6'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        </Form.Group>
                        <p>Don't have an Account? <Link to='/register'>Create Account</Link></p>
                        <p className='text-danger'>{error}</p>
                        <Button onClick={userLoginHandler} variant="primary" type="submit">
                            Sign-In
                        </Button>
                        <div className='d-grid gap-2 mt-3'>
                            <Button variant="dark" onClick={handleGoogleSignIn}>Google Sign-in</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;