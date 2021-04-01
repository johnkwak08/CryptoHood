import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import WatchCoin from './WatchCoin';
import { WatchListDataContext } from './WatchListData';

const WatchList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList, handleDelete } = useContext(WatchListDataContext);

  const getWatchData = () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: watchList.join(','),
      },
    })
      .then(({ data }) => {
        setCoins(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWatchData();
  }, [watchList]);

  return (
    <div>
      <div className="watch-list">
        Your Watch List
      </div>
      {coins.map((coin) => (
        <WatchCoin
          key={coin.id}
          id={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default WatchList;
