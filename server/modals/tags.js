const mongoose=require("mongoose")

const tagsSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
course:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Courses"
},
description:{
    type:String
}
    
});

module.exports=mongoose.model("Category",tagsSchema);