import * as mongoose from 'mongoose';

const userDetailsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    dateOfBirth: {
        type: String
    },
    address: {
        type: String
    },
    height: {
        type: Number,
        default: 0
    },
    weight: {
        type: Number,
        default: 0
    },
    lastMenstrualDate: {
        type: String
    },
    dueDate: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    occupation: {
        type: String
    },
    education: {
        type: String
    },
    pregnancyWeek: {
        type: String
    },
    husbandDetails: {
        type: Object,
        name: {
            type: String
        },
        age: {
            type: Number
        },
        occupation: {
            type: String
        }
    },
    refBy: {
        type: Object,
        name: {
            type: String
        },
        address: {
            type: String
        }
    },
    previousVisit: {
        type: [String]
    },
    language: {
        type: String
    },
    emergencyMobileNumber: {
        type: String
    },
    emergencyName: {
        type: String
    },
    createdBy:{
        type:mongoose.SchemaTypes.ObjectId
    },
    updatedBy:{
        type:mongoose.SchemaTypes.ObjectId
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
}, { timestamps: true })

export default mongoose.model('UserDetails', userDetailsSchema)



