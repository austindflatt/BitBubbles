import React, { createContext, useContext, useEffect, useState } from "react";

const Coin = createContext();

const CoinContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [pages, setPages] = useState(150);
  const [changePercentage, setChangePercentage] = useState("1h");
  const [sort, setSort] = useState("market_cap_desc");
  const [view, setView] = useState("price_change");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€");
    else if (currency === "RUB") setSymbol("₽");
    else if (currency === "BRL") setSymbol("R$");
    else if (currency === "GBP") setSymbol("£");
    else if (currency === "INR") setSymbol("₹");
    else if (currency === "AUD") setSymbol("$");
    else if (currency === "CAD") setSymbol("$");
    else if (currency === "PLN") setSymbol("Zł");
    else if (currency === "TRY") setSymbol("₺");
    else if (currency === "BTC") setSymbol("BTC");
    else if (currency === "ETH") setSymbol("ETH");

  }, [currency]);

  return (
    <Coin.Provider value={{ currency, setCurrency, symbol, pages, setPages, changePercentage, setChangePercentage, sort, setSort, view, setView }}>
      {children}
    </Coin.Provider>
  );
};

export default CoinContext;

export const CoinState = () => {
  return useContext(Coin);
};