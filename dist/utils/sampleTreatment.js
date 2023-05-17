"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleTreatment = void 0;
exports.sampleTreatment = {
    userId: null,
    doctorId: null,
    treatment: [{
            date: null,
            week: null,
            weekAndDays: null,
            obeservation: {
                examinationFinding: {
                    name: "Examination Finding",
                    value: null
                }
            },
            prescription: null,
            followUp: {
                followUpDate: {
                    name: "Follow Up Date",
                    value: null
                },
                remarksForMother: {
                    name: "Remarks for Mother",
                    value: null
                },
                testName: [
                    { name: "Fetal Monitoring", value: false },
                    { name: "Glucose Test", value: false },
                    { name: "Thyroid Tests", value: false },
                    { name: "Pregnancy Test", value: false },
                    { name: "Urine Test", value: false },
                    { name: "MRI Scan", value: false },
                    { name: "Hepatitis B & C", value: false },
                    { name: "Ultrasound", value: false },
                    { name: "Glucose Tolerance Test", value: false },
                    { name: "Complete Blood Count", value: false }
                ]
            }
        }]
};
