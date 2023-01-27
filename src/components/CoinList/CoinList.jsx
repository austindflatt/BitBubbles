import { 
	TableContainer, 
	TextField, 
	LinearProgress, 
	Table, 
	TableHead, 
	TableRow, 
	TableCell, 
	TableBody,
	Pagination,
} from '@mui/material';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ShowChart } from '@mui/icons-material';
import { abbreviateNumber } from "js-abbreviation-number";

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinList = () => {
  const [search, setSearch] = useState('')
  const [coins, setCoins] = useState([])
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

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
	<TableContainer>

				<Table>
					<TableHead style={{ backgroundColor: '#444', boxShadow: '0 2px 8px rgb(0 0 0 / 20%)' }}>
						<TableRow>
							{["Coin Name", "Price (USD)", "Market Cap", "Circulating Supply", "Day", "Week", "Month", "Year"].map((head) => (
								<TableCell
									style={{ 
										color: '#FFF',
										fontWeight: '700',
										fontFamily: 'Roboto',
										fontSize: '20px', 
									}}
									key={head}
									align={head === "Coin Name" ? "" : "right" & head === "Hour" ? "" : "center"}
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
									scope='row'
									component={Link}
									to={`price/${row.id}`}
										style={{
											display: 'flex',
											gap: 15,
											borderBottom: '0px solid rgba(81, 81, 81, 1)',
											textDecoration: 'none'
										}}
									>
										<img
										src={row?.image.small}
										alt={row.name}
										height='50'
										style={{ height: '2em', marginRight: '0.25em', verticalAlign: 'sub' }}
										/>
										<div style={{ display: 'flex', flexDirection: 'column' }}>
											{/* <span style={{ fontSize: '20px', textTransform: 'uppercase' }}>
												{row.symbol}
											</span> */}
											<span style={{ transitionProperty: '#ccc', transitionDuration: '.4s', outline: 'none', paddingBottom: '0.1em', borderBottom: 'solid 1px', fontSize: '20px',   }}>
												{row.name}
											</span>
										</div>
									</TableCell>
									<TableCell
									align='right'
									style={{
										borderBottom: '0px solid rgba(81, 81, 81, 1)', fontSize: '20px', cursor: 'text'
									}}
									>
									${row.market_data.current_price.usd.toFixed(2)}
									</TableCell>
									<TableCell
									align='right'
									style={{
										borderBottom: '0px solid rgba(81, 81, 81, 1)', fontSize: '20px', cursor: 'text',
									}}
									>
										${row.market_data.market_cap.usd}
									</TableCell>
									<TableCell
									align='right'
									style={{
										borderBottom: '0px solid rgba(81, 81, 81, 1)', fontSize: '20px', cursor: 'text', textTransform: 'uppercase'
									}}
									>
										{row.market_data.circulating_supply} {row.symbol}
									</TableCell>
									<TableCell
									align='center'
									style={{ backgroundColor: `${row.market_data.price_change_percentage_24h}` > 0 ? 'rgb(34, 136, 34)' : 'rgb(187, 68, 68)', fontSize: '20px', fontWeight: '500', cursor: 'text', borderBottom: '0px solid rgba(81, 81, 81, 1)' }}
									>
										
										{row.market_data.price_change_percentage_24h.toFixed(2)}%
									</TableCell>
									<TableCell
									align='center'
									style={{ backgroundColor: `${row.market_data.price_change_percentage_7d}` > 0 ? 'rgb(34, 136, 34)' : 'rgb(187, 68, 68)', fontSize: '20px', fontWeight: '500', cursor: 'text', borderBottom: '0px solid rgba(81, 81, 81, 1)' }}
									>
										{row.market_data.price_change_percentage_7d.toFixed(2)}%
									</TableCell>
									<TableCell
									align='center'
									style={{ backgroundColor: `${row.market_data.price_change_percentage_30d}` > 0 ? 'rgb(34, 136, 34)' : 'rgb(187, 68, 68)', fontSize: '20px', fontWeight: '500', cursor: 'text', borderBottom: '0px solid rgba(81, 81, 81, 1)' }}
									>
										{row.market_data.price_change_percentage_30d.toFixed(2)}%
									</TableCell>
									<TableCell
									align='center'
									style={{ backgroundColor: `${row.market_data.price_change_percentage_1y}` > 0 ? 'rgb(34, 136, 34)' : 'rgb(187, 68, 68)', fontSize: '20px', fontWeight: '500', cursor: 'text', borderBottom: '0px solid rgba(81, 81, 81, 1)' }}
									>
										{row.market_data.price_change_percentage_1y.toFixed(2)}%
									</TableCell>
									
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			
	</TableContainer>
	{/* <Pagination
	count={(handleSearch()?.length / 50).toFixed(0)}
	onChange={(_, value) => {
		setPage(value);
		window.scroll(0, 450);
	}}
	style={{ padding: 20, width: '100%', display: 'flex', justifyContent: 'center' }}
	/> */}
	</>
  )
}

export default CoinList