import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const CLIENT_ID = 'c01caa05a23e4d11a60e5eb2ef742043';
    const REDIRECT_URI = 'http://localhost:3000';
    const RESPONSE_TYPE = 'token';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    return (
        <div className='login-page'>
            <h1 className='text'>Test react-spotify app</h1>
            <p className="text">Please login your Spotify account for continue</p>
            <a href={`${AUTH_ENDPOINT}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`} className='text'>
                Login
            </a>
        </div>
    );
};

export default LoginPage;