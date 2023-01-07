const express = require('express');
const app = express();

require('dotenv').config();

const api_key = `${process.env.API_KEY}`;

app.get('/', (req, res) => {
    res.send(`Hello: ${api_key}`);
})

app.listen((8080, () => {
    console.log(`Server listening on port 8080`);
}));