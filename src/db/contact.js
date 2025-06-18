import { model , Schema } from "mongoose";
import mongoose from "mongoose";

const contactSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    isFavourite:{
        type:Boolean,
        default:false,
    },
    contactType:{
        type:String,
        enum:["Work","Home","Personal"]
    },

},
{timestamps:true}
)

export const Contact = model("Contact",contactSchema)