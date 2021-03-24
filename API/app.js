const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose')

const path = require("path");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(cookieParser());
app.use(session({ secret: 'Infogird Kings' }))

const cors = require('cors');
app.use(cors());

const routes = require('./routes/routes');


mongoose.connect('mongodb://localhost:27017/FinalTest',
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('connected to db');
    })

app.use(routes);


app.listen(3000, () => {
    console.log("Server is running");
});

