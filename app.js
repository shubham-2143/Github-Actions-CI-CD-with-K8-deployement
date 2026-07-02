const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Kubernetes Github Project');
});

app.listen(3000, () => {
  console.log('App runningg on port 3000');
});
