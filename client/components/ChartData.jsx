import { useParams } from 'react-router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CoinChart from './CoinChart';

const ChartData = () => {
  const [coinData, setCoinData] = useState({});
  const { id } = useParams();

  const getChartData = () => {
    axios.get(`/coins/${id}`)
      .then(({ data }) => {
        const formatted = data.prices.map((point) => (
          {
            t: point[0],
            y: point[1].toFixed(2),
          }
        ));
        setCoinData(formatted);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <div>
      <CoinChart coinData={coinData} id={id} />
    </div>

  );
};

export default ChartData;
