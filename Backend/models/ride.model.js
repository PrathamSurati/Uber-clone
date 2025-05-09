const mongoose = require("mongoose");
const captainModel = require("./captain");

const rideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "captain",
  },
  pickup: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "ongoing", "cancelled", "completed"],
    default: "pending",
  },
  duration: {
    type: Number,
  },   // in sec
  distance : {
    type : Number,
  }, // in meter
  paymentID : {
    type : String,
  },
  orderID : {
    type : String,
  },
  signature : {
    type : String,
  },
  otp : {
    type : String,
    select : false,
    required : true,
  }

});


module.exports = mongoose.model("ride", rideSchema);

