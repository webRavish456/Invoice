import mongoose from 'mongoose';

const Connection=async()=>
{
    const URL='mongodb://User:Ravish@ac-za9io3q-shard-00-00.enbicji.mongodb.net:27017,ac-za9io3q-shard-00-01.enbicji.mongodb.net:27017,ac-za9io3q-shard-00-02.enbicji.mongodb.net:27017/?ssl=true&replicaSet=atlas-uov45w-shard-0&authSource=admin&retryWrites=true&w=majority';

    try{
         await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log("Database connected successfully");
     
    }catch(err)
    {console.log(err.message)};
    
}

export default Connection;