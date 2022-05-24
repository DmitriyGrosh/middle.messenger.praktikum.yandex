
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist`));

console.log('==========>`${__dirname}/dist`', `${__dirname}/dist`)

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
