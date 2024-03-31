import mongoose from "mongoose";


const organizationchema = new mongoose.Schema({
    
    name: {
      type: String,
      required: true
    }
    
  },{timestamps:true});


  export default mongoose.model('organization',organizationchema)