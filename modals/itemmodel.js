import mongoose from "mongoose";


const itemschema = new mongoose.Schema({
    
    description: {
      type: String,
      required: true
    },
    type: {
        type: String,
        enum: ["perishable", "non-perishable"],
        required: true
      }
      
    
  },{timestamps:true});


  export default mongoose.model('item',itemschema)