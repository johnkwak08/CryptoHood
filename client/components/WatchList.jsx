import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DisplayCoin from './DisplayCoin';

const WatchList = (props) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getWatchData();
  }, []);

  const getWatchData = () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin, ethereum, litecoin, dogecoin',
      },
    })
      .then(({data}) => {
        setCoins(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {coins.map((coin) => (
        <DisplayCoin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
        />
      ))}
    </div>
  );
};

export default WatchList;