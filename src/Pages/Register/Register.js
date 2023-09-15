import React, { useState } from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    // States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    // const [error, setError] = useState('');
    // const [user, setUser] = useState({});
    const {createUser, user, error, setError} = useFirebase();
    
    console.log(user);

    // InputBlur Handlers
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPass = event => {
        setConfirmPass(event.target.value)
    }

    const createUserAccount = event => {
        event.preventDefault()

        if (password !== confirmPass) {
            return setError('Passwords does not match')
        }
        createUser(email, password);
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Please Create Account</h1>
            <div className="row justify-content-center">
                <div className='col-md-6'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onBlur={handleConfirmPass} type="password" placeholder="Confirm Password" required />
                        </Form.Group>
                        <p className='text-danger'>{error}</p>
                        <Button onClick={createUserAccount} variant="primary" type="submit">
                            Create Account
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;