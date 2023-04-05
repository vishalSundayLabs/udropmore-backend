import * as mongoose from 'mongoose'
import { ITpi } from './TpiInterface'

const tpiResponseSchema = new mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
    },
    apiType : {
        type:String,
        enum:['sendSmsOtp','sendWaOtp']
    },
    requestBody:{
        type:{},
        required:true
    },
    responseBody:{
        type:{},
        required:true
    }
    
},{
    timestamps:true
})

const TpiModel  = mongoose.model<ITpi>('TpiResponse',tpiResponseSchema)

export default TpiModel;
