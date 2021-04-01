import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

const CoinChart = ({ id, coinData }) => {
  const coinChartRef = useRef();

  useEffect(() => {
    if (coinChartRef && coinChartRef.current) {
      const dataChart = new Chart(coinChartRef.current, {
        type: 'line',
        data: {
          datasets: [{
            label: `${id}`,
            data: coinData,
            backgroundColor: 'rgba(55, 41, 255, 0.1)',
            borderColor: 'rgba(55, 255, 0, 0.2)',
            borderWidth: 1,
          }],
        },
        options: {
          animation: {
            duration: 1500,
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [{
              type: 'time',
              distribution: 'linear',
            }],
          },
        },
      });
    }
  });

  return (
    <div>
      <canvas ref={coinChartRef} id="myChart" width="400" height="700" />
    </div>
  );
};

export default CoinChart;
