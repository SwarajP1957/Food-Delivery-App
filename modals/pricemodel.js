import mongoose from "mongoose";


const pricingSchema = new mongoose.Schema({
    organization_id: 
       [{type:mongoose.Types.ObjectId,ref:'organization'}],
    item_id: [{type:mongoose.Types.ObjectId,ref:'item'}],
    
    zone: {
      type: String,
      required: true
    },
    base_distance_in_km: {
      type: Number,
      required: true
    },
    
    fix_price: {
      type: Number,
      required: true
    }
  },{timestamps:true});


  export default mongoose.model('pricing',pricingSchema)