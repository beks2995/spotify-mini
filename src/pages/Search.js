import React, {useEffect, useState} from 'react';
import axios from "axios";

const Search = ({token}) => {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState({});
    useEffect(() => {
        console.log(searchText)
        axios('https://api.spotify.com/v1/search', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchText,
                type: 'track,playlist,artist'
            }
        }).then(({data}) => {
            console.log(data)
            setSearchResult(data)
        })
    }, [searchText])
    return (
        <div className='search'>
            <br/>
            <form action="">
                <input type="text" placeholder='search' onChange={(e) => setSearchText(e.target.value)}/>
            </form>
            <br/>
            {Object.keys(searchResult).length !== 0 &&
                <>
                    <h1>Tracks</h1>
                    <div className="playlist">
                        {searchResult?.tracks?.items.map(({id, name, album}) => (
                            <div className="card" key={id}>
                                <img src={album?.images[0]?.url} alt=""/>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                    <h1>Artists</h1>
                    <div className="playlist">
                        {searchResult?.artists?.items.map(({id, name, images}) => (
                            <div className="card" key={id}>
                                <img src={images[0]?.url} alt=""/>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                    <h1>Playlists</h1>
                    <div className="playlist">
                        {searchResult?.artists?.items.map(({id, name, images}) => (
                            <div className="card" key={id}>
                                <img src={images[0]?.url} alt=""/>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                </>

            }
        </div>
    );
};

export default Search;