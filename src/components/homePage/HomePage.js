import React, {useEffect, useState} from 'react';
import './HomePage.css';
import axios from "axios";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Discover from '../../pages/Discover';
import Search from '../../pages/Search';

const HomePage = ({setToken, token}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [userData, setUserData] = useState({});
    const darkThemeHandler = () => {
        setDarkTheme(!darkTheme)
    };
    const logoutHandler = () => {
        setToken('');
        window.localStorage.removeItem('token');
    };
    useEffect(() => {
        axios('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({data}) => setUserData(data))
    }, [])
    return (
        <div className={`theme-wrapper ${darkTheme ? 'dark-theme' : ''}`}>
            <BrowserRouter>
                <div className="wrapper">
                    <div className='sidebar'>
                        <div className="user-info">
                                <img src="" alt=""/>
                                <p>{userData.display_name}</p>
                            <button onClick={logoutHandler}>Logout</button>
                        </div>
                        <div className="theme-change">
                            Night mode
                            <span className='tumblr' onClick={() => darkThemeHandler()}></span>
                        </div>
                        <div className='nav-panel'>
                            <Link to='/'>Discover</Link>
                            <Link to='/search'>Search</Link>
                            <Link to='/favorites'>Favorites</Link>
                            <Link to='/playlist'>Playlist</Link>
                            <Link to='/charts'>Charts</Link>
                        </div>
                    </div>

                    <div className="visual">
                        <Routes>
                            <Route path='/' element={<Discover token={token}/>}></Route>
                            <Route path='/search' element={<Search token={token}/>}></Route>
                        </Routes>
                    </div>
                </div>

            </BrowserRouter>
        </div>
    );
};

export default HomePage;