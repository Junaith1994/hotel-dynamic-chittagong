import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const CheckOut = () => {
    const { user } = useFirebase();
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    
    useEffect(() => {
        setEmailValue(user?.email);
    }, [user])

    return (
        <div className='container'>
            <h1 className='text-center'>Check-Out</h1>
            <div className="row justify-content-center">
                <div className='col-md-6'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={nameValue} onChange={e => user ?setNameValue(user?.displayName) : setNameValue(e.target.value)} placeholder="Enter name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" readOnly defaultValue={emailValue} placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number" required />
                        </Form.Group>
                        <Button className='fw-bold' variant="primary" type="submit">
                            Check-Out
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;