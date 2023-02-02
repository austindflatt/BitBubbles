import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'rgb(3 3 3 / 90%)',
	backdropFilter: 'blur(8px)',
	borderRadius: '12px',
	boxShadow: '0 2px 8px rgb(0 0 0 / 20%)',
	p: 4,
  };

const SettingsModal = ({ settingsOpened, setSettingsOpened }) => {
  return (
	<>
	<Modal
        open={settingsOpened}
        onClose={() => setSettingsOpened(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Settings
          </Typography>
          <select>
          <optgroup label="View">
            <option value="favorites">Price Change</option>
            <option value="favorites">Price</option>
          </optgroup>
        </select>
        <select>
          <optgroup label="Sort By">
            <option value="favorites">Market Cap</option>
            <option value="favorites">Price Change</option>
            <option value="favorites">Volume 24H</option>
          </optgroup>
        </select>
        <select>
          <optgroup label="Period">
            <option value="favorites">Hour</option>
            <option value="favorites">Day</option>
            <option value="favorites">Week</option>
            <option value="favorites">Month</option>
            <option value="favorites">Year</option>
          </optgroup>
        </select>
        <select>
          <option value="favorites">★ Watchlist</option>
          <optgroup label="Pages">
            <option value="top-100">TOP 50</option>
            <option value="top-100">TOP 100</option>
          </optgroup>
        </select>
        <select>
          <option value="usd">$ USD</option>
          <option value="eur">€ EUR</option>
          <option value="rub">₽ RUB</option>
          <option value="brl">R$ BRL</option>
          <option value="gbp">£ GBP</option>
          <option value="inr">₹ INR</option>
          <option value="aud">$ AUD</option>
          <option value="cad">$ CAD</option>
          <option value="pln">Zł PLN</option>
          <option value="try">₺ TRY</option>
          <option value="btc">₿ BTC</option>
          <option value="eth">Ξ ETH</option>
        </select>
        <select>
          <option value="en">🇺🇸 English</option>
          <option value="ru">🇷🇺 Русский</option>
          <option value="pt">🇵🇹 Portugues</option>
          <option value="fr">🇫🇷 Français</option>
          <option value="es">🇪🇸 Español</option>
          <option value="fa">🇮🇷 فارسی</option>
          <option value="de">🇩🇪 Deutsch</option>
          <option value="pl">🇵🇱 Polski</option>
          <option value="ar">🇸🇦 العربية</option>
          <option value="it">🇮🇹 Italian</option>
          <option value="nl">🇳🇱 Nederlands</option>
          <option value="tr">🇹🇷 Türkçe</option>
          <option value="cn">🇨🇳 简体中文</option>
          <option value="ja">🇯🇵 日本語</option>
        </select>
        </Box>
      </Modal>
	</>
  )
}

export default SettingsModal;