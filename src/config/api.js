export const HeatData = (currency, pages, order, changePercentage) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${order}&per_page=${pages}&page=1&sparkline=false&price_change_percentage=${changePercentage}`;

export const CoinData = (currency, pages) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${pages}&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 7, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;