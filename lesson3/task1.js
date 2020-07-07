// ------------1---------------
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
{
    const dog = {
        breed: 'labrador',
        name: 'Dora',
        color: 'black',
        gender: 'female',
        age: 1,
    };
    const human = {
        name: 'Alex',
        gender: 'male',
        age: 34,
        weight: 73,
        height: 192,
        nationality: 'ukranian',
    };
    const car = {
        brand: 'Tesla',
        model: 'Model 3',
        style: 'sedan',
        year: 2015,
        color: 'Silver Metallic',
    };
    const apartment = {
        floor: 3,
        room: 3,
        space: 75,
        bathrooms: 1,
        balcony: 2,
    };
    const book = {
        title: "You Don't Know JS: Scope & Closures",
        author: 'Kyle Simpson',
        publisher: "O'Reilly Media, Inc",
        format: 'Paperback',
        length: 300,
        release: 2014,
    };
}

// -------------2-------------------
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
console.log('-------2---------');
{
    const dogs = ['mastiff', 'poodle', 'collie', 'retriever', 'terrier'];
    const humans = ['Max', 'Sonya', 'Simon', 'Oksana', 'Anne'];
    const cars = ['toyota', 'honda', 'tesla', 'ford', 'bmw'];
    console.log(dogs);
    console.log(humans);
    console.log(cars);
}
console.log('-----end-2-------');

// -------------3--------------
// -- створити об'єкт (не меньше 5ти властивостей) який описує,
// одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
{
    const house = {
        floor: 2,
        room: {
            bedroom: 2,
            livingRoom: 3,
            bathrooms: 2,
        },
        balcony: 2,
        additionally: ['garage', 'backyard', 'basement'],
    };
    const driver = {
        name: 'Mike',
        age: 33,
        experience: 16,
        category: ['B', 'C', 'C1', 'CE', 'D1', 'D', 'DE'],
        work: {
            bus: 4,
            truck: 7,
            taxi: 4,
        },
    };
}

// --------------4------------------
console.log('-------4---------');

// Дан массив:
let users = [
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
// - звернутися в відповідну ячейку масиву і відповідний параметр
// об'єкта і вивести в консольх наступне:

// - статус Андрія
console.log(users[7].status);
// - статус Максима
console.log(users[4].status);
// - ім'я передостаннього об'єкту
console.log(users[9].name);
// - ім'я третього об'єкта
console.log(users[2].name);
// - вік Олега
console.log(users[6].age);
// - вік Олі
console.log(users[3].age);
// - вік + ім'я 5го об'єкта
console.log(users[4].age, users[4].name);
// - вік + сатус Анни
console.log(users[5].age, users[5].status);

console.log('-----end-4-------');

console.log('-------5---------');
// -----------------------5-----------------------------------
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :

// - отримує текст з параграфа з id "content"
const contentText = document.getElementById('content').innerText;
console.log(contentText);
console.log('---------------------------');

// - отримує текст з блоку з id "rules"
const rulesText = document.getElementById('rules').innerText;
console.log(rulesText);
console.log('---------------------------');

// - замініть текст параграфа з id 'content' на будь-який інший
const content = document.getElementById('content');
content.innerText = 'consectetur adipisicing elit. Blanditiis cupiditate';

// - замініть текст параграфа з id 'rules' на будь-який інший
const rules = document.getElementById('rules');
rules.innerText = 'не более одного поединка за один раз';

// - змініть кожному елементу колір фону на червоний
content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

// - змініть кожному елементу колір тексту на синій
content.style.backgroundColor = 'blue';
rules.style.backgroundColor = 'blue';

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.classList);
console.log('---------------------------');

// - отримати всі елементи з класом fc_rules
const fcRules = document.getElementsByClassName('fc_rules');

// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i = 0; i < fcRules.length; i += 1) {
    fcRules[i].style.color = 'red';
}
// for (const rule of fcRules) {
//     rule.style.color = 'red';
// }
console.log('-----end-5-------');

console.log('-------5---------');
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен
// елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку
// якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
console.log('-----end-6-------');
