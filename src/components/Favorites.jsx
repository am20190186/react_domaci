import React from 'react'
import '../App';
import { useAppContext } from './context/appContext';

const Favorites = () => {
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    console.log("favorites are", favorites);

    const favoritesChecker = (guid) => {
        const boolean = favorites.some((podcast) => podcast.guid === guid);
        return boolean;
    }
    return (
        <div className='favorites'>
            {favorites.length > 0 ? favorites.map((podcast) => (
                <div key={podcast.guid} className='podcast'>
                    <div><h4>{podcast.title}</h4></div>
                    <div><img src={podcast.thumbnail} alt='#'></img></div>
                    <div>
                        {favoritesChecker(podcast.guid) ? (
                            <button onClick={() => removeFromFavorites(podcast.guid)}>
                                Remove from favorites
                            </button>) : (<button onClick={() => addToFavorites(podcast)}>Add to favorites</button>
                        )}
                    </div>
                </div>
            )) : (
                <h1>You don't have any favorite podcasts yet!</h1>
            )}
        </div>
    )
}

export default Favorites