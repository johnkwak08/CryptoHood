import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayCoin from './DisplayCoin';
import Details from './Details';
import List from './List';

const App = (props) => {
  const [coinList, setCoinList] = useState([]);
  const [coinInput, setCoinInput] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(({ data }) => {
        setCoinList(data);
      })
      .catch((err) => console.log('error getting data', err));
  };

  console.log(coinList);
  console.log(coinInput);

  const filterCoins = coinList.filter(
    (coin) => coin.name.toLowerCase().includes(coinInput.toLowerCase()),
  );

  return (
    <div>
      <div className="header">
        <h1 className="title">CryptoHood</h1>
        <h1 className="pages-port">Portfolio</h1>
        <h1 className="pages-home">Home</h1>
      </div>
      <div className="coin-list">
        <h4 className="coin-search">Search your coin here</h4>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={(e) => { setCoinInput(e.target.value); }}
            placeholder="Search Here"
          />
        </form>
        <div className="coin-all">
          {filterCoins.map((coins) => (
            <DisplayCoin
              key={coins.id}
              name={coins.name}
              image={coins.image}
              symbol={coins.symbol}
              price={coins.current_price}
              priceChange={coins.price_change_percentage_24h}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
