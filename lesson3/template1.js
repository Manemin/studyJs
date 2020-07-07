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
