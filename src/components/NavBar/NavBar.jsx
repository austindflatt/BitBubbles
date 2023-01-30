import React from 'react';

const NavBar = () => {

  return (
    <>
    <header className="header">
      <img className="logo" src="/logo64.png" alt="Bit Bubbles" title="Bit Bubbles Logo" />
      <h1>DIGITAL HEAT</h1>
      <div className="grow"></div>
      <div className="header-settings">
        <select>
          <option value="favorites">★ Favorites</option>
          <optgroup label="Pages">
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
        <select>
          <option value="red-green">Red + Green</option>
          <option value="yellow-blue">Orange + Blue</option>
        </select>
      </div>
      <button className="icon-button button-settings" title="Settings">
        <svg width="24" height="24">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path>
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