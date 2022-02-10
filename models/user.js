const mongoose = require("mongoose");

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:3,
        max:20,
        unique:true //might need to make false for debugging purposes
    },
    email:{
        type: String,
        required: true,
        max: 50,
        unique:true //might need to make false for debugging purposes
    },
    password:{
        type:String,
        required:true,
        min:3

    },
    profilePicture:{
        type:String, //might change the type later
        default:"",
        required:false //might get a default and make this true
    },
    coverPicture:{
        type:String, //might change the type later
        default:"",
        required:false
    },
    followers:{
        type: Array,
        default:[]
    },
    following:{
        type: Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default: false
    }
},
{timestamps:true});

module.exports=mongoose.model("User", UserSchema);