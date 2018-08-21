const mongoose=require('mongoose');
const key=require('./../config/keys');


mongoose.connect(key.mongoUrl, { useNewUrlParser: true });


mongoose.connection.on('connect',()=>{
    console.log("mongodb connected sucessfully !")
});

mongoose.connection.on('error',(err)=>{
    console.log(`Error in db connection ${err}`)
});

module.exports=mongoose;