import React from 'react';
import './NewsLetter.css'
export const NewsLetter = () => {
    return (
        <div className='Newsletter'>
            <h1>Get exclusive offer on your Email</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
                <input type="Email" placeholder='your email id' />
                <button>Subscribe</button>
            </div>
        </div>

    );
};
