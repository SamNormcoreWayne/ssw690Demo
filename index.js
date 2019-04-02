"use strict";

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.post('/', (req, res) => {
    res.send("POST");
});

app.put('/user', (req, res) => {
    res.send("PUT");
});

app.listen(port, () => {
    console.log(`on port ${port}`);
});