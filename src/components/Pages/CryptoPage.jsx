import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

  return (
	<div>CryptoPage</div>
  )
}

export default CryptoPage