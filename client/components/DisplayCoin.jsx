/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DisplayCoin = ({ id, name, image, symbol, price, priceChange, handleAdd }) => {
  const [active, setActive] = useState('');
  const icon = <FontAwesomeIcon icon={faPlus} />;

  const handleCoinAdd = () => {
    setActive(active === '' ? 'active' : '');
    handleAdd(id);
  };

  return (
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
        <div className={`plus-icon-${active}`} onClick={handleCoinAdd}>{icon}</div>
      </div>
    </div>
  );
};

export default DisplayCoin;
