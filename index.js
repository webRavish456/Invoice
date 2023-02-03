import express from "express";
import Connection from "./database/db.js";
import route from "./router/auth.js";
import cors from 'cors';
import bodyParser from 'body-parser';
const app= express();

Connection();



app.use(express.json());
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route);


const PORT=5000;

app.get("/",(req,res)=>
{
   res.send("App is Running Successfully");
})

app.listen(PORT,()=>
{
     console.log(`Server is running in port ${PORT}`)
})