import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);

  const fetchHistoricalData = async () =>{
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=USD&days=${days}`);

    console.log(data.prices)
  }

  useEffect(() => {
    fetchHistoricalData();
  }, [])

  return (
    <>
    </>
  )
}

export default CoinInfo