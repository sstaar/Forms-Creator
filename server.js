"use strict";
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const Form = require('./modules/Form');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

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

app.post('/form', async (request, response) => {
    const postInfo = {
        structure: request.body.structure,
        name: request.body.name,
    }

    try {
        console.log(postInfo)
        const form = await new Form({ name: postInfo.name, structure: postInfo.structure });
        form.save();
        return response.json(form);
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error." });
    }
});

app.get('/form/:name', async (request, response) => {
    const getInfo = {
        name: request.params.name,
    }

    try {
        console.log(getInfo)
        const form = await Form.find({ name: getInfo.name });
        console.log(form[0])
        return response.json(form[0]);
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error." });
    }
});

app.post('/form/:name', async (request, response) => {

    const submission = {
        formData: request.body.formData,
        name: request.params.name
    };

    try {
        let form = await Form.find({ name: submission.name });
        // console.log(form[0]);
        // return;
        form[0].submissions.push({ ...submission.formData, date: Date.now() });
        await form[0].save();
        return response.json(form[0]);
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error." });
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))