const bmi = calcBMI("88,3", "1.75")
console.log(bmi);
function calcBMI(weight, height) {
    weight = Number(weight.replace(",", "."));
    height = Number(height.replace(",", "."));
    console.log(weight, height);
    const result = weight / (height * height);
    return Number(result.toFixed(1));
}

//! ================================================

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
    
}

function min(a, b) {
return a < b ? a : b;
}

function min(a, b) {
    return Math.min(a, b);
}

//! ==============================
function getRectArea(dimensions) {
    const arr = dimensions.split(" ");
    const a = Number(arr[0]);
    const b = Number(arr[1]);
    return (a * b);
}
console.log(getRectArea("8 11"));

//! ====================================

function calAverage() {
    console.log(arguments)
    const length = arguments.length;
    let total = 0;
    for (const num of arguments) {
        total += num;
        console.log(total)
    }
    return Number(total / arguments.length);
}

console.log(calAverage(1, 2, 3, 4));
console.log(calAverage(14, 8, 2));
console.log(calAverage(27, 43, 2, 8, 36));

//! ===============================================

function formatTime(totalMinutes) {
    const minutes = Math.floor(totalMinutes % 60);
    const hours = Math.floor((totalMinutes / 60) % 24);  // 60 хвилин у годині, 24 години в добі
    const days = Math.floor((totalMinutes / 60 / 24) % 30);  // 60 хвилин у годині, 24 години в добі, 30 днів у місяці (приблизно)
    const months = Math.floor((totalMinutes / 60 / 24 / 30) % 12);  // 60 хвилин у годині, 24 години в добі, 30 днів у місяці (приблизно), 12 місяців у році
    const years = Math.floor(totalMinutes / 60 / 24 / 365);  // 60 хвилин у годині, 24 години в добі, 365 днів у році
    const formYears = String(years).padStart(2, 0);
    const formMonths = String(months).padStart(2, 0);
    const formDays = String(days).padStart(2, 0);
    const formHours = String(hours).padStart(2, 0);
    const formMinutes = String(minutes).padStart(2, 0);
    return (`${formYears}:${formMonths}:${formDays}:${formHours}:${formMinutes}`);
}

console.log(formatTime(7435));
console.log(formatTime(4534));
console.log(formatTime(435521));


//! =====================================================


function findMin(arr) {
    let min = arr[0];
    for (const num of arr) {
        if (num < min) min = num;
    }
    return min;
}

const arr = [4, 2, 5, 2, 6, 2, 5, 3, 22, 4, 2, 1, 50, 2, 9];

console.log(findMin(arr));

//! ======================================