import { food } from "../LeapScore/Food";

export const phases = [
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
                        name: { name: food.iodisedSalt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.bakedPotatoWithPeel.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.milk.name, isSelected: false },
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
                        name: { name: food.pumpkinSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.chickpeas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${food.hareMung.name}/${food.toorDal.name}/${food.uradDal.name}/${food.masoorDal.name}`, isSelected: false },
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
                        name: { name: food.beef.name, isSelected: false },
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
                        name: { name: food.brazilNuts.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.porkChops.name, isSelected: false },
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
                        name: { name: food.milk.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.broccoli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.greenPeas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.eggs.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.chickenBreast.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.porkChops.name, isSelected: false },
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
                        name: { name: food.walnuts.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.chiaSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.rawas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.prawns.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.porkChops.name, isSelected: false },
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
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.milk.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.yogurt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.sesameSeeds.name, isSelected: false },
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
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: "EAA | Good Fats | Calcium",
                        unit: "1 Cup",
                        dv: "47%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.milk.name, isSelected: false },
                        foodGroup: "EAA | Calcium",
                        unit: "1 Glass",
                        dv: "31%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.yogurt.name, isSelected: false },
                        foodGroup: "Calcium | Gut",
                        unit: "1 Cup",
                        dv: "17%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.cheese.name, isSelected: false },
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
                        name: { name: food.rajma.name, isSelected: false },
                        foodGroup: "EAA | Fiber",
                        unit: "1 Cup",
                        dv: "31%",
                        qty: 1,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: `${food.chickpeas.name} / ${food.chana.name} / ${food.chole.name}`, isSelected: false },
                        foodGroup: "Folate | EAA | Fiber",
                        unit: "1 Cup",
                        dv: "28%",
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.hareMung.name} / ${food.toorDal.name} / ${food.uradDal.name} / ${food.masoorDal.name}`, isSelected: false },
                        foodGroup: "Iron | Protein | Fiber",
                        unit: "1 Cup",
                        dv: "60%",
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${food.til.name}/ ${food.sesameSeeds.name} / ${food.tahini.name}`, isSelected: false },
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
                        name: { name: food.eggs.name, isSelected: false },
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
                        name: { name: `${food.porkChops.name} / ${food.beef.name} / Lamb`, isSelected: false },
                        foodGroup: "EAA | Iron",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: `${food.birdsChicken.name} / Turkey`, isSelected: false },
                        foodGroup: "EAA | Choline",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.fishSalmon.name} / ${food.rawas.name} / ${food.bombayDuck.name}`, isSelected: false },
                        foodGroup: "DHA",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${food.prawns.name} / ${food.shrimps.name}`, isSelected: false },
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
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: "EAA | Good Fats | Calcium",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.yogurt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.hareMung.name} / ${food.toorDal.name} / ${food.uradDal.name} / ${food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.eggs.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.chicken.name, isSelected: false },
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
        category:"Blood Plasma & Cell Mass",
        section:[
            {
                sectionName: "Iron",
                currentSelection: {
                    a: {
                        name: { name: food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.apricots.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.hareMung.name} / ${food.toorDal.name} / ${food.uradDal.name} / ${food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.spinach.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.oysters.name, isSelected: false },
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
                        name: { name: food.guava.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.kiwi.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.bellPappers.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.lemons.name, isSelected: false },
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
                        name: { name: food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.clams.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.crab.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.beef.name, isSelected: false },
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
                        name: { name: food.oats.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.sweetPotatoes.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.sesameSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.mushrooms.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: food.fishSalmon.name, isSelected: false },
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
        category:"Synaptogensis",
        section:[
            {
                sectionName: "Choline",
                currentSelection: {
                    a: {
                        name: { name: food.milk.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.broccoli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.greenPeas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.eggs.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.chickenBreast.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.porkChops.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: food.fishSalmon.name, isSelected: false },
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
                        name: { name: food.walnuts.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.chiaSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.rawas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.prawns.name, isSelected: false },
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
                        name: { name: food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.clams.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.crab.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.beef.name, isSelected: false },
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
        category:"Immune System Development",
        section:[
            {
                sectionName: "Vitamin A",
                currentSelection: {
                    a: {
                        name: { name: food.carrots.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.sweetPotatoes.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.spinach.name, isSelected: false },
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
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.edamame.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.hareMung.name} / ${food.toorDal.name} / ${food.uradDal.name} / ${food.masoorDal.name}`, isSelected: false },
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
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.chickenBreast.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.fishSalmon.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.porkChops.name, isSelected: false },
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
                        name: { name: food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.apricots.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.hareMung.name} / ${food.toorDal.name} / ${food.uradDal.name} / ${food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.spinach.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.oysters.name, isSelected: false },
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
                        name: { name: food.guava.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommended: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.kiwi.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.bellPappers.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.lemons.name, isSelected: false },
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
                        name: { name: food.iodisedSalt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.bakedPotatoWithPeel.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.milk.name, isSelected: false },
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
                        name: { name: food.pumpkinSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.chickpeas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${food.hareMung.name}/${food.toorDal.name}/${food.uradDal.name}/${food.masoorDal.name}`, isSelected: false },
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
                        name: { name: food.beef.name, isSelected: false },
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
                        name: { name: food.brazilNuts.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.porkChops.name, isSelected: false },
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
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.almonds.name, isSelected: false },
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
                        name: { name: food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.clams.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.crab.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.beef.name, isSelected: false },
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
                        name: { name: food.oats.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.sweetPotatoes.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.sesameSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.mushrooms.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: food.fishSalmon.name, isSelected: false },
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
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: "EAA | Good Fats | Calcium",
                        unit: "1 Cup",
                        dv: "47%",
                        qty: 1,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.milk.name, isSelected: false },
                        foodGroup: "EAA | Calcium",
                        unit: "1 Glass",
                        dv: "31%",
                        qty: 1,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.yogurt.name, isSelected: false },
                        foodGroup: "Calcium | Gut",
                        unit: "1 Cup",
                        dv: "17%",
                        qty: 1,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.cheese.name, isSelected: false },
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
                        name: { name: food.rajma.name, isSelected: false },
                        foodGroup: "EAA | Fiber",
                        unit: "1 Cup",
                        dv: "31%",
                        qty: 1,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: `${food.chickpeas.name} / ${food.chana.name} / ${food.chole.name}`, isSelected: false },
                        foodGroup: "Folate | EAA | Fiber",
                        unit: "1 Cup",
                        dv: "28%",
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.hareMung.name} / ${food.toorDal.name} / ${food.uradDal.name} / ${food.masoorDal.name}`, isSelected: false },
                        foodGroup: "Iron | Protein | Fiber",
                        unit: "1 Cup",
                        dv: "60%",
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${food.til.name}/ ${food.sesameSeeds.name} / ${food.tahini.name}`, isSelected: false },
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
                        name: { name: food.eggs.name, isSelected: false },
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
                        name: { name: `${food.porkChops.name} / ${food.beef.name} / Lamb`, isSelected: false },
                        foodGroup: "EAA | Iron",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: `${food.birdsChicken.name} / Turkey`, isSelected: false },
                        foodGroup: "EAA | Choline",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.fishSalmon.name} / ${food.rawas.name} / ${food.bombayDuck.name}`, isSelected: false },
                        foodGroup: "DHA",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${food.prawns.name} / ${food.shrimps.name}`, isSelected: false },
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
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: "EAA | Good Fats | Calcium",
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.yogurt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.hareMung.name} / ${food.toorDal.name} / ${food.uradDal.name} / ${food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.eggs.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.chicken.name, isSelected: false },
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
                        name: { name: food.carrots.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.sweetPotatoes.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.spinach.name, isSelected: false },
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
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.edamame.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.hareMung.name} / ${food.toorDal.name} / ${food.uradDal.name} / ${food.masoorDal.name}`, isSelected: false },
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
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.chickenBreast.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.fishSalmon.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.porkChops.name, isSelected: false },
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
                        name: { name: food.allBranWheatFlaks.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.apricots.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: `${food.hareMung.name} / ${food.toorDal.name} / ${food.uradDal.name} / ${food.masoorDal.name}`, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.spinach.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.beef.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.oysters.name, isSelected: false },
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
                        name: { name: food.guava.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.kiwi.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.bellPappers.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.lemons.name, isSelected: false },
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
                        name: { name: food.iodisedSalt.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.bakedPotatoWithPeel.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.milk.name, isSelected: false },
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
                        name: { name: food.pumpkinSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.chickpeas.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: `${food.hareMung.name}/${food.toorDal.name}/${food.uradDal.name}/${food.masoorDal.name}`, isSelected: false },
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
                        name: { name: food.beef.name, isSelected: false },
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
                        name: { name: food.brazilNuts.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.sunflowerSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.muesli.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.porkChops.name, isSelected: false },
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
                        name: { name: food.oats.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    b: {
                        name: { name: food.paneer.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    c: {
                        name: { name: food.sweetPotatoes.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    d: {
                        name: { name: food.sesameSeeds.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    e: {
                        name: { name: food.oysters.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    f: {
                        name: { name: food.mushrooms.name, isSelected: false },
                        foodGroup: null,
                        unit: null,
                        dv: null,
                        qty: null,
                        recommendated: [{ option: "Never", isSelected: false }, { option: "Once", isSelected: false }, { option: "2 to 3 times", isSelected: false }, { option: "Everyday", isSelected: false }]
                    },
                    g: {
                        name: { name: food.fishSalmon.name, isSelected: false },
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
]