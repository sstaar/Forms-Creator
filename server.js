"use strict";
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var cookieParser = require('cookie-parser')
const api = require('./routes/index');
const app = express();
const port = 5000;

app.use(cors());
app.use(cookieParser())

// Used to parse the post data of the body.
app.use(bodyParser.json({ limit: "10mb" })); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false })); // to support URL-encoded bodies

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("MongoDB is Connected...");
});

app.use('/api', api);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))