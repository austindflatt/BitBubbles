import React, { useState, useEffect } from 'react';
import { CoinState } from '../../context/CoinContext';
import  { CoinData } from "../../config/api";
import axios from 'axios';
import HeatCoinLarge from './HeatCoinLarge';
import HeatCoinMed from './HeatCoinMed';
import HeatCoinSm from './HeatMapSm';

const HeatMap = () => {
  const [coins, setCoins] = useState([]);
  const { currency, symbol, pages, changePercentage, sort, view } = CoinState();
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinData(currency, pages, changePercentage, sort, view));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, pages, changePercentage, sort, view]);
  
  return (
    <div className="heatmap">
      <div className="heatmap-container">
        {coins.map((row, index) => (
          index <= 9 ? 
          (
            <HeatCoinLarge 
            coinId={row.id} 
            coinSymbol={row.symbol} 
            priceChange={row.price_change_percentage_24h} 
            currentPrice={row.current_price} 
            symbol={symbol} 
            view={view} 
            />
          ) :
          index <= 49 ? 
          (
            <HeatCoinMed 
            coinId={row.id} 
            coinSymbol={row.symbol} 
            priceChange={row.price_change_percentage_24h} 
            currentPrice={row.current_price} 
            symbol={symbol} 
            view={view} 
            />
          ) : 
          (
            <HeatCoinSm 
            coinId={row.id} 
            coinSymbol={row.symbol} 
            priceChange={row.price_change_percentage_24h} 
            currentPrice={row.current_price} 
            symbol={symbol} 
            view={view} 
            />
          )
        ))}
      </div>
    </div>
  );
};

export default HeatMap;