export const toDoTasksStatus = {
    pending: 'Pending',
    due: 'Due',
    done: 'Done',
};

export const toDoTasksTypes = {
    labTests: 'Lab Tests',
    appointments: 'Appointments',
    followUpAppointments: 'Follow Up Appointments',
};

export const toDoTasks = [
    {
        daysFromLMP: 60,
        tasks: [
            {
                title: 'Blood Tests',
                description:
                    'The initial blood screening test checks for Blood type, Rh factor, hCG levels, STI, Immunity to diseases, Vitamin D deficiency, Blood sugar levels, Genetic risks, for sickle cell anemia, spinal muscular dystrophy(SMA), cystic fibrosis, thalassemia, hemoglobinopathy, and other possible diseases ',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Ultrasound',
                description:
                    'The first ultrasound is done to check the estimated due date, detect the fetal heartbeat, rule out ectopic or tubal pregnancies, detect the number of fetuses ',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Urine tests',
                description: 'A urine test checks for blood sugar levels, protein levels, UTIs',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 87,
        tasks: [
            {
                title: 'Non-Invasive Prenatal Testing (NIPT)',
                description: 'It checks for chromosomal disorders and also detects Rh blood type',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Nuchal translucency screening',
                description:
                    'It is performed between 11 and 13 weeks of pregnancy to determine the risk of Down syndrome',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Chorionic villus sampling (CVS)',
                description: 'It is done to detect birth defects',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 115,
        tasks: [
            {
                title: 'Amniocentesis',
                description: 'It is performed to check for Chromosomal conditions and Neural tube defects',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Quad screen',
                description: 'It is performed to check for Chromosomal conditions and Neural tube defects',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 136,
        tasks: [
            {
                title: 'Fetal blood sampling',
                description: 'It checks for Anemia and blood oxygen levels, Maternal Rh antibodies',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Level 2 ultrasound',
                description:
                    'It is done anytime between 18 and 20 weeks to see how the fetus is developing',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 164,
        tasks: [
            {
                title: 'Glucose screening',
                description: 'This is performed to determine your risk of gestational diabetes',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Glucose tolerance test',
                description: 'It is done in between 26 and 28 weeks to detect gestational diabetes',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 193,
        tasks: [
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },

    {
        daysFromLMP: 213,
        tasks: [
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 227,
        tasks: [
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 241,
        tasks: [
            {
                title: 'Biophysical profile',
                description:
                    'It determines the risk of some possible complications and also decides if it is the time for delivery.',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 248,
        tasks: [
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 255,
        tasks: [
            {
                title: 'Group B strep test',
                description: 'It is usually done to screen for group B streptococcus bacteria',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.labTests,
            },
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 262,
        tasks: [
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
    {
        daysFromLMP: 269,
        tasks: [
            {
                title: 'Appointment',
                status: toDoTasksStatus.pending,
                taskType: toDoTasksTypes.appointments,
            },
        ],
    },
];