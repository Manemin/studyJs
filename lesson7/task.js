/* eslint-disable object-curly-newline */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-parens */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */

// ===================1=====================

// - Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let p = document.createElement('p');
// p.setAttribute('id', 'text');
// document.body.appendChild(p);

const btnHide = document.querySelector('#hide');
btnHide.onclick = () => {
    const pHide = document.querySelector('#text');
    if (pHide.style.display === 'none') {
        pHide.removeAttribute('style');
    } else {
        pHide.style.display = 'none';
    }
};

// =========================================

// ====================2====================

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const hideMe = document.querySelector('#hide-me');
hideMe.onclick = () => {
    hideMe.style.display = 'none';
};

// =========================================

// ===================3=====================

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача

const formAge = document.forms.checkAge;
const btnC = formAge.btnc;

btnC.onclick = () => {
    if (formAge.age.value < 18) {
        alert('you are young');
        return;
    }
    alert('welcome !');
};

// =========================================

// ==================4======================

// - Создайте меню, которое раскрывается/сворачивается при клике

const menu = document.querySelector('#menu');
menu.onclick = () => {
    const ul = document.querySelector('#menu ul');
    if (ul.style.display === 'none') {
        ul.removeAttribute('style');
        return;
    }
    ul.style.display = 'none';
};

// =========================================

// ==================5======================

// - Создать список комментариев , пример объекта коментария
//  - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

const comments = [
    { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
    { title: 'document', body: 'converts tagName to lower case before' },
    { title: 'string ', body: 'element is initialized with the value' },
    { title: 'optional', body: 'tag name for a custom element' },
    { title: 'example', body: 'and inserts it before the element with' },
];

const divComm = document.getElementById('comment');

comments.forEach(comm => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const btn = document.createElement('button');
    h3.setAttribute('class', 'title');
    div.setAttribute('class', 'cmt');
    btn.innerText = 'click';
    h3.innerHTML = comm.title;
    p.innerHTML = comm.body;
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(btn);
    divComm.appendChild(div);
});

const cmtBtn = document.querySelectorAll('.cmt button');

cmtBtn.forEach(btn => {
    btn.onclick = () => {
        const body = btn.previousElementSibling;
        if (body.style.display === 'none') {
            body.removeAttribute('style');
            return;
        }
        body.style.display = 'none';
    };
});
// =========================================

// ==================6======================

// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам
// всі необхідні атрибути.

const btnToConsole = document.getElementById('console');

btnToConsole.onclick = () => {
    const c1Input1 = document.forms.console1.c1Text1.value;
    const c1Input2 = document.forms.console1.c1Text2.value;
    const c2Input1 = document.forms.console2.c2Text1.value;
    const c2Input2 = document.forms.console2.c2Text2.value;
    console.log('c1Input1:', c1Input1);
    console.log('c1Input2:', c1Input2);
    console.log('c2Input1:', c2Input1);
    console.log('c2Input2:', c2Input2);
};

// =========================================

// ===================7=====================

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

const createTable = (row, col, val, tag) => {
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    caption.innerHTML = 'TABLE';
    for (let i = 0; i < row; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < col; j++) {
            const th = document.createElement('th');
            th.innerText = val;
            tr.appendChild(th);
        }
        table.appendChild(tr);
    }
    table.appendChild(caption);
    tag.appendChild(table);
};

const table = document.getElementById('table1');

createTable(3, 4, 'sdf', table);

// =========================================

// ===================8=====================

// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
// (Додатковачастина для завдання)

const tabBtn = document.getElementById('tab-submit');
const divTable = document.getElementById('table2');
tabBtn.onclick = () => {
    const row = document.forms.table.row.value;
    const col = document.forms.table.col.value;
    const tabText = document.forms.table.tabText.value;
    createTable(row, col, tabText, divTable);
};

// =========================================

// ===================9=====================
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо
// нажатием на стрелочки.



// =========================================

// ==================10=====================
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

const arr = ['fuck', 'shit', 'dick', 'pussy', 'bitch', 'asshole'];
const chkWord = document.forms.chkForm.chkWord;

chkWord.onclick = () => {
    const word = document.forms.chkForm.word.value;
    if (arr.includes(word.toLowerCase())) {
        alert('bad word ');
    } else {
        console.log('good');
    }
};

// =========================================

// ==================11=====================

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

const btnStr = document.forms.obscene.str;

btnStr.onclick = () => {
    const string = document.forms.obscene.string.value;
    arr.forEach(word => {
        if (string.toLowerCase().includes(word)) {
            alert('bad');
        }
    });
};

// =========================================

// =================12======================

// -- взять массив пользователей
const usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } },
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

const chkBoxAge = document.forms.users.age;
const chkBoxCity = document.forms.users.city;
const chkBoxStatus = document.forms.users.status;
const divResult = document.getElementById('result');

function filterStatus() {
    const divSt = document.createElement('div');
    divSt.setAttribute('id', 'status');
    if (chkBoxStatus.checked) {
        const filtered = usersWithAddress.filter(obj => !obj.status);
        filtered.forEach(usr => {
            const p = document.createElement('p');
            p.innerHTML = JSON.stringify(usr);
            // p.innerHTML = usr.name;
            divSt.appendChild(p);
        });
    } else {
        document.getElementById('status').remove();
        return;
    }
    divResult.appendChild(divSt);
}

function filterCity() {
    const divSt = document.createElement('div');
    divSt.setAttribute('id', 'city');
    if (chkBoxCity.checked) {
        const filtered = usersWithAddress.filter(obj => obj.address.city === 'Kyiv');
        filtered.forEach(usr => {
            const p = document.createElement('p');
            p.innerHTML = JSON.stringify(usr);
            // p.innerHTML = usr.name;
            divSt.appendChild(p);
        });
    } else {
        document.getElementById('city').remove();
        return;
    }
    divResult.appendChild(divSt);
}

function filterAge() {
    const divSt = document.createElement('div');
    divSt.setAttribute('id', 'age');
    if (chkBoxAge.checked) {
        const filtered = usersWithAddress.filter(obj => obj.age > 28);
        filtered.forEach(usr => {
            const p = document.createElement('p');
            p.innerHTML = JSON.stringify(usr);
            // p.innerHTML = usr.name;
            divSt.appendChild(p);
        });
    } else {
        document.getElementById('age').remove();
        // document.getElementById('age').remove();
        return;
    }
    divResult.appendChild(divSt);
}

chkBoxStatus.addEventListener('click', filterStatus);
chkBoxAge.addEventListener('click', filterAge);
chkBoxCity.addEventListener('click', filterCity);

// =========================================

// ==================13=====================

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает
//  какой-либо элемент DOM-структуры. Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу,
// при еще одном нажатии на "вперед", вы переходите к следующему дочернему
// элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети,
// то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего
// элемента и переходим к следующему, лежащему с ним на одном уровне

function stepDom(tag) {
    const el = document.querySelector(tag);
    const prev = document.createElement('button');
    const next = document.createElement('button');
    next.innerHTML = 'Next';
    prev.innerHTML = 'Prev';
    next.setAttribute('id', 'next');
    prev.setAttribute('id', 'prev');
    document.body.appendChild(prev);
    document.body.appendChild(next);
}

// stepDom();

// =========================================

// *** При виділені сегменту тексту на сторінці він стає
// жирний/курсивний/або якось іншим способом змінює свій стан
