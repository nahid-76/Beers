import React, { useEffect, useState, useContext } from 'react';
import { getbeers } from '../serveces/beerService';
import MyCardGroup from './common/cardGroup';
import { FavsContext } from '../contexts/favoritescontext';
const Favorites = () => {
  const [favorites, setFavorits] = useState([]);
  const { favs } = useContext(FavsContext);
  useEffect(() => {
    (async () => {
      const { data } = await getbeers();
      data.map(d => {
        favs.includes(d.id) && setFavorits(favorites => [...favorites, d]);
      })
    })();

  }, [favs]);
  if (favorites.length === 0) return <p className="lead text-center">تا کنون کالایی به لیست مورد علاقه اضافه نشده</p>;
  return (
    <MyCardGroup data={favorites} />
  );
}

export default Favorites;
