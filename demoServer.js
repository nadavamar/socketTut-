const express = require('express');
const app = express();
const port = 4000;

app.get('/demo-json', (req, res) => {
  res.json({ demoMessage: 'This is a demo message1111111111.' });
});

app.listen(port, () => {
  console.log(`Demo server running at http://localhost:${port}`);
});