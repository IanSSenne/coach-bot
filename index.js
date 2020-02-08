const express = require('express');
const app = express();
const port = process.env.PORT || 5050;
const bot = require('./bot');

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Bot ${port}!`));