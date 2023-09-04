import React, { useState, useEffect } from 'react'
import '../App';
import { API_URL } from '../API';
import axios from 'axios';

const PodcastList = () => {
    const [podcasts, setPodcasts] = useState([]);
    useEffect(() => {
        axios.get(API_URL).then(res => {
            console.log(res.data)
            setPodcasts(res.data)
        }).catch(err => console.log(err))
    }, [API_URL]);
    return (
        <div className='podcast-list'>
            {podcasts.map((podcast) => (
                <div key={podcast.id} className='podcast'>
                    <div><h4>{podcast.title}</h4></div>
                    <div><img src={podcast.thumbnail} alt='#'></img></div>
                    <div><button>Add to favorites</button></div>

                </div>
            ))}
        </div>
    )
}

export default PodcastList