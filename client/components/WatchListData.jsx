import React, { createContext, useState } from 'react';

export const WatchListDataContext = createContext();

export const WatchListDataContextProvider = (props) => {
  const [watchList, setWatchList] = useState(['bitcoin']);

  const handleAdd = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };

  const handleDelete = (coin) => {
    setWatchList(watchList.filter((deleted) => deleted !== coin));
  };

  return (
    <WatchListDataContext.Provider value={{ watchList, handleAdd, handleDelete }}>
      {props.children}
    </WatchListDataContext.Provider>
  );
};