module.exports = (array) => {
    //returns sum of all numbers
    let sum = 0;
    array.forEach((number) => {
        sum += number;
    });
    return sum;
};