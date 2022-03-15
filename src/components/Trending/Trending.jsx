import React from 'react'
import TrendingItem from './TrendingItem'
import { TrendingUp } from '@mui/icons-material'
import Grid from '@mui/material/Grid'

const Trending = () => {
  return (
	  <>
	  <h1>Trending Crypto <TrendingUp /></h1>
	  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '10px' }}>
      <TrendingItem key={null} user={null} />
    </Grid>
	  </>
  )
}

export default Trending