const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const api = express();
api.use(cors());

api.get('/', (req, res) => {
    res.send('Hello World!');
});

api.listen(3000, () => {
    console.log('API up and running!');
});