const mongoose = require("mongoose");
//location schema

const NewSchema= new mongoose.Schema({
    latitude: {
        type:Number,

    },
    longitude: {
        type: Number,
    },
  })
module.exports = mongoose.model("location", NewSchema);