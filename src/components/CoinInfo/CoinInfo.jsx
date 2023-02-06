import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Box } from '@mui/material';
import 'chartkick/chart.js';
import { Line } from 'react-chartjs-2';
import { chartInterval } from '../../config/data';
import { CoinState } from "../../context/CoinContext";
import { HistoricalChart } from '../../config/api';


const colors = {
  purple: {
    default: "rgba(149, 76, 233, 0.80)",
    half: "rgba(149, 76, 233, 0.50)",
    quarter: "rgba(149, 76, 233, 0.15)",
    zero: "rgba(149, 76, 233, 0.01)",
  },
};

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const { currency, symbol } = CoinState();
  const [flag, setflag] = useState(false);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setflag(true);
    setHistoricalData(data.prices);
  };

  console.log(coin);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);
  
  // const fetchHistoricalData = async () => {
  //   const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=USD&days=${days}`);
  //   // const { details } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}`);
  //   setHistoricalData(data.prices);
  //   console.log(data.prices)
  // }
  
  // useEffect(() => {
  //   fetchHistoricalData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [days])

  return (
    <>
    
    <div className='graph-container'>
    
    {!historicalData ? (
      <Box sx={{ display: 'flex' }} style={{width: '100px', margin: 'auto', display: 'block', marginTop: 10, marginBottom: 10 }}>
        <CircularProgress size={150} style={{ color: 'rgba(149, 76, 233, 0.5)' }} />
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
                borderColor: colors.purple.default,
                borderWidth: 2,
                color: '#FFF',
                backgroundColor: ({chart: {ctx}}) => {
                  const gradient = ctx.createLinearGradient(0, 0, 0, 450);
                  gradient.addColorStop(0.10, colors.purple.half);
                  gradient.addColorStop(0.35, colors.purple.quarter);
                  gradient.addColorStop(1, colors.purple.zero);
                  return gradient;
                },
                fill: true,
              }]
            }}
            options={{
              hover: {
                mode: 'index',
                intersect: true
              },
              elements: {
                point: {
                  // green: rgb(51, 255, 51)
                  // red: rgb(255, 102, 102)
                  backgroundColor: "#fff",
                  borderColor: "#ff6666",
                  hoverBackgroundColor: "rgb(51, 255, 51)",
                  hoverBorderColor: "rgb(51, 255, 51)",
                  borderWidth: 2,
                  radius: 0,
                  hoverRadius: 5,
                  hoverBorderWidth: 2,
                },
              },
              responsive: true,
              plugins: {
                legend: {
                  display: false
                },
              },
              scales: {
                color: '#FFF',
                x: {
                  ticks: {
                    color: "white",
                    font: {
                      size: 15, 
                    },
                    stepSize: 1,
                    beginAtZero: true
                  },
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                },
                y: {
                  ticks: {
                    color: "white",
                    font: {
                      size: 15, 
                    },
                  beginAtZero: true
                },
                grid: {
                  display: false,
                  drawBorder: false,
                }
              }
            }
          }}
          />

          <br />
          
          <div className="bubble-window-performance">
            <>
            {chartInterval.map(day => (
            <p className={day.value === days && 'selected'} onClick={() => setDays(day.value)}>
              <span>{day.label}</span>
              {/* {day.label === 'Hour' && (
                <span 
                style={{ 
                  color: `${coin.market_data.price_change_percentage_1h_in_currency[currency.toLowerCase()]}` > 0 ? 'rgb(51, 255, 51)' : 'rgb(255, 102, 102)' 
                }}>
                {coin.market_data.price_change_percentage_1h_in_currency[currency.toLowerCase()] > 0 ? '+' : ''}
                {coin.market_data.price_change_percentage_1h_in_currency[currency.toLowerCase()].toFixed(2)}%
                </span>
              )} */}
              {day.label === 'Day' && (
                <span 
                style={{ 
                  color: `${coin.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()]}` > 0 ? 'rgb(51, 255, 51)' : 'rgb(255, 102, 102)' 
                }}>
                {coin.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()] > 0 ? '+' : ''}
                {coin.market_data.price_change_percentage_24h_in_currency[currency.toLowerCase()].toFixed(2)}%
                </span>
              )}
              {day.label === 'Week' && (
                <span
                style={{ 
                  color: `${coin.market_data.price_change_percentage_7d_in_currency[currency.toLowerCase()]}` > 0 ? 'rgb(51, 255, 51)' : 'rgb(255, 102, 102)' 
                }}>
                {coin.market_data.price_change_percentage_7d_in_currency[currency.toLowerCase()] > 0 ? '+' : ''}
                {coin.market_data.price_change_percentage_7d_in_currency[currency.toLowerCase()].toFixed(2)}%
                </span>
              )}
              {day.label === 'Month' && (
                <span 
                style={{ 
                  color: `${coin.market_data.price_change_percentage_30d_in_currency[currency.toLowerCase()]}` > 0 ? 'rgb(51, 255, 51)' : 'rgb(255, 102, 102)' 
                }}>
                {coin.market_data.price_change_percentage_30d_in_currency[currency.toLowerCase()] > 0 ? '+' : ''}
                {coin.market_data.price_change_percentage_30d_in_currency[currency.toLowerCase()].toFixed(2)}%
                </span>
              )}
              {day.label === 'Year' && (
                <span 
                style={{ 
                  color: `${coin.market_data.price_change_percentage_1y_in_currency[currency.toLowerCase()]}` > 0 ? 'rgb(51, 255, 51)' : 'rgb(255, 102, 102)' 
                }}>
                {coin.market_data.price_change_percentage_1y_in_currency[currency.toLowerCase()] > 0 ? '+' : ''}
                {coin.market_data.price_change_percentage_1y_in_currency[currency.toLowerCase()].toFixed(2)}%
                </span>
              )}
            </p>
            ))}
            </>
          </div>
        </>
      )
    }
    </div>
    </>
  )
}

export default CoinInfo;