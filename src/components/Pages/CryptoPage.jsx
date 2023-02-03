import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { numberWithCommas } from '../CoinList/CoinList';
import CoinInfo from '../CoinInfo/CoinInfo';
import { Container } from '@mui/material';
import { CircularProgress, Box } from '@mui/material';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(!coin) return (
    <>
    <Container maxWidth="xl" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <Box sx={{ display: 'flex' }} style={{width: '100px', margin: 'auto', display: 'block'}}>
        <CircularProgress size={150} style={{ color: 'rgba(149, 76, 233, 0.5)' }} />
      </Box>
    </Container>
    </>
  )

  return (
    <>
    <Container maxWidth="xl">
      <CoinInfo coin={coin} />
    </Container>
    </>
  )
}

export default CryptoPage;