"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoTasks = exports.toDoTasksTypes = exports.toDoTasksStatus = void 0;
exports.toDoTasksStatus = {
    pending: 'Pending',
    due: 'Due',
    done: 'Done',
};
exports.toDoTasksTypes = {
    labTests: 'Lab Tests',
    appointments: 'Appointments',
    followUpAppointments: 'Follow Up Appointments',
};
exports.toDoTasks = [
    {
        daysFromLMP: 60,
        tasks: [
            {
                title: 'Blood Tests',
                description: 'The initial blood screening test checks for Blood type, Rh factor, hCG levels, STI, Immunity to diseases, Vitamin D deficiency, Blood sugar levels, Genetic risks, for sickle cell anemia, spinal muscular dystrophy(SMA), cystic fibrosis, thalassemia, hemoglobinopathy, and other possible diseases ',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Ultrasound',
                description: 'The first ultrasound is done to check the estimated due date, detect the fetal heartbeat, rule out ectopic or tubal pregnancies, detect the number of fetuses ',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Urine tests',
                description: 'A urine test checks for blood sugar levels, protein levels, UTIs',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 87,
        tasks: [
            {
                title: 'Non-Invasive Prenatal Testing (NIPT)',
                description: 'It checks for chromosomal disorders and also detects Rh blood type',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Nuchal translucency screening',
                description: 'It is performed between 11 and 13 weeks of pregnancy to determine the risk of Down syndrome',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Chorionic villus sampling (CVS)',
                description: 'It is done to detect birth defects',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 115,
        tasks: [
            {
                title: 'Amniocentesis',
                description: 'It is performed to check for Chromosomal conditions and Neural tube defects',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Quad screen',
                description: 'It is performed to check for Chromosomal conditions and Neural tube defects',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 136,
        tasks: [
            {
                title: 'Fetal blood sampling',
                description: 'It checks for Anemia and blood oxygen levels, Maternal Rh antibodies',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Level 2 ultrasound',
                description: 'It is done anytime between 18 and 20 weeks to see how the fetus is developing',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 164,
        tasks: [
            {
                title: 'Glucose screening',
                description: 'This is performed to determine your risk of gestational diabetes',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Glucose tolerance test',
                description: 'It is done in between 26 and 28 weeks to detect gestational diabetes',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 193,
        tasks: [
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 213,
        tasks: [
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 227,
        tasks: [
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 241,
        tasks: [
            {
                title: 'Biophysical profile',
                description: 'It determines the risk of some possible complications and also decides if it is the time for delivery.',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 248,
        tasks: [
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 255,
        tasks: [
            {
                title: 'Group B strep test',
                description: 'It is usually done to screen for group B streptococcus bacteria',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.labTests,
                testUrl: null
            },
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 262,
        tasks: [
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 269,
        tasks: [
            {
                title: 'Appointment',
                status: exports.toDoTasksStatus.pending,
                taskType: exports.toDoTasksTypes.appointments,
            },
        ],
    },
];
