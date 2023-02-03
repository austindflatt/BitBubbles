import React, { useState, useEffect } from 'react';

const HeatMap = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y")
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
                  row.price_change_percentage_24h > 10.00 ? 'positive-bright' :
                  row.price_change_percentage_24h > 5.00 ? 'positive-dark' :
                  row.price_change_percentage_24h > 2.50 ? 'positive-darker' :
                  row.price_change_percentage_24h > 1.50 ? 'positive-darker-second' :
                  row.price_change_percentage_24h > 0.01 ? 'positive-darkest' :
                  row.price_change_percentage_24h < -10.00 ? 'negative-bright' :
                  row.price_change_percentage_24h < -5.00 ? 'negative-dark' :
                  row.price_change_percentage_24h < -2.50 ? 'negative-darker' :
                  row.price_change_percentage_24h < -1.50 ? 'negative-darker-second' :
                  row.price_change_percentage_24h < -0.001 ? 'negative-darkest' :
                  row.price_change_percentage_24h < -0.00 ? 'neutral' : 'neutral'
              }
            >
              <div
              className={
                row.price_change_percentage_24h > 10.00 ? 'coin-text' :
                row.price_change_percentage_24h > 5.00 ? 'coin-text-positive-dark' :
                row.price_change_percentage_24h > 2.50 ? 'coin-text-positive-dark' :
                row.price_change_percentage_24h > 1.50 ? 'coin-text-positive-darker-second' :
                row.price_change_percentage_24h > 0.01 ? 'coin-text-positive-darker-second' :
                row.price_change_percentage_24h < -10.00 ? 'coin-text' :
                row.price_change_percentage_24h < -5.00 ? 'coin-text-negative-dark' :
                row.price_change_percentage_24h < -2.50 ? 'coin-text-negative-darker' :
                row.price_change_percentage_24h < -1.50 ? 'coin-text-negative-darker-second' :
                row.price_change_percentage_24h < -0.001 ? 'coin-text-negative-darker' :
                row.price_change_percentage_24h < -0.00 ? 'coin-text-neutral' : 'coin-text-neutral'
              }
              >
                <span className='symbol'>
                  {row.symbol.toUpperCase()}
                  {/* {index} */}
                </span>
                <span className='metric'>
                  {/* {row.price_change_percentage_24h > 0 ? '+' : ''} */}
                  {row.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            </a>
            ) :
            index <= 29
            ? (
              <a
              href={`coin/${row.id}`}
              key={row.symbol}
              className={
                  row.price_change_percentage_24h > 10.00 ? 'positive-bright-med' :
                  row.price_change_percentage_24h > 5.00 ? 'positive-dark-med' :
                  row.price_change_percentage_24h > 2.50 ? 'positive-darker-med' :
                  row.price_change_percentage_24h > 1.50 ? 'positive-darker-second-med' :
                  row.price_change_percentage_24h > 0.01 ? 'positive-darkest-med' :
                  row.price_change_percentage_24h < -10.00 ? 'negative-bright-med' :
                  row.price_change_percentage_24h < -5.00 ? 'negative-dark-med' :
                  row.price_change_percentage_24h < -2.50 ? 'negative-darker-med' :
                  row.price_change_percentage_24h < -1.50 ? 'negative-darker-second-med' :
                  row.price_change_percentage_24h < -0.001 ? 'negative-darkest-med' :
                  row.price_change_percentage_24h < -0.00 ? 'neutral-med' : 'neutral-med'
              }
            >
              <div
              className={
                row.price_change_percentage_24h > 10.00 ? 'coin-text-med' :
                row.price_change_percentage_24h > 5.00 ? 'coin-text-positive-dark-med' :
                row.price_change_percentage_24h > 2.50 ? 'coin-text-positive-dark-med' :
                row.price_change_percentage_24h > 1.50 ? 'coin-text-positive-darker-second-med' :
                row.price_change_percentage_24h > 0.01 ? 'coin-text-positive-darker-second-med' :
                row.price_change_percentage_24h < -10.00 ? 'coin-text-med' :
                row.price_change_percentage_24h < -5.00 ? 'coin-text-negative-dark-med' :
                row.price_change_percentage_24h < -2.50 ? 'coin-text-negative-darker-med' :
                row.price_change_percentage_24h < -1.50 ? 'coin-text-negative-darker-second-med' :
                row.price_change_percentage_24h < -0.001 ? 'coin-text-negative-darker-med' :
                row.price_change_percentage_24h < -0.00 ? 'coin-text-neutral-med' : 'coin-text-neutral-med'
              }
              >
                <span className='symbol-med'>
                  {row.symbol.toUpperCase()}
                  {/* {index} */}
                </span>
                <span className='metric-med'>
                  {/* {row.price_change_percentage_24h > 0 ? '+' : ''} */}
                  {row.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            </a>
            )
            : 
            (
              <a
              href={`coin/${row.id}`}
              key={row.symbol}
              className={
                  row.price_change_percentage_24h > 10.00 ? 'positive-bright-sm' :
                  row.price_change_percentage_24h > 5.00 ? 'positive-dark-sm' :
                  row.price_change_percentage_24h > 2.50 ? 'positive-darker-sm' :
                  row.price_change_percentage_24h > 1.50 ? 'positive-darker-second-sm' :
                  row.price_change_percentage_24h > 0.01 ? 'positive-darkest-sm' :
                  row.price_change_percentage_24h < -10.00 ? 'negative-bright-sm' :
                  row.price_change_percentage_24h < -5.00 ? 'negative-dark-sm' :
                  row.price_change_percentage_24h < -2.50 ? 'negative-darker-sm' :
                  row.price_change_percentage_24h < -1.50 ? 'negative-darker-second-sm' :
                  row.price_change_percentage_24h < -0.001 ? 'negative-darkest-sm' :
                  row.price_change_percentage_24h < -0.00 ? 'neutral-sm' : 'neutral-sm'
              }
            >
              <div
              className={
                row.price_change_percentage_24h > 10.00 ? 'coin-text-sm' :
                row.price_change_percentage_24h > 5.00 ? 'coin-text-positive-dark-sm' :
                row.price_change_percentage_24h > 2.50 ? 'coin-text-positive-dark-sm' :
                row.price_change_percentage_24h > 1.50 ? 'coin-text-positive-darker-second-sm' :
                row.price_change_percentage_24h > 0.01 ? 'coin-text-positive-darker-second-sm' :
                row.price_change_percentage_24h < -10.00 ? 'coin-text-sm' :
                row.price_change_percentage_24h < -5.00 ? 'coin-text-negative-dark-sm' :
                row.price_change_percentage_24h < -2.50 ? 'coin-text-negative-darker-sm' :
                row.price_change_percentage_24h < -1.50 ? 'coin-text-negative-darker-second-sm' :
                row.price_change_percentage_24h < -0.001 ? 'coin-text-negative-darker-sm' :
                row.price_change_percentage_24h < -0.00 ? 'coin-text-neutral-sm' : 'coin-text-neutral-sm'
              }
              >
                <span className='symbol-sm'>
                  {row.symbol.toUpperCase()}
                  {/* {index} */}
                </span>
                <span className='metric-sm'>
                  {/* {row.price_change_percentage_24h > 0 ? '+' : ''} */}
                  {row.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            </a>
            )
          ))}
        </div>
      </div>
  );
};

export default HeatMap;