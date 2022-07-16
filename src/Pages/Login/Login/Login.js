import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="login-container">
            <h1>Please login</h1>
            <button onClick={signInWithGoogle} className="btn btn-primary" >Login with Google</button>
        </div>
    );
};

export default Login;