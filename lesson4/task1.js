/* eslint-disable arrow-parens */
/* eslint-disable object-curly-newline */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */

// - створити функцію яка виводить масив
function logArr(arr) {
    console.log(arr);
}
// function logArr(arr) {
//     return arr;
// }

// -------------------------------
// - створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.
function randomArr() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random() * (115 - 20) + 20));
    }
    logArr(arr);
}
randomArr();

// -------------------------------
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function minNum(a, b, c) {
    const min = Math.min(a, b, c);
    console.log(min);
    return min;
}
const min = minNum(1, 3, 5);
console.log('min:', min);

// -------------------------------
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function maxNum(a, b, c) {
    const max = Math.max(a, b, c);
    console.log(max);
    return max;
}
const max = maxNum(1, -4, 10);
console.log('max:', max);

// -------------------------------
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function minMax() {
    let max = arguments[0];
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        max = Math.max(max, arguments[i]);
        min = Math.min(min, arguments[i]);
    }
    console.log(max);
    return min;
}
const num = minMax(1, 2, -2, 10, 100);
console.log('min:', num);

// -------------------------------
// - створити функцію яка повертає найбільше число з масиву
let arr = [58, 75, 83, 72, 114, 40, 29, 90, 62, 40, -1];
function maxArr(array) {
    let max = array[0];
    for (const item of array) {
        max = Math.max(max, item);
    }
    return max;
}
console.log(maxArr(arr));

// -------------------------------
// - створити функцію яка повертає найменьше число з масиву
function minArr(array) {
    let min = array[0];
    for (const item of array) {
        min = Math.min(min, item);
    }
    return min;
}
console.log(minArr(arr));

// -------------------------------
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function amount(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log('amount:', amount(arr));

// -------------------------------
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageAmount(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log('average amount:', averageAmount(arr));

// -------------------------------
// - Створити функцію яка приймає масив будь яких объектів,
// та повертає значення кількості об'єктів в масиві
arr = [{ name: 'sa', age: 29 }, 3, { name: 'lo', age: 9 }];
function numOfObj(arr) {
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            amount += 1;
        }
    }
    return amount;
}
// const numOfObj = (arr) => arr.length;  // :) ?
console.log('amouunt obj:', numOfObj(arr));

// -------------------------------
// - Створити функцію яка приймає масив будь яких объектів,
// та повертає загальн кількість полів в них
function numOfKeys(arr) {
    let sumOfKeys = 0;
    for (const item of arr) {
        sumOfKeys += Object.keys(item).length;
    }
    return sumOfKeys;
}
console.log('sum keys:', numOfKeys(arr));

// -------------------------------
// - створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
// Приклад
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
// результат
// [3,5,7,9]
function sumArr(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}
console.log(sumArr(arr1, arr2));

// -------------------------------
// *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
arr = [1, 0, 3, 4];
function reverse(arr, i) {
    arr.splice(i + 1, 0, arr.splice(i, 1)[0]);
}
reverse(arr, 1);
console.log('reverse:', arr);

// -------------------------------
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
arr = [1, 0, 6, 0, 3];
function moveZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.push(arr.splice(i, 1)[0]);
        }
    }
}
moveZero(arr);
console.log(arr);

// -------------------------------
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function addP() {
    const p = document.createElement('p');
    p.innerText = 'Hello owu';
    document.body.appendChild(p);
}
addP();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addText(text, type) {
    const elem = document.createElement(type);
    elem.innerText = text;
    document.body.appendChild(elem);
}
addText('hello js', 'div');

// -------------------------------
// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент,
// індентифікатор якого ви отримали. Всі властивості авто в обному блоці
const cars = [
    { model: 'accord', year: 2012, power: 120, color: 'black' },
    { model: 'lancer', year: 1231, power: 140, color: 'yellow' },
    { model: 'a3', year: 2011, power: 110, color: 'red' },
    { model: 'x3', year: 2010, power: 100, color: 'grey' },
    { model: 'aveo', year: 2020, power: 150, color: 'black' },
    { model: 'damas', year: 2011, power: 120, color: 'green' },
    { model: 'sonata', year: 2002, power: 104, color: 'black' },
    { model: 'cx-3', year: 1912, power: 20, color: 'white' },
    { model: 'cherry', year: 2004, power: 93, color: 'silver' },
    { model: 'carina', year: 2014, power: 101, color: 'black' },
];

function addCar(arr, id) {
    const el = document.getElementById(id);
    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        for (const [key, value] of Object.entries(arr[i])) {
            div.innerHTML += `${key}: ${value} | `;
            el.appendChild(div);
        }
    }
}
addCar(cars, 'cars');

// -------------------------------
// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент,
// індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function addCarTo(arr, id) {
    const el = document.getElementById(id);
    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        for (const [key, value] of Object.entries(arr[i])) {
            const p = document.createElement('p');
            p.innerHTML = `${key}: ${value}`;
            div.appendChild(p);
        }
        el.appendChild(div);
    }
}
addCarTo(cars, 'list');

// -------------------------------
// **- функція приймає 2 масиви з рівною кількістю об'єктів та
// з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Частковий приклад реультату:
// let usersWithCities = [
//     {
//         id: 1, name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1,
//             country: 'Ukraine',
//             city: 'Ternopil'
//         },
//     },
// Приклад масивів:
const usersWithId = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false },
];
const citiesWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' },
];

function concat(arr1, arr2) {
    const usersWithCities = JSON.parse(JSON.stringify(arr1)); //    create copy usersWithId
    for (const item of usersWithCities) {
        arr2.forEach(element => {
            if (item.id === element.user_id) {
                item.address = element;
            }
        });
    }
    return usersWithCities;
}
console.log('concat', concat(usersWithId, citiesWithId));
console.log('user:', usersWithId);

// ===========додаткове від віктора========
// -------------------------------
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
function isPowerOf2(num) {
    if (Math.log2(num) - Math.floor(Math.log2(num)) === 0) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}
isPowerOf2(1024);
isPowerOf2(93);

// -------------------------------
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
const array = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9]; //   -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
const newArr = [];
function expand(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            expand(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
}
expand(array);
console.log(newArr);
