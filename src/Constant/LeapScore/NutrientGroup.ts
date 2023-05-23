import { getFood } from "../../Constant/LeapScore/Food"

export const NutrientGroups = {

    vitaminC: {
        name: "Vitamin C",
        veg: [
            {
                food: getFood.guava,
                dv: "254%"
            },
            {
                food: getFood.kiwi,
                dv: "185%"
            },
            {
                food: getFood.bellPappers,
                dv: "169%"
            },
            {
                food: getFood.strawberries,
                dv: "108%"
            },
            {
                food: getFood.oranges,
                dv: "106%"
            }
        ],
        nonVeg: [
            {
                food: getFood.papaya,
                dv: "98%"
            },
            {
                food: getFood.broccoli,
                dv: "90%"
            },
            {
                food: getFood.tomatoes,
                dv: "61%"
            }
        ]

    },
    vitaminA: {
        name: "Vitamin A",
        veg: [
            {
                food: getFood.carrots,
                dv: "148%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "122%"
            },
            {
                food: getFood.spinach,
                dv: "105%"
            },
            {
                food: getFood.muskMelon,
                dv: "33%"
            },
            {
                food: getFood.lettuce,
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: getFood.redBellPappers,
                dv: "22%"
            },
            {
                food: getFood.brocolli,
                dv: "13%"
            },
            {
                food: getFood.driedApricots,
                dv: "20%"
            }
        ]
    },
    betaCarotene: {
        type: "Beta-carotene",
        veg: [
            {
                food: getFood.carrots,
                dv: "120%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "213%"
            },
            {
                food: getFood.spinach,
                dv: "105%"
            },
            {
                food: getFood.muskMelon,
                dv: "33%"
            },
            {
                food: getFood.lettuce,
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: getFood.redBellPappers,
                dv: "22%"
            },
            {
                food: getFood.brocolli,
                dv: "13%"
            },
            {
                food: getFood.driedApricots,
                dv: "20%"
            }
        ]
    },
    vitaminB1Thiamin: {
        type: "Vitamin B1 Thiamin",
        veg: [
            {
                food: getFood.flaxSeeds,
                dv: "39%"
            },
            {
                food: getFood.greenPeas,
                dv: "35%"
            },
            {
                food: getFood.paneer,
                dv: "33%"
            },
            {
                food: getFood.brownRice,
                dv: "30%"
            },
            {
                food: getFood.asparagus,
                dv: "24%"
            }
        ],
        nonVeg: [
            {
                food: getFood.porkChops,
                dv: "96%"
            },
            {
                food: getFood.fishSalmon,
                dv: "48%"
            },
            {
                food: getFood.mussels,
                dv: "21%"
            }
        ]
    },
    vitaminB2Riboflavin: {
        type: "Vitamin B2 Riboflavin",
        veg: [
            {
                food: getFood.milk,
                dv: "69%"
            },
            {
                food: getFood.mushrooms,
                dv: "38%"
            },
            {
                food: getFood.paneer,
                dv: "76%"
            },
            {
                food: getFood.spinach,
                dv: "33%"
            },
            {
                food: getFood.almonds,
                dv: "25%"
            }
        ],
        nonVeg: [
            {
                food: getFood.beef,
                dv: "112%"
            },
            {
                food: getFood.fishSalmon,
                dv: "64%"
            },
            {
                food: getFood.porkChops,
                dv: "36%"
            },
            {
                food: getFood.leanRoastHam,
                dv: "36%"
            },
            {
                food: getFood.eggs,
                dv: "20%"
            }
        ]
    },
    vitaminB3Niacin: {
        type: "Vitamin B3 Niacin",
        veg: [
            {
                food: getFood.brownRice,
                dv: "32%"
            },
            {
                food: getFood.mushrooms,
                dv: "47%"
            },
            {
                food: getFood.peanuts,
                dv: "25%"
            },
            {
                food: getFood.greenPeas,
                dv: "33%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: getFood.chickenBreast,
                dv: "100%"
            },
            {
                food: getFood.fishSalmon,
                dv: "108%"
            },
            {
                food: getFood.porkChops,
                dv: "85%"
            },
            {
                food: getFood.beef,
                dv: "60%"
            }
        ]
    },
    vitaminB5Pantothenic: {
        type: "Vitamin B5 Pantothenic",
        veg: [
            {
                food: getFood.milk,
                dv: "36%"
            },
            {
                food: getFood.mushrooms,
                dv: "38%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "40%"
            },
            {
                food: getFood.almonds,
                dv: "25%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "26%"
            },
            {
                food: getFood.lentils,
                dv: "25%"
            }
        ],
        nonVeg: [
            {
                food: getFood.chickenBreast,
                dv: "54%"
            },
            {
                food: getFood.fishSalmon,
                dv: "65%"
            },
            {
                food: getFood.porkChops,
                dv: "34%"
            },
            {
                food: getFood.beef,
                dv: "45%"
            }
        ]
    },
    vitaminB6: {
        type: "Vitamin B6",
        veg: [
            {
                food: getFood.paneer,
                dv: "66%"
            },
            {
                food: getFood.potatoes,
                dv: "32%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "40%"
            },
            {
                food: getFood.bananas,
                dv: "32%"
            },
            {
                food: getFood.pistachio,
                dv: "28%"
            }
        ],
        nonVeg: [
            {
                food: getFood.chickenBreast,
                dv: "92%"
            },
            {
                food: getFood.fishSalmon,
                dv: "94%"
            },
            {
                food: getFood.porkChops,
                dv: "54%"
            },
            {
                food: getFood.beef,
                dv: "48%"
            }
        ]
    },
    vitaminB9Folate: {
        type: "Vitamin B9 Folate",
        veg: [
            {
                food: getFood.edamame,
                dv: "121%"
            },
            {
                food: getFood.asparagus,
                dv: "67%"
            },
            {
                food: getFood.lettuce,
                dv: "16%"
            },
            {
                food: getFood.spinach,
                dv: "36%"
            },
            {
                food: getFood.brocolli,
                dv: "42%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "26%"
            },
            {
                food: getFood.lentils,
                dv: "90%"
            },
            {
                food: getFood.mangose,
                dv: "28%"
            }
        ],
        nonVeg: [
            {
                food: getFood.oranges,
                dv: "14%"
            }
        ]
    },
    vitaminB12: {
        type: "Vitamin B12",
        veg: [
            {
                food: getFood.allBranWheatFlaks,
                dv: "325%"
            },
            {
                food: getFood.paneer,
                dv: "137%"
            },
            {
                food: getFood.milk,
                dv: "108%"
            }
        ],
        nonVeg: [
            {
                food: getFood.paneer,
                dv: "137%"
            },
            {
                food: getFood.milk,
                dv: "108%"
            },
            {
                food: getFood.eggs,
                dv: "23%"
            },
            {
                food: getFood.beef,
                dv: "533%"
            },
            {
                food: getFood.crab,
                dv: "642%"
            },
            {
                food: getFood.clams,
                dv: "3502%"
            }
        ]
    },
    choline: {
        type: "Choline",
        veg: [
            {
                food: getFood.milk,
                dv: "15%"
            },
            {
                food: getFood.broccoli,
                dv: "11%"
            },
            {
                food: getFood.greenPeas,
                dv: "9%"
            }
        ],
        nonVeg: [
            {
                food: getFood.chickenBreast,
                dv: "36%"
            },
            {
                food: getFood.fishSalmon,
                dv: "35%"
            },
            {
                food: getFood.porkChops,
                dv: "28%"
            },
            {
                food: getFood.eggs,
                dv: "27"
            },
            {
                food: getFood.beef,
                dv: "24%"
            },
            {
                food: getFood.shrimps,
                dv: "21%"
            }
        ]
    },
    vitaminE: {
        type: "Vitamin E",
        veg: [
            {
                food: getFood.sunflowerSeeds,
                dv: "49%"
            },
            {
                food: getFood.almonds,
                dv: "49%"
            },
            {
                food: getFood.peanuts,
                dv: "9%"
            },
            {
                food: getFood.spinach,
                dv: "25%"
            },
            {
                food: getFood.kiwi,
                dv: "18%"
            },
            {
                food: getFood.broccoli,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: getFood.shrimps,
                dv: "12%"
            }
        ]
    },
    vitaminK: {
        type: "Vitamin K",
        veg: [
            {
                food: getFood.cabbage,
                dv: "136%"
            },
            {
                food: getFood.asparagus,
                dv: "76%"
            },
            {
                food: getFood.brusselSprouts,
                dv: "182%"
            },
            {
                food: getFood.broccoli,
                dv: "183%"
            },
            {
                food: getFood.kiwi,
                dv: "60%"
            },
            {
                food: getFood.ladyFinger,
                dv: "53%"
            },
            {
                food: getFood.lettuce,
                dv: "47%"
            }
        ],
        nonVeg: []
    },
    magnesium: {
        type: "Magnesium",
        veg: [
            {
                food: getFood.cookedSpinach,
                dv: "37%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "37%"
            },
            {
                food: getFood.brownRice,
                dv: "20%"
            },
            {
                food: getFood.quinoa,
                dv: "28%"
            },
            {
                food: getFood.yogurt,
                dv: "11%"
            },
            {
                food: getFood.flaxSeeds,
                dv: "27%"
            },
            {
                food: getFood.cashews,
                dv: "20%"
            },
            {
                food: getFood.almonds,
                dv: "18%"
            }
        ],
        nonVeg: [
            {
                food: getFood.bananas,
                dv: "10%"
            },
            {
                food: getFood.hempSeeds,
                dv: "47%"
            },
            {
                food: getFood.cashews,
                dv: "20%"
            },
            {
                food: getFood.walnuts,
                dv: "12%"
            },
            {
                food: getFood.milk,
                dv: "12%"
            }
        ]
    },
    selenium: {
        type: "Selenium",
        veg: [
            {
                food: getFood.brazilNuts,
                dv: "990%"
            },
            {
                food: getFood.paneer,
                dv: "80%"
            },
            {
                food: getFood.oatmeal,
                dv: "23%"
            },
            {
                food: getFood.brownRice,
                dv: "21%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "41%"
            },
            {
                food: getFood.chiaSeeds,
                dv: "29%"
            },
            {
                food: getFood.flaxSeeds,
                dv: "13%"
            }
        ],
        nonVeg: [
            {
                food: getFood.oysters,
                dv: "334%"
            },
            {
                food: getFood.porkChops,
                dv: "147%"
            },
            {
                food: getFood.beef,
                dv: "111%"
            },
            {
                food: getFood.chickenBreast,
                dv: "99%"
            },
            {
                food: getFood.shrimps,
                dv: "77%"
            }
        ]
    },
    zinc: {
        type: "Zinc",
        veg: [
            {
                food: getFood.cookedSpinach,
                dv: "12%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "27%"
            },
            {
                food: getFood.cashews,
                dv: "14%"
            },
            {
                food: getFood.oatmeal,
                dv: "21%"
            },
            {
                food: getFood.chickpeas,
                dv: "23%"
            },
            {
                food: getFood.paneer,
                dv: "36%"
            },
            {
                food: getFood.lentils,
                dv: "23%"
            },
            {
                food: getFood.cerealKalloggsSmartStartStrong,
                dv: "136%"
            }
        ],
        nonVeg: [
            {
                food: getFood.oysters,
                dv: "93%"
            },
            {
                food: getFood.clams,
                dv: "47%"
            },
            {
                food: getFood.beef,
                dv: "52%"
            },
            {
                food: getFood.chicken,
                dv: "49%"
            },
            {
                food: getFood.porkChops,
                dv: "32%"
            },
            {
                food: getFood.yogurt,
                dv: "22%"
            },
            {
                food: getFood.milk,
                dv: "16%"
            }
        ]
    },
    iron: {
        type: "Iron",
        veg: [
            {
                food: getFood.allBranWheatFlaks,
                dv: "109%"
            },
            {
                food: getFood.apricots,
                dv: "42%"
            },
            {
                food: getFood.spinach,
                dv: "36%"
            },
            {
                food: getFood.quinoa,
                dv: "15%"
            },
            {
                food: getFood.mushrooms,
                dv: "15%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "14%"
            }
        ],
        nonVeg: [
            {
                food: getFood.oysters,
                dv: "43%"
            },
            {
                food: getFood.beef,
                dv: "52%"
            },
            {
                food: getFood.chiaSeeds,
                dv: "12%"
            },
            {
                food: getFood.sesameSeeds,
                dv: "14%"
            },
            {
                food: getFood.hempSeeds,
                dv: "13%"
            }
        ]
    },
    lycopene: {
        type: "Lycopene",
        veg: [
            {
                food: getFood.guava,
                dv: "6000%"
            },
            {
                food: getFood.tomatoes,
                dv: "500%"
            },
            {
                food: getFood.watermelon,
                dv: "5000%"
            },
            {
                food: getFood.grapefruit,
                dv: "500%"
            },
            {
                food: getFood.papaya,
                dv: "2000%"
            }
        ],
        nonVeg: []
    },
    calcium: {
        type: "Calcium",
        veg: [
            {
                food: getFood.chiaSeeds,
                dv: "14%"
            },
            {
                food: getFood.sesameSeeds,
                dv: "22%"
            },
            {
                food: getFood.almonds,
                dv: "18%"
            },
            {
                food: getFood.paneer,
                dv: "132%"
            },
            {
                food: getFood.kale,
                dv: "13%"
            }
        ],
        nonVeg: [
            {
                food: getFood.milk,
                dv: "46%"
            },
            {
                food: getFood.yogurt,
                dv: "38%"
            },
            {
                food: getFood.spinach,
                dv: "16%"
            },
            {
                food: getFood.ladyFinger,
                dv: "9%"
            }
        ]
    },
    copper: {
        type: "Copper",
        veg: [
            {
                food: getFood.paneer,
                dv: "106%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "79%"
            },
            {
                food: getFood.sesameSeeds,
                dv: "78%"
            },
            {
                food: getFood.cashews,
                dv: "70%"
            },
            {
                food: getFood.chickpeas,
                dv: "64%"
            }
        ],
        nonVeg: [
            {
                food: getFood.oysters,
                dv: "419%"
            },
            {
                food: getFood.mushrooms,

                dv: "144%"
            },
            {
                food: getFood.fishSalmon,
                dv: "61%"
            }
        ]
    },
    iodine: {
        type: "Iodine",
        veg: [
            {
                food: getFood.iodisedSalt,
                value: false,
                size: {
                    value: 1,
                    unit: "g"
                },
                dv: "51%"
            },
            {
                food: getFood.bakedPotatoWithPeel,
                dv: "40%"
            },
            {
                food: getFood.milk,
                dv: "37%"
            }
        ],
        nonVeg: [
            {
                food: getFood.seaweed,
                dv: "1000%"
            },
            {
                food: getFood.shrimps,
                dv: "27%"
            }
        ]
    },
    potassium: {
        type: "Potassium",
        veg: [
            {
                food: getFood.spinach,
                dv: "18%"
            },
            {
                food: getFood.lentils,
                dv: "16%"
            },
            {
                food: getFood.potatoes,
                dv: "20%"
            },
            {
                food: getFood.milk,
                dv: "16%"
            },
            {
                food: getFood.mushrooms,
                dv: "12%"
            }
        ],
        nonVeg: [
            {
                food: getFood.salmon,
                dv: "23%"
            },
            {
                food: getFood.bananas,
                dv: "11%"
            },
            {
                food: getFood.tomatoes,
                dv: "11%"
            }
        ]
    },
    phosphorus: {
        type: "Phosphorus",
        veg: [
            {
                food: getFood.paneer,
                dv: "38%"
            },
            {
                food: getFood.milk,
                dv: "33%"
            },
            {
                food: getFood.lentils,
                dv: "29%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "28%"
            },
            {
                food: getFood.hempSeeds,
                dv: "37%"
            },
            {
                food: getFood.quinoa,
                dv: "22%"
            },
            {
                food: getFood.brownRice,
                dv: "12%"
            }
        ],
        nonVeg: [
            {
                food: getFood.porkChops,
                dv: "41%"
            },
            {
                food: getFood.chickenBreast,
                dv: "33%"
            },
            {
                food: getFood.beef,
                dv: "27%"
            }
        ]
    },
    // Essential Amino Acids
    trytophan: {
        type: "Trytophan",
        veg: [
            {
                food: getFood.cheese,
                dv: null
            },
            {
                food: getFood.milk,
                dv: "75%"
            },
            {
                food: getFood.flaxSeeds,
                dv: "30%"
            },
            {
                food: getFood.peanuts,
                dv: "23%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "58%"
            },
            {
                food: getFood.paneer,
                dv: "212%"
            },
            {
                food: getFood.edamame,
                dv: "149%"
            },
            {
                food: getFood.oatmeal,
                dv: "33%"
            }
        ],
        nonVeg: [
            {
                food: getFood.chicken,
                dv: "245%"
            },
            {
                food: getFood.porkChops,
                dv: "224%"
            },
            {
                food: getFood.beef,
                dv: "227%"
            },
            {
                food: getFood.cashews,
                dv: "27%"
            },
            {
                food: getFood.pistachio,
                dv: "27%"
            },
            {
                food: getFood.eggs,
                dv: "27%"
            }
        ]
    },
    leucine: {
        type: "Leucine",
        veg: [
            {
                food: getFood.paneer,
                dv: "128%"
            },
            {
                food: getFood.milk,
                dv: "57%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "87%"
            },
            {
                food: getFood.pistachio,
                dv: "17%"
            },
            {
                food: getFood.peanuts,
                dv: "16%"
            },
            {
                food: getFood.almonds,
                dv: "15%"
            },
            {
                food: getFood.yogurt,
                dv: "52%"
            }
        ],
        nonVeg: [
            {
                food: getFood.chicken,
                dv: "189%"
            },
            {
                food: getFood.beef,
                dv: "183%"
            },
            {
                food: getFood.porkChops,
                dv: "165%"
            },
            {
                food: getFood.eggs,
                dv: "20%"
            }
        ]
    },
    isoleucine: {
        type: "Isoleucine",
        veg: [
            {
                food: getFood.paneer,
                dv: "153%"
            },
            {
                food: getFood.milk,
                dv: "61%"
            },
            {
                food: getFood.lentils,
                dv: "55%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: getFood.spinach,
                dv: "20%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "20%"
            },
            {
                food: getFood.hempSeeds,
                dv: "26%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "20%"
            },
            {
                food: getFood.pistachio,
                dv: "19%"
            }
        ],
        nonVeg: [
            {
                food: getFood.beef,
                dv: "192%"
            },
            {
                food: getFood.chickenBreast,
                dv: "191%"
            },
            {
                food: getFood.porkChops,
                dv: "178%"
            },
            {
                food: getFood.quinoa,
                dv: "21%"
            },
            {
                food: getFood.flaxSeeds,
                dv: "18%"
            },
            {
                food: getFood.peanuts,
                dv: "17%"
            },
            {
                food: getFood.oatmeal,
                dv: "19%"
            },
            {
                food: getFood.yogurt,
                dv: "55%"
            }
        ]
    },
    threonine: {
        type: "Threonine",
        veg: [
            {
                food: getFood.paneer,
                dv: "188%"
            },
            {
                food: getFood.milk,
                dv: "67%"
            },
            {
                food: getFood.edamame,
                dv: "118%"
            },
            {
                food: getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "61%"
            },
            {
                food: getFood.lentils,
                dv: "55%"
            },
            {
                food: getFood.greenPeas,
                dv: "31%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "24%"
            },
            {
                food: getFood.carrots,
                name: "Carrots",
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: getFood.beef,
                dv: "258%"
            },
            {
                food: getFood.porkChops,
                dv: "221%"
            },
            {
                food: getFood.chickenBreast,
                dv: "233%"
            },
            {
                food: getFood.yogurt,
                dv: "55%"
            },
            {
                food: getFood.eggs,
                dv: "29%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: getFood.hempSeeds,
                dv: "34%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "21%"
            },
            {
                food: getFood.quinoa,
                dv: "23%"
            },
            {
                food: getFood.oatmeal,
                dv: "21%"
            }
        ]
    },
    lysine: {
        type: "Lysine",
        veg: [
            {
                food: getFood.paneer,
                dv: "106%"
            },
            {
                food: getFood.milk,
                dv: "67%"
            },
            {
                food: getFood.edamame,
                dv: "91%"
            },
            {
                food: getFood.greenPeas,
                dv: "24%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "12%"
            },
            {
                food: getFood.spinach,
                dv: "16%"
            }
        ],
        nonVeg: [
            {
                food: getFood.beef,
                dv: "268%"
            },
            {
                food: getFood.porkChops,
                dv: "223%"
            },
            {
                food: getFood.chickenBreast,
                dv: "250%"
            },
            {
                food: getFood.yogurt,
                dv: "60%"
            },
            {
                food: getFood.eggs,
                dv: "22%"
            },
            {
                food: getFood.crab,
                dv: "107%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: getFood.quinoa,
                dv: "21%"
            },
            {
                food: getFood.oatmeal,
                dv: "15%"
            }
        ]
    },
    methionine: {
        type: "Methionine",
        veg: [
            {
                food: getFood.paneer,
                dv: "73%"
            },
            {
                food: getFood.milk,
                dv: "59%"
            },
            {
                food: getFood.edamame,
                dv: "118%"
            },
            {
                food: getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "35%"
            },
            {
                food: getFood.lentils,
                dv: "55%"
            },
            {
                food: getFood.greenPeas,
                dv: "18%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "17%"
            },
            {
                food: getFood.carrots,
                name: "Carrots",
                dv: "23%"
            },
            {
                food: getFood.spinach,
                dv: "14%"
            }
        ],
        nonVeg: [
            {
                food: getFood.beef,
                dv: "211%"
            },
            {
                food: getFood.porkChops,
                dv: "198%"
            },
            {
                food: getFood.chickenBreast,
                dv: "195%"
            },
            {
                food: getFood.yogurt,
                dv: "57%"
            },
            {
                food: getFood.eggs,
                dv: "27%"
            },
            {
                food: getFood.chiaSeeds,
                dv: "23%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "23%"
            },
            {
                food: getFood.hempSeeds,
                dv: "36%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "16%"
            },
            {
                food: getFood.quinoa,
                dv: "24%"
            },
            {
                food: getFood.oatmeal,
                dv: "21%"
            },
            {
                food: getFood.sesameSeeds,
                dv: "22%"
            },
            {
                food: getFood.crab,
                dv: "100%"
            },
            {
                food: getFood.shrimps,
                dv: "78%"
            }
        ]
    },
    cystine: {
        type: "Cystine",
        veg: [
            {
                food: getFood.paneer,
                dv: "50%"
            },
            {
                food: getFood.milk,
                dv: "67%"
            },
            {
                food: getFood.milk,
                dv: "59%"
            },
            {
                food: getFood.lentils,
                dv: "81%"
            },
            {
                food: getFood.carrots,
                name: "Carrots",
                dv: "21%"
            },
            {
                food: getFood.cashews,
                dv: "39%"
            }
        ],
        nonVeg: [
            {
                food: getFood.beef,
                dv: "204%"
            },
            {
                food: getFood.porkChops,
                dv: "207%"
            },
            {
                food: getFood.chickenBreast,
                dv: "199%"
            },
            {
                food: getFood.eggs,
                dv: "51%"
            },
            {
                food: getFood.chiaSeeds,
                dv: "40%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "23%"
            },
            {
                food: getFood.hempSeeds,
                dv: "66%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "38%"
            },
            {
                food: getFood.quinoa,
                dv: "24%"
            },
            {
                food: getFood.oatmeal,
                dv: "79%"
            },
            {
                food: getFood.sesameSeeds,
                dv: "34%"
            }
        ]
    },
    valine: {
        type: "Valine",
        veg: [
            {
                food: getFood.paneer,
                dv: "120%"
            },
            {
                food: getFood.milk,
                dv: "60%"
            },
            {
                food: getFood.edamame,
                dv: "79%"
            },
            {
                food: getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "49%"
            },
            {
                food: getFood.lentils,
                dv: "49%"
            },
            {
                food: getFood.milk,
                dv: "67%"
            },
            {
                food: getFood.greenPeas,
                dv: "20%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "18%"
            },
            {
                food: getFood.pistachio,
                dv: "20%"
            },
            {
                food: getFood.spinach,
                dv: "17%"
            },
            {
                food: getFood.cashews,
                dv: "16%"
            }
        ],
        nonVeg: [
            {
                food: getFood.beef,
                dv: "156%"
            },
            {
                food: getFood.porkChops,
                dv: "146%"
            },
            {
                food: getFood.chickenBreast,
                dv: "155%"
            },
            {
                food: getFood.yogurt,
                dv: "64%"
            },
            {
                food: getFood.eggs,
                dv: "21%"
            },
            {
                food: getFood.chiaSeeds,
                dv: "15%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "24%"
            },
            {
                food: getFood.hempSeeds,
                dv: "28%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "20%"
            },
            {
                food: getFood.brownRice,
                dv: "17%"
            },
            {
                food: getFood.oatmeal,
                dv: "21%"
            },
            {
                food: getFood.flaxSeeds,
                dv: "17%"
            },
            {
                food: getFood.millets,
                name: "Millets",
                dv: "18%"
            }
        ]
    },
    phenylalanine: {
        type: "Phenylalanine",
        veg: [
            {
                food: getFood.paneer,
                dv: "240%"
            },
            {
                food: getFood.milk,
                dv: "60%"
            },
            {
                food: getFood.edamame,
                dv: "171%"
            },
            {
                food: getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "103%"
            },
            {
                food: getFood.lentils,
                dv: "101%"
            },
            {
                food: getFood.milk,
                dv: "98%"
            },
            {
                food: getFood.greenPeas,
                dv: "36%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "35%"
            },
            {
                food: getFood.pistachio,
                dv: "37%"
            },
            {
                food: getFood.spinach,
                dv: "28%"
            },
            {
                food: getFood.broccoli,
                dv: "21%"
            },
            {
                food: getFood.almonds,
                dv: "31%"
            }
        ],
        nonVeg: [
            {
                food: getFood.beef,
                dv: "262%"
            },
            {
                food: getFood.porkChops,
                dv: "250%"
            },
            {
                food: getFood.chickenBreast,
                dv: "251%"
            },
            {
                food: getFood.yogurt,
                dv: "88%"
            },
            {
                food: getFood.eggs,
                dv: "21%"
            },
            {
                food: getFood.chiaSeeds,
                dv: "33%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "56%"
            },
            {
                food: getFood.hempSeeds,
                dv: "47%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "37%"
            },
            {
                food: getFood.quinoa,
                dv: "39%"
            },
            {
                food: getFood.oatmeal,

                dv: "38%"
            },
            {
                food: getFood.brownRice,

                dv: "31%"
            },
            {
                food: getFood.flaxSeeds,
                dv: "17%"
            },
            {
                food: getFood.shrimps,
                dv: "78%"
            }
        ]
    },
    tyrosine: {
        type: "Tyrosine",
        veg: [
            {
                food: getFood.paneer,
                dv: "202%"
            },
            {
                food: getFood.milk,
                dv: "60%"
            },
            {
                food: getFood.edamame,
                dv: "124%"
            },
            {
                food: getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "49%"
            },
            {
                food: getFood.lentils,
                dv: "49%"
            },
            {
                food: getFood.milk,
                dv: "95%"
            },
            {
                food: getFood.greenPeas,
                dv: "20%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "24%"
            },
            {
                food: getFood.pistachio,
                dv: "20%"
            },
            {
                food: getFood.spinach,
                dv: "23%"
            },
            {
                food: getFood.cashews,
                dv: "16%"
            },
            {
                food: getFood.peanuts,
                dv: "31%"
            },
            {
                food: getFood.ladyFinger,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: getFood.beef,
                dv: "248%"
            },
            {
                food: getFood.porkChops,
                dv: "239%"
            },
            {
                food: getFood.chickenBreast,
                dv: "224%"
            },
            {
                food: getFood.yogurt,
                dv: "49%"
            },
            {
                food: getFood.eggs,
                dv: "29%"
            },
            {
                food: getFood.chiaSeeds,
                dv: "18%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "35%"
            },
            {
                food: getFood.hempSeeds,
                dv: "41%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "18%"
            },
            {
                food: getFood.salmon,
                name: "Salmon",
                dv: "235%"
            },
            {
                food: getFood.oatmeal,
                dv: "27%"
            },
            {
                food: getFood.sesameSeeds,
                dv: "23%"
            },
            {
                food: getFood.brownRice,
                dv: "19%"
            },
            {
                food: getFood.millets,
                name: "Millets",
                dv: "21%"
            }
        ]
    },
    histidine: {
        type: "Histidine",
        veg: [
            {
                food: getFood.paneer,
                dv: "155%"
            },
            {
                food: getFood.milk,
                dv: "71%"
            },
            {
                food: getFood.edamame,
                dv: "79%"
            },
            {
                food: getFood.kidneyBeans,
                name: "Kidney Beans",
                dv: "67%"
            },
            {
                food: getFood.lentils,
                dv: "72%"
            },
            {
                food: getFood.milk,
                dv: "67%"
            },
            {
                food: getFood.greenPeas,
                dv: "24%"
            },
            {
                food: getFood.sweetPotatoes,
                dv: "18%"
            },
            {
                food: getFood.pistachio,
                dv: "20%"
            },
            {
                food: getFood.spinach,
                dv: "17%"
            },
            {
                food: getFood.cashews,
                dv: "16%"
            },
            {
                food: getFood.almonds,
                dv: "22%"
            },
            {
                food: getFood.pistachio,
                dv: "22%"
            }
        ],
        nonVeg: [
            {
                food: getFood.beef,
                dv: "314%"
            },
            {
                food: getFood.porkChops,
                dv: "318%"
            },
            {
                food: getFood.chickenBreast,
                dv: "290%"
            },
            {
                food: getFood.yogurt,
                dv: "50%"
            },
            {
                food: getFood.eggs,
                dv: "21%"
            },
            {
                food: getFood.chiaSeeds,
                dv: "22%"
            },
            {
                food: getFood.pumpkinSeeds,
                dv: "31%"
            },
            {
                food: getFood.hempSeeds,
                dv: "39%"
            },
            {
                food: getFood.sunflowerSeeds,
                dv: "22%"
            },
            {
                food: getFood.salmon,
                name: "Salmon",
                dv: "182%"
            },
            {
                food: getFood.oatmeal,
                dv: "18%"
            },
            {
                food: getFood.brownRice,
                dv: "19%"
            },
            {
                food: getFood.flaxSeeds,
                dv: "19%"
            },
            {
                food: getFood.quinoa,
                dv: "34%"
            }
        ]
    }
}