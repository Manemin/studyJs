/* eslint-disable max-classes-per-file */
/* eslint-disable no-inner-declarations */
/* eslint-disable func-names */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
{
    function AddTag(tag, description) {
        this.titleOfTag = tag;
        this.action = description;
        this.attrs = [];
        this.addAttrs = function (titleAttr, actionAttr) {
            this.attrs.push({ titleOfAttr: titleAttr, actionOfAttr: actionAttr });
        };
    }
    const a = new AddTag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.');
    a.addAttrs('accesskey', 'Активация ссылки с помощью комбинации клавиш.');
    a.addAttrs('coords', 'Устанавливает координаты активной области.');
    console.log(a);
    console.log('--------------');
    const div = new AddTag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.');
    div.addAttrs('align', 'Задает выравнивание содержимого тега <div>');
    div.addAttrs('title', 'Добавляет всплывающую подсказку к содержимому.');
    console.log(div);
    console.log('--------------');
    const h1 = new AddTag('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня');
    h1.addAttrs('align', 'Определяет выравнивание заголовка');
    h1.addAttrs('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
    console.log(h1);
    console.log('--------------');
    const span = new AddTag('span', 'Тег <span> предназначен для определения строчных элементов документа');
    span.addAttrs('dir', 'Задает направление и отображение текста — слева направо или справа налево.');
    span.addAttrs('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
    console.log(span);
    console.log('--------------');
    const input = new AddTag('input', 'Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.');
    input.addAttrs('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.');
    input.addAttrs('autofocus', 'Устанавливает фокус в поле формы.');
    console.log(input);
    console.log('--------------');
    const form = new AddTag('form', 'Тег <form> устанавливает форму на веб-странице');
    form.addAttrs('action', 'Адрес программы или документа, который обрабатывает данные формы. ');
    form.addAttrs('enctype', 'Способ кодирования данных формы.');
    console.log(form);
    console.log('--------------');
    const option = new AddTag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>');
    option.addAttrs('disabled', 'Заблокировать для доступа элемент списка.');
    option.addAttrs('label', 'Заблокировать для доступа элемент списка.');
    console.log(option);
    console.log('--------------');
    const select = new AddTag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка');
    select.addAttrs('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка');
    select.addAttrs('required', 'Список обязателен для выбора перед отправкой формы');
    console.log(select);
}
console.log('==============================================');
// ==============================================




// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
{
    class AddTagClass {
        constructor(tag, description) {
            this.titleOfTag = tag;
            this.action = description;
            this.attrs = [];
            this.addAttrs = function (titleAttr, actionAttr) {
                this.attrs.push({ titleOfAttr: titleAttr, actionOfAttr: actionAttr });
            };
        }
    }
    const a = new AddTagClass('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.');
    a.addAttrs('accesskey', 'Активация ссылки с помощью комбинации клавиш.');
    a.addAttrs('coords', 'Устанавливает координаты активной области.');
    console.log(a);
    console.log('--------------');
    /* ------------------------------ */
}
console.log('==============================================');
// ==============================================



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
const car = {
    model: 'Model 3',
    brand: 'Tesla',
    year: 2018,
    maxSpeed: 210,
    power: 283,
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    },
    info() {
        console.log(this);
    },
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    },
    changeYear(newValue) {
        this.year = newValue;
    },
    addDriver(driver) {
        this.driver = driver;
    },
};

const man = {
    name: 'Alex',
    age: 40,
    stageOfDriving: 25,
};
car.increaseMaxSpeed(400);
car.addDriver(man);
car.drive();
car.changeYear(2019);
car.info();
console.log('==============================================');
// ==============================================



// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
function AddCar(model, brand, year, maxSpeed, power) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.power = power;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(this);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}
const porsche = new AddCar('Carrera S', 'Porsche', 2019, 302, 450);
porsche.info();
console.log('==============================================');
// ==============================================



// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class AddCarClass {
    constructor(model, brand, year, maxSpeed, power) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.power = power;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };
        this.info = function () {
            console.log(this);
        };
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = newSpeed;
        };
        this.changeYear = function (newValue) {
            this.year = newValue;
        };
        this.addDriver = function (driver) {
            this.driver = driver;
        };
    }
}
const phantom = new AddCarClass('Phantom', 'Rolls-Royce', 2019, 250, 563);
phantom.info();
console.log('==============================================');
// ==============================================



// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================


console.log('==============================================');
// ==============================================



// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

console.log('==============================================');
// ==============================================
