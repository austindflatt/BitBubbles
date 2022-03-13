import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

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

  useEffect(() => {
	fetchTrendingCrypto();
  }, [])


  return (
	<Link to={'/home'} style={{ textDecoration: 'none' }}>
	<Item variant='outlined' onClick={``}>
		<Avatar
        alt={null}
        src={null}
        sx={{ width: 60, height: 60 }}
		/>
		<br />
		<Stack spacing={1} direction="row" style={{margin: 'auto', display: 'block'}}>
			<h3>Bitcoin</h3>
		</Stack>
		<Stack spacing={1} direction="row" style={{margin: 'auto', display: 'block'}}>
			<p>$292.99</p>
		</Stack>
		<br />
		<Stack spacing={1} direction="row" style={{margin: 'auto', display: 'block'}}>
			<h1 style={{ color: 'rgb(49, 199, 109)' }}><ArrowUpward />32.63%</h1>
    	</Stack>
	</Item>
	</Link>
  )
}

export default TrendingItem