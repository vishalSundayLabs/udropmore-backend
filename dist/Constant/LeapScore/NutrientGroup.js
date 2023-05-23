"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutrientGroups = void 0;
const Food_1 = require("../../Constant/LeapScore/Food");
exports.NutrientGroups = {
    vitaminC: {
        name: "Vitamin C",
        veg: [
            {
                food: Food_1.getFood.guava,
                dv: "254%"
            },
            {
                food: Food_1.getFood.kiwi,
                dv: "185%"
            },
            {
                food: Food_1.getFood.bellPappers,
                dv: "169%"
            },
            {
                food: Food_1.getFood.strawberries,
                dv: "108%"
            },
            {
                food: Food_1.getFood.oranges,
                dv: "106%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.papaya,
                dv: "98%"
            },
            {
                food: Food_1.getFood.broccoli,
                dv: "90%"
            },
            {
                food: Food_1.getFood.tomatoes,
                dv: "61%"
            }
        ]
    },
    vitaminA: {
        name: "Vitamin A",
        veg: [
            {
                food: Food_1.getFood.carrots,
                dv: "148%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "122%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "105%"
            },
            {
                food: Food_1.getFood.muskMelon,
                dv: "33%"
            },
            {
                food: Food_1.getFood.lettuce,
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.redBellPappers,
                dv: "22%"
            },
            {
                food: Food_1.getFood.brocolli,
                dv: "13%"
            },
            {
                food: Food_1.getFood.driedApricots,
                dv: "20%"
            }
        ]
    },
    betaCarotene: {
        type: "Beta-carotene",
        veg: [
            {
                food: Food_1.getFood.carrots,
                dv: "120%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "213%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "105%"
            },
            {
                food: Food_1.getFood.muskMelon,
                dv: "33%"
            },
            {
                food: Food_1.getFood.lettuce,
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.redBellPappers,
                dv: "22%"
            },
            {
                food: Food_1.getFood.brocolli,
                dv: "13%"
            },
            {
                food: Food_1.getFood.driedApricots,
                dv: "20%"
            }
        ]
    },
    vitaminB1Thiamin: {
        type: "Vitamin B1 Thiamin",
        veg: [
            {
                food: Food_1.getFood.flaxSeeds,
                dv: "39%"
            },
            {
                food: Food_1.getFood.greenPeas,
                dv: "35%"
            },
            {
                food: Food_1.getFood.paneer,
                dv: "33%"
            },
            {
                food: Food_1.getFood.brownRice,
                dv: "30%"
            },
            {
                food: Food_1.getFood.asparagus,
                dv: "24%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.porkChops,
                dv: "96%"
            },
            {
                food: Food_1.getFood.fishSalmon,
                dv: "48%"
            },
            {
                food: Food_1.getFood.mussels,
                dv: "21%"
            }
        ]
    },
    vitaminB2Riboflavin: {
        type: "Vitamin B2 Riboflavin",
        veg: [
            {
                food: Food_1.getFood.milk,
                dv: "69%"
            },
            {
                food: Food_1.getFood.mushrooms,
                dv: "38%"
            },
            {
                food: Food_1.getFood.paneer,
                dv: "76%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "33%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "25%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.beef,
                dv: "112%"
            },
            {
                food: Food_1.getFood.fishSalmon,
                dv: "64%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "36%"
            },
            {
                food: Food_1.getFood.leanRoastHam,
                dv: "36%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "20%"
            }
        ]
    },
    vitaminB3Niacin: {
        type: "Vitamin B3 Niacin",
        veg: [
            {
                food: Food_1.getFood.brownRice,
                dv: "32%"
            },
            {
                food: Food_1.getFood.mushrooms,
                dv: "47%"
            },
            {
                food: Food_1.getFood.peanuts,
                dv: "25%"
            },
            {
                food: Food_1.getFood.greenPeas,
                dv: "33%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.chickenBreast,
                dv: "100%"
            },
            {
                food: Food_1.getFood.fishSalmon,
                dv: "108%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "85%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "60%"
            }
        ]
    },
    vitaminB5Pantothenic: {
        type: "Vitamin B5 Pantothenic",
        veg: [
            {
                food: Food_1.getFood.milk,
                dv: "36%"
            },
            {
                food: Food_1.getFood.mushrooms,
                dv: "38%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "40%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "25%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "26%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "25%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.chickenBreast,
                dv: "54%"
            },
            {
                food: Food_1.getFood.fishSalmon,
                dv: "65%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "34%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "45%"
            }
        ]
    },
    vitaminB6: {
        type: "Vitamin B6",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "66%"
            },
            {
                food: Food_1.getFood.potatoes,
                dv: "32%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "40%"
            },
            {
                food: Food_1.getFood.bananas,
                dv: "32%"
            },
            {
                food: Food_1.getFood.pistachio,
                dv: "28%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.chickenBreast,
                dv: "92%"
            },
            {
                food: Food_1.getFood.fishSalmon,
                dv: "94%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "54%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "48%"
            }
        ]
    },
    vitaminB9Folate: {
        type: "Vitamin B9 Folate",
        veg: [
            {
                food: Food_1.getFood.edamame,
                dv: "121%"
            },
            {
                food: Food_1.getFood.asparagus,
                dv: "67%"
            },
            {
                food: Food_1.getFood.lettuce,
                dv: "16%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "36%"
            },
            {
                food: Food_1.getFood.brocolli,
                dv: "42%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "26%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "90%"
            },
            {
                food: Food_1.getFood.mangose,
                dv: "28%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.oranges,
                dv: "14%"
            }
        ]
    },
    vitaminB12: {
        type: "Vitamin B12",
        veg: [
            {
                food: Food_1.getFood.allBranWheatFlaks,
                dv: "325%"
            },
            {
                food: Food_1.getFood.paneer,
                dv: "137%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "108%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.paneer,
                dv: "137%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "108%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "23%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "533%"
            },
            {
                food: Food_1.getFood.crab,
                dv: "642%"
            },
            {
                food: Food_1.getFood.clams,
                dv: "3502%"
            }
        ]
    },
    choline: {
        type: "Choline",
        veg: [
            {
                food: Food_1.getFood.milk,
                dv: "15%"
            },
            {
                food: Food_1.getFood.broccoli,
                dv: "11%"
            },
            {
                food: Food_1.getFood.greenPeas,
                dv: "9%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.chickenBreast,
                dv: "36%"
            },
            {
                food: Food_1.getFood.fishSalmon,
                dv: "35%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "28%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "27"
            },
            {
                food: Food_1.getFood.beef,
                dv: "24%"
            },
            {
                food: Food_1.getFood.shrimps,
                dv: "21%"
            }
        ]
    },
    vitaminE: {
        type: "Vitamin E",
        veg: [
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "49%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "49%"
            },
            {
                food: Food_1.getFood.peanuts,
                dv: "9%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "25%"
            },
            {
                food: Food_1.getFood.kiwi,
                dv: "18%"
            },
            {
                food: Food_1.getFood.broccoli,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.shrimps,
                dv: "12%"
            }
        ]
    },
    vitaminK: {
        type: "Vitamin K",
        veg: [
            {
                food: Food_1.getFood.cabbage,
                dv: "136%"
            },
            {
                food: Food_1.getFood.asparagus,
                dv: "76%"
            },
            {
                food: Food_1.getFood.brusselSprouts,
                dv: "182%"
            },
            {
                food: Food_1.getFood.broccoli,
                dv: "183%"
            },
            {
                food: Food_1.getFood.kiwi,
                dv: "60%"
            },
            {
                food: Food_1.getFood.ladyFinger,
                dv: "53%"
            },
            {
                food: Food_1.getFood.lettuce,
                dv: "47%"
            }
        ],
        nonVeg: []
    },
    magnesium: {
        type: "Magnesium",
        veg: [
            {
                food: Food_1.getFood.cookedSpinach,
                dv: "37%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "37%"
            },
            {
                food: Food_1.getFood.brownRice,
                dv: "20%"
            },
            {
                food: Food_1.getFood.quinoa,
                dv: "28%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "11%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                dv: "27%"
            },
            {
                food: Food_1.getFood.cashews,
                dv: "20%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "18%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.bananas,
                dv: "10%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "47%"
            },
            {
                food: Food_1.getFood.cashews,
                dv: "20%"
            },
            {
                food: Food_1.getFood.walnuts,
                dv: "12%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "12%"
            }
        ]
    },
    selenium: {
        type: "Selenium",
        veg: [
            {
                food: Food_1.getFood.brazilNuts,
                dv: "990%"
            },
            {
                food: Food_1.getFood.paneer,
                dv: "80%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "23%"
            },
            {
                food: Food_1.getFood.brownRice,
                dv: "21%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "41%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                dv: "29%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                dv: "13%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.oysters,
                dv: "334%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "147%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "111%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "99%"
            },
            {
                food: Food_1.getFood.shrimps,
                dv: "77%"
            }
        ]
    },
    zinc: {
        type: "Zinc",
        veg: [
            {
                food: Food_1.getFood.cookedSpinach,
                dv: "12%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "27%"
            },
            {
                food: Food_1.getFood.cashews,
                dv: "14%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "21%"
            },
            {
                food: Food_1.getFood.chickpeas,
                dv: "23%"
            },
            {
                food: Food_1.getFood.paneer,
                dv: "36%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "23%"
            },
            {
                food: Food_1.getFood.cerealKalloggsSmartStartStrong,
                dv: "136%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.oysters,
                dv: "93%"
            },
            {
                food: Food_1.getFood.clams,
                dv: "47%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "52%"
            },
            {
                food: Food_1.getFood.chicken,
                dv: "49%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "32%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "22%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "16%"
            }
        ]
    },
    iron: {
        type: "Iron",
        veg: [
            {
                food: Food_1.getFood.allBranWheatFlaks,
                dv: "109%"
            },
            {
                food: Food_1.getFood.apricots,
                dv: "42%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "36%"
            },
            {
                food: Food_1.getFood.quinoa,
                dv: "15%"
            },
            {
                food: Food_1.getFood.mushrooms,
                dv: "15%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "14%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.oysters,
                dv: "43%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "52%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                dv: "12%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                dv: "14%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "13%"
            }
        ]
    },
    lycopene: {
        type: "Lycopene",
        veg: [
            {
                food: Food_1.getFood.guava,
                dv: "6000%"
            },
            {
                food: Food_1.getFood.tomatoes,
                dv: "500%"
            },
            {
                food: Food_1.getFood.watermelon,
                dv: "5000%"
            },
            {
                food: Food_1.getFood.grapefruit,
                dv: "500%"
            },
            {
                food: Food_1.getFood.papaya,
                dv: "2000%"
            }
        ],
        nonVeg: []
    },
    calcium: {
        type: "Calcium",
        veg: [
            {
                food: Food_1.getFood.chiaSeeds,
                dv: "14%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                dv: "22%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "18%"
            },
            {
                food: Food_1.getFood.paneer,
                dv: "132%"
            },
            {
                food: Food_1.getFood.kale,
                dv: "13%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.milk,
                dv: "46%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "38%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "16%"
            },
            {
                food: Food_1.getFood.ladyFinger,
                dv: "9%"
            }
        ]
    },
    copper: {
        type: "Copper",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "106%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "79%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                dv: "78%"
            },
            {
                food: Food_1.getFood.cashews,
                dv: "70%"
            },
            {
                food: Food_1.getFood.chickpeas,
                dv: "64%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.oysters,
                dv: "419%"
            },
            {
                food: Food_1.getFood.mushrooms,
                dv: "144%"
            },
            {
                food: Food_1.getFood.fishSalmon,
                dv: "61%"
            }
        ]
    },
    iodine: {
        type: "Iodine",
        veg: [
            {
                food: Food_1.getFood.iodisedSalt,
                value: false,
                size: {
                    value: 1,
                    unit: "g"
                },
                dv: "51%"
            },
            {
                food: Food_1.getFood.bakedPotatoWithPeel,
                dv: "40%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "37%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.seaweed,
                dv: "1000%"
            },
            {
                food: Food_1.getFood.shrimps,
                dv: "27%"
            }
        ]
    },
    potassium: {
        type: "Potassium",
        veg: [
            {
                food: Food_1.getFood.spinach,
                dv: "18%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "16%"
            },
            {
                food: Food_1.getFood.potatoes,
                dv: "20%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "16%"
            },
            {
                food: Food_1.getFood.mushrooms,
                dv: "12%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.salmon,
                dv: "23%"
            },
            {
                food: Food_1.getFood.bananas,
                dv: "11%"
            },
            {
                food: Food_1.getFood.tomatoes,
                dv: "11%"
            }
        ]
    },
    phosphorus: {
        type: "Phosphorus",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "38%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "33%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "29%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "28%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "37%"
            },
            {
                food: Food_1.getFood.quinoa,
                dv: "22%"
            },
            {
                food: Food_1.getFood.brownRice,
                dv: "12%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.porkChops,
                dv: "41%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "33%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "27%"
            }
        ]
    },
    // Essential Amino Acids
    trytophan: {
        type: "Trytophan",
        veg: [
            {
                food: Food_1.getFood.cheese,
                dv: null
            },
            {
                food: Food_1.getFood.milk,
                dv: "75%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                dv: "30%"
            },
            {
                food: Food_1.getFood.peanuts,
                dv: "23%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "58%"
            },
            {
                food: Food_1.getFood.paneer,
                dv: "212%"
            },
            {
                food: Food_1.getFood.edamame,
                dv: "149%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "33%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.chicken,
                dv: "245%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "224%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "227%"
            },
            {
                food: Food_1.getFood.cashews,
                dv: "27%"
            },
            {
                food: Food_1.getFood.pistachio,
                dv: "27%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "27%"
            }
        ]
    },
    leucine: {
        type: "Leucine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "128%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "57%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "87%"
            },
            {
                food: Food_1.getFood.pistachio,
                dv: "17%"
            },
            {
                food: Food_1.getFood.peanuts,
                dv: "16%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "15%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "52%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.chicken,
                dv: "189%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "183%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "165%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "20%"
            }
        ]
    },
    isoleucine: {
        type: "Isoleucine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "153%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "61%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "55%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "20%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "20%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "26%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "20%"
            },
            {
                food: Food_1.getFood.pistachio,
                dv: "19%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.beef,
                dv: "192%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "191%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "178%"
            },
            {
                food: Food_1.getFood.quinoa,
                dv: "21%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                dv: "18%"
            },
            {
                food: Food_1.getFood.peanuts,
                dv: "17%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "19%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "55%"
            }
        ]
    },
    threonine: {
        type: "Threonine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "188%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "67%"
            },
            {
                food: Food_1.getFood.edamame,
                dv: "118%"
            },
            {
                food: Food_1.getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "61%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "55%"
            },
            {
                food: Food_1.getFood.greenPeas,
                dv: "31%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "24%"
            },
            {
                food: Food_1.getFood.carrots,
                name: "Carrots",
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.beef,
                dv: "258%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "221%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "233%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "55%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "29%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "34%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "21%"
            },
            {
                food: Food_1.getFood.quinoa,
                dv: "23%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "21%"
            }
        ]
    },
    lysine: {
        type: "Lysine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "106%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "67%"
            },
            {
                food: Food_1.getFood.edamame,
                dv: "91%"
            },
            {
                food: Food_1.getFood.greenPeas,
                dv: "24%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "12%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "16%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.beef,
                dv: "268%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "223%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "250%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "60%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "22%"
            },
            {
                food: Food_1.getFood.crab,
                dv: "107%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: Food_1.getFood.quinoa,
                dv: "21%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "15%"
            }
        ]
    },
    methionine: {
        type: "Methionine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "73%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "59%"
            },
            {
                food: Food_1.getFood.edamame,
                dv: "118%"
            },
            {
                food: Food_1.getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "35%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "55%"
            },
            {
                food: Food_1.getFood.greenPeas,
                dv: "18%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "17%"
            },
            {
                food: Food_1.getFood.carrots,
                name: "Carrots",
                dv: "23%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "14%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.beef,
                dv: "211%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "198%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "195%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "57%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "27%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                dv: "23%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "23%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "36%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "16%"
            },
            {
                food: Food_1.getFood.quinoa,
                dv: "24%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "21%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                dv: "22%"
            },
            {
                food: Food_1.getFood.crab,
                dv: "100%"
            },
            {
                food: Food_1.getFood.shrimps,
                dv: "78%"
            }
        ]
    },
    cystine: {
        type: "Cystine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "50%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "67%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "59%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "81%"
            },
            {
                food: Food_1.getFood.carrots,
                name: "Carrots",
                dv: "21%"
            },
            {
                food: Food_1.getFood.cashews,
                dv: "39%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.beef,
                dv: "204%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "207%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "199%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "51%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                dv: "40%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "23%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "66%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "38%"
            },
            {
                food: Food_1.getFood.quinoa,
                dv: "24%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "79%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                dv: "34%"
            }
        ]
    },
    valine: {
        type: "Valine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "120%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "60%"
            },
            {
                food: Food_1.getFood.edamame,
                dv: "79%"
            },
            {
                food: Food_1.getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "49%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "49%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "67%"
            },
            {
                food: Food_1.getFood.greenPeas,
                dv: "20%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "18%"
            },
            {
                food: Food_1.getFood.pistachio,
                dv: "20%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "17%"
            },
            {
                food: Food_1.getFood.cashews,
                dv: "16%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.beef,
                dv: "156%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "146%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "155%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "64%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "21%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                dv: "15%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "24%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "28%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "20%"
            },
            {
                food: Food_1.getFood.brownRice,
                dv: "17%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "21%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                dv: "17%"
            },
            {
                food: Food_1.getFood.millets,
                name: "Millets",
                dv: "18%"
            }
        ]
    },
    phenylalanine: {
        type: "Phenylalanine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "240%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "60%"
            },
            {
                food: Food_1.getFood.edamame,
                dv: "171%"
            },
            {
                food: Food_1.getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "103%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "101%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "98%"
            },
            {
                food: Food_1.getFood.greenPeas,
                dv: "36%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "35%"
            },
            {
                food: Food_1.getFood.pistachio,
                dv: "37%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "28%"
            },
            {
                food: Food_1.getFood.broccoli,
                dv: "21%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "31%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.beef,
                dv: "262%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "250%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "251%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "88%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "21%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                dv: "33%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "56%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "47%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "37%"
            },
            {
                food: Food_1.getFood.quinoa,
                dv: "39%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "38%"
            },
            {
                food: Food_1.getFood.brownRice,
                dv: "31%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                dv: "17%"
            },
            {
                food: Food_1.getFood.shrimps,
                dv: "78%"
            }
        ]
    },
    tyrosine: {
        type: "Tyrosine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "202%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "60%"
            },
            {
                food: Food_1.getFood.edamame,
                dv: "124%"
            },
            {
                food: Food_1.getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "49%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "49%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "95%"
            },
            {
                food: Food_1.getFood.greenPeas,
                dv: "20%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "24%"
            },
            {
                food: Food_1.getFood.pistachio,
                dv: "20%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "23%"
            },
            {
                food: Food_1.getFood.cashews,
                dv: "16%"
            },
            {
                food: Food_1.getFood.peanuts,
                dv: "31%"
            },
            {
                food: Food_1.getFood.ladyFinger,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.beef,
                dv: "248%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "239%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "224%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "49%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "29%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                dv: "18%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "35%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "41%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "18%"
            },
            {
                food: Food_1.getFood.salmon,
                name: "Salmon",
                dv: "235%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "27%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                dv: "23%"
            },
            {
                food: Food_1.getFood.brownRice,
                dv: "19%"
            },
            {
                food: Food_1.getFood.millets,
                name: "Millets",
                dv: "21%"
            }
        ]
    },
    histidine: {
        type: "Histidine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                dv: "155%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "71%"
            },
            {
                food: Food_1.getFood.edamame,
                dv: "79%"
            },
            {
                food: Food_1.getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "67%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "72%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "67%"
            },
            {
                food: Food_1.getFood.greenPeas,
                dv: "24%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "18%"
            },
            {
                food: Food_1.getFood.pistachio,
                dv: "20%"
            },
            {
                food: Food_1.getFood.spinach,
                dv: "17%"
            },
            {
                food: Food_1.getFood.cashews,
                dv: "16%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "22%"
            },
            {
                food: Food_1.getFood.pistachio,
                dv: "22%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.beef,
                dv: "314%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "318%"
            },
            {
                food: Food_1.getFood.chickenBreast,
                dv: "290%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "50%"
            },
            {
                food: Food_1.getFood.eggs,
                dv: "21%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                dv: "22%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                dv: "31%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                dv: "39%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "22%"
            },
            {
                food: Food_1.getFood.salmon,
                name: "Salmon",
                dv: "182%"
            },
            {
                food: Food_1.getFood.oatmeal,
                dv: "18%"
            },
            {
                food: Food_1.getFood.brownRice,
                dv: "19%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                dv: "19%"
            },
            {
                food: Food_1.getFood.quinoa,
                dv: "34%"
            }
        ]
    }
};
