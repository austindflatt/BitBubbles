import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { numberWithCommas } from '../CoinList/CoinList';
import CoinInfo from '../CoinInfo/CoinInfo'
import { LinearProgress } from '@mui/material';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(!coin) return <LinearProgress style={{ backgroundColor: '#0053ff' }} />

  return (
    <>
    <CoinInfo coin={coin} />
    <br />
    <Accordion>
      <AccordionDetails>
        <Typography>
        {/* <img
        src={coin?.image.large}
        alt={coin?.name}
        height='50'
        /> */}
        {coin?.description.en.split(". ")[0]}
        <br /><br />
        <h3>Rank: {coin?.market_cap_rank}</h3>
        <h3>Current Price: ${numberWithCommas(coin?.market_data.current_price.usd)}</h3>
        <h3>Market Cap: ${numberWithCommas(coin?.market_data.market_cap.usd)}</h3>
        <h3>Genesis Date: {coin?.genesis_date}</h3>
        </Typography>
      </AccordionDetails>
    </Accordion>

    </>
  )
}

export default CryptoPage