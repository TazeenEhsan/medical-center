import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';


const Service = ({ service }) => {

    const { id, img, name, content } = service;

    const history = useHistory();
    const handleDetailed = () => {
        history.push(`/detailedservice/${id}`);
    }


    return (
        <div className="service-container">
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <Button variant="primary" onClick={handleDetailed}>Details</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;