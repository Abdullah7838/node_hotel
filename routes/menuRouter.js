const express = require('express');
const router = express.Router();
const menuitems = require('./../models/menuitems');

router.post('/', async (req,res)=>{
    try{
    const data = req.body;
    const newMenu = new menuitems(data);
    const response = await newMenu.save();
    res.status(200).json(response);
    console.log('Data posted to server sucessfully')
    }catch(err){
      console.log("error in posting menu");
      res.status(500).json({error:'Internal Error'});
    }
  })

  module.exports=router;