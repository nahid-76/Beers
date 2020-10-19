import React, { createContext, useEffect, useState } from 'react';
export const ShopingItemsContext = createContext();
const ShopingItemsContextProvider = (props) => {
    const [shopItems, setShopItems] = useState([]);
    useEffect(() => {
        const localshopItems = localStorage.getItem('SHOPITEMS');
        localshopItems && setShopItems(JSON.parse(localshopItems));
    }, []);


    const handleShopItems = (id) => {
        let newItems = [];
        if (shopItems.includes(id)) {
            newItems = shopItems.filter(fav => fav !== id);
            setShopItems(newItems);
            localStorage.setItem('SHOPITEMS', JSON.stringify(newItems));
            return true;
        }
        newItems = [...shopItems, id];
        setShopItems(newItems);
        localStorage.setItem('SHOPITEMS', JSON.stringify(newItems));
        return false;
    }

    return (
        <ShopingItemsContext.Provider value={{ shopItems, handleShopItems }}>
            {props.children}
        </ShopingItemsContext.Provider>
    );
}

export default ShopingItemsContextProvider;