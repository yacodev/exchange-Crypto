const url = "https://api.coincap.io/v2/assets?limit=20";
const url_base = "https://api.coincap.io/v2";

async function getAssets() {
  return fetch(`${url}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.data);
}

async function getAsset(coin) {
  return fetch(`${url_base}/assets/${coin}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.data);
}

async function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url_base}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

async function getMarkets(coin) {
  return fetch(`${url_base}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
}

async function getExchange(id) {
  return fetch(`${url_base}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
