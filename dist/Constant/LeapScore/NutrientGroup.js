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
                name: "Paneer",
                dv: "66%"
            },
            {
                food: Food_1.getFood.potatoes,
                name: "Potatoes",
                dv: "32%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "40%"
            },
            {
                food: Food_1.getFood.bananas,
                name: "Bananas",
                dv: "32%"
            },
            {
                food: Food_1.getFood.pistachio,
                name: "Pistachio",
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
                name: "Edamame",
                dv: "121%"
            },
            {
                food: Food_1.getFood.asparagus,
                name: "Asparagus",
                dv: "67%"
            },
            {
                food: Food_1.getFood.lettuce,
                name: "Lettuce",
                dv: "16%"
            },
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
                value: false,
                size: {
                    value: 1,
                    unit: "Glass"
                },
                dv: "36%"
            },
            {
                food: Food_1.getFood.brocolli,
                name: "Brocolli",
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
                name: "Mangoes",
                dv: "28%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.oranges,
                name: "Oranges",
                dv: "14%"
            }
        ]
    },
    vitaminB12: {
        type: "Vitamin B12",
        veg: [
            {
                food: Food_1.getFood.allBranWheatFlaks,
                name: "All Bran Wheat Flaks",
                dv: "325%"
            },
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
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
                name: "Paneer",
                dv: "137%"
            },
            {
                food: Food_1.getFood.milk,
                name: "Milk",
                dv: "108%"
            },
            {
                food: Food_1.getFood.eggs,
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "23%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "533%"
            },
            {
                food: Food_1.getFood.crab,
                name: "Crab",
                value: false,
                size: {
                    value: 1,
                    unit: "Crab Leg"
                },
                dv: "642%"
            },
            {
                food: Food_1.getFood.clams,
                name: "Clams",
                value: false,
                size: {
                    value: 75,
                    unit: "g"
                },
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
                name: "Broccoli",
                dv: "11%"
            },
            {
                food: Food_1.getFood.greenPeas,
                name: "Green Peas",
                dv: "9%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.chickenBreast,
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
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
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "27"
            },
            {
                food: Food_1.getFood.beef,
                dv: "24%"
            },
            {
                food: Food_1.getFood.shrimps,
                name: "Shrimps",
                value: false,
                size: {
                    value: 12,
                    unit: "Large"
                },
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
                name: "Peanuts",
                dv: "9%"
            },
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
                dv: "25%"
            },
            {
                food: Food_1.getFood.kiwi,
                name: "Kiwifruit",
                dv: "18%"
            },
            {
                food: Food_1.getFood.broccoli,
                name: "Broccoli",
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.shrimps,
                name: "Shrimps",
                value: false,
                size: {
                    value: 12,
                    unit: "Large"
                },
                dv: "12%"
            }
        ]
    },
    vitaminK: {
        type: "Vitamin K",
        veg: [
            {
                food: Food_1.getFood.cabbage,
                name: "Cabbage",
                dv: "136%"
            },
            {
                food: Food_1.getFood.asparagus,
                name: "Asparagus",
                dv: "76%"
            },
            {
                food: Food_1.getFood.brusselSprouts,
                name: "Brussel Sprouts",
                dv: "182%"
            },
            {
                food: Food_1.getFood.broccoli,
                name: "Broccoli",
                dv: "183%"
            },
            {
                food: Food_1.getFood.kiwi,
                name: "Kiwifruit",
                dv: "60%"
            },
            {
                food: Food_1.getFood.ladyFinger,
                name: "Lady Finger",
                dv: "53%"
            },
            {
                food: Food_1.getFood.lettuce,
                name: "Lettuce",
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
                name: "Cooked Spinach",
                dv: "37%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "37%"
            },
            {
                food: Food_1.getFood.brownRice,
                name: "Broun Rice",
                dv: "20%"
            },
            {
                food: Food_1.getFood.quinoa,
                name: "Quinoa",
                dv: "28%"
            },
            {
                food: Food_1.getFood.yogurt,
                name: "Yogurt",
                dv: "11%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                name: "Flax Seeds",
                dv: "27%"
            },
            {
                food: Food_1.getFood.cashews,
                name: "Cashews",
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
                name: "Bananas",
                dv: "10%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
                dv: "47%"
            },
            {
                food: Food_1.getFood.cashews,
                name: "Cashews",
                dv: "20%"
            },
            {
                food: Food_1.getFood.walnuts,
                name: "Walnuts",
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
                name: "Brazil Nuts",
                dv: "990%"
            },
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "80%"
            },
            {
                food: Food_1.getFood.oatmeal,
                name: "Oatmeal",
                dv: "23%"
            },
            {
                food: Food_1.getFood.brownRice,
                name: "Brown Rice",
                dv: "21%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "41%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                name: "Chia Seeds",
                dv: "29%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                name: "Flax Seeds",
                dv: "13%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.oysters,
                name: "Oysters",
                value: false,
                size: {
                    value: 6,
                    unit: "units"
                },
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "99%"
            },
            {
                food: Food_1.getFood.shrimps,
                name: "Shrimps",
                value: false,
                size: {
                    value: 12,
                    unit: "Large"
                },
                dv: "77%"
            }
        ]
    },
    zinc: {
        type: "Zinc",
        veg: [
            {
                food: Food_1.getFood.cookedSpinach,
                name: "Cooked Spinach",
                dv: "12%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "27%"
            },
            {
                food: Food_1.getFood.cashews,
                name: "Cashews",
                dv: "14%"
            },
            {
                food: Food_1.getFood.oatmeal,
                name: "Oatmeal",
                dv: "21%"
            },
            {
                food: Food_1.getFood.chickpeas,
                name: "Chickpeas",
                dv: "23%"
            },
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "36%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "23%"
            },
            {
                food: Food_1.getFood.cerealKalloggsSmartStartStrong,
                name: "Cereal Kalloggs Smart Start Strong",
                dv: "136%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.oysters,
                name: "Oysters",
                value: false,
                size: {
                    value: 6,
                    unit: "units"
                },
                dv: "93%"
            },
            {
                food: Food_1.getFood.clams,
                name: "Clams",
                value: false,
                size: {
                    value: 6,
                    unit: "units"
                },
                dv: "47%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "52%"
            },
            {
                food: Food_1.getFood.chicken,
                name: "Chicken",
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "49%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "32%"
            },
            {
                food: Food_1.getFood.yogurt,
                name: "Yogurt",
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
                name: "All Bran Wheat Flaks",
                dv: "109%"
            },
            {
                food: Food_1.getFood.apricots,
                name: "Apricots",
                dv: "42%"
            },
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
                dv: "36%"
            },
            {
                food: Food_1.getFood.quinoa,
                name: "Quinoa",
                dv: "15%"
            },
            {
                food: Food_1.getFood.mushrooms,
                dv: "15%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "14%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.oysters,
                name: "Oysters",
                value: false,
                size: {
                    value: 6,
                    unit: "units"
                },
                dv: "43%"
            },
            {
                food: Food_1.getFood.beef,
                dv: "52%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                name: "Chia Seeds",
                dv: "12%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                name: "Sesame Seeds",
                dv: "14%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
                dv: "13%"
            }
        ]
    },
    lycopene: {
        type: "Lycopene",
        veg: [
            {
                food: Food_1.getFood.guava,
                name: "Guava",
                dv: "6000%"
            },
            {
                food: Food_1.getFood.tomatoes,
                name: "Tomatoes",
                dv: "500%"
            },
            {
                food: Food_1.getFood.watermelon,
                name: "Watermelon",
                dv: "5000%"
            },
            {
                food: Food_1.getFood.grapefruit,
                name: "Grapefruit",
                dv: "500%"
            },
            {
                food: Food_1.getFood.papaya,
                name: "Papaya",
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
                name: "Chia Seeds",
                dv: "14%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                name: "Sesame Seeds",
                dv: "22%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "18%"
            },
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "132%"
            },
            {
                food: Food_1.getFood.kale,
                name: "Kale",
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
                name: "Yogurt",
                dv: "38%"
            },
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
                dv: "16%"
            },
            {
                food: Food_1.getFood.ladyFinger,
                name: "Lady Finger",
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "9%"
            }
        ]
    },
    copper: {
        type: "Copper",
        veg: [
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "106%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                name: "Sweet Patatoes",
                dv: "79%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                name: "Sesame Seeds",
                dv: "78%"
            },
            {
                food: Food_1.getFood.cashews,
                name: "Cashews",
                dv: "70%"
            },
            {
                food: Food_1.getFood.chickpeas,
                name: "Chickpeas",
                dv: "64%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.oysters,
                name: "Oysters",
                value: false,
                size: {
                    value: 6,
                    unit: "units"
                },
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
                name: "Iodised Salt",
                value: false,
                size: {
                    value: 1,
                    unit: "g"
                },
                dv: "51%"
            },
            {
                food: Food_1.getFood.bakedPotatoWithPeel,
                name: "Baked Potato With Peel",
                value: false,
                size: {
                    value: null,
                    unit: null
                },
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
                name: "Seaweed",
                value: false,
                size: {
                    value: 1,
                    unit: "g"
                },
                dv: "1000%"
            },
            {
                food: Food_1.getFood.shrimps,
                name: "Shrimps",
                value: false,
                size: {
                    value: null,
                    unit: null
                },
                dv: "27%"
            }
        ]
    },
    potassium: {
        type: "Potassium",
        veg: [
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
                dv: "18%"
            },
            {
                food: Food_1.getFood.lentils,
                dv: "16%"
            },
            {
                food: Food_1.getFood.potatoes,
                name: "Potatoes",
                value: false,
                size: {
                    value: 1,
                    unit: "Medium"
                },
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
                name: "Salmon",
                dv: "23%"
            },
            {
                food: Food_1.getFood.bananas,
                name: "Bananas",
                dv: "11%"
            },
            {
                food: Food_1.getFood.tomatoes,
                name: "Tomatoes",
                dv: "11%"
            }
        ]
    },
    phosphorus: {
        type: "Phosphorus",
        veg: [
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
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
                name: "Pumpkin Seeds",
                dv: "28%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
                dv: "37%"
            },
            {
                food: Food_1.getFood.quinoa,
                name: "Quinoa",
                dv: "22%"
            },
            {
                food: Food_1.getFood.brownRice,
                name: "Brown Rice",
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "33%"
            },
            {
                food: Food_1.getFood.beef,
                name: "Beef",
                value: false,
                size: {
                    value: 1,
                    unit: "Streak"
                },
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
                name: "Cheese",
                value: false,
                size: {
                    value: null,
                    unit: null
                },
                dv: null
            },
            {
                food: Food_1.getFood.milk,
                dv: "75%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                name: "Flax Seeds",
                dv: "30%"
            },
            {
                food: Food_1.getFood.peanuts,
                name: "Peanuts",
                dv: "23%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "58%"
            },
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "212%"
            },
            {
                food: Food_1.getFood.edamame,
                name: "Edamame",
                dv: "149%"
            },
            {
                food: Food_1.getFood.oatmeal,
                name: "Oatmeal",
                dv: "33%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.chicken,
                name: "Chicken",
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
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
                name: "Cashews",
                dv: "27%"
            },
            {
                food: Food_1.getFood.pistachio,
                name: "Pistachio",
                dv: "27%"
            },
            {
                food: Food_1.getFood.eggs,
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "27%"
            }
        ]
    },
    leucine: {
        type: "Leucine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "128%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "57%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "87%"
            },
            {
                food: Food_1.getFood.pistachio,
                name: "Pistachio",
                dv: "17%"
            },
            {
                food: Food_1.getFood.peanuts,
                name: "Peanuts",
                dv: "16%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "15%"
            },
            {
                food: Food_1.getFood.yogurt,
                name: "Yogurt",
                dv: "52%"
            }
        ],
        nonVeg: [
            {
                food: Food_1.getFood.chicken,
                name: "Chicken",
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
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
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "20%"
            }
        ]
    },
    isoleucine: {
        type: "Isoleucine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
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
                name: "Pumpkin Seeds",
                dv: "26%"
            },
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
                dv: "20%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "20%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
                dv: "26%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "20%"
            },
            {
                food: Food_1.getFood.pistachio,
                name: "Pistachio",
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "191%"
            },
            {
                food: Food_1.getFood.porkChops,
                dv: "178%"
            },
            {
                food: Food_1.getFood.quinoa,
                name: "Quinoa",
                dv: "21%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                name: "Flax Seeds",
                dv: "18%"
            },
            {
                food: Food_1.getFood.peanuts,
                name: "Peanuts",
                dv: "17%"
            },
            {
                food: Food_1.getFood.oatmeal,
                name: "Oatmeal",
                dv: "19%"
            },
            {
                food: Food_1.getFood.yogurt,
                name: "Yogurt",
                dv: "55%"
            }
        ]
    },
    threonine: {
        type: "Threonine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "188%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "67%"
            },
            {
                food: Food_1.getFood.edamame,
                name: "Edamame",
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
                name: "Green Peas",
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "233%"
            },
            {
                food: Food_1.getFood.yogurt,
                name: "Yogurt",
                dv: "55%"
            },
            {
                food: Food_1.getFood.eggs,
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "29%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "26%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
                dv: "34%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "21%"
            },
            {
                food: Food_1.getFood.quinoa,
                name: "Quinoa",
                dv: "23%"
            },
            {
                food: Food_1.getFood.oatmeal,
                name: "Oatmeal",
                dv: "21%"
            }
        ]
    },
    lysine: {
        type: "Lysine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "106%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "67%"
            },
            {
                food: Food_1.getFood.edamame,
                name: "Edamame",
                dv: "91%"
            },
            {
                food: Food_1.getFood.greenPeas,
                name: "Green Peas",
                dv: "24%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "12%"
            },
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "250%"
            },
            {
                food: Food_1.getFood.yogurt,
                name: "Yogurt",
                dv: "60%"
            },
            {
                food: Food_1.getFood.eggs,
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "22%"
            },
            {
                food: Food_1.getFood.crab,
                name: "Crab",
                value: false,
                size: {
                    value: 1,
                    unit: "Crab Leg"
                },
                dv: "107%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "26%"
            },
            {
                food: Food_1.getFood.quinoa,
                name: "Quinoa",
                dv: "21%"
            },
            {
                food: Food_1.getFood.oatmeal,
                name: "Oatmeal",
                dv: "15%"
            }
        ]
    },
    methionine: {
        type: "Methionine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "73%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "59%"
            },
            {
                food: Food_1.getFood.edamame,
                name: "Edamame",
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
                name: "Green Peas",
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
                name: "Spinach",
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "195%"
            },
            {
                food: Food_1.getFood.yogurt,
                name: "Yogurt",
                dv: "57%"
            },
            {
                food: Food_1.getFood.eggs,
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "27%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                name: "Chia Seeds",
                dv: "23%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "23%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
                dv: "36%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "16%"
            },
            {
                food: Food_1.getFood.quinoa,
                name: "Quinoa",
                dv: "24%"
            },
            {
                food: Food_1.getFood.oatmeal,
                name: "Oatmeal",
                dv: "21%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                name: "Sesame Seeds",
                dv: "22%"
            },
            {
                food: Food_1.getFood.crab,
                name: "Crab",
                value: false,
                size: {
                    value: 1,
                    unit: "Crab Leg"
                },
                dv: "100%"
            },
            {
                food: Food_1.getFood.shrimps,
                name: "Shrimps",
                value: false,
                size: {
                    value: 12,
                    unit: "Large"
                },
                dv: "78%"
            }
        ]
    },
    cystine: {
        type: "Cystine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
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
                name: "Cashews",
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "199%"
            },
            {
                food: Food_1.getFood.eggs,
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "51%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                name: "Chia Seeds",
                dv: "40%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "23%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
                dv: "66%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "38%"
            },
            {
                food: Food_1.getFood.quinoa,
                name: "Quinoa",
                dv: "24%"
            },
            {
                food: Food_1.getFood.oatmeal,
                name: "Oatmeal",
                dv: "79%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                name: "Sesame Seeds",
                dv: "34%"
            }
        ]
    },
    valine: {
        type: "Valine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "120%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "60%"
            },
            {
                food: Food_1.getFood.edamame,
                name: "Edamame",
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
                name: "Green Peas",
                dv: "20%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "18%"
            },
            {
                food: Food_1.getFood.pistachio,
                name: "Pistachio",
                dv: "20%"
            },
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
                dv: "17%"
            },
            {
                food: Food_1.getFood.cashews,
                name: "Cashews",
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "155%"
            },
            {
                food: Food_1.getFood.yogurt,
                name: "Yogurt",
                dv: "64%"
            },
            {
                food: Food_1.getFood.eggs,
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "21%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                name: "Chia Seeds",
                dv: "15%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "24%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
                dv: "28%"
            },
            {
                food: Food_1.getFood.sunflowerSeeds,
                dv: "20%"
            },
            {
                food: Food_1.getFood.brownRice,
                name: "Brown Rice",
                dv: "17%"
            },
            {
                food: Food_1.getFood.oatmeal,
                name: "Oatmeal",
                dv: "21%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                name: "Flax Seeds",
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
                name: "Paneer",
                dv: "240%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "60%"
            },
            {
                food: Food_1.getFood.edamame,
                name: "Edamame",
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
                name: "Green Peas",
                dv: "36%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "35%"
            },
            {
                food: Food_1.getFood.pistachio,
                name: "Pistachio",
                dv: "37%"
            },
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
                dv: "28%"
            },
            {
                food: Food_1.getFood.broccoli,
                name: "Broccoli",
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "251%"
            },
            {
                food: Food_1.getFood.yogurt,
                dv: "88%"
            },
            {
                food: Food_1.getFood.eggs,
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "21%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                name: "Chia Seeds",
                dv: "33%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "56%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
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
                name: "Flax Seeds",
                dv: "17%"
            },
            {
                food: Food_1.getFood.shrimps,
                name: "Shrimps",
                value: false,
                size: {
                    value: 12,
                    unit: "Large"
                },
                dv: "78%"
            }
        ]
    },
    tyrosine: {
        type: "Tyrosine",
        veg: [
            {
                food: Food_1.getFood.paneer,
                name: "Paneer",
                dv: "202%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "60%"
            },
            {
                food: Food_1.getFood.edamame,
                name: "Edamame",
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
                name: "Green Peas",
                dv: "20%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "24%"
            },
            {
                food: Food_1.getFood.pistachio,
                name: "Pistachio",
                dv: "20%"
            },
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
                dv: "23%"
            },
            {
                food: Food_1.getFood.cashews,
                name: "Cashews",
                dv: "16%"
            },
            {
                food: Food_1.getFood.peanuts,
                name: "Peanuts",
                dv: "31%"
            },
            {
                food: Food_1.getFood.ladyFinger,
                name: "lady Finger",
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "224%"
            },
            {
                food: Food_1.getFood.yogurt,
                name: "Yogurt",
                dv: "49%"
            },
            {
                food: Food_1.getFood.eggs,
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "29%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                name: "Chia Seeds",
                dv: "18%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "35%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
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
                name: "Oatmeal",
                dv: "27%"
            },
            {
                food: Food_1.getFood.sesameSeeds,
                name: "Sesame Seeds",
                dv: "23%"
            },
            {
                food: Food_1.getFood.brownRice,
                name: "Brown Rice",
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
                name: "Paneer",
                dv: "155%"
            },
            {
                food: Food_1.getFood.milk,
                dv: "71%"
            },
            {
                food: Food_1.getFood.edamame,
                name: "Edamame",
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
                name: "Green Peas",
                dv: "24%"
            },
            {
                food: Food_1.getFood.sweetPotatoes,
                dv: "18%"
            },
            {
                food: Food_1.getFood.pistachio,
                name: "Pistachio",
                dv: "20%"
            },
            {
                food: Food_1.getFood.spinach,
                name: "Spinach",
                dv: "17%"
            },
            {
                food: Food_1.getFood.cashews,
                name: "Cashews",
                dv: "16%"
            },
            {
                food: Food_1.getFood.almonds,
                dv: "22%"
            },
            {
                food: Food_1.getFood.pistachio,
                name: "Pistachio",
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
                value: false,
                size: {
                    value: 175,
                    unit: "g"
                },
                dv: "290%"
            },
            {
                food: Food_1.getFood.yogurt,
                name: "Yogurt",
                dv: "50%"
            },
            {
                food: Food_1.getFood.eggs,
                name: "Eggs",
                value: false,
                size: {
                    value: 1,
                    unit: "Large"
                },
                dv: "21%"
            },
            {
                food: Food_1.getFood.chiaSeeds,
                name: "Chia Seeds",
                dv: "22%"
            },
            {
                food: Food_1.getFood.pumpkinSeeds,
                name: "Pumpkin Seeds",
                dv: "31%"
            },
            {
                food: Food_1.getFood.hempSeeds,
                name: "Hemp Seeds",
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
                name: "Oatmeal",
                dv: "18%"
            },
            {
                food: Food_1.getFood.brownRice,
                name: "Brown Rice",
                dv: "19%"
            },
            {
                food: Food_1.getFood.flaxSeeds,
                name: "Flax Seeds",
                dv: "19%"
            },
            {
                food: Food_1.getFood.quinoa,
                name: "Quinoa",
                dv: "34%"
            }
        ]
    }
};
