import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import DisplayCoin from './DisplayCoin';
import { WatchListDataContext } from './WatchListData';

const CoinList = () => {
  const [coinList, setCoinList] = useState([]);
  const [coinInput, setCoinInput] = useState('');
  const { handleAdd } = useContext(WatchListDataContext);

  const getData = () => {
    axios.get('/coins')
      .then(({ data }) => {
        setCoinList(data);
      })
      .catch((err) => console.log('error getting data', err));
  };

  useEffect(() => {
    getData();
  }, []);

  const filterCoins = coinList.filter(
    (coin) => coin.name.toLowerCase().includes(coinInput.toLowerCase()),
  );

  return (
    <div>
      <div className="coin-list">
        <h4 className="coin-search">Search Here</h4>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={(e) => { setCoinInput(e.target.value); }}
            placeholder="Enter coin"
          />
        </form>
        <div className="coin-all">
          {filterCoins.map((coins) => (
            <DisplayCoin
              key={coins.id}
              id={coins.id}
              name={coins.name}
              image={coins.image}
              symbol={coins.symbol}
              price={coins.current_price}
              priceChange={coins.price_change_percentage_24h}
              handleAdd={handleAdd}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinList;
