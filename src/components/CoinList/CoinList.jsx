import axios from 'axios';
import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import { LinearProgress } from '@mui/material';
import { CoinState } from '../../context/CoinContext';
import  { CoinData } from "../../config/api";

// `${row.market_data.price_change_percentage_24h}` > 10.00 ? 'positive-bright' :
// `${row.market_data.price_change_percentage_24h}` > 5.00 ? 'positive-dark' :
// `${row.market_data.price_change_percentage_24h}` > 2.50 ? 'positive-darker' :
// `${row.market_data.price_change_percentage_24h}` > 1.50 ? 'positive-darker-second' :
// `${row.market_data.price_change_percentage_24h}` > 0.01 ? 'positive-darkest' :
// `${row.market_data.price_change_percentage_24h}` < -10.00 ? 'negative-bright' :
// `${row.market_data.price_change_percentage_24h}` < -5.00 ? 'negative-dark' :
// `${row.market_data.price_change_percentage_24h}` < -2.50 ? 'negative-darker' :
// `${row.market_data.price_change_percentage_24h}` < -1.50 ? 'negative-darker-second' :
// `${row.market_data.price_change_percentage_24h}` < -0.001 ? 'negative-darkest' :
// `${row.market_data.price_change_percentage_24h}` < -0.00 ? 'neutral' : 'coin-text'`, 

export function abbreviateNumber(value) {
	let newValue = value;
	const suffixes = ["", "K", "M", "B","T"];
	let suffixNum = 0;
	while (newValue >= 1000) {
	  newValue /= 1000;
	  suffixNum++;
	}
  
	newValue = newValue.toPrecision(3);
  
	newValue += suffixes[suffixNum];
	return newValue;
}

const CoinList = () => {
//   const [search, setSearch] = useState('')
  const [coins, setCoins] = useState([]);
  const { currency, symbol, pages } = CoinState();
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinData(currency, pages));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, pages]);

  // const fetchData = () => {
  //   fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setCoins(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <>
    <div className="search-input-container">
      <input className="search-input" placeholder="Search cryptocurrency" />
      <svg width="24" height="24" className="search-input-icon">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
      </svg>
    </div>
    
    <div className="scroll-container">
    {/* {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : ( */}
      <table className="currency-table">
        <thead>
          <tr>
            {/* {['#', 'Name', 'Price', 'Market Cap', '24h Volume', 'Hour', 'Day', 'Week', 'Month', 'Year'].map(head) => (
            return (
              <th className="sortable" key={head}>
                <div>
                  <svg width="24" height="24">
                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                  </svg>
                  <span>{head}</span>
                </div>
              </th>
              )
            )} */}
          </tr>
        </thead>
        <tbody>
          {coins.map(row => {
            return (
              <tr key={row.symbol}>
                <td className="right">
                  {row.market_cap_rank}
                </td>
                <td>
                  <div className="name-cell">
                    <button className="icon-button button-favorite" title="Add to favorites">
                      <svg width="24" height="24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </button>
                    <div className="currency-header">
                      <a href={`coin/${row.id}`} key={row.symbol}>
                        <img 
                          src={row?.image} 
                          alt={row.symbol} 
                          title={`${row.symbol} Logo`} 
                        />
                        <span>{row.name}</span>
                      </a>
                    </div>
                  </div>
                </td>
                <td className="right">{symbol}{" "}{abbreviateNumber(row.current_price)}</td>
                <td className="right">{symbol}{" "}{abbreviateNumber(row.market_cap)}</td>
                <td className="right volume">{symbol}{" "}{abbreviateNumber(row.total_volume)}</td>
                <td className="right">{abbreviateNumber(row.circulating_supply)} {row.symbol.toUpperCase()}</td>
                <td 
                  className="center" 
                  style={{ 
                    color:
                    `${row.price_change_percentage_1h_in_currency}` > 0
                    ? 'rgb(51, 255, 51)' 
                    : `${row.price_change_percentage_1h_in_currencyd}` === 0 ? '#FFF' 
                    : 'rgb(255, 102, 102)', fontWeight: 600 }}
                >
                  {row.price_change_percentage_1h_in_currency?
                  row.price_change_percentage_1h_in_currency.toFixed(2)
                  : 0
                  }%
                </td>
                <td 
                  className="center" 
                  style={{ 
                    color:
                    `${row.price_change_percentage_24h_in_currency}` > 0
                    ? 'rgb(51, 255, 51)' 
                    : `${row.price_change_percentage_24h_in_currencyd}` === 0 ? '#FFF' 
                    : 'rgb(255, 102, 102)', fontWeight: 600 }}
                >
                  {row.price_change_percentage_24h_in_currency?
                  row?.price_change_percentage_24h_in_currency.toFixed(2)
                  :0
                }%
                </td>
                <td 
                className="center" 
                style={{ 
                  color:
                    `${row.price_change_percentage_7d_in_currency}` > 0
                    ? 'rgb(51, 255, 51)' 
                    : `${row.price_change_percentage_7d_in_currencyd}` === 0 ? '#FFF' 
                    : 'rgb(255, 102, 102)', fontWeight: 600 }}
                >
                   {row.price_change_percentage_7d_in_currency?
                  row.price_change_percentage_7d_in_currency.toFixed(2)
                  : 0
                  }%
                </td>
                <td 
                className="center" 
                style={{ 
                  color:
                    `${row.price_change_percentage_30d_in_currency}` > 0
                    ? 'rgb(51, 255, 51)' 
                    : `${row.price_change_percentage_30d_in_currencyd}` === 0 ? '#FFF' 
                    : 'rgb(255, 102, 102)', fontWeight: 600 }}
                >
                  {row.price_change_percentage_30d_in_currency?
                  row.price_change_percentage_30d_in_currency.toFixed(2)
                  : 0
                  }%
                </td>
                <td 
                className="center" 
                style={{ 
                  color:
                    `${row.price_change_percentage_1y_in_currency}` > 0
                    ? 'rgb(51, 255, 51)' 
                    : `${row.price_change_percentage_1y_in_currencyd}` === 0 ? '#FFF' 
                    : 'rgb(255, 102, 102)', fontWeight: 600 }}
                >
                   {row.price_change_percentage_1y_in_currency?
                  row.price_change_percentage_1y_in_currency.toFixed(2)
                  : 0
                  }%
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* )} */}
    </div>
	</>
  )
}

export default CoinList;