"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutrientGroups = void 0;
const Food_1 = require("./Food");
exports.NutrientGroups = {
    vitaminC: {
        name: "Vitamin C",
        veg: [
            {
                food: Food_1.food.guava,
                dv: "254%"
            },
            {
                food: Food_1.food.kiwi,
                dv: "185%"
            },
            {
                food: Food_1.food.bellPappers,
                dv: "169%"
            },
            {
                food: Food_1.food.strawberries,
                dv: "108%"
            },
            {
                food: Food_1.food.oranges,
                dv: "106%"
            },
            {
                food: Food_1.food.lemons,
                dv: "125%"
            },
            {
                food: Food_1.food.blueBerries,
                dv: "16%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.papaya,
                dv: "98%"
            },
            {
                food: Food_1.food.broccoli,
                dv: "90%"
            },
            {
                food: Food_1.food.tomatoes,
                dv: "61%"
            },
            {
                food: Food_1.food.radish,
                dv: "19%"
            },
            {
                food: Food_1.food.amla,
                dv: "46%"
            },
            {
                food: Food_1.food.pomegranate,
                dv: "20%"
            },
            {
                food: Food_1.food.honeydew,
                dv: "34%"
            }
        ]
    },
    vitaminA: {
        name: "Vitamin A",
        veg: [
            {
                food: Food_1.food.carrots,
                dv: "148%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "122%"
            },
            {
                food: Food_1.food.spinach,
                dv: "105%"
            },
            {
                food: Food_1.food.muskMelon,
                dv: "33%"
            },
            {
                food: Food_1.food.lettuce,
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.redBellPappers,
                dv: "22%"
            },
            {
                food: Food_1.food.brocolli,
                dv: "13%"
            },
            {
                food: Food_1.food.driedApricots,
                dv: "20%"
            },
            {
                food: Food_1.food.basil,
                dv: "29%"
            }
        ]
    },
    betaCarotene: {
        name: "Beta-carotene",
        veg: [
            {
                food: Food_1.food.carrots,
                dv: "120%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "213%"
            },
            {
                food: Food_1.food.spinach,
                dv: "105%"
            },
            {
                food: Food_1.food.muskMelon,
                dv: "33%"
            },
            {
                food: Food_1.food.lettuce,
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.redBellPappers,
                dv: "22%"
            },
            {
                food: Food_1.food.brocolli,
                dv: "13%"
            },
            {
                food: Food_1.food.driedApricots,
                dv: "20%"
            }
        ]
    },
    vitaminB1Thiamin: {
        name: "Vitamin B1 Thiamin",
        veg: [
            {
                food: Food_1.food.flaxSeeds,
                dv: "39%"
            },
            {
                food: Food_1.food.greenPeas,
                dv: "35%"
            },
            {
                food: Food_1.food.paneer,
                dv: "33%"
            },
            {
                food: Food_1.food.brownRice,
                dv: "30%"
            },
            {
                food: Food_1.food.asparagus,
                dv: "24%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.porkChops,
                dv: "96%"
            },
            {
                food: Food_1.food.fishSalmon,
                dv: "48%"
            },
            {
                food: Food_1.food.mussels,
                dv: "21%"
            }
        ]
    },
    vitaminB2Riboflavin: {
        name: "Vitamin B2 Riboflavin",
        veg: [
            {
                food: Food_1.food.milk,
                dv: "69%"
            },
            {
                food: Food_1.food.mushrooms,
                dv: "38%"
            },
            {
                food: Food_1.food.paneer,
                dv: "76%"
            },
            {
                food: Food_1.food.spinach,
                dv: "33%"
            },
            {
                food: Food_1.food.almonds,
                dv: "25%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.beef,
                dv: "112%"
            },
            {
                food: Food_1.food.fishSalmon,
                dv: "64%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "36%"
            },
            {
                food: Food_1.food.leanRoastHam,
                dv: "36%"
            },
            {
                food: Food_1.food.eggs,
                dv: "20%"
            }
        ]
    },
    vitaminB3Niacin: {
        name: "Vitamin B3 Niacin",
        veg: [
            {
                food: Food_1.food.brownRice,
                dv: "32%"
            },
            {
                food: Food_1.food.mushrooms,
                dv: "47%"
            },
            {
                food: Food_1.food.peanuts,
                dv: "25%"
            },
            {
                food: Food_1.food.greenPeas,
                dv: "33%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.chickenBreast,
                dv: "100%"
            },
            {
                food: Food_1.food.fishSalmon,
                dv: "108%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "85%"
            },
            {
                food: Food_1.food.beef,
                dv: "60%"
            }
        ]
    },
    vitaminB5Pantothenic: {
        name: "Vitamin B5 Pantothenic",
        veg: [
            {
                food: Food_1.food.milk,
                dv: "36%"
            },
            {
                food: Food_1.food.mushrooms,
                dv: "38%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "40%"
            },
            {
                food: Food_1.food.almonds,
                dv: "25%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "26%"
            },
            {
                food: Food_1.food.lentils,
                dv: "25%"
            },
            {
                food: Food_1.food.pomegranate,
                dv: "13%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.chickenBreast,
                dv: "54%"
            },
            {
                food: Food_1.food.fishSalmon,
                dv: "65%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "34%"
            },
            {
                food: Food_1.food.beef,
                dv: "45%"
            }
        ]
    },
    vitaminB6: {
        name: "Vitamin B6",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "66%"
            },
            {
                food: Food_1.food.potatoes,
                dv: "32%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "40%"
            },
            {
                food: Food_1.food.bananas,
                dv: "32%"
            },
            {
                food: Food_1.food.pistachio,
                dv: "28%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.chickenBreast,
                dv: "92%"
            },
            {
                food: Food_1.food.fishSalmon,
                dv: "94%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "54%"
            },
            {
                food: Food_1.food.beef,
                dv: "48%"
            }
        ]
    },
    vitaminB9Folate: {
        name: "Vitamin B9 Folate",
        veg: [
            {
                food: Food_1.food.edamame,
                dv: "121%"
            },
            {
                food: Food_1.food.asparagus,
                dv: "67%"
            },
            {
                food: Food_1.food.lettuce,
                dv: "16%"
            },
            {
                food: Food_1.food.spinach,
                dv: "36%"
            },
            {
                food: Food_1.food.brocolli,
                dv: "42%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "26%"
            },
            {
                food: Food_1.food.lentils,
                dv: "90%"
            },
            {
                food: Food_1.food.mangose,
                dv: "28%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.oranges,
                dv: "14%"
            },
            {
                food: Food_1.food.beetRoot,
                dv: "34%"
            },
            {
                food: Food_1.food.hareMung,
                dv: "80%"
            },
            {
                food: Food_1.food.rice,
                dv: "23%"
            },
            {
                food: Food_1.food.muesli,
                dv: "154%"
            }
        ]
    },
    vitaminB12: {
        name: "Vitamin B12",
        veg: [
            {
                food: Food_1.food.allBranWheatFlaks,
                dv: "325%"
            },
            {
                food: Food_1.food.paneer,
                dv: "137%"
            },
            {
                food: Food_1.food.milk,
                dv: "108%"
            },
            {
                food: Food_1.food.muesli,
                dv: "386%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.paneer,
                dv: "137%"
            },
            {
                food: Food_1.food.milk,
                dv: "108%"
            },
            {
                food: Food_1.food.eggs,
                dv: "23%"
            },
            {
                food: Food_1.food.beef,
                dv: "533%"
            },
            {
                food: Food_1.food.crab,
                dv: "642%"
            },
            {
                food: Food_1.food.clams,
                dv: "3502%"
            },
            {
                food: Food_1.food.lamp,
                dv: "269%"
            },
            {
                food: Food_1.food.rawas,
                dv: "58%"
            },
            {
                food: Food_1.food.surmai,
                dv: "300%"
            },
            {
                food: Food_1.food.promfret,
                dv: "23%"
            }
        ]
    },
    choline: {
        name: "Choline",
        veg: [
            {
                food: Food_1.food.milk,
                dv: "15%"
            },
            {
                food: Food_1.food.broccoli,
                dv: "11%"
            },
            {
                food: Food_1.food.greenPeas,
                dv: "9%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.chickenBreast,
                dv: "36%"
            },
            {
                food: Food_1.food.fishSalmon,
                dv: "35%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "28%"
            },
            {
                food: Food_1.food.eggs,
                dv: "27"
            },
            {
                food: Food_1.food.beef,
                dv: "24%"
            },
            {
                food: Food_1.food.shrimps,
                dv: "21%"
            }
        ]
    },
    vitaminE: {
        name: "Vitamin E",
        veg: [
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "49%"
            },
            {
                food: Food_1.food.almonds,
                dv: "49%"
            },
            {
                food: Food_1.food.peanuts,
                dv: "9%"
            },
            {
                food: Food_1.food.spinach,
                dv: "25%"
            },
            {
                food: Food_1.food.kiwi,
                dv: "18%"
            },
            {
                food: Food_1.food.broccoli,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.shrimps,
                dv: "12%"
            },
            {
                food: Food_1.food.muesli,
                dv: "56%"
            }
        ]
    },
    vitaminK: {
        name: "Vitamin K",
        veg: [
            {
                food: Food_1.food.cabbage,
                dv: "136%"
            },
            {
                food: Food_1.food.asparagus,
                dv: "76%"
            },
            {
                food: Food_1.food.brusselSprouts,
                dv: "182%"
            },
            {
                food: Food_1.food.broccoli,
                dv: "183%"
            },
            {
                food: Food_1.food.kiwi,
                dv: "60%"
            },
            {
                food: Food_1.food.ladyFinger,
                dv: "53%"
            },
            {
                food: Food_1.food.lettuce,
                dv: "47%"
            }
        ],
        nonVeg: []
    },
    magnesium: {
        name: "Magnesium",
        veg: [
            {
                food: Food_1.food.cookedSpinach,
                dv: "37%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "37%"
            },
            {
                food: Food_1.food.brownRice,
                dv: "20%"
            },
            {
                food: Food_1.food.quinoa,
                dv: "28%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "11%"
            },
            {
                food: Food_1.food.flaxSeeds,
                dv: "27%"
            },
            {
                food: Food_1.food.cashews,
                dv: "20%"
            },
            {
                food: Food_1.food.almonds,
                dv: "18%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.bananas,
                dv: "10%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "47%"
            },
            {
                food: Food_1.food.cashews,
                dv: "20%"
            },
            {
                food: Food_1.food.walnuts,
                dv: "12%"
            },
            {
                food: Food_1.food.milk,
                dv: "12%"
            }
        ]
    },
    selenium: {
        name: "Selenium",
        veg: [
            {
                food: Food_1.food.brazilNuts,
                dv: "990%"
            },
            {
                food: Food_1.food.paneer,
                dv: "80%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "23%"
            },
            {
                food: Food_1.food.brownRice,
                dv: "21%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "41%"
            },
            {
                food: Food_1.food.chiaSeeds,
                dv: "29%"
            },
            {
                food: Food_1.food.flaxSeeds,
                dv: "13%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.oysters,
                dv: "334%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "147%"
            },
            {
                food: Food_1.food.beef,
                dv: "111%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "99%"
            },
            {
                food: Food_1.food.shrimps,
                dv: "77%"
            }
        ]
    },
    zinc: {
        name: "Zinc",
        veg: [
            {
                food: Food_1.food.cookedSpinach,
                dv: "12%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "27%"
            },
            {
                food: Food_1.food.cashews,
                dv: "14%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "21%"
            },
            {
                food: Food_1.food.chickpeas,
                dv: "23%"
            },
            {
                food: Food_1.food.paneer,
                dv: "36%"
            },
            {
                food: Food_1.food.lentils,
                dv: "23%"
            },
            {
                food: Food_1.food.cerealKalloggsSmartStartStrong,
                dv: "136%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.oysters,
                dv: "93%"
            },
            {
                food: Food_1.food.clams,
                dv: "47%"
            },
            {
                food: Food_1.food.beef,
                dv: "52%"
            },
            {
                food: Food_1.food.chicken,
                dv: "49%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "32%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "22%"
            },
            {
                food: Food_1.food.milk,
                dv: "16%"
            }
        ]
    },
    iron: {
        name: "Iron",
        veg: [
            {
                food: Food_1.food.allBranWheatFlaks,
                dv: "109%"
            },
            {
                food: Food_1.food.apricots,
                dv: "42%"
            },
            {
                food: Food_1.food.spinach,
                dv: "36%"
            },
            {
                food: Food_1.food.quinoa,
                dv: "15%"
            },
            {
                food: Food_1.food.mushrooms,
                dv: "15%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "14%"
            },
            {
                food: Food_1.food.oats,
                dv: "41%"
            },
            {
                food: Food_1.food.jowar,
                dv: "33%"
            },
            {
                food: Food_1.food.muesli,
                dv: "39%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.oysters,
                dv: "43%"
            },
            {
                food: Food_1.food.beef,
                dv: "52%"
            },
            {
                food: Food_1.food.chiaSeeds,
                dv: "12%"
            },
            {
                food: Food_1.food.sesameSeeds,
                dv: "14%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "13%"
            },
            {
                food: Food_1.food.toorDal,
                dv: "42%"
            },
            {
                food: Food_1.food.uradDal,
                dv: "43%"
            },
            {
                food: Food_1.food.masoorDal,
                dv: "33%"
            }
        ]
    },
    lycopene: {
        name: "Lycopene",
        veg: [
            {
                food: Food_1.food.guava,
                dv: "6000%"
            },
            {
                food: Food_1.food.tomatoes,
                dv: "500%"
            },
            {
                food: Food_1.food.watermelon,
                dv: "5000%"
            },
            {
                food: Food_1.food.grapefruit,
                dv: "500%"
            },
            {
                food: Food_1.food.papaya,
                dv: "2000%"
            }
        ],
        nonVeg: []
    },
    calcium: {
        name: "Calcium",
        veg: [
            {
                food: Food_1.food.chiaSeeds,
                dv: "14%"
            },
            {
                food: Food_1.food.sesameSeeds,
                dv: "22%"
            },
            {
                food: Food_1.food.almonds,
                dv: "18%"
            },
            {
                food: Food_1.food.paneer,
                dv: "132%"
            },
            {
                food: Food_1.food.kale,
                dv: "13%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.milk,
                dv: "46%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "38%"
            },
            {
                food: Food_1.food.spinach,
                dv: "16%"
            },
            {
                food: Food_1.food.ladyFinger,
                dv: "9%"
            }
        ]
    },
    copper: {
        name: "Copper",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "106%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "79%"
            },
            {
                food: Food_1.food.sesameSeeds,
                dv: "78%"
            },
            {
                food: Food_1.food.cashews,
                dv: "70%"
            },
            {
                food: Food_1.food.chickpeas,
                dv: "64%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.oysters,
                dv: "419%"
            },
            {
                food: Food_1.food.mushrooms,
                dv: "144%"
            },
            {
                food: Food_1.food.fishSalmon,
                dv: "61%"
            },
            {
                food: Food_1.food.raisins,
                dv: "30%"
            }
        ]
    },
    iodine: {
        name: "Iodine",
        veg: [
            {
                food: Food_1.food.iodisedSalt,
                value: false,
                size: {
                    value: 1,
                    unit: "g"
                },
                dv: "51%"
            },
            {
                food: Food_1.food.bakedPotatoWithPeel,
                dv: "40%"
            },
            {
                food: Food_1.food.milk,
                dv: "37%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.seaweed,
                dv: "1000%"
            },
            {
                food: Food_1.food.shrimps,
                dv: "27%"
            }
        ]
    },
    potassium: {
        name: "Potassium",
        veg: [
            {
                food: Food_1.food.spinach,
                dv: "18%"
            },
            {
                food: Food_1.food.lentils,
                dv: "16%"
            },
            {
                food: Food_1.food.potatoes,
                dv: "20%"
            },
            {
                food: Food_1.food.milk,
                dv: "16%"
            },
            {
                food: Food_1.food.mushrooms,
                dv: "12%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.salmon,
                dv: "23%"
            },
            {
                food: Food_1.food.bananas,
                dv: "11%"
            },
            {
                food: Food_1.food.tomatoes,
                dv: "11%"
            },
            {
                food: Food_1.food.raisins,
                dv: "16%"
            }
        ]
    },
    phosphorus: {
        name: "Phosphorus",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "38%"
            },
            {
                food: Food_1.food.milk,
                dv: "33%"
            },
            {
                food: Food_1.food.lentils,
                dv: "29%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "28%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "37%"
            },
            {
                food: Food_1.food.quinoa,
                dv: "22%"
            },
            {
                food: Food_1.food.brownRice,
                dv: "12%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.porkChops,
                dv: "41%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "33%"
            },
            {
                food: Food_1.food.beef,
                dv: "27%"
            }
        ]
    },
    // Essential Amino Acids
    trytophan: {
        name: "Trytophan",
        veg: [
            {
                food: Food_1.food.cheese,
                dv: null
            },
            {
                food: Food_1.food.milk,
                dv: "75%"
            },
            {
                food: Food_1.food.flaxSeeds,
                dv: "30%"
            },
            {
                food: Food_1.food.peanuts,
                dv: "23%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "58%"
            },
            {
                food: Food_1.food.paneer,
                dv: "212%"
            },
            {
                food: Food_1.food.edamame,
                dv: "149%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "33%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.chicken,
                dv: "245%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "224%"
            },
            {
                food: Food_1.food.beef,
                dv: "227%"
            },
            {
                food: Food_1.food.cashews,
                dv: "27%"
            },
            {
                food: Food_1.food.pistachio,
                dv: "27%"
            },
            {
                food: Food_1.food.eggs,
                dv: "27%"
            }
        ]
    },
    leucine: {
        name: "Leucine",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "128%"
            },
            {
                food: Food_1.food.milk,
                dv: "57%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "87%"
            },
            {
                food: Food_1.food.pistachio,
                dv: "17%"
            },
            {
                food: Food_1.food.peanuts,
                dv: "16%"
            },
            {
                food: Food_1.food.almonds,
                dv: "15%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "52%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.chicken,
                dv: "189%"
            },
            {
                food: Food_1.food.beef,
                dv: "183%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "165%"
            },
            {
                food: Food_1.food.eggs,
                dv: "20%"
            }
        ]
    },
    isoleucine: {
        name: "Isoleucine",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "153%"
            },
            {
                food: Food_1.food.milk,
                dv: "61%"
            },
            {
                food: Food_1.food.lentils,
                dv: "55%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: Food_1.food.spinach,
                dv: "20%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "20%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "26%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "20%"
            },
            {
                food: Food_1.food.pistachio,
                dv: "19%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.beef,
                dv: "192%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "191%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "178%"
            },
            {
                food: Food_1.food.quinoa,
                dv: "21%"
            },
            {
                food: Food_1.food.flaxSeeds,
                dv: "18%"
            },
            {
                food: Food_1.food.peanuts,
                dv: "17%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "19%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "55%"
            }
        ]
    },
    threonine: {
        name: "Threonine",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "188%"
            },
            {
                food: Food_1.food.milk,
                dv: "67%"
            },
            {
                food: Food_1.food.edamame,
                dv: "118%"
            },
            {
                food: Food_1.food.kidneyBeans,
                name: "Kidney Beans",
                dv: "61%"
            },
            {
                food: Food_1.food.lentils,
                dv: "55%"
            },
            {
                food: Food_1.food.greenPeas,
                dv: "31%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "24%"
            },
            {
                food: Food_1.food.carrots,
                name: "Carrots",
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.beef,
                dv: "258%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "221%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "233%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "55%"
            },
            {
                food: Food_1.food.eggs,
                dv: "29%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "34%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "21%"
            },
            {
                food: Food_1.food.quinoa,
                dv: "23%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "21%"
            }
        ]
    },
    lysine: {
        name: "Lysine",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "106%"
            },
            {
                food: Food_1.food.milk,
                dv: "67%"
            },
            {
                food: Food_1.food.edamame,
                dv: "91%"
            },
            {
                food: Food_1.food.greenPeas,
                dv: "24%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "12%"
            },
            {
                food: Food_1.food.spinach,
                dv: "16%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.beef,
                dv: "268%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "223%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "250%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "60%"
            },
            {
                food: Food_1.food.eggs,
                dv: "22%"
            },
            {
                food: Food_1.food.crab,
                dv: "107%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: Food_1.food.quinoa,
                dv: "21%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "15%"
            }
        ]
    },
    methionine: {
        name: "Methionine",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "73%"
            },
            {
                food: Food_1.food.milk,
                dv: "59%"
            },
            {
                food: Food_1.food.edamame,
                dv: "118%"
            },
            {
                food: Food_1.food.kidneyBeans,
                name: "Kidney Beans",
                dv: "35%"
            },
            {
                food: Food_1.food.lentils,
                dv: "55%"
            },
            {
                food: Food_1.food.greenPeas,
                dv: "18%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "17%"
            },
            {
                food: Food_1.food.carrots,
                name: "Carrots",
                dv: "23%"
            },
            {
                food: Food_1.food.spinach,
                dv: "14%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.beef,
                dv: "211%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "198%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "195%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "57%"
            },
            {
                food: Food_1.food.eggs,
                dv: "27%"
            },
            {
                food: Food_1.food.chiaSeeds,
                dv: "23%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "23%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "36%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "16%"
            },
            {
                food: Food_1.food.quinoa,
                dv: "24%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "21%"
            },
            {
                food: Food_1.food.sesameSeeds,
                dv: "22%"
            },
            {
                food: Food_1.food.crab,
                dv: "100%"
            },
            {
                food: Food_1.food.shrimps,
                dv: "78%"
            }
        ]
    },
    cystine: {
        name: "Cystine",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "50%"
            },
            {
                food: Food_1.food.milk,
                dv: "67%"
            },
            {
                food: Food_1.food.milk,
                dv: "59%"
            },
            {
                food: Food_1.food.lentils,
                dv: "81%"
            },
            {
                food: Food_1.food.carrots,
                name: "Carrots",
                dv: "21%"
            },
            {
                food: Food_1.food.cashews,
                dv: "39%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.beef,
                dv: "204%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "207%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "199%"
            },
            {
                food: Food_1.food.eggs,
                dv: "51%"
            },
            {
                food: Food_1.food.chiaSeeds,
                dv: "40%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "23%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "66%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "38%"
            },
            {
                food: Food_1.food.quinoa,
                dv: "24%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "79%"
            },
            {
                food: Food_1.food.sesameSeeds,
                dv: "34%"
            }
        ]
    },
    valine: {
        name: "Valine",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "120%"
            },
            {
                food: Food_1.food.milk,
                dv: "60%"
            },
            {
                food: Food_1.food.edamame,
                dv: "79%"
            },
            {
                food: Food_1.food.kidneyBeans,
                name: "Kidney Beans",
                dv: "49%"
            },
            {
                food: Food_1.food.lentils,
                dv: "49%"
            },
            {
                food: Food_1.food.milk,
                dv: "67%"
            },
            {
                food: Food_1.food.greenPeas,
                dv: "20%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "18%"
            },
            {
                food: Food_1.food.pistachio,
                dv: "20%"
            },
            {
                food: Food_1.food.spinach,
                dv: "17%"
            },
            {
                food: Food_1.food.cashews,
                dv: "16%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.beef,
                dv: "156%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "146%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "155%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "64%"
            },
            {
                food: Food_1.food.eggs,
                dv: "21%"
            },
            {
                food: Food_1.food.chiaSeeds,
                dv: "15%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "24%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "28%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "20%"
            },
            {
                food: Food_1.food.brownRice,
                dv: "17%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "21%"
            },
            {
                food: Food_1.food.flaxSeeds,
                dv: "17%"
            },
            {
                food: Food_1.food.millets,
                name: "Millets",
                dv: "18%"
            }
        ]
    },
    phenylalanine: {
        name: "Phenylalanine",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "240%"
            },
            {
                food: Food_1.food.milk,
                dv: "60%"
            },
            {
                food: Food_1.food.edamame,
                dv: "171%"
            },
            {
                food: Food_1.food.kidneyBeans,
                name: "Kidney Beans",
                dv: "103%"
            },
            {
                food: Food_1.food.lentils,
                dv: "101%"
            },
            {
                food: Food_1.food.milk,
                dv: "98%"
            },
            {
                food: Food_1.food.greenPeas,
                dv: "36%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "35%"
            },
            {
                food: Food_1.food.pistachio,
                dv: "37%"
            },
            {
                food: Food_1.food.spinach,
                dv: "28%"
            },
            {
                food: Food_1.food.broccoli,
                dv: "21%"
            },
            {
                food: Food_1.food.almonds,
                dv: "31%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.beef,
                dv: "262%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "250%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "251%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "88%"
            },
            {
                food: Food_1.food.eggs,
                dv: "21%"
            },
            {
                food: Food_1.food.chiaSeeds,
                dv: "33%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "56%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "47%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "37%"
            },
            {
                food: Food_1.food.quinoa,
                dv: "39%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "38%"
            },
            {
                food: Food_1.food.brownRice,
                dv: "31%"
            },
            {
                food: Food_1.food.flaxSeeds,
                dv: "17%"
            },
            {
                food: Food_1.food.shrimps,
                dv: "78%"
            }
        ]
    },
    tyrosine: {
        name: "Tyrosine",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "202%"
            },
            {
                food: Food_1.food.milk,
                dv: "60%"
            },
            {
                food: Food_1.food.edamame,
                dv: "124%"
            },
            {
                food: Food_1.food.kidneyBeans,
                name: "Kidney Beans",
                dv: "49%"
            },
            {
                food: Food_1.food.lentils,
                dv: "49%"
            },
            {
                food: Food_1.food.milk,
                dv: "95%"
            },
            {
                food: Food_1.food.greenPeas,
                dv: "20%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "24%"
            },
            {
                food: Food_1.food.pistachio,
                dv: "20%"
            },
            {
                food: Food_1.food.spinach,
                dv: "23%"
            },
            {
                food: Food_1.food.cashews,
                dv: "16%"
            },
            {
                food: Food_1.food.peanuts,
                dv: "31%"
            },
            {
                food: Food_1.food.ladyFinger,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.beef,
                dv: "248%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "239%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "224%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "49%"
            },
            {
                food: Food_1.food.eggs,
                dv: "29%"
            },
            {
                food: Food_1.food.chiaSeeds,
                dv: "18%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "35%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "41%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "18%"
            },
            {
                food: Food_1.food.salmon,
                name: "Salmon",
                dv: "235%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "27%"
            },
            {
                food: Food_1.food.sesameSeeds,
                dv: "23%"
            },
            {
                food: Food_1.food.brownRice,
                dv: "19%"
            },
            {
                food: Food_1.food.millets,
                name: "Millets",
                dv: "21%"
            }
        ]
    },
    histidine: {
        name: "Histidine",
        veg: [
            {
                food: Food_1.food.paneer,
                dv: "155%"
            },
            {
                food: Food_1.food.milk,
                dv: "71%"
            },
            {
                food: Food_1.food.edamame,
                dv: "79%"
            },
            {
                food: Food_1.food.kidneyBeans,
                name: "Kidney Beans",
                dv: "67%"
            },
            {
                food: Food_1.food.lentils,
                dv: "72%"
            },
            {
                food: Food_1.food.milk,
                dv: "67%"
            },
            {
                food: Food_1.food.greenPeas,
                dv: "24%"
            },
            {
                food: Food_1.food.sweetPotatoes,
                dv: "18%"
            },
            {
                food: Food_1.food.pistachio,
                dv: "20%"
            },
            {
                food: Food_1.food.spinach,
                dv: "17%"
            },
            {
                food: Food_1.food.cashews,
                dv: "16%"
            },
            {
                food: Food_1.food.almonds,
                dv: "22%"
            },
            {
                food: Food_1.food.pistachio,
                dv: "22%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.beef,
                dv: "314%"
            },
            {
                food: Food_1.food.porkChops,
                dv: "318%"
            },
            {
                food: Food_1.food.chickenBreast,
                dv: "290%"
            },
            {
                food: Food_1.food.yogurt,
                dv: "50%"
            },
            {
                food: Food_1.food.eggs,
                dv: "21%"
            },
            {
                food: Food_1.food.chiaSeeds,
                dv: "22%"
            },
            {
                food: Food_1.food.pumpkinSeeds,
                dv: "31%"
            },
            {
                food: Food_1.food.hempSeeds,
                dv: "39%"
            },
            {
                food: Food_1.food.sunflowerSeeds,
                dv: "22%"
            },
            {
                food: Food_1.food.salmon,
                name: "Salmon",
                dv: "182%"
            },
            {
                food: Food_1.food.oatmeal,
                dv: "18%"
            },
            {
                food: Food_1.food.brownRice,
                dv: "19%"
            },
            {
                food: Food_1.food.flaxSeeds,
                dv: "19%"
            },
            {
                food: Food_1.food.quinoa,
                dv: "34%"
            },
            {
                food: Food_1.food.lamp,
                dv: "303%"
            }
        ]
    },
    prebiotic: {
        name: "Prebiotic",
        veg: [
            {
                food: Food_1.food.figs,
                dv: null
            }
        ],
        nonVeg: null
    },
    dha: {
        name: "DHA",
        veg: [
            {
                food: Food_1.food.walnuts,
                dv: null
            },
            {
                food: Food_1.food.chiaSeeds,
                dv: null
            }
        ],
        nonVeg: [
            {
                food: Food_1.food.rawas,
                dv: "200%"
            },
            {
                food: Food_1.food.prawns,
                dv: "100%"
            },
            {
                food: Food_1.food.rawas,
                dv: "150%"
            },
            {
                food: Food_1.food.promfret,
                dv: "75%"
            }
        ]
    }
};
