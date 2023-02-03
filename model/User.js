import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    BillAdd:{
        type:String,
    },
    ShipAdd: {
       type:String,
    },

    Dsin: {
        type:String,
        required:true
    },
    Item:{
        type:String,
        required:true
    },
    MRP:{
        type:Decimal128,
        required:true
    },
    Discount:{
        type:Number,
        required:true
    },
    HSN:{
        type:Number,
        required:true
    },
    GST:{
        type:Decimal128,
        required:true
    },
    Quantity: {
         type:Number,
         required:true
    }

})
  
const Data=mongoose.model('data', userSchema);
export default Data;
