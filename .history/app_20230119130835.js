const  express = require('express');

const mongoose = require("mongoose");
const locationRouter = require('./routes/position.router');

const app = express();
//server listening
const port = 5000;
/////////tests////////
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
// view engine setup

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/geolocalisation",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("db connected");})
.catch(()=>{console.log("db error");})



app.use("/api",locationRouter);




module.exports = app 
