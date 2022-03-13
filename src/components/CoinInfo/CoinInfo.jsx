import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CircularProgress, Box } from '@mui/material'
import { Line } from 'react-chartjs-2';

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=USD&days=${days}`);
    setHistoricalData(data.prices);
    console.log(data.prices)
  }

  useEffect(() => {
    fetchHistoricalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days])


  return (
    <>
    {!historicalData ? (
        <Box sx={{ display: 'flex' }} style={{width: '100px', margin: 'auto', display: 'block'}}>
          <CircularProgress size={250} style={{ color: '#0053ff' }} />
        </Box>
      ) : (
        <>
        <p>chart will go here</p>
        </>
      )
    }
    </>
  )
}

export default CoinInfo