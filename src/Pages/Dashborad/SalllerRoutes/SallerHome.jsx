import React from 'react';
import UseAuth from '../../Hooks/UseAuth';

const SallerHome = () => {
    const {user} = UseAuth()
    return (
        <div>
            <h2 className='text-center text-3xl'>Welcome to<span className='font-bold text-blue-200'> {user?.displayName}</span> E-commere </h2>
        </div>
    );
};

export default SallerHome;