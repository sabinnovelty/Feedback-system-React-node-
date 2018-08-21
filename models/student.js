const mongoosse=require('mongoose');
const Schema=mongoosse.Schema;

let studentSchema=new Schema({
    username:String,
    password:String,
    date:{ type:Date, default:Date.now },
    batch:String,
    year:String,
    part:String
});

module.exports=StudentModel=mongoosse.model("StudentModel",studentSchema);