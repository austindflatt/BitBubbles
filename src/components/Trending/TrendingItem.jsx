import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { numberWithCommas } from '../CoinList/CoinList';
import { Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'left',
	color: theme.palette.text.secondary,
}));

function TrendingItem() {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCrypto = async () => {
	const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);

	setTrending(data);
  }

  console.log(trending)

  useEffect(() => {
	fetchTrendingCrypto();
  }, [])


  return (
	<>
	{trending.slice(0, 4).map((crypto) => (
	<>
	<Grid item xs={8} sm={4} md={3}>
		<Link to={`price/${crypto.id}`} style={{ textDecoration: 'none' }}>
			<Item variant='outlined' onClick={``}>
				<Avatar
				alt={crypto?.id}
				src={crypto?.image}
				sx={{ width: 60, height: 60 }}
				/>
				<br />
				<Stack spacing={1} direction="row" style={{margin: 'auto', display: 'block'}}>
					<h3>{crypto?.name}</h3>
				</Stack>
				<Stack spacing={1} direction="row" style={{margin: 'auto', display: 'block'}}>
					<p>${numberWithCommas(crypto?.current_price.toFixed(2))}</p>
				</Stack>
				<br />
				<Stack spacing={1} direction="row" style={{margin: 'auto', display: 'block'}}>
					<h1 style={{ color: '#FFF' }}>{crypto.price_change_percentage_24h.toFixed(2)}%</h1>
				</Stack>
			</Item>
		</Link>
	</Grid>
	</>
	))}
	</>
  )
}

export default TrendingItem