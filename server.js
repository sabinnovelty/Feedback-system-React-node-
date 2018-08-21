const express=require('express');
const bodyParser=require('body-parser');

//dbconnection
const mongoose=require('./db-connection/mongoose.js');

const app=express();


app.use(bodyParser.json());

const routes=require('./routes/appRoutes');

app.use('/api',routes);
// app.get("/api/feedbackSystem",(req,res)=>{
//     res.json({
//         message:"jsd"
//     })
// })


const port=process.env.PORT || 5000;

app.listen(port,()=>{console.log(`server started at ${port}`)})
