const mongoose=require('mongoose');

const SignUp=new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    }
})

const signup=mongoose.model('user',SignUp);

module.exports={signup};