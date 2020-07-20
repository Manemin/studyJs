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
console.log('mappedArr', mappedArr);
console.log('--------------');
// =======================================

// ==================2=====================
// const up = (a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0);
// const down = (a, b) => b.toLowerCase().charCodeAt(0) - a.toLowerCase().charCodeAt(0);
const up = (a, b) => (a.toLowerCase() > b.toLowerCase()) ? 1 : -1;
const down = (a, b) => (a.toLowerCase() < b.toLowerCase()) ? 1 : -1;

// - создать массив со словами на 15-20 элементов.
const str = document.getElementsByTagName('div');
const strArr = str[0].innerText.split(' ');
console.log('--------------');

// -- отсортировать его по алфавиту в восходящем порядке.
strArr.sort(up);
console.log('UP', strArr);
console.log('--------------');

// -- отсортировать его по алфавиту  в нисходящем порядке.
strArr.sort(down);
console.log('DOWN', strArr);
console.log('--------------');

// -- отфильтровать слова длиной менее 4х символов
const lessThan4 = strArr.filter(key => key.length < 4);
console.log('lessThan4', lessThan4);
console.log('--------------');

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком '!' в конце
const modified = strArr.map(el => `${el}!`);
console.log('modified', modified);
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

// -----------1 variant----------------
// const addedId = users.map(key => Object.assign({}, key));
// addedId.forEach((key, index) => key.id = ++index);

// ------------2 varian----------------
// const addedId = users.reduce((arr, obj, index) => {
//     arr.push(JSON.parse(JSON.stringify(obj)));
//     arr[index].id = ++index;
//     return arr;
// }, []);

// ------------3 variant--------------
const addedId = JSON.parse(JSON.stringify(users));
addedId.forEach((obj, i) => obj.id = ++i);
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


// ====================4========================
const cars = [
    { producer: 'subaru', model: 'wrx', year: 2010, color: 'blue', type: 'sedan', engine: 'ej204x', volume: 2, power: 400 },
    { producer: 'subaru', model: 'legacy', year: 2007, color: 'silver', type: 'sedan', engine: 'ez30', volume: 3, power: 250 },
    { producer: 'subaru', model: 'tribeca', year: 2011, color: 'white', type: 'jeep', engine: 'ej20', volume: 2, power: 300 },
    { producer: 'subaru', model: 'leone', year: 1998, color: 'yellow', type: 'sedan', engine: 'ez20x', volume: 2, power: 140 },
    { producer: 'subaru', model: 'impreza', year: 2014, color: 'red', type: 'sedan', engine: 'ej204x', volume: 2, power: 200 },
    { producer: 'subaru', model: 'outback', year: 2014, color: 'red', type: 'hachback', engine: 'ej204', volume: 2, power: 165 },
    { producer: 'bmw', model: '115', year: 2013, color: 'red', type: 'hachback', engine: 'f15', volume: 1.5, power: 120 },
    { producer: 'bmw', model: '315', year: 2010, color: 'white', type: 'sedan', engine: 'f15', volume: 1.5, power: 120 },
    { producer: 'bmw', model: '650', year: 2009, color: 'black', type: 'coupe', engine: 'f60', volume: 6, power: 350 },
    { producer: 'bmw', model: '320', year: 2012, color: 'red', type: 'sedan', engine: 'f20', volume: 2, power: 180 },
    { producer: 'mercedes', model: 'e200', year: 1990, color: 'silver', type: 'sedan', engine: 'eng200', volume: 2, power: 180 },
    { producer: 'mercedes', model: 'e63', year: 2017, color: 'yellow', type: 'sedan', engine: 'amg63', volume: 3, power: 400 },
    { producer: 'mercedes', model: 'c250', year: 2017, color: 'red', type: 'sedan', engine: 'eng25', volume: 2.5, power: 230 },
];
// Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів
const volumeMoreThan3 = cars.filter(usr => usr.volume > 3);
console.log('volumeMoreThan3:', volumeMoreThan3);
console.log('--------------');

