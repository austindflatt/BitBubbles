import React, { useState, useEffect } from 'react';

const HeatMap = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins")
      .then(response => response.json())
      .then(data => setCoins(data))
  }, []);

  return (
    <div className="css-b2dzvh">
      <section className="css-8j708l">
        <div className="css-4kqbgg">
          <div className="css-504jvq">
            {coins.map(row => (
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
                  </span>
                  <span className='metric'>
                    {row.market_data.price_change_percentage_24h > 0 ? '+' : ''}
                    {row.market_data.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeatMap;