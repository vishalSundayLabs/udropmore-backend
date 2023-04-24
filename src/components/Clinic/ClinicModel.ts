import * as mongoose from "mongoose";

const clinicSchema = new mongoose.Schema({
    clinicName: {
        type: String,
        required: ["clinic name is required", true]
    },
    latitude: {
        type: String,
        required: ["latitude is required", true]
    },
    longitude: {
        type: String,
        required: ["longitude is required", true]
    },
    address: {
        type: String
    },
    googleMapLink: {
        type: String,
        required: ["google map link is required", true]
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId
    }
}, { timestamps: true })

export const ClinicModel = mongoose.model('clinics', clinicSchema)