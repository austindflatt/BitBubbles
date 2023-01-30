import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

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
	<TableContainer>
				<Table>
					<TableHead style={{ background: 'linear-gradient(rgb(48, 48, 48), rgb(0, 0, 0))', boxShadow: '0 2px 8px rgb(0 0 0 / 20%)', padding: '0.5em 0.25em' }}>
						<TableRow>
							{["#", "Name", "Price (USD)", "Market Cap", "Circulating Supply", "Day", "Week", "Month", "Year"].map((head) => (
								<TableCell
									style={{ 
										color: '#FFF',
										font: '17px Verdana,Arial,sans-serif',
										fontWeight: '500',
										borderBottom: '0px solid rgba(81, 81, 81, 1)',
									}}
									key={head}
									align={head === "Name" ? "" : "right" & head === "Hour" ? "" : "center"}
								>
									{head}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{coins
						.map(row => {
							return (
								<TableRow
								key={row.name}
								style={{ 
									cursor: 'pointer', 
									textDecoration: 'none',
								}}
								>
									<TableCell
									align='right'
									style={{
										borderBottom: '0px solid rgba(81, 81, 81, 1)', fontSize: '20px', fontWeight: '600', cursor: 'text'
									}}
									>
									{row.market_data.market_cap_rank}
									</TableCell>
									<TableCell 
									component={Link}
									to={`price/${row.id}`}
									scope='row'
									// onClick={handleOpen}
										style={{
											display: 'flex',
											gap: 15,
											borderBottom: '0px solid rgba(81, 81, 81, 1)',
											textDecoration: 'none'
										}}
									>
										<>
										{/* <button className="icon-button button-favorite on" title="Remove from favorites">
											<svg width="24" height="24">
												<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
											</svg>	
										</button> */}

										<img
										src={row?.image.small}
										alt={row.name}
										height='50'
										style={{ height: '2em', marginRight: '0.25em', verticalAlign: 'sub' }}
										/>
										
										<div style={{ display: 'flex', flexDirection: 'column' }}>
											<div >
											<span style={{ transitionProperty: '#ccc', transitionDuration: '.4s', outline: 'none', paddingBottom: '0.1em', fontSize: '20px', fontWeight: '600',   }}>
												{row.name}
											</span>
											</div>
										</div>
										</>
									</TableCell>
									<TableCell
									align='right'
									style={{
										borderBottom: '0px solid rgba(81, 81, 81, 1)', fontSize: '20px', fontWeight: '600', cursor: 'text'
									}}
									>
									${abbreviateNumber(row.market_data.current_price.usd)}
									</TableCell>
									<TableCell
									align='right'
									style={{
										borderBottom: '0px solid rgba(81, 81, 81, 1)', fontSize: '20px', fontWeight: '600', cursor: 'text',
									}}
									>
										${abbreviateNumber(row.market_data.market_cap.usd)}
									</TableCell>
									<TableCell
									align='right'
									style={{
										borderBottom: '0px solid rgba(81, 81, 81, 1)', fontSize: '20px', fontWeight: '600', cursor: 'text', textTransform: 'uppercase'
									}}
									>
										{abbreviateNumber(row.market_data.circulating_supply)} {row.symbol}
									</TableCell>
									<TableCell
									align='center'
									style={{ background: `${row.market_data.price_change_percentage_24h}` > 0 ? 'linear-gradient(rgb(147, 232, 38), rgb(32, 189, 0))' : `${row.market_data.price_change_percentage_24h}` === 0 ? 'rgb(34 34 34)' : 'linear-gradient(rgb(255, 70, 71), rgb(219, 0, 0))', fontSize: '20px', fontWeight: '600', cursor: 'text', borderBottom: '0px solid rgba(81, 81, 81, 1)' }}
									>
										{row.market_data.price_change_percentage_24h > 0 ? '+' : ''}
										{row.market_data.price_change_percentage_24h.toFixed(2)}%
									</TableCell>
									<TableCell
									align='center'
									style={{ background: `${row.market_data.price_change_percentage_7d}` > 0 ? 'linear-gradient(rgb(147, 232, 38), rgb(32, 189, 0))' : 'linear-gradient(rgb(255, 70, 71), rgb(219, 0, 0))', fontSize: '20px', fontWeight: '600', cursor: 'text', borderBottom: '0px solid rgba(81, 81, 81, 1)' }}
									>
										{row.market_data.price_change_percentage_7d > 0 ? '+' : ''}
										{row.market_data.price_change_percentage_7d.toFixed(2)}%
									</TableCell>
									<TableCell
									align='center'
									style={{ background: `${row.market_data.price_change_percentage_30d}` > 0 ? 'linear-gradient(rgb(147, 232, 38), rgb(32, 189, 0))' : 'linear-gradient(rgb(255, 70, 71), rgb(219, 0, 0))', fontSize: '20px', fontWeight: '600', cursor: 'text', borderBottom: '0px solid rgba(81, 81, 81, 1)' }}
									>
										{row.market_data.price_change_percentage_30d > 0 ? '+' : ''}
										{row.market_data.price_change_percentage_30d.toFixed(2)}%
									</TableCell>
									<TableCell
									align='center'
									style={{ background: `${row.market_data.price_change_percentage_1y}` > 0 ? 'linear-gradient(rgb(147, 232, 38), rgb(32, 189, 0))' : 'linear-gradient(rgb(255, 70, 71), rgb(219, 0, 0))', fontSize: '20px', fontWeight: '600', cursor: 'text', borderBottom: '0px solid rgba(81, 81, 81, 1)' }}
									>
										{row.market_data.price_change_percentage_1y > 0 ? '+' : ''}
										{row.market_data.price_change_percentage_1y.toFixed(2)}%
									</TableCell>
									
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			
	</TableContainer>
	</>
  )
}

export default CoinList;