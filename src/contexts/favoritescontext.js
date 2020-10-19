import React, { createContext, useEffect, useState } from 'react';
export const FavsContext = createContext();
const FavsContextProvider = (props) => {
    const [favs, setFavs] = useState([]);
    useEffect(() => {
        const localdata = localStorage.getItem('FAVS');
        if (localdata) {
            setFavs(JSON.parse(localdata));
        }
    }, []);


    const handleFavs = (id) => {
        const newFavs = favs.includes(id) ? favs.filter(fav => fav !== id) : [...favs, id];
        setFavs(newFavs);
        localStorage.setItem('FAVS', JSON.stringify(newFavs));
    }

    return (
        <FavsContext.Provider value={{ favs, handleFavs }}>
            {props.children}
        </FavsContext.Provider>
    );
}

export default FavsContextProvider;