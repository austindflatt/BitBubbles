import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { numberWithCommas } from '../CoinList/CoinList';
import { LinearProgress } from '@mui/material';

const CryptoPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState()

  const fetchCoin = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

    setCoin(data);

  }

  console.log(coin)

  useEffect(() => {
    fetchCoin()
  }, [])

  if(!coin) return <LinearProgress style={{ backgroundColor: '#0053ff' }} />

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        {/* sidebar */}
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ margin: 'auto', display: 'block' }}>
          <img
          src={coin?.image.large}
          alt={coin?.name}
          height='200'
          />
          <h1 style={{ margin: '20' }}>{coin?.name}</h1>
          <h3>Rank: {coin?.market_cap_rank}</h3>
          <h3>Current Price: ${numberWithCommas(coin?.market_data.current_price.usd)}</h3>
          <h3>Market Cap: ${numberWithCommas(coin?.market_data.market_cap.usd)}</h3>
          <h3>Genesis Date: {coin?.genesis_date}</h3>
          </div>
        </Grid>
        <Grid item xs={8} lg={6}>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1}>
          </Stack>
          <Stack direction="row" spacing={1}>
          </Stack>
        </Stack>
        <p>{coin?.description.en.split(". ")[0]}</p>
        {/* chart */}
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default CryptoPage