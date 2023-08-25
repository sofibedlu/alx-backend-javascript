const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;

  // Validate cartId as a number
  if (!/^\d+$/.test(cartId)) {
    return res.status(404).send('Cart ID must be a number');
  }

  res.send(`Payment methods for cart ${cartId}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
