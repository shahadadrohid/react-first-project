import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" required />
                    </div>
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-Jhon? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='others'>
                    <hr style={{ width: '30%' }} />
                    <p className='pstyle'>or</p>
                    <hr style={{ width: '30%' }} />
                </div>
                <button>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;