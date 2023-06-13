"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchLeapContent = exports.deleteBookmarkedArticles = exports.updateBookmarkedArticles = exports.getBookmarkedArticles = exports.getCurrentMedications = exports.getPastHistoryMasterConstant = exports.getWeightByBmi = exports.getUserDetailsbyId = exports.updateUserDetails = exports.createUserDetails = void 0;
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const Master_1 = require("../../Constant/Master");
const ResponseClass_1 = require("../../utils/ResponseClass");
const Master_2 = require("../../Constant/Master");
const UserModel_1 = require("../Users/UserModel");
const UserDetailsModel_1 = require("./UserDetailsModel");
const WeightChart_1 = require("../../Constant/WeightChart");
const calculateCurrentWeekHelper_1 = require("../../helpers/calculateCurrentWeekHelper");
const pagination_1 = require("../../helpers/pagination");
const CMSModel_1 = require("../CMS/CMSModel");
const createUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Mother id must be provide."
        }));
    }
    const reqData = {
        userId: body.motherId,
        dateOfBirth: body.dateOfBirth,
        address: body.address,
        height: body.height,
        weight: body.weight,
        lastMenstrualDate: body.lastMenstrualDate,
        dueDate: body.dueDate,
        maritalStatus: body.maritalStatus,
        occupation: body.occupation,
        education: body.education,
        pregnancyWeek: body.pregnancyWeek,
        husbandDetails: body.husbandDetails,
        refBy: body.refBy,
        previousVisit: body.previousVisit,
        language: body.language,
        emergencyMobileNumber: body.emergencyMobileNumber,
        emergencyName: body.emergencyName,
        createdBy: req.userId,
    };
    try {
        const userDetails = yield UserDetailsModel_1.default.create(reqData);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User details create successfully.",
            result: userDetails
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.createUserDetails = createUserDetails;
const updateUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Mother id must be provide."
        }));
    }
    try {
        const userDetails = yield UserDetailsModel_1.default.findOne({ userId: body.motherId, isDeleted: false });
        const user = yield UserModel_1.default.findOne({ _id: userDetails.userId, isActive: true, isDeleted: false });
        //add feilds for update in user model
        user.firstName = body.firstName ? body.firstName : user.firstName;
        user.lastName = body.lastName ? body.lastName : user.lastName;
        user.email = body.email ? body.email : user.email;
        user.updatedBy = req.userId;
        yield user.save();
        if (!userDetails) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "user details not found."
            }));
        }
        //this is not deployed yet
        // const pastHistoryData = await PastHistoryModel.findOne({ userId: body.motherId, isDeleted: false })
        // if (!pastHistoryData) {
        //     return res.status(HTTP_NOT_FOUND).send(new ResponseError({
        //         success: false,
        //         message: "Past history data not found!"
        //     }))
        // }
        // pastHistoryData.pastHistory = userDetails.pastHistory
        // await pastHistoryData.save()
        //not deploy
        (0, bodyTraverse_1.bodyTraverse)(userDetails, body);
        userDetails.updatedBy = req.userId;
        yield userDetails.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User details update successfully.",
            result: { userDetails, firstName: user.firstName, lastName: user.lastName, email: user.email }
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.updateUserDetails = updateUserDetails;
const getUserDetailsbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.motherId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Mother id must be provide."
        }));
    }
    try {
        const userDetails = yield UserDetailsModel_1.default.findOne({ userId: params.motherId, isDeleted: false });
        const user = yield UserModel_1.default.findOne({ _id: userDetails.userId, isActive: true, isDeleted: false });
        if (!userDetails) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "user details not found."
            }));
        }
        //this is not deployed yet
        // const pastHistoryData = await PastHistoryModel.findOne({ userId: params.motherId, isDeleted: false })
        // if (!pastHistoryData) {
        //     return res.status(HTTP_NOT_FOUND).send(new ResponseError({
        //         success: false,
        //         message: "Past history data not found!"
        //     }))
        // }
        // userDetails.pastHisory = pastHistoryData.pastHistory ? pastHistoryData.pastHistory : []
        //not deploy
        const currentWeek = (0, calculateCurrentWeekHelper_1.calculateCurrentWeekAndDays)(userDetails.lastMenstrualDate);
        userDetails.pregnancyWeek = currentWeek.week;
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get User details successfully.",
            result: { userDetails, firstName: user.firstName, lastName: user.lastName, email: user.email, mappedDoctorId: user.mappedDoctor, mappedClinicId: user.mappedClinic }
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getUserDetailsbyId = getUserDetailsbyId;
const getWeightByBmi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const params = req.params;
    if (!params.motherId || !query.bmi) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Mother id or BMI must be provide."
        }));
    }
    try {
        const motherWeightGainChart = yield UserDetailsModel_1.default.findOne({ userId: params.motherId }, { weightGainChart: true, weightRangeRecommendedByDoctor: true });
        if (!motherWeightGainChart) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: true,
                message: "Weight gain chart not found!"
            }));
        }
        for (let i = 0; i < motherWeightGainChart.weightGainChart.length; i++) {
            const weightKey = motherWeightGainChart.weightGainChart[i].week;
            motherWeightGainChart.weightGainChart[i].babyWeight.value = WeightChart_1.babyWeights[weightKey].babyWeight.value;
        }
        let weightRangeUsingBmi = null;
        if (!motherWeightGainChart.weightRangeRecommendedByDoctor || !motherWeightGainChart.weightRangeRecommendedByDoctor.length) {
            weightRangeUsingBmi = (0, WeightChart_1.weightRange)(Number(query.bmi));
        }
        else {
            weightRangeUsingBmi = motherWeightGainChart.weightRangeRecommendedByDoctor;
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get weight data successfully.",
            result: { item: motherWeightGainChart.weightGainChart, weightGainRange: weightRangeUsingBmi }
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getWeightByBmi = getWeightByBmi;
const getPastHistoryMasterConstant = (req, res) => {
    return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
        success: true,
        message: "get Constant successfully.",
        result: {
            whoInFamily: Master_2.whoInFamily,
            diseases: Master_2.diseases,
            typeOfTermination: Master_2.typeOfTermination,
            typeOfAbortion: Master_2.typeOfAbortion,
            typeOfDelivery: Master_2.typeOfDelivery,
            liveBirthsDescription: Master_2.liveBirthsDescription,
            genderOfChild: Master_2.genderOfChild,
            pregnancyType: Master_2.pregnancyType,
            assisted: Master_2.assisted,
            donor: Master_2.donor,
            flow: Master_2.flow,
            natureOfCycle: Master_2.natureOfCycle,
            sourceOfVisit: Master_2.sourceOfVisit,
            language: Master_2.language,
            item: Master_2.medicines
        }
    }));
};
exports.getPastHistoryMasterConstant = getPastHistoryMasterConstant;
const getCurrentMedications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.motherId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Mother id or BMI must be provide."
        }));
    }
    try {
        const currentMedicationsData = yield UserDetailsModel_1.default.findOne({ userId: params.motherId, isDeleted: false }, { pastHistory: true });
        console.log(currentMedicationsData);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get currentMedications successfully.",
            result: currentMedicationsData.pastHistory.currentPregnancy.currentMedications
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getCurrentMedications = getCurrentMedications;
//articles related controllers
const getBookmarkedArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    try {
        const bookmarkedData = yield UserDetailsModel_1.default.findOne({ userId: params.motherId, isDeleted: false }).select({ bookmarkedArticles: true });
        if (bookmarkedData.bookmarkedArticles.length == 0) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Bookmark articles not found!"
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Bookmark articles get successfully",
            result: bookmarkedData.bookmarkedArticles
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getBookmarkedArticles = getBookmarkedArticles;
const updateBookmarkedArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const body = req.body;
    if (!body.articleData) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Data must be provide for update."
        }));
    }
    try {
        const bookmarkedData = yield UserDetailsModel_1.default.findOne({ userId: params.motherId, isDeleted: false });
        if (bookmarkedData.bookmarkedArticles.length == 0) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Bookmark articles not found!"
            }));
        }
        bookmarkedData.bookmarkedArticles.push(body.articleData);
        yield bookmarkedData.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Bookmark articles save successfully",
            result: bookmarkedData.bookmarkedArticles
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.updateBookmarkedArticles = updateBookmarkedArticles;
const deleteBookmarkedArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const body = req.body;
    try {
        let bookmarkedData = yield UserDetailsModel_1.default.findOne({ userId: params.motherId, isDeleted: false }, { bookmarkedArticles: true });
        if (bookmarkedData.bookmarkedArticles.length == 0) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Bookmark articles not found!"
            }));
        }
        bookmarkedData.bookmarkedArticles = bookmarkedData.bookmarkedArticles.filter((item, index) => index != body.articleIndex);
        yield bookmarkedData.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Bookmark articles delete successfully",
            result: bookmarkedData.bookmarkedArticles
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.deleteBookmarkedArticles = deleteBookmarkedArticles;
const searchLeapContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const { limit, skips } = (0, pagination_1.pagination)(query);
    query.isDeleted = false;
    try {
        let weeklyContent = yield CMSModel_1.default.find({ category: "LEAP" });
        if (weeklyContent.length == 0) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Weekly data not found!"
            }));
        }
        weeklyContent = yield weeklyContent.filter((item) => {
            if (item.data.title != null && item.data.title.toLowerCase().match(query.title.toLowerCase())) {
                return item;
            }
        });
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Search Weekly data successfully .",
            result: weeklyContent
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.searchLeapContent = searchLeapContent;
const Data = [
    {
        "data": {
            "featureMedia": {
                "images": {
                    "hero": null,
                    "thumbnail": null
                },
                "image": null,
                "video": null
            },
            "sections": [
                {
                    "fields": [
                        {
                            "type": "PARAGRAPH",
                            "value": "If you have access to prenatal exercise classes, sign up. Not only are the workouts modified for pregnancy, but you also get to bond with your fellow moms-to-be over charming symptoms such as heartburn, swollen feet, and hemorrhoids. You might even get labor tips. "
                        },
                        {
                            "type": "PARAGRAPH",
                            "value": "If your favorite classes don't come in the prenatal variety, it's fine to keep going, as long as you pay attention to how your body feels, limit your intensity, and stay within the normal range of motion. Just make sure the instructor knows you're pregnant and is knowledgeable about modifications you can make, Jeffreys advises. Also, if your instructor hasn't worked with pregnant women, find one who has."
                        },
                        {
                            "fields": [
                                {
                                    "type": "PARAGRAPH",
                                    "value": "Pilates helps maintain your abdominal muscle tone, which will support your growing belly, minimize back pain, and give you more oomph for pushing during labor. But mat classes can be problematic after the first trimester because so much work is done lying on your back.  Either opt out of these exercises or use an angled foam spine support (found in most Pilates studios but not many gyms); this will keep your head higher than your belly. You can still do the side-lying leg work, upper-body exercises, and stretches. "
                                }
                            ],
                            "title": "PILATES ",
                            "type": "SECTION"
                        },
                        {
                            "fields": [
                                {
                                    "type": "PARAGRAPH",
                                    "value": "Prenatal yoga not only strengthens your core and improves flexibility, but with its gentle movements and emphasis on breathing and meditation, it also fosters a sense of calm. In the second half of your pregnancy, avoid exaggerated twists and movements that tug on your belly, moves that require you to lie on your back or belly for prolonged periods, and inversions like headstands and shoulder stands. "
                                }
                            ],
                            "title": "YOGA ",
                            "type": "SECTION"
                        },
                        {
                            "fields": [
                                {
                                    "type": "PARAGRAPH",
                                    "value": "You can't trip and fall; you won't overheat; and for once you won't feel like a big clod. No wonder water aerobics is a third trimester favorite. Your joints will thank you! Wear aqua shoes so you don't slip on the bottom of the pool. "
                                }
                            ],
                            "title": "WATER AEROBICS ",
                            "type": "SECTION"
                        },
                        {
                            "fields": [
                                {
                                    "type": "PARAGRAPH",
                                    "value": "Worried that resistance (strength) exercises will cause joint injury? It's true that pregnancy floods your system with relaxin, a hormone that loosens ligaments to prepare your body for delivery. But a 2011 University of Georgia study found that a low-to-moderate-intensity strength program is safe, even for novices. \"The relaxin risk is largely theoretical,\" says study co-author Patrick O'Connor, Ph.D. Though the study mostly involved machines, free weights and body-weight exercises such as push-ups and squats are safe, too. (No, squatting won't trigger labor.) O'Connor notes that the women were supervised and recommends that anyone who is new to weight training should be as well or consult videos to learn proper technique. "
                                },
                                {
                                    "type": "PARAGRAPH",
                                    "value": "If you want to train your core, know that doing crunches (or other exercises) on your back is a no-no after the first trimester: Your growing uterus can compress the vena cava, the major vessel that returns blood to your heart, potentially reducing blood flow and making you feel dizzy or nauseated. O'Connor's study included an ab exercise performed while standing: The women exhaled and then drew in their navel toward their spine \"as if they were trying to button up pants that were too tight in the waist,\" he says. "
                                }
                            ],
                            "title": "STRENGTH EXERCISES ",
                            "type": "SECTION"
                        },
                        {
                            "fields": [
                                {
                                    "type": "PARAGRAPH",
                                    "value": "When it comes to cardio exercise, Fit to Deliver co-authors Karen Nordahl, M.D., an Ob-Gyn in Vancouver, British Columbia, and Renee Jeffreys have a rule of thumb: \"If you were really active before pregnancy, stay really active. If you weren't, now is a good time to become active.\" For beginners, Nordahl recommends 30 minutes of walking three days a week.  "
                                },
                                {
                                    "type": "PARAGRAPH",
                                    "value": "Here’s the lowdown on cardio machines for exercise during pregnancy:  "
                                },
                                {
                                    "type": "LIST",
                                    "values": [
                                        "Treadmill: Walking on the treadmill is ideal since you can control the terrain. Add moderate hills when you're up to it; go flat when you're not or if hills trigger calf cramps. If you're a runner, let your body tell you when it's time to switch to walking; nearly everyone does. And don't worry about \"shaking your baby loose,\" since she's plenty safe swimming around in amniotic fluid while you jog at the park. ",
                                        "Elliptical:  The elliptical trainer places little stress on your joints. However, the motion may feel uncomfortable if you're experiencing symphysis pubic dysfunction (SPD), a pain in the front of your crotch. ",
                                        "Stationary bike: The recumbent and upright bikes are both good options. Many women like the back support the recumbent offers, though in the third trimester your belly might get in the way of your knees.  "
                                    ],
                                    "variant": "NUMBER"
                                }
                            ],
                            "title": "CARDIO ",
                            "type": "SECTION"
                        },
                        {
                            "fields": [
                                {
                                    "type": "PARAGRAPH",
                                    "value": "During pregnancy you'll need to scale back on the intensity. Gauge your intensity using the Rate of Perceived Exertion (RPE) scale from 0 to 10: Aim for an intensity between 3 and 5 (you should be able to talk but not belt out show tunes).  "
                                },
                                {
                                    "type": "PARAGRAPH",
                                    "value": "Ignore heart-rate readouts on the cardio machines; since your blood volume increases during pregnancy, and your resting heart rate is considerably higher than normal, heart rate isn't an accurate gauge of intensity. "
                                }
                            ],
                            "title": "INTENSITY ",
                            "type": "SECTION"
                        },
                        {
                            "fields": [
                                {
                                    "type": "PARAGRAPH",
                                    "value": "While there are some things to avoid, such as scuba diving, horseback riding, or any contact sport that could cause blunt-force trauma to the abdomen, there's relatively little that pregnant women can't do. Even the longstanding prohibition against exercising on your back is somewhat of a myth, Dr. Young says. It's true that lying flat on your back late in your pregnancy can cause your growing uterus to push down on the veins whose job it is to deliver blood, leading to decreased blood flow. \"Blood can get shunted away from the uterus, and you might feel light-headed,\" Dr. Young says. But performing exercises on your back for a short period (such as a series of Pilates moves) is not likely to do any harm, and you would feel uncomfortable long before your blood flow was compromised, he explains. "
                                }
                            ],
                            "title": "EXERCISES TO AVOID ",
                            "type": "SECTION"
                        }
                    ]
                }
            ],
            "title": "Best Exercises During Pregnancy"
        },
        "metadata": {
            "sequence": null
        },
        "category": "WEEK",
        "subtype": "PHYSICAL_FITNESS",
        "tags": [
            "WEEK",
            "PHYSICAL FITNESS"
        ],
        "trimesters": [
            1,
            2
        ],
        "type": "MOTHER",
        "weeks": [
            5,
            23,
            11
        ],
        "isDeleted": false,
        "_id": "6457cb8d142fc20fa7c9dea4",
        "createdAt": "2023-05-07T16:02:21.206Z",
        "updatedAt": "2023-05-07T16:18:11.168Z",
        "__v": 4
    },
    {
        "data": {
            "featureMedia": {
                "images": {
                    "hero": null,
                    "thumbnail": null
                },
                "image": "https://dev-experts-webapp.s3.ap-south-1.amazonaws.com/Content/646cac3d4dd4ff02ab6815a7/1684925392908.jpeg",
                "video": "https://dev-experts-webapp.s3.ap-south-1.amazonaws.com/Content/3/1685083960456.mp4"
            },
            "sections": [
                {
                    "title": "title updating",
                    "fields": [
                        {
                            "type": "PARAGRAPH",
                            "value": "this is ofr tesitjnbfj"
                        }
                    ]
                }
            ],
            "title": "etsws8888"
        },
        "metadata": {
            "sequence": "1"
        },
        "category": "WEEK",
        "subtype": "ANATOMY",
        "tags": [],
        "trimesters": [
            1
        ],
        "type": "MOTHER",
        "weeks": [
            3
        ],
        "isDeleted": false,
        "_id": "646cac3d4dd4ff02ab6815a7",
        "createdAt": "2023-05-23T12:06:21.576Z",
        "updatedAt": "2023-05-26T11:47:01.554Z",
        "__v": 0
    },
    {
        "data": {
            "featureMedia": {
                "images": {
                    "hero": null,
                    "thumbnail": null
                },
                "image": null,
                "video": null
            },
            "sections": [],
            "title": null
        },
        "metadata": {
            "sequence": null
        },
        "category": "WEEK",
        "subtype": "EMOTION",
        "tags": [],
        "trimesters": [
            1
        ],
        "type": "MOTHER",
        "weeks": [
            2
        ],
        "isDeleted": false,
        "_id": "646cc5a6a6ddae047b02e713",
        "createdAt": "2023-05-23T13:54:46.211Z",
        "updatedAt": "2023-05-23T13:54:46.211Z",
        "__v": 0
    },
    {
        "data": {
            "featureMedia": {
                "images": {
                    "hero": null,
                    "thumbnail": null
                },
                "image": null,
                "video": null
            },
            "sections": [],
            "title": null
        },
        "metadata": {
            "sequence": null
        },
        "category": "WEEK",
        "subtype": "IMMUNE",
        "tags": [],
        "trimesters": [
            1
        ],
        "type": "BABY",
        "weeks": [
            5
        ],
        "isDeleted": false,
        "_id": "646d9a10a6ddae047b02e71f",
        "createdAt": "2023-05-24T05:01:04.309Z",
        "updatedAt": "2023-05-24T05:01:04.309Z",
        "__v": 0
    },
    {
        "data": {
            "featureMedia": {
                "images": {
                    "hero": null,
                    "thumbnail": null
                },
                "image": null,
                "video": null
            },
            "sections": [],
            "title": null
        },
        "metadata": {
            "sequence": null
        },
        "category": "WEEK",
        "subtype": "COGNITIVE",
        "tags": [],
        "trimesters": [
            1
        ],
        "type": "BABY",
        "weeks": [
            4
        ],
        "isDeleted": false,
        "_id": "646daa6b1078100e7a2ab5be",
        "createdAt": "2023-05-24T06:10:51.039Z",
        "updatedAt": "2023-05-24T06:10:51.039Z",
        "__v": 0
    },
    {
        "data": {
            "featureMedia": {
                "images": {
                    "hero": null,
                    "thumbnail": null
                },
                "image": "https://dev-experts-webapp.s3.ap-south-1.amazonaws.com/Content/3/1685102815210.png",
                "video": "https://dev-experts-webapp.s3.ap-south-1.amazonaws.com/Content/3/1685102823846.mp4"
            },
            "sections": [],
            "title": null
        },
        "metadata": {
            "sequence": null
        },
        "category": "WEEK",
        "subtype": "ANATOMY",
        "tags": [],
        "trimesters": [
            1
        ],
        "type": "MOTHER",
        "weeks": [
            3
        ],
        "isDeleted": false,
        "_id": "6470a0f4ac399949bc8ee760",
        "createdAt": "2023-05-26T12:07:16.890Z",
        "updatedAt": "2023-05-26T12:07:16.890Z",
        "__v": 0
    },
    {
        "data": {
            "featureMedia": {
                "images": {
                    "hero": null,
                    "thumbnail": null
                },
                "image": "https://dev-experts-webapp.s3.ap-south-1.amazonaws.com/Content/4/1685869626549.jpeg",
                "video": null
            },
            "sections": [
                {
                    "title": "this is for testing ",
                    "fields": [
                        {
                            "type": "PARAGRAPH",
                            "value": "paragraph test"
                        },
                        {
                            "type": "LIST",
                            "variant": "NUMBER",
                            "values": [
                                "l",
                                "i",
                                "s",
                                "t",
                                " ",
                                "t",
                                "e",
                                "s",
                                "t"
                            ]
                        },
                        {
                            "type": "PARAGRAPH",
                            "value": "para second testing"
                        }
                    ]
                }
            ],
            "title": "testing"
        },
        "metadata": {
            "sequence": "1"
        },
        "category": "WEEK",
        "subtype": "LIFESTYLE",
        "tags": [],
        "trimesters": [
            1
        ],
        "type": "MOTHER",
        "weeks": [
            4
        ],
        "isDeleted": false,
        "_id": "647c547cbe0b85c01ea8bd03",
        "createdAt": "2023-06-04T09:08:12.941Z",
        "updatedAt": "2023-06-04T09:08:12.941Z",
        "__v": 0
    },
    {
        "data": {
            "featureMedia": {
                "images": {
                    "hero": null,
                    "thumbnail": null
                },
                "image": "https://dev-experts-webapp.s3.ap-south-1.amazonaws.com/Content/3/1686052902374.png",
                "video": null
            },
            "sections": [
                {
                    "title": "lifestyle title"
                }
            ],
            "title": "hello mother"
        },
        "metadata": {
            "sequence": "2"
        },
        "category": "WEEK",
        "subtype": "LIFESTYLE",
        "tags": [],
        "trimesters": [
            1
        ],
        "type": "MOTHER",
        "weeks": [
            3
        ],
        "isDeleted": false,
        "_id": "647f2038be0b85c01ea8c329",
        "createdAt": "2023-06-06T12:02:00.627Z",
        "updatedAt": "2023-06-06T12:02:00.627Z",
        "__v": 0
    },
    {
        "data": {
            "featureMedia": {
                "images": {
                    "hero": null,
                    "thumbnail": null
                },
                "image": null,
                "video": "https://dev-experts-webapp.s3.ap-south-1.amazonaws.com/Content/3/1686052972394.mov"
            },
            "sections": [],
            "title": "video "
        },
        "metadata": {
            "sequence": "1"
        },
        "category": "WEEK",
        "subtype": "SUMMARY",
        "tags": [],
        "trimesters": [
            1
        ],
        "type": "MOTHER",
        "weeks": [
            3
        ],
        "isDeleted": false,
        "_id": "647f206ebe0b85c01ea8c32d",
        "createdAt": "2023-06-06T12:02:54.348Z",
        "updatedAt": "2023-06-06T12:02:54.348Z",
        "__v": 0
    }
];
