const app = require('./server');
const db = require('../db');
const port = 1128;

app.listen(port, () => {
  console.log(`patios are now available on port ${port}`);
})
