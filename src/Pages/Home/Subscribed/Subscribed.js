import React from 'react';
import './Subs.css'
const Subscribed = () => {
    return (
        <div className="container subs-con">

            <h5>Subscribe for any updates</h5>
            <input type="text" name="" id="" placeholder="Enter your name" required /><br />
            <input type="email" name="" id="" placeholder="Enter your email" /><br />
            <button onClick={() => alert('Subscription done')}>Submit</button>

        </div>
    );
};

export default Subscribed;