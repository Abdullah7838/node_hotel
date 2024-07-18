const mongoose = require('mongoose');

const menuitems = new mongoose.Schema({
    name:{
        type :String,
        required:true,
    },
    is_drink:{
        type :Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[],
        }
    
})
const menu = mongoose.model('menu',menuitems);
module.exports=menu;