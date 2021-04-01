import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1 className="title">CryptoHood</h1>
    <img className="logo" src="https://www.flaticon.com/svg/vstatic/svg/3004/3004039.svg?token=exp=1617299995~hmac=fd2108158334d5642e2ddd1c7aad58a7" alt="" />
    <Link to="/WatchList">
      <h1 className="pages-port">Watch List</h1>
    </Link>
    <Link to="/">
      <h1 className="pages-home">Home</h1>
    </Link>
  </div>
);

export default Header;
