const mongoose = require("mongoose");
//location schema

const NewSchema= new mongoose.Schema({
    latitude: {
        type:String,

    },
    longitude: {
        type: String,
    },
  })
module.exports = mongoose.model("positions", NewSchema);