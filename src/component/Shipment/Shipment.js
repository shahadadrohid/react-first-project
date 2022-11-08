import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('');
    const [user] = useAuthState(auth)
    const handleNameBlur = event => {

    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setNumber(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault()
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="number">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="number" required />
                    </div>
                    <input className="form-submit" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;