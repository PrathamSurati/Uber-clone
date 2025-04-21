const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
const captainRoutes = require('./routes/captain');
const mapRoutes = require('./routes/maps');
const rideRoutes = require('./routes/ride.routes');

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

app.use('/captains',captainRoutes);

app.use('/maps',mapRoutes);

app.use('/rides',rideRoutes);



module.exports = app;