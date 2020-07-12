/* eslint-disable object-curly-newline */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

// ------------------1-------------------
// создать 5 объектов.В каждом объекте не менее 3х полей.
// Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте)

const car = {
    brand: 'Honda',
    model: 'Accord',
    color: 'black',
    year: 2012,
};
const book = {
    title: 'Js for beginners',
    author: 'James F',
    pages: 300,
    price: 99.9,
};
const computer = {
    cpu: 'Intel Core i5-6500K',
    mb: 'ASUS ROG',
    ram: 32,
    ssd: 250,
    case: 'Aerocool Scar RGB',
};
const monitor = {
    matrix: 'ips',
    size: 24,
    widht: 1920,
    heihgt: 1080,
};
const house = {
    floors: 2,
    garage: true,
    backyard: true,
};

// ---------------------2-------------------
// - создать 5 объектов с полностью разным набором полей.В каждом объекте должен
// присутсвовать массив и внутренний объект.Опишите что угодно, машину, картину, болт...
// Пример: let man = { name: 'kokos', skills: ['java', 'js'], wife: { name: 'cherry' } };
const usr = {
    id: 108,
    email: 'usr123@1212.com',
    address: {
        country: 'Ukraine',
        city: 'Odessa',
        zipcode: 1231231,
    },
    hobby: ['bike', 'travel'],
};
const shirt = {
    size: ['XXL', 'S', 'M', 'L'],
    material: {
        Linen: '55%',
        Cotton: '45%',
    },
    print: 'Viking',
};

const videoFile = {
    format: 'mkv',
    video: {
        birate: '1980 kb/s',
        resolution: '1920 x 1080',
    },
    audio: ['eng', 'ua'],
    filesize: '2gb',
};

const man = {
    name: 'kokos',
    skills: ['java', 'js'],
    wife: { name: 'cherry' },
};

const surroundSound = {
    channels: '5.1',
    finishes: ['Grey', 'walnut', 'black', 'white'],
    speakers: {
        subwoofer: '150w',
        satellite: '50w',
    },
};

// ---------------------3-------------------
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (const key in car) {
    console.log(key);
}
console.log('----------------------');
for (const key in book) {
    console.log(key);
}
console.log('----------------------');
for (const key in computer) {
    console.log(key);
}
console.log('----------------------');
for (const key in monitor) {
    console.log(key);
}
console.log('----------------------');
for (const key in house) {
    console.log(key);
}
console.log('----------------------');
for (const key in usr) {
    console.log(key);
}
console.log('----------------------');
for (const key in shirt) {
    console.log(key);
}
console.log('----------------------');
for (const key in videoFile) {
    console.log(key);
}
console.log('----------------------');
for (const key in man) {
    console.log(key);
}
console.log('----------------------');
for (const key in surroundSound) {
    console.log(key);
}
console.log('----------------------');

// ---------------------4-------------------
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log(Object.keys(car));
console.log(Object.keys(book));
console.log(Object.keys(computer));
console.log(Object.keys(monitor));
console.log(Object.keys(house));
console.log(Object.keys(usr));
console.log(Object.keys(shirt));
console.log(Object.keys(videoFile));
console.log(Object.keys(man));
console.log(Object.keys(surroundSound));

// ---------------------5-------------------
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
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

// ---------------------6-------------------
// - Создать массив объектов cities и заполнить его объектами с полями название,
// популяция, страна, регион. (Значаения полей могу быть выдуманными)
const cities = [
    { name: 'Kyiv', population: 10, country: 'Ukraine', region: 'Europe' },
    { name: 'Rome', population: 14, country: 'Italy', region: 'Europe' },
    { name: 'New-York', population: 50, country: 'USA', region: 'North America' },
    { name: 'Rio de Janeiro', population: 10, country: 'Brazil', region: 'South America' },
];

// ---------------------7-------------------
// - Создать массив объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет, водитель.Водитель является отдельным
// объектом с полями имя, возраст, пол, стаж.


/*
- проитерировать каждый массив из задания 5, 6, 7 при помощи while.
- проитерировать каждый массив из задания 5, 6, 7 при помощи for .
- проитерировать каждый массив из задания 5, 6, 7 при помощи  for of.
- взять объекты из задания 1 и превратить каждый в json.
- взять json из задания 11 и превратить их обратно в объекты.
- взять массив из задания 5, в цикле перебрать его объекты превратив их в json.
- взять массив из задания 6, в цикле перебрать его объекты превратив их в json.
- взять массив из задания 7, в цикле перебрать его объекты превратив их
в json и сразу скоприовать в новый массив.
- Создать массив пользователей.У каждого пользователя обязательно должено быть поле skills
которое является массивом.Проитерировать массив пользователей
и в каждом пользователе проитерировать его массив skills
- Создать массив пользователей.У каждого пользователя обязательно должено быть поле skills
которое является массивом.Проитерировать массив пользователей и в каждом пользователе проитерировать
его массив skills.Скопировать все skills всех пользователей в отедльный массив

    - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users = [
    { name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
    { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
    { name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] },
    { name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
    { name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }
];

- З масиву users за допомогою циклу витягнути адреси користувачів і
записати(скопіювати) їх в інший порожній масив.
- За допомоги циклу проітерувати  масив users, записати кожного юзера в
сівй блок за допомоги document.createElement.Всі данні в одному блоці.
- За допомоги циклу проітерувати  масив users, записати кожного юзера в
сівй блок за допомоги document.createElement, розділивши всі властивості
по своїм блокам(div > div * 4)
    - За допомоги циклу проітерувати  масив users, записати кожного юзера в
    сівй блок за допомоги document.createElement, розділивши всі властивості
    по своїм блокам, блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [
    {name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

*/
