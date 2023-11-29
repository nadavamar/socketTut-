const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(cors());

app.get('/json', (req, res) => {
  fetch('http://localhost:4000/demo-json')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      res.json({ status: 'success', data });
    })
    .catch(error => {
      res.json({ status: 'error', message: error.message });
    });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});