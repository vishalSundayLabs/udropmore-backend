export const HTTP_OK = 200
export const HTTP_CREATED = 201
export const HTTP_BAD_REQUEST = 400
export const HTTP_UNAUTHORIZED = 403
export const HTTP_NOT_FOUND = 404
export const HTTP_INTERNAL_SERVER_ERROR = 500

// messages start

export const INCORRECT_BODY_FORMAT_MESSAGE = "Body format should be as per the object below"

//messages end

//past history constants (start)

export const whoInFamily = ["Maternal", "Paternal", "Marital", "Sibling"]

export const diseases = ["Diabetes", "Thyroid", "Epilepsy", "Hypertension", "H.D", "Koch", "Cancer", "Asthma"]

export const typeOfTermination = [
    {
        name: 'MTP',
        subTypes: [
            {
                name: 'Pills',
            },
            {
                name: 'Surgical',
            },
            {
                name: 'General',
            },
            {
                name: 'Curating',
            },
        ],
    },
    {
        name: 'Ectopic Pregnancy',
        subTypes: [
            {
                name: 'Left Side',
            },
            {
                name: 'Right Side',
            },
            {
                name: 'Laproscopy Surgery',
            },
            {
                name: 'Medical Management',
            },
            {
                name: 'Laprotomy',
            },
        ],
    },
    {
        name: 'MTP for Abnormalities',
        subTypes: [
            {
                name: 'Medical',
            },
            {
                name: 'Surgical',
            },
        ],
    }
]

export const typeOfAbortion = ["Biochemical Pregnancy", "Blighted Ovum", "Incomplete Abortion", "Missed Abortion"]

export const vaginal = ["Spontaneous", "Induced"]

export const cesareanSection = ["Emergency", "Elective"]

export const liveBirthsDescription = ["PTND Pre Term Vaginal Delivery", "PTVD Pre Term Vaccum Delivery", "PTFD Pre Term Forceps Delivery", "FTND Full Term Vaginal Delivery", "FTVD Full Term Voccum Delivery", "FTFD Full Term Forceps Delivery"]

export const genderOfChild = ["Male", "Female"]

export const pregnancyType = ["Natural", "Assisted"]

export const assisted = ["Self", "Donor"]

export const donor = ["Male", "Female", "Embryo"]

export const flow = ["Average", "Scanty", "Heavy"]

export const natureOfCycle = ["Regular", "Irregular"]

export const sourceOfVisit = ["Self", "Social Media", "Previous Pregnancy"]

export const language = ["English", "Hindi", "Marathi"]

//past history constants (end)