var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const fetch = require('node-fetch');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());



// Variables for url and api key
const apiKey = process.env.API_KEY;
const apiUrl = 'https://api.meaningcloud.com/parser-2.0';



app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});



// by me
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});
app.use(express.static('dist'));



// POST Route
app.post('/api', async (req, res) => {
    const response = await fetch(`${apiUrl}?key=${apiKey}&txt=${req.body.text}&lang=en`);
    const data = await response.json();
    res.send(data);
});



// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});