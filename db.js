const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/hotel";
mongoose.connect(mongoURL,{
    useNewUrlParser :true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to DB');
})
db.on('disconnected',()=>{
    console.log('Disconnected to DB');
})
db.on('error',()=>{
    console.log('Internal Server Error');
})
module.exports={
    db
}