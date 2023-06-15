"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phases = void 0;
const Food_1 = require("../LeapScore/Food");
exports.phases = [
    {
        category: "Neurogenesis & Migration",
        section: [
            {
                sectionName: "Protein Dairy",
                currentSelection: {
                    a: {
                        name: { name: "Paneer", isSelected: false },
                        foodGroup: "EAA | Good Fats | Calcium",
                        unit: "1 Cup",
                        dv: "47%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: "Milk", isSelected: false },
                        foodGroup: "EAA | Calcium",
                        unit: "1 Glass",
                        dv: "31%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: "Yogurt", isSelected: false },
                        foodGroup: "Calcium | Gut",
                        unit: "1 Cup",
                        dv: "17%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: "Cheese", isSelected: false },
                        foodGroup: "EAA",
                        unit: "1 Slice",
                        dv: "17%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Dals & Pulses",
                currentSelection: {
                    a: {
                        name: { name: "Rajma or kidney Beans", isSelected: false },
                        foodGroup: "EAA | Fiber",
                        unit: "1 Cup",
                        dv: "31%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: "Chickpeas / Chana / Chole or Kala Chana", isSelected: false },
                        foodGroup: "Folate | EAA | Fiber",
                        unit: "1 Cup",
                        dv: "28%",
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: "Hare Mung / Toor Dal / Urad Dal / Masoor Da", isSelected: false },
                        foodGroup: "Iron | Protein | Fiber",
                        unit: "1 Cup",
                        dv: "60%",
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: "Til / Sesame seeds / Tahini", isSelected: false },
                        foodGroup: "Fat | EAA",
                        unit: "1 Handful",
                        dv: "20%",
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Eggs",
                currentSelection: {
                    a: {
                        name: { name: "Eggs", isSelected: false },
                        foodGroup: "EAA | Choline",
                        unit: "1 Large",
                        dv: "13%",
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Meat",
                currentSelection: {
                    a: {
                        name: { name: "Pork / Beef / Lamb", isSelected: false },
                        foodGroup: "EAA | Iron",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: "Birds - Chicken / Turkey", isSelected: false },
                        foodGroup: "EAA | Choline",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: "Fish - Salmon / Rawas / Bombay Duck", isSelected: false },
                        foodGroup: "DHA",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: "Prawns / Shrimps", isSelected: false },
                        foodGroup: "DHA",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "EAA",
                currentSelection: {
                    a: {
                        name: { name: "Paneer", isSelected: false },
                        foodGroup: "EAA | Good Fats | Calcium",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: "Yogurt", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: "Hare Mung / Toor Dal / Urad Dal / Masoor Dal", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: "Eggs", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: "Chicken", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin A",
                currentSelection: {
                    a: {
                        name: { name: "Carrots", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: "Sweet Potatoes", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: "Spinach", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Folate",
                currentSelection: {
                    a: {
                        name: { name: "Muesli", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: "Edamame", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: "Hare Mung / Toor Dal / Urad Dal / Masoor Dal", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin B6",
                currentSelection: {
                    a: {
                        name: { name: "Muesli", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: "Paneer", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: "Sunflower Seeds", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: "Chicken Breast", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: "Fish Salmon", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: "Pork Chops", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Iron",
                currentSelection: {
                    a: {
                        name: { name: "All Bran Wheat Flaks", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: "Apricots", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: "Hare Mung / Toor Dal / Urad Dal / Masoor Dal", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: "Spinach", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: "Beef", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: "Oysters", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin C",
                currentSelection: {
                    a: {
                        name: { name: "Guava", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: "Kiwi", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: "Bell peppers", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: "Lemons", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Iodine",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.iodisedSalt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.bakedPotatoWithPeel.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.milk.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Zinc",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.pumpkinSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.chickpeas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${Food_1.food.hareMung.name}/${Food_1.food.toorDal.name}/${Food_1.food.uradDal.name}/${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Pork", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Selenium",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.brazilNuts.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.porkChops.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Choline",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.milk.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.broccoli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.greenPeas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.eggs.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.chickenBreast.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.porkChops.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "DHA",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.walnuts.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.chiaSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.rawas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.prawns.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.porkChops.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            }
        ]
    },
    {
        category: "Calcium Absorption Doubling",
        section: [
            {
                sectionName: "Calcium",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.milk.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.yogurt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.sesameSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            }
        ]
    },
    {
        category: "Muscle Development",
        section: [
            {
                sectionName: "Protein Dairy",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: "EAA | Good Fats | Calcium",
                        unit: "1 Cup",
                        dv: "47%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.milk.name, isSelected: false },
                        foodGroup: "EAA | Calcium",
                        unit: "1 Glass",
                        dv: "31%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.yogurt.name, isSelected: false },
                        foodGroup: "Calcium | Gut",
                        unit: "1 Cup",
                        dv: "17%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.cheese.name, isSelected: false },
                        foodGroup: "EAA",
                        unit: "1 Slice",
                        dv: "17%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Dals & Pulses",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.rajma.name, isSelected: false },
                        foodGroup: "EAA | Fiber",
                        unit: "1 Cup",
                        dv: "31%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: `${Food_1.food.chickpeas.name} / ${Food_1.food.chana.name} / ${Food_1.food.chole.name}`, isSelected: false },
                        foodGroup: "Folate | EAA | Fiber",
                        unit: "1 Cup",
                        dv: "28%",
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.hareMung.name} / ${Food_1.food.toorDal.name} / ${Food_1.food.uradDal.name} / ${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: "Iron | Protein | Fiber",
                        unit: "1 Cup",
                        dv: "60%",
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${Food_1.food.til.name}/ ${Food_1.food.sesameSeeds.name} / ${Food_1.food.tahini.name}`, isSelected: false },
                        foodGroup: "Fat | EAA",
                        unit: "1 Handful",
                        dv: "20%",
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Eggs",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.eggs.name, isSelected: false },
                        foodGroup: "EAA | Choline",
                        unit: "1 Large",
                        dv: "13%",
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Meat",
                currentSelection: {
                    a: {
                        name: { name: `${Food_1.food.porkChops.name} / ${Food_1.food.beef.name} / Lamb`, isSelected: false },
                        foodGroup: "EAA | Iron",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: `${Food_1.food.birdsChicken.name} / Turkey`, isSelected: false },
                        foodGroup: "EAA | Choline",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.fishSalmon.name} / ${Food_1.food.rawas.name} / ${Food_1.food.bombayDuck.name}`, isSelected: false },
                        foodGroup: "DHA",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${Food_1.food.prawns.name} / ${Food_1.food.shrimps.name}`, isSelected: false },
                        foodGroup: "DHA",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "EAA",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: "EAA | Good Fats | Calcium",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.yogurt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.hareMung.name} / ${Food_1.food.toorDal.name} / ${Food_1.food.uradDal.name} / ${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.eggs.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.chicken.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            }
        ]
    },
    {
        category: "Blood Plasma & Cell Mass",
        section: [
            {
                sectionName: "Iron",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.apricots.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.hareMung.name} / ${Food_1.food.toorDal.name} / ${Food_1.food.uradDal.name} / ${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.spinach.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin C",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.guava.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.kiwi.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.bellPappers.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.lemons.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin B12",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.clams.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.crab.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Copper",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.oats.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.sweetPotatoes.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.sesameSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.mushrooms.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: Food_1.food.fishSalmon.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            }
        ]
    },
    {
        category: "Synaptogensis",
        section: [
            {
                sectionName: "Choline",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.milk.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.broccoli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.greenPeas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.eggs.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.chickenBreast.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.porkChops.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: Food_1.food.fishSalmon.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "DHA",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.walnuts.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.chiaSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.rawas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.prawns.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin B12",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.clams.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.crab.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            }
        ]
    },
    {
        category: "Immune System Development",
        section: [
            {
                sectionName: "Vitamin A",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.carrots.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.sweetPotatoes.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.spinach.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Folate",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.edamame.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.hareMung.name} / ${Food_1.food.toorDal.name} / ${Food_1.food.uradDal.name} / ${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin B6",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.chickenBreast.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.fishSalmon.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.porkChops.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Iron",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.apricots.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.hareMung.name} / ${Food_1.food.toorDal.name} / ${Food_1.food.uradDal.name} / ${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.spinach.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin C",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.guava.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.kiwi.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.bellPappers.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.lemons.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Iodine",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.iodisedSalt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.bakedPotatoWithPeel.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.milk.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Zinc",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.pumpkinSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.chickpeas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${Food_1.food.hareMung.name}/${Food_1.food.toorDal.name}/${Food_1.food.uradDal.name}/${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Pork", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Selenium",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.brazilNuts.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.porkChops.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin E",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.almonds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin B12",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.clams.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.crab.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Copper",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.oats.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.sweetPotatoes.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.sesameSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.mushrooms.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: Food_1.food.fishSalmon.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            }
        ]
    },
    {
        category: "Preparing for lactation",
        section: [
            {
                sectionName: "Protein Dairy",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: "EAA | Good Fats | Calcium",
                        unit: "1 Cup",
                        dv: "47%",
                        qty: 1,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.milk.name, isSelected: false },
                        foodGroup: "EAA | Calcium",
                        unit: "1 Glass",
                        dv: "31%",
                        qty: 1,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.yogurt.name, isSelected: false },
                        foodGroup: "Calcium | Gut",
                        unit: "1 Cup",
                        dv: "17%",
                        qty: 1,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.cheese.name, isSelected: false },
                        foodGroup: "EAA",
                        unit: "1 Slice",
                        dv: "17%",
                        qty: 1,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Dals & Pulses",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.rajma.name, isSelected: false },
                        foodGroup: "EAA | Fiber",
                        unit: "1 Cup",
                        dv: "31%",
                        qty: 1,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: `${Food_1.food.chickpeas.name} / ${Food_1.food.chana.name} / ${Food_1.food.chole.name}`, isSelected: false },
                        foodGroup: "Folate | EAA | Fiber",
                        unit: "1 Cup",
                        dv: "28%",
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.hareMung.name} / ${Food_1.food.toorDal.name} / ${Food_1.food.uradDal.name} / ${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: "Iron | Protein | Fiber",
                        unit: "1 Cup",
                        dv: "60%",
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${Food_1.food.til.name}/ ${Food_1.food.sesameSeeds.name} / ${Food_1.food.tahini.name}`, isSelected: false },
                        foodGroup: "Fat | EAA",
                        unit: "1 Handful",
                        dv: "20%",
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Eggs",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.eggs.name, isSelected: false },
                        foodGroup: "EAA | Choline",
                        unit: "1 Large",
                        dv: "13%",
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Meat",
                currentSelection: {
                    a: {
                        name: { name: `${Food_1.food.porkChops.name} / ${Food_1.food.beef.name} / Lamb`, isSelected: false },
                        foodGroup: "EAA | Iron",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: `${Food_1.food.birdsChicken.name} / Turkey`, isSelected: false },
                        foodGroup: "EAA | Choline",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.fishSalmon.name} / ${Food_1.food.rawas.name} / ${Food_1.food.bombayDuck.name}`, isSelected: false },
                        foodGroup: "DHA",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${Food_1.food.prawns.name} / ${Food_1.food.shrimps.name}`, isSelected: false },
                        foodGroup: "DHA",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "EAA",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: "EAA | Good Fats | Calcium",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.yogurt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.hareMung.name} / ${Food_1.food.toorDal.name} / ${Food_1.food.uradDal.name} / ${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.eggs.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.chicken.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin A",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.carrots.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.sweetPotatoes.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.spinach.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Folate",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.edamame.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.hareMung.name} / ${Food_1.food.toorDal.name} / ${Food_1.food.uradDal.name} / ${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin B6",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.chickenBreast.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.fishSalmon.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.porkChops.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Iron",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.apricots.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${Food_1.food.hareMung.name} / ${Food_1.food.toorDal.name} / ${Food_1.food.uradDal.name} / ${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.spinach.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Vitamin C",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.guava.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.kiwi.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.bellPappers.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.lemons.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Iodine",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.iodisedSalt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.bakedPotatoWithPeel.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.milk.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Zinc",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.pumpkinSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.chickpeas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${Food_1.food.hareMung.name}/${Food_1.food.toorDal.name}/${Food_1.food.uradDal.name}/${Food_1.food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Pork", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Selenium",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.brazilNuts.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.porkChops.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: "Lamb Shank", isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            },
            {
                sectionName: "Copper",
                currentSelection: {
                    a: {
                        name: { name: Food_1.food.oats.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: Food_1.food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: Food_1.food.sweetPotatoes.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: Food_1.food.sesameSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: Food_1.food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: Food_1.food.mushrooms.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: Food_1.food.fishSalmon.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    }
                }
            }
        ]
    }
];