// - двигун = 2л
const volumeEqual2 = cars.filter(usr => usr.volume === 2);
console.log('volumeEqual2:', volumeEqual2);
console.log('--------------');

// - виробник мерс
const producerMers = cars.filter(usr => usr.producer === 'mercedes');
console.log('producerMers:', producerMers);
console.log('--------------');

// - двигун більше 3х літрів + виробник мерседес
const mersMore3 = cars.filter(usr => (usr.volume > 3) && (usr.producer === 'mercedes'));
console.log('mersMore3:', mersMore3);
console.log('--------------');

// - двигун більше 3х літрів + виробник субару
const subaruMore3 = cars.filter(usr => (usr.volume > 3) && (usr.producer === 'subaru'));
console.log('subaruMore3', subaruMore3);
console.log('--------------');

// - сили більше ніж 300
const power = cars.filter(usr => usr.power > 300);
console.log('pow', power);
console.log('--------------');

// - сили більше ніж 300 + виробник субару
const subaruPow = cars.filter(usr => (usr.power > 300) && (usr.producer === 'subaru'));
console.log('subPow', subaruPow);
console.log('--------------');

// - мотор серіі ej
const engineType = cars.filter((usr => usr.engine.startsWith('ej')));
console.log('engineType:', engineType);
console.log('--------------');

// - сили більше ніж 300 + виробник субару + мотор серіі ej
const powAndEngineType = cars.filter((usr => (usr.power > 300) && (usr.engine.startsWith('ej'))));
console.log('powAndEngineType:', powAndEngineType);
console.log('--------------');

// - двигун меньше 3х літрів + виробник мерседес
const mersPowerLessThan3 = cars.filter(usr => (usr.volume < 3) && (usr.producer === 'mercedes'));
console.log('mersPowerLessThan3:', mersPowerLessThan3);
console.log('--------------');

// - двигун більше 2л + сили більше 250
const volumeAndPowMore = cars.filter(usr => usr.volume > 2 && usr.power > 250);
console.log('volumeAndPowMore:', volumeAndPowMore);
console.log('--------------');

// - сили більше 250  + виробник бмв
const bmwAndPow = cars.filter(usr => (usr.power > 250) && (usr.producer === 'bmw'));
console.log('bmwAndPow', bmwAndPow);
console.log('--------------');
// =============================================

// =====================5=======================
// - взять слдующий массив
const usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
];

// -- отсортировать его по id пользователей
const sortIdUp = usersWithAddress.sort((usr1, usr2) => usr1.id - usr2.id);
console.log('sortIdUp:', sortIdUp);
console.log('--------------');

// -- отсортировать его по id пользователей в обратном опрядке
const sortIdDown = usersWithAddress.sort((usr1, usr2) => usr2.id - usr1.id);
console.log('sortIdDown:', sortIdDown);
console.log('--------------');

// -- отсортировать его по возрасту пользователей
const sortAgeUp = usersWithAddress.sort((usr1, usr2) => usr2.age - usr1.age);
console.log('sortAgeUp:', sortAgeUp);
console.log('--------------');

// -- отсортировать его по возрасту пользователей в обратном порядке
const sortAgeDown = usersWithAddress.sort((usr1, usr2) => usr2.age - usr1.age);
console.log('sortAgeDown:', sortAgeDown);
console.log('--------------');

// -- отсортировать его по имени пользователей
const sortNameUp = usersWithAddress.sort((usr1, usr2) => (usr1.name > usr2.name) ? 1 : -1);
console.log('sortNameUp:', sortNameUp);
console.log('--------------');

// -- отсортировать его по имени пользователей в обратном порядке
const sortNameDown = usersWithAddress.sort((usr1, usr2) => (usr2.name > usr1.name) ? 1 : -1);
console.log('sortNameDown:', sortNameDown);
console.log('--------------');

// -- отсортировать его по названию улицы  в алфавитном порядке
const sortAddress = usersWithAddress.sort((usr1, usr2) => (usr1.address.street > usr2.address.street) ? 1 : -1);
console.log('sortAddress:', sortAddress);
console.log('--------------');

