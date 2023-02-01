import React from 'react';
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const history = useNavigate();

  return (
    <>
    <header className="header">
      <img className="logo" src="/logo64.png" alt="Bit Bubbles" title="Bit Bubbles Logo" />
      <h1>HEAT VIZ</h1>
      <div className="grow"></div>
      <div className="header-settings">
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
        {/* <select>
          <option value="red-green">Red + Green</option>
          <option value="yellow-blue">Orange + Blue</option>
        </select> */}
      </div>
      <button className="icon-button button-settings" title="Settings">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M6 18h-2v5h-2v-5h-2v-3h6v3zm-2-17h-2v12h2v-12zm11 7h-6v3h2v12h2v-12h2v-3zm-2-7h-2v5h2v-5zm11 14h-6v3h2v5h2v-5h2v-3zm-2-14h-2v12h2v-12z"/>
        </svg>
      </button>
      <div className="data-updater"></div>
    </header>
    {/* <div className="bubble-chart-header">
      <div className="configuration-tabs scroll-container">
        <button className="tab selected" draggable="true">Week</button>
        <button className="tab" draggable="true">Market Cap + Week</button>
        <button className="tab" draggable="true">NFT's</button>
      </div>
      <button className="icon-button border" title="Edit chart">
        <svg width="24" height="24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </svg>
        </button>
        <button className="icon-button border" title="Add chart">
          <svg width="24" height="24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
        </button>
    </div> */}
    </>
  );
};

export default NavBar;