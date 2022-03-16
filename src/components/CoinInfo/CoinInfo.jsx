import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CircularProgress, Box } from '@mui/material'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import 'chartkick/chart.js'
import { Line } from 'react-chartjs-2';
import { chartInterval } from '../../config/data'

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
        <Line 
          data={{
            labels: historicalData.map((coin => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;

                  return days === 1 ? time : date.toLocaleDateString();
            })),
            datasets: [{
              data: historicalData.map((coin) => coin[1]),
              label: `Price Past ${days} Days in USD`,
              borderColor: '#0053ff',
            }]
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              }
            }
          }}
          
        />
        <br />
        <Stack spacing={2} direction="row">
          {chartInterval.map(day => (
            <Button
            variant={day.value === days && 'outlined'}
            onClick={() => setDays(day.value)}
            
            >
              {day.label}
            </Button>
          ))}
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