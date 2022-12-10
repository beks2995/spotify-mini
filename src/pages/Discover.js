import React, {useState, useEffect} from 'react';
import axios from "axios";

const Discover = ({token}) => {
    const [newPlaylist, setNewPlaylist] = useState([]);
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        axios('https://api.spotify.com/v1/browse/new-releases?&country=KG', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({data}) => setNewPlaylist(data.albums.items))
        axios('https://api.spotify.com/v1/browse/featured-playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({data}) => setFeatured(data.playlists.items))
    }, [])
    return (
        <div className='discover'>
            <div className="header">
                Your favorite tunes <br/> All day and all Night
            </div>
            <div className='playlists'>
                <h1>Released this week</h1>
                <div className="playlist">
                    {newPlaylist.map(({id,name,images}) => (
                        <div className="card" key={id}>
                            <img src={images[0].url} alt=""/>
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
                <h1>Featured playlists</h1>
                <div className="playlist">
                    {featured.map(({id,name,images}) => (
                        <div className="card" key={id}>
                            <img src={images[0].url} alt=""/>
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discover;