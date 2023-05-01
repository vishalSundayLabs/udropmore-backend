export const sampleTreatment =  {
    userId:null,
    doctorId:null,
    obeservation: [{
       date: null,
        examinationFinding: null
    }],
    prescription: {
        standardSupplements: [{
            name: null,
            /*
              Example name:HM1 (doctor firstname + lastname)
            */
            calcium: [{
                name: null,
                freq: null,
                week: null,
                startDate:null,
                endDate:null
            }],
            iron: [{
                name: null,
                freq: null,
                week: null,
                startDate:null,
                endDate:null
            }],
            folicAcid: [{
                name: null,
                freq: null,
                week: null,
                startDate:null,
                endDate:null
            }]
        }],
        symptomsSupplements: {
            vomitting: [{
                name: null,
                freq: null,
                week: null,
                startDate:null,
                endDate:null
            }],
            iron: [{
                name: null,
                freq: null,
                week: null,
                startDate:null,
                endDate:null
            }],
            acidity: [{
                name: null,
                freq: null,
                week: null,
                startDate:null,
                endDate:null
            }]
        }
    }
}