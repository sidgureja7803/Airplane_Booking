const {PORT} = require('./config');

const express = require('express');

const app = express();


app.get('/api', (req, res) => {
  res.json({
    message: 'Hello from the API'
  });
});
  
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});