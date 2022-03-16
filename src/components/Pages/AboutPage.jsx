import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AboutPage = () => {
  return (
	<>
   <Accordion>
      <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      >
        <Typography>What is HODL?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <p>HODL is a term derived from a misspelling of "hold," in the context of buying and holding Bitcoin and other cryptocurrencies. It's also commonly come to stand for "hold on for dear life" among crypto investors.</p>
        <br />
        <p>The term HODL (or hodl) originated in 2013 with a post to the Bitcointalk forum. The price of Bitcoin in 2013 was volatile, surging to over $1,100 at the beginning of December, 2013, up from just over $100 in April of the same year.12 Reports on Dec. 16, 2013, of a Chinese ban on payment companies working with Bitcoin exchanges may have inspired the original Bitcointalk post.</p>

        <p>At 10:03 a.m. UTC on Dec. 18, Bitcointalk forum user GameKyuubi posted "I AM HODLING"—a drunk, semi-coherent, typo-laden rant about the user's poor trading skills and determination to simply hold his Bitcoin from that point on. "I type d that tyitle twice because I knew it was wrong the first time. Still wrong. w/e," GameKyuubi wrote about the now-famous misspelling of "holding." "WHY AM I HOLDING? I'LL TELL YOU WHY," he continued. "It's because I'm a bad trader and I KNOW I'M A BAD TRADER. Yeah you good traders can spot the highs and the lows pit pat piffy wing wong wang just like that and make a millino bucks sure no problem bro."</p>
        <p>GameKyuubi concluded that the best course was to hold, since "You only sell in a bear market if you are a good day trader or an illusioned noob. The people inbetween hold. In a zero-sum game such as this, traders can only take your money if you sell." He then confessed he'd had some whiskey and briefly mused about the spelling of whisk(e)y.</p>
        <p>Within an hour, "HODL" had become a meme. Initially the memes referenced the movies 300 and Braveheart, but there are now countless HODL memes floating around the internet.3 Many HODL memes now reference Game of Thrones' Hodor.</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      >
        <Typography>About</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <p style={{ marginBottom: '20px' }}>This web app was built using React, Material UI, CoinGecko API, and Chart.js</p>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" href='https://github.com/austindflatt/crypto-currency-react' target='_blank'>GitHub Repo</Button>
        </Stack>
        </Typography>
      </AccordionDetails>
    </Accordion>
  </>
  )
}

export default AboutPage