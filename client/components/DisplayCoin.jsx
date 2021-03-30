/* eslint-disable react/prop-types */
import React from 'react';

const DisplayCoin = ({ name, image, symbol, price, priceChange }) => {
  console.log('eslint');
  return (
    <div className="container">
      <div className="coin-line">
        <div className="coin-line-single">
          <img src={image} alt="img"/>
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
      </div>
    </div>
  );
};

export default DisplayCoin;
