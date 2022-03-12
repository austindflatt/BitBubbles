import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')

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

  return (
	<>
	<h1>Coin List</h1>
	<TextField
	fullWidth
	id="fullWidth"
	margin='20px'
	color="primary"
	label="Search for a crypto currency"
	value={null}
	onChange={(e) => setSearch(e.target.value)}
	/>
	</>
  )
}

export default CoinList