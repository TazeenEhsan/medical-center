import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { id, img, name, content } = doctor;
    return (
        <div className="doctor-container">
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Take duty on: {content}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Doctor;