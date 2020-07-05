/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */

// -------------------------------
// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до
// конкретного індексу. Вивести в консоль
console.log('-----------task1-------------');

const arrayOfNumberTask1 = [1, 2, 4, 4, 1];
const arrayOfStringTask1 = ['141', 'js', 'light', 'very good', 'yes'];
const arrayOfDifferentValuesTask1 = [1, true, 'something else', false, 123, '123'];
const randomArrayTask1 = [];

randomArrayTask1[0] = '123';
randomArrayTask1[1] = 123;
randomArrayTask1[2] = true;

console.log(arrayOfNumberTask1);
console.log(arrayOfStringTask1);
console.log(arrayOfDifferentValuesTask1);
console.log(randomArrayTask1);

console.log('----------end task1----------');

// ------------------------------------
// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом і індексом всередині
document.write('-----------task2-------------');

for (let i = 0; i < 10; i++) {
    document.write('<div>My homework</div>');
}
document.write('--------------------');

for (let i = 0; i < 10; i++) {
    document.write(`<div>index: ${i}</div>`);
}
document.write('----------end task2----------');

// ------------------------------------
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1
// c довільним текстом і індексом всередині.
document.write('<br>-----------task3-------------');
{
    let i = 0;
    while (i < 10) {
        document.write('<h1>My homework</h1>');
        i++;
    }
    document.write('--------------------');
    i = 0;
    while (i < 10) {
        document.write(`<h1>index: ${i}</h1>`);
        i++;
    }
}
document.write('----------end task3----------');

// ------------------------------------------
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу.
//   Вивести в консоль всі його елементи в циклі.
console.log('-----------task4-------------');
{
    const arrNumbers = [1, 10, 11, 0, 23, 111, -23, 123, 412, 12.3];
    const arrStrings = ['asd', 'what', 'who', 'hey', 'amigo', 'task', 'hi', 'zxc', 'yyy', '123'];
    const someArr = [true, 123, false, 'hello', 1, 2, '11asd', false, 'zzz', 'js'];
    for (const element of arrNumbers) {
        console.log(element);
    }
    console.log('----------------------');
    for (const index in arrStrings) {
        console.log(arrStrings[index]);
    }
    console.log('----------------------');
    for (let i = 0; i < someArr.length; i++) {
        console.log(someArr[i]);
    }
}
console.log('----------end task4----------');

// ---------------------------------------
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//  За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
console.log('-----------task5-------------');
{
    const someArr = [true, 123, false, 'hello', 1, 2, '11asd', true, 'zzz', 'js'];
    for (const el of someArr) {
        if (typeof el === 'boolean') {
            console.log(el);
        }
    }
    console.log('--------------------');
    for (const el of someArr) {
        if (typeof el === 'number') {
            console.log(el);
        }
    }
    console.log('--------------------');
    for (const el of someArr) {
        if (typeof el === 'string') {
            console.log(el);
        }
    }
}
console.log('----------end task5----------');

// ---------------------------------------
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log('-----------task6-------------');
{
    const randomArray = [];
    randomArray[0] = 'super';
    randomArray[1] = 11;
    randomArray[2] = -222;
    randomArray[3] = 'dog';
    randomArray[4] = true;
    randomArray[5] = 567;
    randomArray[6] = 'cat';
    randomArray[7] = false;
    randomArray.push('123');
    randomArray.unshift(true);
    console.log(randomArray);
    console.log('--------------------');
    for (let i = 0; i < randomArray.length; i++) {
        console.log(randomArray[i]);
    }
}
console.log('----------end task6----------');

// ---------------------------------------
// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
console.log('-----------task7-------------');
document.write('</br>-----------task7-------------');

document.write('</br>');
for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i);
}
console.log('---------------------');
document.write('</br>');
for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(i);
}

console.log('---------------------');
document.write('</br>');
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
    document.write(i);
}
document.write('</br>');
document.write('----------end task7----------');
console.log('----------end task7----------');

// ----------------------------------
// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write
console.log('-----------task8-------------');
document.write('</br>-----------task8-------------');

document.write('</br>');
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
}
console.log('---------------------');
document.write('</br>');

for (let i = 1; i <= 100; i++) {
    if (i % 2 > 0) {
        console.log(i);
        document.write(i);
    }
}
document.write('</br>');

document.write('----------end task8----------');
console.log('----------end task8----------');

// -------------------------------
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

console.log('-------------task9------------');

