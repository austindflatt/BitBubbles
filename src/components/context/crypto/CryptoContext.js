import React, { createContext } from 'react'

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  return (
	<Crypto.Provider
	value={null}>
		{children}
	</Crypto.Provider>
  )
}

export default CryptoContext