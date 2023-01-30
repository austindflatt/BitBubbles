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
                href={`price/${row.id}`}
                key={row.symbol}
                className={
                  row.market_data.price_change_percentage_24h > 0
                    ? 'positive-bright'
                    : 'negative-bright'
                }
              >
                <div className="css-rhmwbr">
                  <span className="coin symbol css-1m9o1on">
                    {row.symbol.toUpperCase()}
                  </span>
                  <span className="metric">
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