import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Room = ({ room }) => {
    const { roomTitle, img, description } = room;
    // Navigate to CheckOut page
    const navigate = useNavigate();
    const handleBookBtn = () => {
        navigate('/checkout');
    }

    return (
        <Card  className='col-12 col-md-6 col-lg-4 text-center'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{roomTitle}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button onClick={handleBookBtn} variant="primary" className='fw-bold'>Book Now</Button>
            </Card.Body>
        </Card>
    );
};

export default Room;