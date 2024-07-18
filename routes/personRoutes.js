const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');


router.post('/',async (req,res)=>{
    try{
       const data = req.body;
       const newPerson = new Person(data);
       const response = await newPerson.save();
       res.status(200).json(response);
       console.log('Data posted to server sucessfully')
    }catch(err){
     console.log("error in posting person posting");
     res.status(500).json({error:'Internal Error in person posting'});
    }
 })

router.get('/',async (req,res)=>{
    try{
    const data = await Person.find();
    res.status(200).json(data);}
    catch(err){
      console.log('error in getting person get');
    }
   })

   router.get('/:names',async (req,res)=>{
    try{
      const names = req.params.names;
        const data = await Person.find({name:names});
        res.status(200).json(data);
  
    }
    catch(err){
        console.log('error in getting person workType');
    }
   })

   router.put('/:id',async (req,res)=>{
    try{
     const PersonId = req.params.id;
     const UpdatedPerson = req.body;
     const response = await Person.findByIdAndUpdate(PersonId,UpdatedPerson,{
      new:true,
      newValidator:true
     })
     if(!response){
        console.log('Person Not Found');
        res.status(404).json(response);
     }
     console.log("Data Updated")
     res.status(200).json(response);
    }
    catch(err){
      console.log("Error in Updating Person")
    }
    })

router.delete('/:id', async (req,res)=>
{
  try{
   const PersonId = req.params.id;

  const response = await Person.findByIdAndDelete(PersonId);
  
  if(!response){
    console.log("Error Not response in deleting person");
    res.status(404).json(response);
   }
   res.status(200).json(response);}
   catch(err){
    console.log("Error in delete Person")
    res.status(500).json(response)
   }
})
  module.exports=router;