for (let i = 2; i >= 0; i--) {
    for (let j = 59; j >= 0; j--) {
        console.log(`min: ${i} sec: ${j}`);
    }
}

console.log('----------end task9----------');

// -------------------------------
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини
// (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

console.log('-------------task10------------');
for (let i = 0; i <= 2; i++) {
    for (let j = 0; j < 20; j++) {
        for (let k = 0; k < 60; k++) {
            console.log(`hour: ${i} min: ${j} sec: ${k}`);
        }
    }
}

console.log('----------end task10---------');

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
console.log('-------------task10------------');
{
    const arr = ['a', 'b', 'c'];
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log(result);
    result = '';
    let i = 0;
    while (i < arr.length) {
        result += arr[i];
        i++;
    }
    console.log(result);
    result = '';
    for (const item of arr) {
        result += item;
    }
    console.log(result);
    result = '';
    for (const key in arr) {
        result += arr[key];
    }
    console.log(result);
}
console.log('----------end task10---------');

// ----------------------------------------
console.log('-------------task11------------');
{
    // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
    const arr = ['a', 'b', 'c'];
    const arr1 = [1, 2, 3];
    for (let i = 1; i < 4; i++) {
        arr.push(i);
    }
    console.log(arr);
    // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
    // let reversed = arr1.reverse();
    // console.log(reversed);
    const reversed = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
        reversed.push(arr1[i]);
    }
    console.log(reversed);
    // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
    arr1.push(4, 5, 6);
    console.log(arr1);
    // - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
    const arr2 = [1, 2, 3];
    arr2.unshift(4, 5, 6);
    console.log(arr2);
}
console.log('----------end task11---------');

// ----------------------------------------
console.log('-------------task12------------');
{
    // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
    const arr = ['js', 'css', 'jq'];
    console.log(arr.shift());
    // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
    console.log(arr.pop());
}
console.log('----------end task12---------');

// ----------------------------------------
console.log('-------------task13------------');
{
    let arr = [1, 2, 3, 4, 5];
    // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice
    // перетворіть масив в [4, 5].
    const cut = arr.slice(-2);
    console.log(cut);
    // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice
    // перетворіть масив в [1,2].
    const cut1 = arr.slice(0, 2);
    console.log(cut1);
    // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції
    // splice перетворіть масив в [1, 4, 5].
    arr.splice(1, 2);
    console.log(arr);
    // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice
    // зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
    arr = [1, 2, 3, 4, 5];
    arr.splice(3, 0, 'a', 'b', 'c');
    console.log(arr);
    // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice
    // зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
    arr = [1, 2, 3, 4, 5];
    arr.splice(1, 0, 'a', 'b');
    arr.splice(6, 0, 'c');
    arr.splice(9, 0, 'e');
    console.log(arr);
}
console.log('----------end task13---------');

// ----------------------------------------
console.log('-------------task14------------');
{
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // - Взяти масив з 10 чисел або створити його.
    // Вивести в консоль тільки ті елементи, значення яких є парними.
    for (const item of arr) {
        if (item % 2 === 0) {
            console.log(item);
        }
    }
    // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
    // За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
    const arr1 = [];
    for (const item of arr) {
        arr1.push(item);
    }
    console.log(arr1);
}
console.log('----------end task14---------');

