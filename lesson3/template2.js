// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :

// -- змінює колір тексту елемнту з ід main_header на будь-який інший
const mainHeader = document.getElementById('main_header');
mainHeader.style.backgroundColor = 'silver';

// -- робить шириниу елементу ul 400 пікселів
const ul = document.getElementsByTagName('ul');
ul[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%
const linkList = document.getElementsByClassName('linkList');
for (let i = 0; i < linkList.length; i += 1) {
    linkList[i].style.width = '50%';
}

// -- отримує текст який зберігається в елементі з класом listElement2
const listElement2 = document.getElementsByClassName('listElement2');
console.log(listElement2[0].innerHTML);

// -- отримує всі елементи li та змінює ім колір фону на сірий
const li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i += 1) {
    li[i].style.backgroundColor = 'silver';
}

// -- отримує всі елементи 'a' та додає їм клас anchor
const anchor = document.getElementsByTagName('a');
for (let i = 0; i < anchor.length; i += 1) {
    anchor[i].classList.add('anchor');
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен
// елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const item of anchor) {
    if (item.innerText === 'link3') {
        item.style.fontSize = '40px';
    }
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX.
// Де XXX - текстовий контент елементу a

for (const item of anchor) {
    item.classList.add(`element_${item.innerText}`);
}

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const subHeader = document.getElementsByClassName('sub-header');
const color = prompt('enter name of the color:', 'white');
for (const item of subHeader) {
    item.style.backgroundColor = color;
}

// -- отримує всі елементи 'sub-header' та змінює колір тексту у випадку
// якщо текст елемнту = content 2 segment . Колір отримати з prompt()



// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
