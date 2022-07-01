 function getRandom(min, max) {
    const floatRandom = Math.random();
    const difference = max - min;
    const random = Math.floor(difference * floatRandom);
    const randomAboveMin = random + min
    return randomAboveMin;
}
console.log(getRandom(23, 45)); 
console.log(getRandom(23, 45)); 
console.log(getRandom(23, 45)); 
console.log(getRandom(23, 45)); 
