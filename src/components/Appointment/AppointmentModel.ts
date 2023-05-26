import * as mongoose from "mongoose"

const AppointmentSchema = new mongoose.Schema({
    appointmentDateAndTime: {
        type: Date
    },
    appointmentType: {
        type: String,
        enum: ["INPERSON", "VIDEOCALL", "TELECALL"]
    },
    motherId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    clinicId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "clinics"
    },
    status: {
        type: String,
        enum: ["CANCELLED", "INPROGRESS", "CONFIRMED", "COMPLETED", "RESCHEDULED"],
        default: 'CONFIRMED'
    },
    previousAppointmentDate: {
        type: Date
    },
    reason: {
        type: String,
        enum: ["CANCELLED BY DOCTOR", "CANCELLED BY MOTHER", "RESCHEDULED BY DOCTOR", "RESCHEDULED BY MOTHER"]
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model('appointments', AppointmentSchema)