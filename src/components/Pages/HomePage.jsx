import { Container } from '@mui/material'
import React from 'react'
import CoinList from '../CoinList/CoinList'
import Trending from '../Trending/Trending'

const HomePage = () => {
  return (
    <>
      <Trending />
      <Container maxWidth="xl">
        <CoinList />
      </Container>
    </>
  )
}

export default HomePage