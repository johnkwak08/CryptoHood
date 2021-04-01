/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const WatchCoin = ({ id, name, image, symbol, price, priceChange, handleDelete }) => {
  const [active, setActive] = useState('');
  const icon = <FontAwesomeIcon icon={faMinus} />;

  const handleCoinDelete = (e) => {
    e.preventDefault();
    setActive(active === '' ? 'active' : '');
    handleDelete(id);
  };

  return (
    <Link to={`/WatchList/${id}`}>
      <div className="container">
        <div className="coin-line">
          <div className="coin-line-single">
            <img src={image} alt="img" />
            <h2>{name}</h2>
            <div className="coin-line-symbol">{symbol}</div>
          </div>
          <div className="coin-line-info">
            <div className="coin-line-price">Current Price: ${price}</div>
            {
            priceChange > 0 ? (<div className="coin-line-up">Daily Price Change {priceChange.toFixed(2)}% </div>)
              : (<div className="coin-line-down">Daily Price Change {priceChange.toFixed(2)}% </div>)
            }
          </div>
          <div className={`minus-icon-${active}`} onClick={handleCoinDelete}>{icon}</div>
        </div>
      </div>
    </Link>
  );
};

export default WatchCoin;
