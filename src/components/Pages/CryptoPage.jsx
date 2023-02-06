import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { numberWithCommas } from '../CoinList/CoinList';
import CoinInfo from '../CoinInfo/CoinInfo';
import { Container, Typography } from '@mui/material';
import { CircularProgress, Box } from '@mui/material';
import { CoinState } from '../../context/CoinContext';
import { abbreviateNumber } from '../CoinList/CoinList';
import { htmlToDOM } from 'html-react-parser';

const CryptoPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol, pages } = CoinState();

  const fetchCoin = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

    setCoin(data);

  }

  console.log(coin)

  useEffect(() => {
    fetchCoin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(!coin) return (
    <>
    <Container maxWidth="xl" style={{ marginTop: '50px', marginBottom: '50px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Box sx={{ display: 'flex' }} style={{width: '100px', margin: 'auto', display: 'block'}}>
        <CircularProgress size={150} style={{ color: 'rgba(149, 76, 233, 0.5)' }} />
      </Box>
    </Container>
    </>
  )

  return (
    <>
    <div className='coin-container'>
      <div className='coin-sidebar'>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginTop: 20, marginBottom: 20 }}
        />
        <h1 className='coin-heading'>
          {coin?.name}
        </h1>
        <h2>What is {coin?.name}</h2>
        <p style={{ marginTop: '20px', marginBottom: '20px', padding: '25px', fontFamily: 'Montserrat' }}>
          {coin?.description.en.split(". ")[0]}
        </p>

        

        <div className='coin-data'>
          <span style={{ display: "flex" }}>

          <Typography variant="h5" >
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {coin?.market_cap_rank}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5">
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{""}{abbreviateNumber(coin?.market_data.current_price[currency.toLowerCase()])}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5">
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              
              {symbol}{""}{abbreviateNumber(coin?.market_data.market_cap[currency.toLowerCase()])}
            </Typography>
            </span>
    </div>
        {/* <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div> */}
      </div>
      <CoinInfo coin={coin} />
    </div>
    </>
  )
}

export default CryptoPage;