import React, { useState } from "react";
import ShowModalCard from "./../showModalCard";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./handleLocalStorage";
import FavsContextProvider from '../../contexts/favoritescontext';
import ShopingItemsContextProvider from '../../contexts/shopingitemscontext';
const localList = "starList";

const MyCardGroup = ({ data }) => {
  const [starList, setStarList] = useState([]);

  useEffect(() => {
    const presetList = getLocalStorage(localList);
    setStarList(presetList);
  }, []);

  const changeList = (list) => {
    setStarList(list);
    setLocalStorage(localList, list);
  };

  const handleStarClick = (id) => {
    starList.some(item => item.value === id)
      ? changeList(starList.filter(item => item.value !== id))
      : changeList([...starList, { value: id, expiry: new Date().getTime() + 2.628e+9 }]);
  }
  //2.628e+9 one month
  //59999.9342466479939 one minute
  return (
    <FavsContextProvider>
      <ShopingItemsContextProvider>
        <div className="row row-cols-1 row-cols-md-6">
          {data.map((d, index) => {
            const key = `card${index}${d.id}`;
            return (
              <div key={key}>
                <ShowModalCard
                  data={d}
                  isStarActive={starList.some(item => item.value === d.id)}
                  onStarClick={() => handleStarClick(d.id)}
                />
              </div>
            );
          })}
        </div>
      </ShopingItemsContextProvider>
    </FavsContextProvider>
  );
};

export default MyCardGroup;
