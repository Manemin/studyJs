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
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

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
const clothes = {
    type: 'T-Shirt',
    size: ['XXL', 'S', 'M', 'L'],
    material: {
        Viscose: '65%',
        Nylon: '35%',
    },
};



/*
- Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
- Создать массив объектов cities и заполнить его объектами с полями название,
популяция, страна, регион. (Значаения полей могу быть выдуманными)
- Создать массив объектов cars и заполнить его машинами с полями модель,
год выпуска, мощность, цвет, водитель.Водитель является отдельным
объектом с полями имя, возраст, пол, стаж.
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

- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
let usersWithId = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false },
];
let citiesWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' },
];
З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id".
Записати цей об'єкт в новий масив
Частковий приклад реультату:
let usersWithCities = [
    {
        id: 1, name: 'vasya',
        age: 31, status: false,
        address: {
            user_id: 1,
            country: 'Ukraine',
            city: 'Ternopil'
        },
    },
......
];
*/
