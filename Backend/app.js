const doteenv = require('dotenv');
doteenv.config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const connectToDb = require('./db/db');
connectToDb();

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.use('/users',userRoutes);


module.exports = app;