// -- отсортировать его по номеру дома по возрастанию
const sortAddressNumber = usersWithAddress.sort((usr1, usr2) => usr1.address.number - usr2.address.number);
console.log('sortAddressNumber:', sortAddressNumber);
console.log('--------------');

// -- отфильтровать (оставить) тех кто младше 30
const ageLess30 = usersWithAddress.filter(usr => usr.age < 30);
console.log('ageLess30:', ageLess30);
console.log('--------------');

// -- отфильтровать (оставить) тех у кого отрицательный статус
const status = usersWithAddress.filter(usr => !(usr.status));
console.log('status:', status);
console.log('--------------');

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
const statusAndAge = usersWithAddress.filter(usr => (!(usr.status)) && (usr.age < 30));
console.log('statusAndAge:', statusAndAge);
console.log('--------------');

// -- отфильтровать (оставить) тех у кого номер дома четный
const evenNumber = usersWithAddress.filter(usr => !(usr.address.number % 2));
console.log('evenNumber:', evenNumber);
console.log('--------------');
// =============================================


// ===================6=========================

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
class Cars {
    constructor(model, power, price, year, nameD, ageD, expD) {
        this.model = model;
        this.power = power;
        this.price = price;
        this.year = year;
        this.driver = { name: nameD, age: ageD, experience: expD };
    }
}
// class Driver {
//     constructor(name, age, exp) {
//         this.name = name;
//         this.age = age;
//         this.experience = exp;
//     }
// }

const bmw = new Cars('bmw', 250, 12040, 2010, 'Alex', 29, 12);
const audi = new Cars('audi', 260, 10300, 2011, 'Dima', 21, 10);
const mercedes = new Cars('mercedes', 270, 15000, 2009, 'Bogdan', 25, 11);
const corola = new Cars('corola', 220, 10500, 2014, 'Sergei', 26, 4);
const toyota = new Cars('toyota', 230, 10100, 2017, 'Jeka', 35, 15);
const tesla = new Cars('tesla', 210, 11000, 2011, 'Sanya', 30, 12);
const nissan = new Cars('nissan', 200, 9000, 2012, 'Anton', 27, 3);
const skoda = new Cars('skoda', 230, 14000, 2015, 'Alexey', 25, 6);
const peugeot = new Cars('peugeot', 240, 12000, 2013, 'Vasya', 30, 11);
const renault = new Cars('renault', 250, 11000, 2012, 'Viktor', 40, 18);

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.

const carsWithDrivers = [bmw, audi, mercedes, corola, toyota, tesla, nissan, skoda, peugeot, renault];

// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
for (let i = 0; i < carsWithDrivers.length; i += 2) {
    carsWithDrivers[i].power *= 1.1;
    carsWithDrivers[i].price *= 1.05;
}
console.log('carsWithDrivers:', carsWithDrivers);
console.log('--------------');

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
carsWithDrivers.forEach(car => {
    if (car.driver.experience < 5 && car.driver.age > 25) {
        console.log(`${car.driver.name} go to the refresher course`);
        car.driver.experience += 1;
    }
});
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// variant 1
let sum = 0;
for (let i = 0; i < carsWithDrivers.length; i++) {
    sum += carsWithDrivers[i].price;
}
console.log('sum:', sum);
// variant 2
const sumPrice = carsWithDrivers.reduce((sum, car) => sum + car.price, 0);
console.log('sumPrice:', sumPrice);
// =============================================


// ===================7=========================
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// Пример:
const array = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

function findIndex(arr, key) {
    if (arr.includes(key)) {
        let minIndex = 0;
        let maxIndex = 0;
        minIndex = arr.indexOf(key);
        maxIndex = arr.lastIndexOf(key);
        console.log(`Key = ${key}, MinIndex = ${minIndex}, MaxIndex = ${maxIndex}`);
        return;
    }
    console.log('index = -1');
}

findIndex(array, 14);
