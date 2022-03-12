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
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const fetchCoins = async () => {
	setLoading(true)
	const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')

	setCoins(data)
	setLoading(false)
  }

  console.log(coins)

  useEffect(() => {
	fetchCoins()
  }, [])

  const handleSearch = () => {
	return coins.filter((coin) => (
		coin.name.toLowerCase().includes(search) ||
		coin.symbol.toLowerCase().includes(search)
	))
  }

  return (
	<>
	<TextField
	fullWidth
	id="fullWidth"
	color="warning"
	label="Search"
	value={null}
	onChange={(e) => setSearch(e.target.value)}
	style={{ marginBottom: 20, marginTop: 20 }}
	/>

	<TableContainer>
		{
			loading ? (
				<LinearProgress style={{ backgroundColor: '#0053ff' }} />
			) : (
				<Table>
					<TableHead style={{ backgroundColor: '#0053ff' }}>
						<TableRow>
							{["Coin Name", "Price (USD)", "24hr Change", "Market Cap"].map((head) => (
								<TableCell
									style={{ 
										color: 'Black',
										fontWeight: '700',
										fontFamily: 'Roboto'
									}}
									key={head}
									align={head === "Coin Name" ? "" : "right"}
								>
									{head}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{handleSearch()
						.slice((page - 1) * 10, (page - 1) * 10 + 10)
						.map(row => {
							const profit = row.price_change_percentage_24h > 0;
							return (
								<TableRow
								onClick={() => (`/coins/${row.id}`)}
								key={row.name}
								style={{ 
									backgroundColor: '#272727', 
									cursor: 'pointer', 
								}}
								>
									<TableCell component='th' scope='row'
										style={{
											display: 'flex',
											gap: 15,
										}}
									>
										<img
										src={`https://assets.coincap.io/assets/icons/${row.symbol}@2x.png`}
										alt={row.name}
										height='50'
										style={{ marginBottom: 10 }}
										/>
										<div style={{ display: 'flex', flexDirection: 'column' }}>
											<span style={{ fontSize: '20px', textTransform: 'uppercase' }}>
												{row.symbol}
											</span>
											<span style={{ color: 'darkgrey' }}>
												{row.name}
											</span>
										</div>
									</TableCell>
									<TableCell
									align='right'
									>
									${numberWithCommas(row.current_price.toFixed(2))}
									</TableCell>
									<TableCell
									align='right'
									style={{ color: profit > 0 ? 'rgb(49, 199, 109)' : 'rgb(199 49 49)', fontWeight: '500' }}
									>
										{profit && '+'}
										{row.price_change_percentage_24h.toFixed(2)}%
									</TableCell>
									<TableCell
									align='right'
									>
										${numberWithCommas(row.market_cap.toString())}
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			)
		}
	</TableContainer>
	<Pagination
	count={(handleSearch()?.length / 10).toFixed(0)}
	onChange={(_, value) => {
		setPage(value);
		window.scroll(0, 450);
	}}
	style={{ padding: 20, width: '100%', display: 'flex', justifyContent: 'center' }}
	/>
	</>
  )
}

export default CoinList