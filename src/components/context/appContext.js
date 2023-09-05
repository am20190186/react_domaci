import { createContext, useContext } from "react";
import { useState } from "react";
import PodcastDetails from "../PodcastDetails";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context == undefined) {
        throw new Error("Appcontext must be within appContextProvider")
    }
    return context;
}

const AppContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (podcast) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.concat(podcast);
        setFavorites(newFavorites);
    };

    const removeFromFavorites = (guid) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((podcast) => podcast.guid !== guid);
        setFavorites(newFavorites)
    };

    return (
        <AppContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;