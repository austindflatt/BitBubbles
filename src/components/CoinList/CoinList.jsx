import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

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
  const [coins, setCoins] = useState([])

  const fetchData = () => {
    fetch("https://api.coingecko.com/api/v3/coins")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCoins(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(coins)

  return (
	<>
	<div className="search-input-container">
		<input className="search-input" placeholder="Search cryptocurrency" />
			<svg width="24" height="24" className="search-input-icon">
				<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
			</svg>
	</div>

	<div className="scroll-container">
  <table className="currency-table">
    <thead>
      <tr>
        <th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>#</span>
          </div>
        </th>
        <th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>Name</span>
          </div>
        </th>
        <th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>Price</span>
          </div>
        </th>
        <th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>Market Cap</span>
          </div>
        </th>
        <th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>24h Volume</span>
          </div>
        </th>
		<th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>Circulating Supply</span>
          </div>
        </th>
        <th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>Hour</span>
          </div>
        </th>
        <th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>Day</span>
          </div>
        </th>
        <th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>Week</span>
          </div>
        </th>
        <th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>Month</span>
          </div>
        </th>
        <th className="sortable">
          <div>
            <svg width="24" height="24">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
            <span>Year</span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
	{coins.map(row => {return (
      <tr key={row.symbol}>
        <td className="right">{row.market_data.market_cap_rank}</td>
        <td>
          <div className="name-cell">
            <button className="icon-button button-favorite" title="Add to favorites">
              <svg width="24" height="24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            </button>
            <div className="currency-header"><a href={`coin/${row.id}`}
                key={row.symbol}><img src={row?.image.small} alt={row.symbol} title={`${row.symbol} Logo`} /><span>{row.name}</span></a></div>
          </div>
        </td>
        <td className="right">${abbreviateNumber(row.market_data.current_price.usd)}</td>
        <td className="right">${abbreviateNumber(row.market_data.market_cap.usd)}</td>
        <td className="right volume">0</td>
		<td className="right">${abbreviateNumber(row.market_data.circulating_supply)} {row.symbol.toUpperCase()}</td>
        <td className="center" style={{ 
										background:
											`${row.market_data.price_change_percentage_1h_in_currency.usd}` > 0 ? 
											'linear-gradient(rgb(147, 232, 38), rgb(32, 189, 0))' 
											: `${row.market_data.price_change_percentage_1h_in_currency.usd}` === 0 ? 'rgb(34 34 34)' 
											: 'linear-gradient(rgb(255, 70, 71), rgb(219, 0, 0))', fontWeight: 600 }}>
			{row.market_data.price_change_percentage_1h_in_currency.usd > 0 ? '+' : ''}
			{row.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%
		</td>
		<td className="center" style={{ 
										background:
											`${row.market_data.price_change_percentage_24h_in_currency.usd}` > 0 ? 
											'linear-gradient(rgb(147, 232, 38), rgb(32, 189, 0))' 
											: `${row.market_data.price_change_percentage_24h_in_currency.usd}` === 0 ? 'rgb(34 34 34)' 
											: 'linear-gradient(rgb(255, 70, 71), rgb(219, 0, 0))', fontWeight: 600 }}>
			{row.market_data.price_change_percentage_24h_in_currency.usd > 0 ? '+' : ''}
			{row.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
		</td>
		<td className="center" style={{ 
										background:
											`${row.market_data.price_change_percentage_7d_in_currency.usd}` > 0 ? 
											'linear-gradient(rgb(147, 232, 38), rgb(32, 189, 0))' 
											: `${row.market_data.price_change_percentage_7d_in_currency.usd}` === 0 ? 'rgb(34 34 34)' 
											: 'linear-gradient(rgb(255, 70, 71), rgb(219, 0, 0))', fontWeight: 600 }}>
			{row.market_data.price_change_percentage_7d_in_currency.usd > 0 ? '+' : ''}
			{row.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%
		</td>
		<td className="center" style={{ 
										background:
											`${row.market_data.price_change_percentage_30d_in_currency.usd}` > 0 ? 
											'linear-gradient(rgb(147, 232, 38), rgb(32, 189, 0))' 
											: `${row.market_data.price_change_percentage_30d_in_currency.usd}` === 0 ? 'rgb(34 34 34)' 
											: 'linear-gradient(rgb(255, 70, 71), rgb(219, 0, 0))', fontWeight: 600 }}>
			{row.market_data.price_change_percentage_30d_in_currency.usd > 0 ? '+' : ''}
			{row.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%
		</td>
		<td className="center" style={{ 
										background:
											`${row.market_data.price_change_percentage_1y_in_currency.usd}` > 0 ? 
											'linear-gradient(rgb(147, 232, 38), rgb(32, 189, 0))' 
											: `${row.market_data.price_change_percentage_1y_in_currency.usd}` === 0 ? 'rgb(34 34 34)' 
											: 'linear-gradient(rgb(255, 70, 71), rgb(219, 0, 0))', fontWeight: 600 }}>
			{row.market_data.price_change_percentage_1y_in_currency.usd > 0 ? '+' : ''}
			{row.market_data.price_change_percentage_1y_in_currency.usd}%
		</td>
      </tr>
	  )
	})}
    </tbody>
  </table>
</div>
	</>
  )
}

export default CoinList;