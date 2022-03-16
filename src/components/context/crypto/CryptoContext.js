import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
	setLoading(true)
	const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')

	setCoins(data)
	setLoading(false)
  }

  useEffect(() => {
	fetchCoins()
  }, [])

  return (
	<Crypto.Provider
	value={{coins, loading, fetchCoins}}>
		{children}
	</Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
	return useContext(Crypto);
};