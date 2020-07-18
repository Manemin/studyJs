/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-object-spread */
/* eslint-disable arrow-parens */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
function createArr(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.ceil(Math.random() * (80 - 20) + 20));
    }
    return arr;
}

// =================1=====================

// - создать массив с 20 числами.
const arr = [80, 77, 75, 74, 71, 70, 67, 65, 60, 55, 48, 46, 46, 44, 43, 41, 41, 40, 22, 21];
// const arr = createArr(20);

// -- при помощи метода sort и колбека  отсортировать массив.
arr.sort((a, b) => a - b);
console.log('sort UP:', arr);
console.log('--------------');
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
arr.sort((a, b) => b - a);
console.log('sort DOWN:', arr);
console.log('--------------');

// -- при помощи filter получить числа кратные 3
const multiple3 = arr.filter(item => item % 3 === 0);
console.log('кратные 3:', multiple3);
console.log('--------------');
// -- при помощи filter получить числа кратные 10
const multiple10 = arr.filter(item => item % 10 === 0);
console.log('кратные 10:', multiple10);
console.log('--------------');
// -- перебрать (проитерировать) массив при помощи foreach()
arr.forEach((el, index) => {
    document.write(`index: ${index} => value: ${el} <br>`);
});

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
const mappedArr = arr.map(item => item * 3);
console.log(mappedArr);
console.log('--------------');
// =======================================

// ==================2=====================
const up = (a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0);
const down = (a, b) => b.toLowerCase().charCodeAt(0) - a.toLowerCase().charCodeAt(0);

// - создать массив со словами на 15-20 элементов.
const str = document.getElementsByTagName('div');
const strArr = str[0].innerText.split(' ');
console.log('--------------');

// -- отсортировать его по алфавиту в восходящем порядке.
strArr.sort(up);
console.log(strArr);
console.log('--------------');

// -- отсортировать его по алфавиту  в нисходящем порядке.
strArr.sort(down);
console.log(strArr);
console.log('--------------');

// -- отфильтровать слова длиной менее 4х символов
const lessThan4 = strArr.filter(key => key.length < 4);
console.log(lessThan4);
console.log('--------------');

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
const modified = strArr.map(el => `${el}!`);
console.log(modified);
console.log('--------------');

// =======================================

// =================3=====================
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
const users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true },
];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

users.sort((a, b) => a.age - b.age);
console.log(users);

users.sort((a, b) => b.age - a.age);
console.log(users);
console.log('--------------');

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
console.log(users);
users.sort((a, b) => a.name.length - b.name.length);
console.log(users);
users.sort((a, b) => b.name.length - a.name.length);
console.log(users);
console.log('--------------');

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
// - індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти
// - це в новий масив (первинний масив залишиться без змін)

const addedId = users.map(key => Object.assign({}, key));
addedId.forEach((key, index) => key.id = ++index);
console.log('new arr:', addedId);
console.log('--------------');

// - відсортувати його за індентифікатором
addedId.sort((a, b) => b.id - a.id);
console.log('sorted:', addedId);
console.log('--------------');

// -- наисать функцию калькулятора с 2мя числами и колбеком
function calculator(num1, num2, callback) {
    const result = callback(num1, num2);
    return result;
}

console.log(calculator(11, 20, (a, b) => a + b));
console.log('--------------');

// -- наисать функцию калькулятора с 3мя числами и колбеком
function calculator1(a, b, c, callback) {
    const result = callback(a, b, c);
    return result;
}
console.log(calculator1(11, 20, 40, (a, b, c) => a + b - c));
console.log('--------------');

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================


// =============================================
let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2, power: 140
    },
    {
        producer: "subaru"
        , model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    { 
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];
// Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів
const volumeMoreThan3 = cars.filter(obj => obj.volume > 3);
console.log(volumeMoreThan3);
console.log('--------------');

// - двигун = 2л
const volumeEqual2 = cars.filter(obj => obj.volume === 2);
console.log(volumeEqual2);
console.log('--------------');

// - виробник мерс
const producerMers = cars.filter(obj => obj.producer = 'mersedes');
console.log(producerMers);
console.log('--------------');

// - двигун більше 3х літрів + виробник мерседес
const mersMore3 = cars.filter(obj => (obj.volume > 3) && (obj.producer === 'mersedes'));
console.log(mersMore3);
console.log('--------------');

// - двигун більше 3х літрів + виробник субару
const subMore3 = cars.filter(obj => (obj.volume > 3) && (obj.producer === 'subaru'));
console.log(subMore3);
console.log('--------------');

// - сили більше ніж 300
const pow = cars.filter(obj => obj.power > 300);
console.log(pow);
console.log('--------------');

// - сили більше ніж 300 + виробник субару
const subPow = cars.filter(obj => (obj.power > 300) && (obj.producer === 'subaru'));
console.log(subPow);
console.log('--------------');

// - мотор серіі ej
console.log('--------------');

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
// =============================================


// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
