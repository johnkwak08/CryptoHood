import React from 'react';
import { Link } from 'react-router-dom';
import CoinList from './CoinList';
import WatchList from './WatchList';

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">CryptoHood</h1>
      <Link to='./WatchList'>
        <h1 className="pages-port">Watch List</h1>
      </Link>
      <Link to='/'>
        <h1 className="pages-home">Home</h1>
      </Link>
  </div>
  );
};

export default Header;
