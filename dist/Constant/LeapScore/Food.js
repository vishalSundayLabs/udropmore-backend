"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFood = void 0;
exports.getFood = {
    carrots: {
        name: "Carrots",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin A", "Beta-carotene", "Threonine", "Methionine", "Cystine"]
    },
    guava: {
        name: "Guava",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin C", "Lycopene"]
    },
    kiwi: {
        name: "Kiwi",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin C", "Vitamin E", "Vitamin K"]
    },
    bellPappers: {
        name: "Bell Peppers",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin C"]
    },
    strawberries: {
        name: "Strawberries",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin C"]
    },
    oranges: {
        name: "Oranges",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin C", "Vitamin B9 Folate"]
    },
    sweetPotatoes: {
        name: "Sweet Potatoes",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin A", "Beta-carotene", "Vitamin B3 Niacin", "Vitamin B5 Pantothenic", "Vitamin B9 Folate", "Copper", "Isoleucine", "Threonine", "Lysine", "Methionine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    spinach: {
        name: "Spinach",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin A", "Beta-carotene", "Vitamin B2 Riboflavin", "Vitamin B3 Niacin", "Vitamin B9 Folate", "Vitamin E", "Magnesium", "Zinc", "Iron", "Calcium", "Potassium", "Isoleucine", "Lysine", "Methionine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    muskMelon: {
        name: "Musk Melon",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin A", "Beta-carotene"]
    },
    lettuce: {
        name: "Lettuce",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin A", "Beta-carotene", "Vitamin B9 Folate", "Vitamin K"]
    },
    flaxSeeds: {
        name: "Flax Seeds",
        size: {
            value: 1,
            unit: "Handfull"
        },
        macro: ["Vitamin B1 Thiamin", "Magnesium", "Selenium", "Trytophan", "Isoleucine", "Valine", "Phenylalanine", "Histidine"]
    },
    greenPeas: {
        name: "Green Peas",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B1 Thiamin", "Vitamin B3 Niacin", "Choline", "Threonine", "Lysine", "Methionine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    paneer: {
        name: "Paneer",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B1 Thiamin", "Vitamin B2 Riboflavin", "Vitamin B6", "Vitamin B12", "Selenium", "Zinc", "Calcium", "Copper", "Phosphorus", "Trytophan", "Leucine", "Isoleucine", "Threonine", "Lysine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    brownRice: {
        name: "Brown Rice",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B1 Thiamin", "Vitamin B3 Niacin", "Magnesium", "Selenium", "Phosphorus", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    asparagus: {
        name: "Asparagus",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B1 Thiamin", "Vitamin B9 Folate", "Vitamin K"]
    },
    milk: {
        name: "Milk",
        size: {
            value: 1,
            unit: "Glass"
        },
        macro: ["Vitamin B2 Riboflavin", "Vitamin B5 Pantothenic", "Vitamin B12", "Choline", "Zinc", "Iodine", "Potassium", "Phosphorus", "Trytophan", "Leucine", "Isoleucine", "Threonine", "Lysine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    mushrooms: {
        name: "Mushrooms",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B2 Riboflavin", "Vitamin B3 Niacin", "Vitamin B5 Pantothenic", "Iron", "Copper", "Potassium"]
    },
    almonds: {
        name: "Almonds",
        size: {
            value: 1,
            unit: "Handful"
        },
        macro: ["Vitamin B2 Riboflavin", "Vitamin B5 Pantothenic", "Vitamin E", "Magnesium", "Calcium", "Leucine", "Phenylalanine", "Histidine"]
    },
    peanuts: {
        name: "Peanuts",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B3 Niacin", "Vitamin E", "Trytophan", "Leucine", "Isoleucine", "Tyrosine"]
    },
    sunflowerSeeds: {
        name: "Sunflower Seeds",
        size: {
            value: 1,
            unit: "Handful"
        },
        macro: ["Vitamin B5 Pantothenic", "Vitamin B6", "Vitamin E", "Selenium", "Isoleucine", "Threonine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    lentils: {
        name: "Lentils",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B5 Pantothenic", "Vitamin B9 Folate", "Zinc", "Potassium", "Phosphorus", "Isoleucine", "Threonine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    potatoes: {
        name: "Potatoes",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin A", "Beta-carotene", "Vitamin B3 Niacin", "Vitamin B5 Pantothenic", "Vitamin B6", "Vitamin B9 Folate", "Copper", "Potassium", "Isoleucine", "Threonine", "Lysine", "Methionine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    bananas: {
        name: "Bananas",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B6", "Magnesium", "Potassium"]
    },
    pistachio: {
        name: "Pistachio",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B6", "Trytophan", "Leucine", "Isoleucine", "Valine", "Phenylalanine", "Tyrosine", "Histidine",]
    },
    edamame: {
        name: "Edamame",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B9 Folate", "Trytophan", "Threonine", "Lysine", "Methionine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    brocolli: {
        name: "Brocolli",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin A", "Beta-carotene", "Vitamin B9 Folate",]
    },
    mangose: {
        name: "Mangoes",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: []
    },
    allBranWheatFlaks: {
        name: "All Bran Wheat Flaks",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B12", "Iron"]
    },
    broccoli: {
        name: "Broccoli",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin C", "Choline", "Vitamin E", "Vitamin K", "Phenylalanine"]
    },
    cabbage: {
        name: "Cabbage",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin K"]
    },
    brusselSprouts: {
        name: "Brussel Sprouts",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin K"]
    },
    ladyFinger: {
        name: "Lady Finger",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin K", "Calcium", "Tyrosine"]
    },
    cookedSpinach: {
        name: "Cooked Spinach",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Magnesium", "Zinc"]
    },
    pumpkinSeeds: {
        name: "Pumpkin Seeds",
        size: {
            value: 1,
            unit: "Handful"
        },
        macro: ["Magnesium", "Zinc", "Iron", "Phosphorus", "Trytophan", "Leucine", "Isoleucine", "Threonine", "Lysine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    quinoa: {
        name: "Quinoa",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Magnesium", "Iron", "Phosphorus", "Isoleucine", "Threonine", "Lysine", "Methionine", "Cystine", "Phenylalanine", "Histidine"]
    },
    yogurt: {
        name: "Yogurt",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Magnesium", "Zinc", "Calcium", "Leucine", "Isoleucine", "Threonine", "Lysine", "Methionine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    cashews: {
        name: "Cashews",
        size: {
            value: 1,
            unit: "Handful"
        },
        macro: ["Magnesium", "Zinc", "Copper", "Trytophan", "Cystine", "Valine", "Tyrosine", "Histidine"]
    },
    brazilNuts: {
        name: "Brazil Nuts",
        size: {
            value: 1,
            unit: "Handful"
        },
        macro: ["Selenium"]
    },
    oatmeal: {
        name: "Oatmeal",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Selenium", "Zinc", "Trytophan", "Isoleucine", "Threonine", "Lysine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    chiaSeeds: {
        name: "Chia Seeds",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Selenium", "Iron", "Calcium", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    chickpeas: {
        name: "Chickpeas",
        size: {
            value: 1,
            unit: "Handful"
        },
        macro: ["Zinc", "Copper"]
    },
    cerealKalloggsSmartStartStrong: {
        name: "Cereal Kalloggs Smart Start Strong",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Zinc"]
    },
    apricots: {
        name: "Apricots",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin A", "Beta-carotene", "Iron",]
    },
    tomatoes: {
        name: "Tomatoes",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin C", "Lycopene", "Potassium"]
    },
    watermelon: {
        name: "Watermelon",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Lycopene"]
    },
    grapefruit: {
        name: "Grapefruit",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Lycopene"]
    },
    papaya: {
        name: "Papaya",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin C", "Lycopene"]
    },
    sesameSeeds: {
        name: "Sesame Seeds",
        size: {
            value: 1,
            unit: "Handful"
        },
        macro: ["Iron", "Calcium", "Copper", "Methionine", "Cystine", "Tyrosine"]
    },
    kale: {
        name: "Kale",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Calcium"]
    },
    iodisedSalt: {
        name: "Iodised Salt",
        size: {
            value: 1,
            unit: "g"
        },
        macro: ["Iodine"]
    },
    bakedPotatoWithPeel: {
        name: "Baked Potato With Peel",
        size: {
            value: null,
            unit: null
        },
        macro: ["Iodine"]
    },
    hempSeeds: {
        name: "Hemp Seeds",
        size: {
            value: 1,
            unit: "Handful"
        },
        macro: ["Magnesium", "Iron", "Phosphorus", "Isoleucine", "Threonine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    cheese: {
        name: "Cheese",
        size: {
            value: null,
            unit: null
        },
        macro: ["Trytophan"]
    },
    kidneyBeans: {
        name: "Kidney Beans",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Threonine", "Methionine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    redBellPappers: {
        name: "Red Bell Pappers",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin A", "Beta-carotene"]
    },
    driedApricots: {
        name: "Dried Apricots",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin A", "Beta-carotene"]
    },
    porkChops: {
        name: "Pork Chops",
        size: {
            value: 1,
            unit: "Chop"
        },
        macro: ["Vitamin B1 Thiamin", "Vitamin B2 Riboflavin", "Vitamin B3 Niacin", "Vitamin B5 Pantothenic", "Vitamin B6", "Choline", "Selenium", "Zinc", "Phosphorus", "Trytophan", "Leucine", "Isoleucine", "Threonine", "Lysine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    fishSalmon: {
        name: "Fish Salmon",
        size: {
            value: 1,
            unit: "Fillet"
        },
        macro: ["Vitamin B1 Thiamin", "Vitamin B2 Riboflavin", "Vitamin B3 Niacin", "Vitamin B5 Pantothenic", "Vitamin B6", "Choline", "Copper",]
    },
    mussels: {
        name: "Mussels",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B1 Thiamin"]
    },
    beef: {
        name: "Beef",
        size: {
            value: 1,
            unit: "Steak"
        },
        macro: ["Vitamin B2 Riboflavin", "Vitamin B3 Niacin", "Vitamin B5 Pantothenic", "Vitamin B6", "Vitamin B12", "Choline", "Selenium", "Zinc", "Iron", "Phosphorus", "Trytophan", "Leucine", "Isoleucine", "Threonine", "Lysine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    leanRoastHam: {
        name: "Lean Roast Ham",
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Vitamin B2 Riboflavin"]
    },
    eggs: {
        name: "Eggs",
        size: {
            value: 1,
            unit: "Large"
        },
        macro: ["Vitamin B2 Riboflavin", "Vitamin B12", "Choline", "Trytophan", "Leucine", "Threonine", "Lysine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    chickenBreast: {
        name: "Chicken Breast",
        size: {
            value: 200,
            unit: "g"
        },
        macro: ["Vitamin B3 Niacin", "Vitamin B5 Pantothenic", "Vitamin B6", "Choline", "Selenium", "Phosphorus", "Isoleucine", "Threonine", "Lysine", "Methionine", "Cystine", "Valine", "Phenylalanine", "Tyrosine", "Histidine"]
    },
    crab: {
        name: "Crab",
        size: {
            value: 1,
            unit: "Crab Leg"
        },
        macro: ["Vitamin B12", "Lysine", "Methionine"]
    },
    clams: {
        name: "Clams",
        size: {
            value: 75,
            unit: "g"
        },
        macro: ["Vitamin B12", "Zinc"]
    },
    shrimps: {
        name: "Shrimps",
        size: {
            value: 12,
            unit: "Large"
        },
        macro: ["Choline", "Vitamin E", "Selenium", "Iodine", "Methionine", "Phenylalanine"]
    },
    walnuts: {
        name: "Walnuts",
        size: {
            value: 1,
            unit: "Handful"
        },
        macro: ["Magnesium"]
    },
    oysters: {
        name: "Oysters",
        size: {
            value: 6,
            unit: "units"
        },
        macro: ["Selenium", "Zinc",]
    },
    chicken: {
        name: "Chicken",
        size: {
            value: 175,
            unit: "g"
        },
        macro: ["Zinc", "Trytophan", "Leucine"]
    },
    seaweed: {
        name: "Seaweed",
        size: {
            value: 1,
            unit: "g"
        },
        macro: ["Iodine"]
    },
    salmon: {
        name: "Salmon",
        size: {
            value: 1,
            unit: "Fillet"
        },
        macro: ["Potassium", "Tyrosine", "Histidine"]
    },
    millets: {
        name: "Millets",
        value: false,
        size: {
            value: 1,
            unit: "Cup"
        },
        macro: ["Valine", "Tyrosine"]
    }
};
