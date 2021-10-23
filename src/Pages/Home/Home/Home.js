import React from 'react';
import Doctors from '../../Doctors/Doctors';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Subscribed from '../Subscribed/Subscribed';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Subscribed></Subscribed>
        </div>
    );
};

export default Home;

// #0dbcc0