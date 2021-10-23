import React from 'react';
import useService from '../../../hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = useService();

    return (
        <div>
            <h1>Our Services {services.length}</h1>

            <div className="services-container">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;