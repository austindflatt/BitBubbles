import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { CircularProgress, Box } from '@mui/material'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import 'chartkick/chart.js'
import { Line, ScriptableContext } from 'react-chartjs-2';
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

  // const ctx = canvas.getContext("2d");
  // const gradient = ctx.createLinearGradient(0, 0, 0, height);
  // gradient.addColorStop(0, 'rgba(250,174,50,1)');   
  // gradient.addColorStop(1, 'rgba(250,174,50,0)');

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
              borderColor: '#FFF',
              color: '#FFF',
              backgroundColor: '#0053ff',
              fill: true,
              
            }]
          }}
          options={{
            elements: {
              // point: {
              //   radius: 1,
              // },
              // point: {
              //   borderColor: "#027DC4",
              //   backgroundColor: "#fff",
              //   hoverBackgroundColor: "#fff",
              //   borderWidth: 2,
              //   radius: 5,
              //   hoverRadius: 7,
              //   hoverBorderWidth: 2,
              // },
            },
            plugins: {
              legend: {
                  display: false
              },
          },
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                grid: {
                  display: false
                }
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
        {/* <br />
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color='success' disabled>Add to watchlist</Button>
          <Button variant="outlined" color='error' disabled>Remove from watchlist</Button>
        </Stack> */}
        </>
      )
    }
    </>
  )
}

export default CoinInfo