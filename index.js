// ANS NO - 1
function calculateDifference(a,b) {
    return (a-b);
}
console.log(calculateDifference(10,5));

// ANS NO - 2
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(10));

// ANS NO - 3
function findMin(number) {
    return Math.min(...number)
}
console.log(findMin([3,2,5,1,-4,6,7,9,-3]));

// ANS NO - 4
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1,2,3,4,5,6,7,8,9,10,14]));

// ANS NO -5
function sortArrayDescending(numbers) {
    return numbers.sort((a,b) => a - b);
}
console.log(sortArrayDescending([30,23,53,21,33,43,7]));


// ANS NO - 6
function lowercaseFirstLetter(title) {
    return title[0].toLowerCase() + title.slice(1);
}
console.log(lowercaseFirstLetter("SHADMAN MUHTADI"));

// ANS NO - 7
function findAverage(numbers) {
    // let numbers = [1,2,3,4,5,6,7,8,9];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(findAverage([1,2,3,4,5,6,7,8,9]));

// ANS NO - 8
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(1900));