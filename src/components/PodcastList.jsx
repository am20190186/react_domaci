import React, { useState, useEffect } from 'react'
import '../App';
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from './context/appContext';

const PodcastList = () => {
    const [podcasts, setPodcasts] = useState([]);

    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    console.log("favorites are", favorites);

    const favoritesChecker = (guid) => {
        const boolean = favorites.some((podcast) => podcast.guid === guid);
        return boolean;
    }

    useEffect(() => {
        axios.get(API_URL).then(res => {
            console.log(res.data)
            setPodcasts(res.data)
        }).catch(err => console.log(err))
    }, [API_URL]);
    return (
        <div className='podcast-list'>
            {podcasts.map((podcast) => (
                <div key={podcast.guid} className='podcast'>
                    <div><h4>{podcast.title}</h4></div>
                    <div><img src={podcast.thumbnail} alt='#'></img></div>
                    <div>
                        {favoritesChecker(podcast.guid) ? (
                            <button onClick={() => removeFromFavorites(podcast.guid)}>Remove from favorites
                            </button>) : (
                            <button onClick={() => addToFavorites(podcast)}>Add to favorites</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PodcastList