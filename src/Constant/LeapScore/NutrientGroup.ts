import { food } from "./Food"
console.log(food)
export const NutrientGroups = {
    vitaminC: {
        name: "Vitamin C",
        veg: [
            {
                food: food.guava,
                dv: "254%"
            },
            {
                food: food.kiwi,
                dv: "185%"
            },
            {
                food: food.bellPappers,
                dv: "169%"
            },
            {
                food: food.strawberries,
                dv: "108%"
            },
            {
                food: food.oranges,
                dv: "106%"
            }
        ],
        nonVeg: [
            {
                food: food.papaya,
                dv: "98%"
            },
            {
                food: food.broccoli,
                dv: "90%"
            },
            {
                food: food.tomatoes,
                dv: "61%"
            }
        ]

    },
    vitaminA: {
        name: "Vitamin A",
        veg: [
            {
                food: food.carrots,
                dv: "148%"
            },
            {
                food: food.sweetPotatoes,
                dv: "122%"
            },
            {
                food: food.spinach,
                dv: "105%"
            },
            {
                food: food.muskMelon,
                dv: "33%"
            },
            {
                food: food.lettuce,
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: food.redBellPappers,
                dv: "22%"
            },
            {
                food: food.brocolli,
                dv: "13%"
            },
            {
                food: food.driedApricots,
                dv: "20%"
            }
        ]
    },
    betaCarotene: {
        name: "Beta-carotene",
        veg: [
            {
                food: food.carrots,
                dv: "120%"
            },
            {
                food: food.sweetPotatoes,
                dv: "213%"
            },
            {
                food: food.spinach,
                dv: "105%"
            },
            {
                food: food.muskMelon,
                dv: "33%"
            },
            {
                food: food.lettuce,
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: food.redBellPappers,
                dv: "22%"
            },
            {
                food: food.brocolli,
                dv: "13%"
            },
            {
                food: food.driedApricots,
                dv: "20%"
            }
        ]
    },
    vitaminB1Thiamin: {
        name: "Vitamin B1 Thiamin",
        veg: [
            {
                food: food.flaxSeeds,
                dv: "39%"
            },
            {
                food: food.greenPeas,
                dv: "35%"
            },
            {
                food: food.paneer,
                dv: "33%"
            },
            {
                food: food.brownRice,
                dv: "30%"
            },
            {
                food: food.asparagus,
                dv: "24%"
            }
        ],
        nonVeg: [
            {
                food: food.porkChops,
                dv: "96%"
            },
            {
                food: food.fishSalmon,
                dv: "48%"
            },
            {
                food: food.mussels,
                dv: "21%"
            }
        ]
    },
    vitaminB2Riboflavin: {
        name: "Vitamin B2 Riboflavin",
        veg: [
            {
                food: food.milk,
                dv: "69%"
            },
            {
                food: food.mushrooms,
                dv: "38%"
            },
            {
                food: food.paneer,
                dv: "76%"
            },
            {
                food: food.spinach,
                dv: "33%"
            },
            {
                food: food.almonds,
                dv: "25%"
            }
        ],
        nonVeg: [
            {
                food: food.beef,
                dv: "112%"
            },
            {
                food: food.fishSalmon,
                dv: "64%"
            },
            {
                food: food.porkChops,
                dv: "36%"
            },
            {
                food: food.leanRoastHam,
                dv: "36%"
            },
            {
                food: food.eggs,
                dv: "20%"
            }
        ]
    },
    vitaminB3Niacin: {
        name: "Vitamin B3 Niacin",
        veg: [
            {
                food: food.brownRice,
                dv: "32%"
            },
            {
                food: food.mushrooms,
                dv: "47%"
            },
            {
                food: food.peanuts,
                dv: "25%"
            },
            {
                food: food.greenPeas,
                dv: "33%"
            },
            {
                food: food.sweetPotatoes,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: food.chickenBreast,
                dv: "100%"
            },
            {
                food: food.fishSalmon,
                dv: "108%"
            },
            {
                food: food.porkChops,
                dv: "85%"
            },
            {
                food: food.beef,
                dv: "60%"
            }
        ]
    },
    vitaminB5Pantothenic: {
        name: "Vitamin B5 Pantothenic",
        veg: [
            {
                food: food.milk,
                dv: "36%"
            },
            {
                food: food.mushrooms,
                dv: "38%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "40%"
            },
            {
                food: food.almonds,
                dv: "25%"
            },
            {
                food: food.sweetPotatoes,
                dv: "26%"
            },
            {
                food: food.lentils,
                dv: "25%"
            }
        ],
        nonVeg: [
            {
                food: food.chickenBreast,
                dv: "54%"
            },
            {
                food: food.fishSalmon,
                dv: "65%"
            },
            {
                food: food.porkChops,
                dv: "34%"
            },
            {
                food: food.beef,
                dv: "45%"
            }
        ]
    },
    vitaminB6: {
        name: "Vitamin B6",
        veg: [
            {
                food: food.paneer,
                dv: "66%"
            },
            {
                food: food.potatoes,
                dv: "32%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "40%"
            },
            {
                food: food.bananas,
                dv: "32%"
            },
            {
                food: food.pistachio,
                dv: "28%"
            }
        ],
        nonVeg: [
            {
                food: food.chickenBreast,
                dv: "92%"
            },
            {
                food: food.fishSalmon,
                dv: "94%"
            },
            {
                food: food.porkChops,
                dv: "54%"
            },
            {
                food: food.beef,
                dv: "48%"
            }
        ]
    },
    vitaminB9Folate: {
        name: "Vitamin B9 Folate",
        veg: [
            {
                food: food.edamame,
                dv: "121%"
            },
            {
                food: food.asparagus,
                dv: "67%"
            },
            {
                food: food.lettuce,
                dv: "16%"
            },
            {
                food: food.spinach,
                dv: "36%"
            },
            {
                food: food.brocolli,
                dv: "42%"
            },
            {
                food: food.sweetPotatoes,
                dv: "26%"
            },
            {
                food: food.lentils,
                dv: "90%"
            },
            {
                food: food.mangose,
                dv: "28%"
            }
        ],
        nonVeg: [
            {
                food: food.oranges,
                dv: "14%"
            }
        ]
    },
    vitaminB12: {
        name: "Vitamin B12",
        veg: [
            {
                food: food.allBranWheatFlaks,
                dv: "325%"
            },
            {
                food: food.paneer,
                dv: "137%"
            },
            {
                food: food.milk,
                dv: "108%"
            }
        ],
        nonVeg: [
            {
                food: food.paneer,
                dv: "137%"
            },
            {
                food: food.milk,
                dv: "108%"
            },
            {
                food: food.eggs,
                dv: "23%"
            },
            {
                food: food.beef,
                dv: "533%"
            },
            {
                food: food.crab,
                dv: "642%"
            },
            {
                food: food.clams,
                dv: "3502%"
            }
        ]
    },
    choline: {
        name: "Choline",
        veg: [
            {
                food: food.milk,
                dv: "15%"
            },
            {
                food: food.broccoli,
                dv: "11%"
            },
            {
                food: food.greenPeas,
                dv: "9%"
            }
        ],
        nonVeg: [
            {
                food: food.chickenBreast,
                dv: "36%"
            },
            {
                food: food.fishSalmon,
                dv: "35%"
            },
            {
                food: food.porkChops,
                dv: "28%"
            },
            {
                food: food.eggs,
                dv: "27"
            },
            {
                food: food.beef,
                dv: "24%"
            },
            {
                food: food.shrimps,
                dv: "21%"
            }
        ]
    },
    vitaminE: {
        name: "Vitamin E",
        veg: [
            {
                food: food.sunflowerSeeds,
                dv: "49%"
            },
            {
                food: food.almonds,
                dv: "49%"
            },
            {
                food: food.peanuts,
                dv: "9%"
            },
            {
                food: food.spinach,
                dv: "25%"
            },
            {
                food: food.kiwi,
                dv: "18%"
            },
            {
                food: food.broccoli,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: food.shrimps,
                dv: "12%"
            }
        ]
    },
    vitaminK: {
        name: "Vitamin K",
        veg: [
            {
                food: food.cabbage,
                dv: "136%"
            },
            {
                food: food.asparagus,
                dv: "76%"
            },
            {
                food: food.brusselSprouts,
                dv: "182%"
            },
            {
                food: food.broccoli,
                dv: "183%"
            },
            {
                food: food.kiwi,
                dv: "60%"
            },
            {
                food: food.ladyFinger,
                dv: "53%"
            },
            {
                food: food.lettuce,
                dv: "47%"
            }
        ],
        nonVeg: []
    },
    magnesium: {
        name: "Magnesium",
        veg: [
            {
                food: food.cookedSpinach,
                dv: "37%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "37%"
            },
            {
                food: food.brownRice,
                dv: "20%"
            },
            {
                food: food.quinoa,
                dv: "28%"
            },
            {
                food: food.yogurt,
                dv: "11%"
            },
            {
                food: food.flaxSeeds,
                dv: "27%"
            },
            {
                food: food.cashews,
                dv: "20%"
            },
            {
                food: food.almonds,
                dv: "18%"
            }
        ],
        nonVeg: [
            {
                food: food.bananas,
                dv: "10%"
            },
            {
                food: food.hempSeeds,
                dv: "47%"
            },
            {
                food: food.cashews,
                dv: "20%"
            },
            {
                food: food.walnuts,
                dv: "12%"
            },
            {
                food: food.milk,
                dv: "12%"
            }
        ]
    },
    selenium: {
        name: "Selenium",
        veg: [
            {
                food: food.brazilNuts,
                dv: "990%"
            },
            {
                food: food.paneer,
                dv: "80%"
            },
            {
                food: food.oatmeal,
                dv: "23%"
            },
            {
                food: food.brownRice,
                dv: "21%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "41%"
            },
            {
                food: food.chiaSeeds,
                dv: "29%"
            },
            {
                food: food.flaxSeeds,
                dv: "13%"
            }
        ],
        nonVeg: [
            {
                food: food.oysters,
                dv: "334%"
            },
            {
                food: food.porkChops,
                dv: "147%"
            },
            {
                food: food.beef,
                dv: "111%"
            },
            {
                food: food.chickenBreast,
                dv: "99%"
            },
            {
                food: food.shrimps,
                dv: "77%"
            }
        ]
    },
    zinc: {
        name: "Zinc",
        veg: [
            {
                food: food.cookedSpinach,
                dv: "12%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "27%"
            },
            {
                food: food.cashews,
                dv: "14%"
            },
            {
                food: food.oatmeal,
                dv: "21%"
            },
            {
                food: food.chickpeas,
                dv: "23%"
            },
            {
                food: food.paneer,
                dv: "36%"
            },
            {
                food: food.lentils,
                dv: "23%"
            },
            {
                food: food.cerealKalloggsSmartStartStrong,
                dv: "136%"
            }
        ],
        nonVeg: [
            {
                food: food.oysters,
                dv: "93%"
            },
            {
                food: food.clams,
                dv: "47%"
            },
            {
                food: food.beef,
                dv: "52%"
            },
            {
                food: food.chicken,
                dv: "49%"
            },
            {
                food: food.porkChops,
                dv: "32%"
            },
            {
                food: food.yogurt,
                dv: "22%"
            },
            {
                food: food.milk,
                dv: "16%"
            }
        ]
    },
    iron: {
        name: "Iron",
        veg: [
            {
                food: food.allBranWheatFlaks,
                dv: "109%"
            },
            {
                food: food.apricots,
                dv: "42%"
            },
            {
                food: food.spinach,
                dv: "36%"
            },
            {
                food: food.quinoa,
                dv: "15%"
            },
            {
                food: food.mushrooms,
                dv: "15%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "14%"
            }
        ],
        nonVeg: [
            {
                food: food.oysters,
                dv: "43%"
            },
            {
                food: food.beef,
                dv: "52%"
            },
            {
                food: food.chiaSeeds,
                dv: "12%"
            },
            {
                food: food.sesameSeeds,
                dv: "14%"
            },
            {
                food: food.hempSeeds,
                dv: "13%"
            }
        ]
    },
    lycopene: {
        name: "Lycopene",
        veg: [
            {
                food: food.guava,
                dv: "6000%"
            },
            {
                food: food.tomatoes,
                dv: "500%"
            },
            {
                food: food.watermelon,
                dv: "5000%"
            },
            {
                food: food.grapefruit,
                dv: "500%"
            },
            {
                food: food.papaya,
                dv: "2000%"
            }
        ],
        nonVeg: []
    },
    calcium: {
        name: "Calcium",
        veg: [
            {
                food: food.chiaSeeds,
                dv: "14%"
            },
            {
                food: food.sesameSeeds,
                dv: "22%"
            },
            {
                food: food.almonds,
                dv: "18%"
            },
            {
                food: food.paneer,
                dv: "132%"
            },
            {
                food: food.kale,
                dv: "13%"
            }
        ],
        nonVeg: [
            {
                food: food.milk,
                dv: "46%"
            },
            {
                food: food.yogurt,
                dv: "38%"
            },
            {
                food: food.spinach,
                dv: "16%"
            },
            {
                food: food.ladyFinger,
                dv: "9%"
            }
        ]
    },
    copper: {
        name: "Copper",
        veg: [
            {
                food: food.paneer,
                dv: "106%"
            },
            {
                food: food.sweetPotatoes,
                dv: "79%"
            },
            {
                food: food.sesameSeeds,
                dv: "78%"
            },
            {
                food: food.cashews,
                dv: "70%"
            },
            {
                food: food.chickpeas,
                dv: "64%"
            }
        ],
        nonVeg: [
            {
                food: food.oysters,
                dv: "419%"
            },
            {
                food: food.mushrooms,

                dv: "144%"
            },
            {
                food: food.fishSalmon,
                dv: "61%"
            }
        ]
    },
    iodine: {
        name: "Iodine",
        veg: [
            {
                food: food.iodisedSalt,
                value: false,
                size: {
                    value: 1,
                    unit: "g"
                },
                dv: "51%"
            },
            {
                food: food.bakedPotatoWithPeel,
                dv: "40%"
            },
            {
                food: food.milk,
                dv: "37%"
            }
        ],
        nonVeg: [
            {
                food: food.seaweed,
                dv: "1000%"
            },
            {
                food: food.shrimps,
                dv: "27%"
            }
        ]
    },
    potassium: {
        name: "Potassium",
        veg: [
            {
                food: food.spinach,
                dv: "18%"
            },
            {
                food: food.lentils,
                dv: "16%"
            },
            {
                food: food.potatoes,
                dv: "20%"
            },
            {
                food: food.milk,
                dv: "16%"
            },
            {
                food: food.mushrooms,
                dv: "12%"
            }
        ],
        nonVeg: [
            {
                food: food.salmon,
                dv: "23%"
            },
            {
                food: food.bananas,
                dv: "11%"
            },
            {
                food: food.tomatoes,
                dv: "11%"
            }
        ]
    },
    phosphorus: {
        name: "Phosphorus",
        veg: [
            {
                food: food.paneer,
                dv: "38%"
            },
            {
                food: food.milk,
                dv: "33%"
            },
            {
                food: food.lentils,
                dv: "29%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "28%"
            },
            {
                food: food.hempSeeds,
                dv: "37%"
            },
            {
                food: food.quinoa,
                dv: "22%"
            },
            {
                food: food.brownRice,
                dv: "12%"
            }
        ],
        nonVeg: [
            {
                food: food.porkChops,
                dv: "41%"
            },
            {
                food: food.chickenBreast,
                dv: "33%"
            },
            {
                food: food.beef,
                dv: "27%"
            }
        ]
    },
    // Essential Amino Acids
    trytophan: {
        name: "Trytophan",
        veg: [
            {
                food: food.cheese,
                dv: null
            },
            {
                food: food.milk,
                dv: "75%"
            },
            {
                food: food.flaxSeeds,
                dv: "30%"
            },
            {
                food: food.peanuts,
                dv: "23%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "58%"
            },
            {
                food: food.paneer,
                dv: "212%"
            },
            {
                food: food.edamame,
                dv: "149%"
            },
            {
                food: food.oatmeal,
                dv: "33%"
            }
        ],
        nonVeg: [
            {
                food: food.chicken,
                dv: "245%"
            },
            {
                food: food.porkChops,
                dv: "224%"
            },
            {
                food: food.beef,
                dv: "227%"
            },
            {
                food: food.cashews,
                dv: "27%"
            },
            {
                food: food.pistachio,
                dv: "27%"
            },
            {
                food: food.eggs,
                dv: "27%"
            }
        ]
    },
    leucine: {
        name: "Leucine",
        veg: [
            {
                food: food.paneer,
                dv: "128%"
            },
            {
                food: food.milk,
                dv: "57%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "87%"
            },
            {
                food: food.pistachio,
                dv: "17%"
            },
            {
                food: food.peanuts,
                dv: "16%"
            },
            {
                food: food.almonds,
                dv: "15%"
            },
            {
                food: food.yogurt,
                dv: "52%"
            }
        ],
        nonVeg: [
            {
                food: food.chicken,
                dv: "189%"
            },
            {
                food: food.beef,
                dv: "183%"
            },
            {
                food: food.porkChops,
                dv: "165%"
            },
            {
                food: food.eggs,
                dv: "20%"
            }
        ]
    },
    isoleucine: {
        name: "Isoleucine",
        veg: [
            {
                food: food.paneer,
                dv: "153%"
            },
            {
                food: food.milk,
                dv: "61%"
            },
            {
                food: food.lentils,
                dv: "55%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: food.spinach,
                dv: "20%"
            },
            {
                food: food.sweetPotatoes,
                dv: "20%"
            },
            {
                food: food.hempSeeds,
                dv: "26%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "20%"
            },
            {
                food: food.pistachio,
                dv: "19%"
            }
        ],
        nonVeg: [
            {
                food: food.beef,
                dv: "192%"
            },
            {
                food: food.chickenBreast,
                dv: "191%"
            },
            {
                food: food.porkChops,
                dv: "178%"
            },
            {
                food: food.quinoa,
                dv: "21%"
            },
            {
                food: food.flaxSeeds,
                dv: "18%"
            },
            {
                food: food.peanuts,
                dv: "17%"
            },
            {
                food: food.oatmeal,
                dv: "19%"
            },
            {
                food: food.yogurt,
                dv: "55%"
            }
        ]
    },
    threonine: {
        name: "Threonine",
        veg: [
            {
                food: food.paneer,
                dv: "188%"
            },
            {
                food: food.milk,
                dv: "67%"
            },
            {
                food: food.edamame,
                dv: "118%"
            },
            {
                food: food.kidneyBeans,
                name: "Kidney Beans",
                dv: "61%"
            },
            {
                food: food.lentils,
                dv: "55%"
            },
            {
                food: food.greenPeas,
                dv: "31%"
            },
            {
                food: food.sweetPotatoes,
                dv: "24%"
            },
            {
                food: food.carrots,
                name: "Carrots",
                dv: "23%"
            }
        ],
        nonVeg: [
            {
                food: food.beef,
                dv: "258%"
            },
            {
                food: food.porkChops,
                dv: "221%"
            },
            {
                food: food.chickenBreast,
                dv: "233%"
            },
            {
                food: food.yogurt,
                dv: "55%"
            },
            {
                food: food.eggs,
                dv: "29%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: food.hempSeeds,
                dv: "34%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "21%"
            },
            {
                food: food.quinoa,
                dv: "23%"
            },
            {
                food: food.oatmeal,
                dv: "21%"
            }
        ]
    },
    lysine: {
        name: "Lysine",
        veg: [
            {
                food: food.paneer,
                dv: "106%"
            },
            {
                food: food.milk,
                dv: "67%"
            },
            {
                food: food.edamame,
                dv: "91%"
            },
            {
                food: food.greenPeas,
                dv: "24%"
            },
            {
                food: food.sweetPotatoes,
                dv: "12%"
            },
            {
                food: food.spinach,
                dv: "16%"
            }
        ],
        nonVeg: [
            {
                food: food.beef,
                dv: "268%"
            },
            {
                food: food.porkChops,
                dv: "223%"
            },
            {
                food: food.chickenBreast,
                dv: "250%"
            },
            {
                food: food.yogurt,
                dv: "60%"
            },
            {
                food: food.eggs,
                dv: "22%"
            },
            {
                food: food.crab,
                dv: "107%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "26%"
            },
            {
                food: food.quinoa,
                dv: "21%"
            },
            {
                food: food.oatmeal,
                dv: "15%"
            }
        ]
    },
    methionine: {
        name: "Methionine",
        veg: [
            {
                food: food.paneer,
                dv: "73%"
            },
            {
                food: food.milk,
                dv: "59%"
            },
            {
                food: food.edamame,
                dv: "118%"
            },
            {
                food: food.kidneyBeans,
                name: "Kidney Beans",
                dv: "35%"
            },
            {
                food: food.lentils,
                dv: "55%"
            },
            {
                food: food.greenPeas,
                dv: "18%"
            },
            {
                food: food.sweetPotatoes,
                dv: "17%"
            },
            {
                food: food.carrots,
                name: "Carrots",
                dv: "23%"
            },
            {
                food: food.spinach,
                dv: "14%"
            }
        ],
        nonVeg: [
            {
                food: food.beef,
                dv: "211%"
            },
            {
                food: food.porkChops,
                dv: "198%"
            },
            {
                food: food.chickenBreast,
                dv: "195%"
            },
            {
                food: food.yogurt,
                dv: "57%"
            },
            {
                food: food.eggs,
                dv: "27%"
            },
            {
                food: food.chiaSeeds,
                dv: "23%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "23%"
            },
            {
                food: food.hempSeeds,
                dv: "36%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "16%"
            },
            {
                food: food.quinoa,
                dv: "24%"
            },
            {
                food: food.oatmeal,
                dv: "21%"
            },
            {
                food: food.sesameSeeds,
                dv: "22%"
            },
            {
                food: food.crab,
                dv: "100%"
            },
            {
                food: food.shrimps,
                dv: "78%"
            }
        ]
    },
    cystine: {
        name: "Cystine",
        veg: [
            {
                food: food.paneer,
                dv: "50%"
            },
            {
                food: food.milk,
                dv: "67%"
            },
            {
                food: food.milk,
                dv: "59%"
            },
            {
                food: food.lentils,
                dv: "81%"
            },
            {
                food: food.carrots,
                name: "Carrots",
                dv: "21%"
            },
            {
                food: food.cashews,
                dv: "39%"
            }
        ],
        nonVeg: [
            {
                food: food.beef,
                dv: "204%"
            },
            {
                food: food.porkChops,
                dv: "207%"
            },
            {
                food: food.chickenBreast,
                dv: "199%"
            },
            {
                food: food.eggs,
                dv: "51%"
            },
            {
                food: food.chiaSeeds,
                dv: "40%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "23%"
            },
            {
                food: food.hempSeeds,
                dv: "66%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "38%"
            },
            {
                food: food.quinoa,
                dv: "24%"
            },
            {
                food: food.oatmeal,
                dv: "79%"
            },
            {
                food: food.sesameSeeds,
                dv: "34%"
            }
        ]
    },
    valine: {
        name: "Valine",
        veg: [
            {
                food: food.paneer,
                dv: "120%"
            },
            {
                food: food.milk,
                dv: "60%"
            },
            {
                food: food.edamame,
                dv: "79%"
            },
            {
                food: food.kidneyBeans,
                name: "Kidney Beans",
                dv: "49%"
            },
            {
                food: food.lentils,
                dv: "49%"
            },
            {
                food: food.milk,
                dv: "67%"
            },
            {
                food: food.greenPeas,
                dv: "20%"
            },
            {
                food: food.sweetPotatoes,
                dv: "18%"
            },
            {
                food: food.pistachio,
                dv: "20%"
            },
            {
                food: food.spinach,
                dv: "17%"
            },
            {
                food: food.cashews,
                dv: "16%"
            }
        ],
        nonVeg: [
            {
                food: food.beef,
                dv: "156%"
            },
            {
                food: food.porkChops,
                dv: "146%"
            },
            {
                food: food.chickenBreast,
                dv: "155%"
            },
            {
                food: food.yogurt,
                dv: "64%"
            },
            {
                food: food.eggs,
                dv: "21%"
            },
            {
                food: food.chiaSeeds,
                dv: "15%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "24%"
            },
            {
                food: food.hempSeeds,
                dv: "28%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "20%"
            },
            {
                food: food.brownRice,
                dv: "17%"
            },
            {
                food: food.oatmeal,
                dv: "21%"
            },
            {
                food: food.flaxSeeds,
                dv: "17%"
            },
            {
                food: food.millets,
                name: "Millets",
                dv: "18%"
            }
        ]
    },
    phenylalanine: {
        name: "Phenylalanine",
        veg: [
            {
                food: food.paneer,
                dv: "240%"
            },
            {
                food: food.milk,
                dv: "60%"
            },
            {
                food: food.edamame,
                dv: "171%"
            },
            {
                food: food.kidneyBeans,
                name: "Kidney Beans",
                dv: "103%"
            },
            {
                food: food.lentils,
                dv: "101%"
            },
            {
                food: food.milk,
                dv: "98%"
            },
            {
                food: food.greenPeas,
                dv: "36%"
            },
            {
                food: food.sweetPotatoes,
                dv: "35%"
            },
            {
                food: food.pistachio,
                dv: "37%"
            },
            {
                food: food.spinach,
                dv: "28%"
            },
            {
                food: food.broccoli,
                dv: "21%"
            },
            {
                food: food.almonds,
                dv: "31%"
            }
        ],
        nonVeg: [
            {
                food: food.beef,
                dv: "262%"
            },
            {
                food: food.porkChops,
                dv: "250%"
            },
            {
                food: food.chickenBreast,
                dv: "251%"
            },
            {
                food: food.yogurt,
                dv: "88%"
            },
            {
                food: food.eggs,
                dv: "21%"
            },
            {
                food: food.chiaSeeds,
                dv: "33%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "56%"
            },
            {
                food: food.hempSeeds,
                dv: "47%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "37%"
            },
            {
                food: food.quinoa,
                dv: "39%"
            },
            {
                food: food.oatmeal,

                dv: "38%"
            },
            {
                food: food.brownRice,

                dv: "31%"
            },
            {
                food: food.flaxSeeds,
                dv: "17%"
            },
            {
                food: food.shrimps,
                dv: "78%"
            }
        ]
    },
    tyrosine: {
        name: "Tyrosine",
        veg: [
            {
                food: food.paneer,
                dv: "202%"
            },
            {
                food: food.milk,
                dv: "60%"
            },
            {
                food: food.edamame,
                dv: "124%"
            },
            {
                food: food.kidneyBeans,
                name: "Kidney Beans",
                dv: "49%"
            },
            {
                food: food.lentils,
                dv: "49%"
            },
            {
                food: food.milk,
                dv: "95%"
            },
            {
                food: food.greenPeas,
                dv: "20%"
            },
            {
                food: food.sweetPotatoes,
                dv: "24%"
            },
            {
                food: food.pistachio,
                dv: "20%"
            },
            {
                food: food.spinach,
                dv: "23%"
            },
            {
                food: food.cashews,
                dv: "16%"
            },
            {
                food: food.peanuts,
                dv: "31%"
            },
            {
                food: food.ladyFinger,
                dv: "15%"
            }
        ],
        nonVeg: [
            {
                food: food.beef,
                dv: "248%"
            },
            {
                food: food.porkChops,
                dv: "239%"
            },
            {
                food: food.chickenBreast,
                dv: "224%"
            },
            {
                food: food.yogurt,
                dv: "49%"
            },
            {
                food: food.eggs,
                dv: "29%"
            },
            {
                food: food.chiaSeeds,
                dv: "18%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "35%"
            },
            {
                food: food.hempSeeds,
                dv: "41%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "18%"
            },
            {
                food: food.salmon,
                name: "Salmon",
                dv: "235%"
            },
            {
                food: food.oatmeal,
                dv: "27%"
            },
            {
                food: food.sesameSeeds,
                dv: "23%"
            },
            {
                food: food.brownRice,
                dv: "19%"
            },
            {
                food: food.millets,
                name: "Millets",
                dv: "21%"
            }
        ]
    },
    histidine: {
        name: "Histidine",
        veg: [
            {
                food: food.paneer,
                dv: "155%"
            },
            {
                food: food.milk,
                dv: "71%"
            },
            {
                food: food.edamame,
                dv: "79%"
            },
            {
                food: food.kidneyBeans,
                name: "Kidney Beans",
                dv: "67%"
            },
            {
                food: food.lentils,
                dv: "72%"
            },
            {
                food: food.milk,
                dv: "67%"
            },
            {
                food: food.greenPeas,
                dv: "24%"
            },
            {
                food: food.sweetPotatoes,
                dv: "18%"
            },
            {
                food: food.pistachio,
                dv: "20%"
            },
            {
                food: food.spinach,
                dv: "17%"
            },
            {
                food: food.cashews,
                dv: "16%"
            },
            {
                food: food.almonds,
                dv: "22%"
            },
            {
                food: food.pistachio,
                dv: "22%"
            }
        ],
        nonVeg: [
            {
                food: food.beef,
                dv: "314%"
            },
            {
                food: food.porkChops,
                dv: "318%"
            },
            {
                food: food.chickenBreast,
                dv: "290%"
            },
            {
                food: food.yogurt,
                dv: "50%"
            },
            {
                food: food.eggs,
                dv: "21%"
            },
            {
                food: food.chiaSeeds,
                dv: "22%"
            },
            {
                food: food.pumpkinSeeds,
                dv: "31%"
            },
            {
                food: food.hempSeeds,
                dv: "39%"
            },
            {
                food: food.sunflowerSeeds,
                dv: "22%"
            },
            {
                food: food.salmon,
                name: "Salmon",
                dv: "182%"
            },
            {
                food: food.oatmeal,
                dv: "18%"
            },
            {
                food: food.brownRice,
                dv: "19%"
            },
            {
                food: food.flaxSeeds,
                dv: "19%"
            },
            {
                food: food.quinoa,
                dv: "34%"
            }
        ]
    }
}