const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