// ----------------------------------------
console.log('-------------task15------------');
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
{
    let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    // 1. перебрати його циклом while
    let i = 0;
    console.log('--------1---------------');
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
    console.log('---------2--------------');
    // 2. перебрати його циклом for
    for (i = 0; i < arr.length; i += 1) {
        console.log(arr[i]);
    }
    console.log('---------3--------------');
    // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
    i = 0;
    while (i < arr.length) {
        if (i % 2 > 0) {
            console.log(arr[i]);
        }
        i++;
    }
    console.log('----------4-------------');
    // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
    for (i = 0; i < arr.length; i += 1) {
        if (i % 2 > 0) {
            console.log(arr[i]);
        }
    }
    console.log('-----------5------------');
    // 5. перебрати циклом while та вивести  числа тільки парні  значення
    i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
        i++;
    }
    // 6. перебрати циклом for та вивести  числа тільки парні  значення
    console.log('-----------6------------');
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
    // 7. замінити кожне число кратне 3 на слово "okten"
    console.log('-----------7------------');
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            arr[i] = 'okten';
        }
    }
    console.log(arr);
    // 8. вивести масив в зворотньому порядку.
    console.log('-----------8------------');
    arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    i = arr.length - 1;
    while (i >= 0) {
        console.log(arr[i]);
        i--;
    }
    // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
    arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    // 1. перебрати його циклом while
    i = arr.length - 1;
    console.log('--------1--rev-------------');
    while (i >= 0) {
        console.log(arr[i]);
        i--;
    }
    console.log('---------2--rev------------');
    // 2. перебрати його циклом for
    for (i = arr.length - 1; i >= 0; i -= 1) {
        console.log(arr[i]);
    }
    console.log('---------3-rev-------------');
    // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
    i = arr.length - 1;
    while (i >= 0) {
        if (i % 2 > 0) {
            console.log(arr[i]);
        }
        i--;
    }
    console.log('----------4---rev----------');
    // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
    for (i = arr.length - 1; i >= 0; i -= 1) {
        if (i % 2 > 0) {
            console.log(arr[i]);
        }
    }
    console.log('-----------5--rev----------');
    // 5. перебрати циклом while та вивести  числа тільки парні  значення
    i = arr.length - 1;
    while (i >= 0) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
        i--;
    }
    // 6. перебрати циклом for та вивести  числа тільки парні  значення
    console.log('-----------6--rev----------');
    for (i = arr.length - 1; i >= 0; i -= 1) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
    // 7. замінити кожне число кратне 3 на слово "okten"
    console.log('-----------7--rev----------');
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 3 === 0) {
            arr[i] = 'okten';
        }
    }
    console.log(arr);
    // 10 створити пустий масив та :
    arr = [];
    // - заповнити його 50 парними числами за допомоги циклу.
    console.log('-----------10--------------');
    for (i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
    // - заповнити його 50 непарними числами за допомоги циклу.
    arr = [];
    console.log('-----------11--------------');
    for (i = 1; i <= 100; i++) {
        if (i % 2 > 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}
console.log('----------end task15---------');

// --------------------------
console.log('-------------task16------------');
{
    // 1. используя Math.random заполнить массив из ???(сколько хотите) элементов.
    // диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
    console.log('-----------1--------------');
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.random());
    }
    console.log(arr);
    arr = [];
    for (let i = 0; i < 15; i++) {
        arr.push(Math.round(Math.random() * (732 - 8) + 8));
    }
    console.log(arr);
    // 2. вывести на консоль  каждый третий елемент
    console.log('-----------2--------------');
    for (let i = 2; i < arr.length; i += 3) {
        console.log(arr[i]);
    }
    // 3. вывести на консоль  каждый третий елемент
    // но при условии что его значение является парным.
    console.log('-----------3--------------');
    for (let i = 2; i < arr.length; i += 3) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
    // 4. вывести на консоль  каждый третий елемент
    // но при условии что он имеет парное значение и
    // записать их в другой массив.
    console.log('-----------4--------------');
    const result = [];
    for (let i = 2; i < arr.length; i += 3) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    console.log(result);
    // 5. Вывести каждый елемент массива у которого
    // соседний с права элемент - парный
    console.log('-----------5--------------');
    const array = [243, 273, 389, 724, 563, 638, 618, 673, 152, 331, 496, 37, 716, 590, 251];
    for (let i = 1; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i - 1]);
        }
    }
}
console.log('----------end task16---------');

// --------------------------
// масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. обрахувати середній чек.
console.log('-------------task17------------');
{
    const arr = [100, 250, 50, 168, 120, 345, 188];
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    console.log(sum / arr.length);
    // const result = arr.reduce((acc, item) => acc + item);
    // console.log(result / arr.length);
}
console.log('----------end task17---------');

// --------------------------
console.log('-------------task18------------');
{
    console.log('-----------1--------------');
    // 1 створити масив з рандомними значеннями, помножити всі
    // його елементи на 5 та перемістити їх в інший масив.
    const arr = [1, 3, 4, 5, 11, 10, 12, 10];
    console.log(`before: ${arr}`);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 5;
    }
    result = arr.splice(0, arr.length);
    console.log(`after: ${arr}`);
    console.log(result);
    // const result = arr.map((key) => key * 5);
    // console.log(result);
    console.log('-----------2--------------');
    // 2 створити масив з будь якими значеннями (стрінги, числа, і тд...).
    // пройтись по ньому, і якщо об'єкт є числом,
    // додати його в інший масив.
    const random = [11, '11', true, 22, 'hello', false, 123, 'true'];
    result = [];
    for (const key of random) {
        if (typeof key === 'number') {
            result.push(key);
        }
    }
    console.log(result);
}
console.log('----------end task18---------');
