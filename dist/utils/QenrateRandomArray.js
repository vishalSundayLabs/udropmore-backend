function generateRandomArray() {
    const array = [];
    let sum = 0;
    while (sum < 3600) {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
        array.push(randomNumber);
        sum += randomNumber;
    }
    const diff = sum - 3600;
    if (diff > 0) {
        const lastIndex = array.length - 1;
        array[lastIndex] -= diff;
    }
    return array;
}
const randomArray = generateRandomArray();
console.log(randomArray);
