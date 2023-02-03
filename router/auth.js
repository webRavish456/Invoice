import express, { Router } from "express";
import Connection from "../database/db.js";
import Data from "../model/User.js";
const route=express.Router();

Connection();


route.get('/',(req,res)=>
{
     res.send('Hello world from the server');
})





route.post('/submit',(req,res)=>
{
   

   
      const {BillAdd, ShipAdd, Dsin, Item, MRP,Discount, HSN, GST,  Quantity}= req.body;

      if(!Dsin || !Item || !MRP ||!Discount || !HSN || !GST ||  !Quantity)
      {
         return res.status(422).json({error:"Plz filled the field properly"});
      }
    
         const data= new Data({BillAdd, ShipAdd, Dsin, Item, MRP,Discount, HSN, GST,  Quantity});
         data.save().then(()=>
         {
             res.status(201).json({message:"User registered successfully"}) 
         }).catch((err)=>res.status(500).json({error:"Failed"}));
          
     
})


  route.get('/datas/about',(req,res)=>{
  
 
      Data.find((err,data)=>{
      if(err)
      {
          res.status(500).send(err);
      }else {
         res.status(200).send(data);
      }
      })
    
     })

   

export default route;