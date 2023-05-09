"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.samplePrescriptionTemplate = void 0;
exports.samplePrescriptionTemplate = {
    standardSupplements: [{
            type: { type: String, default: null },
            subType: { type: String, default: null },
            freq: { type: String, default: null },
            week: { type: Number, default: null },
            startDate: { type: Date, default: null },
            endDate: { type: Date, default: null }
        }]
};
