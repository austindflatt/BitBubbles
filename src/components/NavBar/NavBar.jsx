import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CoinState } from '../../context/CoinContext';
import SettingsModal from '../Modal/SettingsModal';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const NavBar = () => {
  const [settingsOpened, setSettingsOpened] = useState(false);
  const [viewChange, setViewChange] = useState(false);
  const { currency, setCurrency, pages, setPages, sort, setSort, changePercentage, setChangePercentage, view, setView } = CoinState();

  const history = useNavigate();

  const handleClick = () => {
    setViewChange(!viewChange);
  };

  // showLogin function will open the modal for logging a user in.
  const showSettings = () => {
    setSettingsOpened(true);
  }

  return (
    <>
    <SettingsModal
      settingsOpened={settingsOpened}
      setSettingsOpened={setSettingsOpened}
    />

    <header className="header">
      <img className="logo" src="/logo64.png" alt="Heat Viz" title="Heat Viz Logo" />
      <h1>HEAT VIZ</h1>
      <div className="grow"></div>
      <BrowserView>
      <div className="header-settings">
        <select value={view} onChange={(e) => setView(e.target.value)}>
          <optgroup label="View">
            <option value={"price-change"}>Price Change</option>
            <option value={"price"}>Price</option>
          </optgroup>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <optgroup label="Sort By">
            <option value={"market_cap_desc"}>Market Cap</option>
            <option value={"volume_desc"}>Volume 24H</option>
          </optgroup>
        </select>
        <select value={changePercentage} onChange={(e) => setChangePercentage(e.target.value)}>
          <optgroup label="Period">
            <option value={"1h"}>Hour</option>
            <option value={"24h"}>Day</option>
            <option value={"7d"}>Week</option>
            <option value={"30d"}>Month</option>
            <option value={"1y"}>Year</option>
          </optgroup>
        </select>
        <select value={pages} onChange={(e) => setPages(e.target.value)}>
          {/* <option value="favorites">★ Watchlist</option> */}
          <optgroup label="Pages">
            <option value={150}>TOP 150</option>
            <option value={200}>TOP 200</option>
            <option value={250}>TOP 250</option>
          </optgroup>
        </select>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value={"USD"}>$ USD</option>
          <option value={"EUR"}>€ EUR</option>
          <option value={"RUB"}>₽ RUB</option>
          <option value={"BRL"}>R$ BRL</option>
          <option value={"GBP"}>£ GBP</option>
          <option value={"INR"}>₹ INR</option>
          <option value={"AUD"}>$ AUD</option>
          <option value={"CAD"}>$ CAD</option>
          <option value={"PLN"}>Zł PLN</option>
          <option value={"TRY"}>₺ TRY</option>
          <option value={"BTC"}>₿ BTC</option>
          <option value={"ETH"}>Ξ ETH</option>
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
      </div>
      </BrowserView>
      <button className="icon-button button-settings" title="Settings" value={changePercentage} onClick={handleClick}>
      {viewChange ? <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M8.625 0c.61 7.189-5.625 9.664-5.625 15.996 0 4.301 3.069 7.972 9 8.004 5.931.032 9-4.414 9-8.956 0-4.141-2.062-8.046-5.952-10.474.924 2.607-.306 4.988-1.501 5.808.07-3.337-1.125-8.289-4.922-10.378zm4.711 13c3.755 3.989 1.449 9-1.567 9-1.835 0-2.779-1.265-2.769-2.577.019-2.433 2.737-2.435 4.336-6.423z"/>
      </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/>
      </svg> }
      </button>
      
      {/* {viewChange ?
      <button className="icon-button button-settings" title="Settings" onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/>
      </svg>
      </button>
       :
       <button className="icon-button button-settings" title="Settings">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M7 24h-6v-6h6v6zm8-9h-6v9h6v-9zm8-4h-6v13h6v-13zm0-11l-6 1.221 1.716 1.708-6.85 6.733-3.001-3.002-7.841 7.797 1.41 1.418 6.427-6.39 2.991 2.993 8.28-8.137 1.667 1.66 1.201-6.001z"/>
      </svg>
      </button>
       } */}
      <MobileView>
      <button onClick={showSettings} className="icon-button button-settings" title="Settings">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M6 18h-2v5h-2v-5h-2v-3h6v3zm-2-17h-2v12h2v-12zm11 7h-6v3h2v12h2v-12h2v-3zm-2-7h-2v5h2v-5zm11 14h-6v3h2v5h2v-5h2v-3zm-2-14h-2v12h2v-12z"/>
        </svg>
      </button>
      </MobileView>
      <div className="data-updater"></div>
    </header>
    </>
  );
};

export default NavBar;