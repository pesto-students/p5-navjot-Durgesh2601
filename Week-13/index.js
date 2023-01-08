const express = require('express');
const app = express();

const http = require('http');

require('dotenv').config();

const api_key = `${process.env.API_KEY}`;

app.get('/weather', (req, res) => {
    console.log('hello')
    // res.send(`Hello: ${api_key}`);
})

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/todos/1',
}
http.get(options, (res) => {
    console.log(res.statusCode);
})
// app.listen((5000, () => {
//     console.log(`Server listening on port 5000`);
// }));

