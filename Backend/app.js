const doteenv = require('dotenv');
doteenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const connectToDb = require('./db/db');
connectToDb();

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.use('/users',userRoutes);


module.exports = app;