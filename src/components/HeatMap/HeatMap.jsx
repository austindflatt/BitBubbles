import React, { useState, useEffect } from 'react';

const HeatMap = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins")
      .then(response => response.json())
      .then(data => setCoins(data))
  }, []);

  return (
      <div className="heatmap">
        <div className="heatmap-container">
          {coins.map((row, index) => (
            index <= 9
            ? (
              <a
              href={`coin/${row.id}`}
              key={row.symbol}
              className={
                  row.market_data.price_change_percentage_24h > 10.00 ? 'positive-bright' :
                  row.market_data.price_change_percentage_24h > 5.00 ? 'positive-dark' :
                  row.market_data.price_change_percentage_24h > 2.50 ? 'positive-darker' :
                  row.market_data.price_change_percentage_24h > 1.50 ? 'positive-darker-second' :
                  row.market_data.price_change_percentage_24h > 0.01 ? 'positive-darkest' :
                  row.market_data.price_change_percentage_24h < -10.00 ? 'negative-bright' :
                  row.market_data.price_change_percentage_24h < -5.00 ? 'negative-dark' :
                  row.market_data.price_change_percentage_24h < -2.50 ? 'negative-darker' :
                  row.market_data.price_change_percentage_24h < -1.50 ? 'negative-darker-second' :
                  row.market_data.price_change_percentage_24h < -0.001 ? 'negative-darkest' :
                  row.market_data.price_change_percentage_24h < -0.00 ? 'neutral' : 'neutral'
              }
            >
              <div
              className={
                row.market_data.price_change_percentage_24h > 10.00 ? 'coin-text' :
                row.market_data.price_change_percentage_24h > 5.00 ? 'coin-text-positive-dark' :
                row.market_data.price_change_percentage_24h > 2.50 ? 'coin-text-positive-dark' :
                row.market_data.price_change_percentage_24h > 1.50 ? 'coin-text-positive-darker-second' :
                row.market_data.price_change_percentage_24h > 0.01 ? 'coin-text-positive-darker-second' :
                row.market_data.price_change_percentage_24h < -10.00 ? 'coin-text' :
                row.market_data.price_change_percentage_24h < -5.00 ? 'coin-text-negative-dark' :
                row.market_data.price_change_percentage_24h < -2.50 ? 'coin-text-negative-darker' :
                row.market_data.price_change_percentage_24h < -1.50 ? 'coin-text-negative-darker-second' :
                row.market_data.price_change_percentage_24h < -0.001 ? 'coin-text-negative-darker' :
                row.market_data.price_change_percentage_24h < -0.00 ? 'coin-text-neutral' : 'coin-text-neutral'
              }
              >
                <span className='symbol'>
                  {row.symbol.toUpperCase()}
                  {/* {index} */}
                </span>
                <span className='metric'>
                  {row.market_data.price_change_percentage_24h > 0 ? '+' : ''}
                  {row.market_data.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            </a>
            ) :
            index <= 49
            ? (
              <a
              href={`coin/${row.id}`}
              key={row.symbol}
              className={
                  row.market_data.price_change_percentage_24h > 10.00 ? 'positive-bright-med' :
                  row.market_data.price_change_percentage_24h > 5.00 ? 'positive-dark-med' :
                  row.market_data.price_change_percentage_24h > 2.50 ? 'positive-darker-med' :
                  row.market_data.price_change_percentage_24h > 1.50 ? 'positive-darker-second-med' :
                  row.market_data.price_change_percentage_24h > 0.01 ? 'positive-darkest-med' :
                  row.market_data.price_change_percentage_24h < -10.00 ? 'negative-bright-med' :
                  row.market_data.price_change_percentage_24h < -5.00 ? 'negative-dark-med' :
                  row.market_data.price_change_percentage_24h < -2.50 ? 'negative-darker-med' :
                  row.market_data.price_change_percentage_24h < -1.50 ? 'negative-darker-second-med' :
                  row.market_data.price_change_percentage_24h < -0.001 ? 'negative-darkest-med' :
                  row.market_data.price_change_percentage_24h < -0.00 ? 'neutral-med' : 'neutral-med'
              }
            >
              <div
              className={
                row.market_data.price_change_percentage_24h > 10.00 ? 'coin-text-med' :
                row.market_data.price_change_percentage_24h > 5.00 ? 'coin-text-positive-dark-med' :
                row.market_data.price_change_percentage_24h > 2.50 ? 'coin-text-positive-dark-med' :
                row.market_data.price_change_percentage_24h > 1.50 ? 'coin-text-positive-darker-second-med' :
                row.market_data.price_change_percentage_24h > 0.01 ? 'coin-text-positive-darker-second-med' :
                row.market_data.price_change_percentage_24h < -10.00 ? 'coin-text-med' :
                row.market_data.price_change_percentage_24h < -5.00 ? 'coin-text-negative-dark-med' :
                row.market_data.price_change_percentage_24h < -2.50 ? 'coin-text-negative-darker-med' :
                row.market_data.price_change_percentage_24h < -1.50 ? 'coin-text-negative-darker-second-med' :
                row.market_data.price_change_percentage_24h < -0.001 ? 'coin-text-negative-darker-med' :
                row.market_data.price_change_percentage_24h < -0.00 ? 'coin-text-neutral-med' : 'coin-text-neutral-med'
              }
              >
                <span className='symbol-med'>
                  {row.symbol.toUpperCase()}
                  {index}
                </span>
                <span className='metric-med'>
                  {row.market_data.price_change_percentage_24h > 0 ? '+' : ''}
                  {row.market_data.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            </a>
            )
            : null
          ))}
        </div>
      </div>
  );
};

export default HeatMap;