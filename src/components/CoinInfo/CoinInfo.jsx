import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CircularProgress, Box } from '@mui/material'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { LineChart, AreaChart } from 'react-chartkick'
import 'chartkick/chart.js'


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
    <h1 style={{ marginBottom: '20px' }}>{coin?.name}</h1>
    {!historicalData ? (
        <Box sx={{ display: 'flex' }} style={{width: '100px', margin: 'auto', display: 'block'}}>
          <CircularProgress size={250} style={{ color: '#0053ff' }} />
        </Box>
      ) : (
        <>
        <AreaChart 
          data={[
            historicalData.map((coin => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;

                  return days === 1 ? time : date.toLocaleDateString()
            })),
          ]}
          colors={["#0053ff"]}
          
        />
        <br />
        <Stack spacing={2} direction="row">
          <Button variant="outlined">24 Hours</Button>
          <Button variant="outlined">1 Month</Button>
          <Button variant="outlined">3 Months</Button>
          <Button variant="outlined">1 Year</Button>
          <Button variant="outlined">All</Button>
        </Stack>
        <br />
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color='success'>Add to watchlist</Button>
          <Button variant="outlined" color='error'>Remove from watchlist</Button>
        </Stack>
        </>
      )
    }
    </>
  )
}

export default CoinInfo