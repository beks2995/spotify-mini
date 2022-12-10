import React, {useState, useEffect} from 'react';
import LoginPage from "./loginPage/LoginPage";
import HomePage from "./homePage/HomePage";

function App() {
    const [token, setToken] = useState('');
    useEffect(() => {
        const hash = window.location.hash;
        let localToken = window.localStorage.getItem('token');
        if(!token && hash){
            localToken = hash.substring(1).split('&').find(el => el.startsWith('access_token')).split('=')[1]
            window.location.hash = '';
            window.localStorage.setItem('token', localToken)
        }
        setToken(localToken)
    }, [token])
    return (
        <div>
            {!token ? <LoginPage/> : <HomePage setToken={setToken} token={token}/>}
        </div>
    );
}

export default App;
