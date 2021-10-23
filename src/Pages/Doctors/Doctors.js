import React from 'react';
import useDoctor from '../../hooks/useDoctor';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const doctors = useDoctor();

    return (
        <div>
            <h1>Our Doctors</h1>

            <div className="services-container">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>

        </div>
    );
};

export default Doctors;