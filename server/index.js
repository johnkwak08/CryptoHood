const express = require('express');

const axios = require('axios');

const app = express();
const port = 3000;
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/coins', (req, res) => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
});

app.get('/coins/:id', (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days: '1',
    },
  })
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
