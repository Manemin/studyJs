// - присвоить каждому из следующих значений свою переменную:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false 
// Вывести каждую при помощи console.log , alert, document.write

// let hello = 'hello';
// let name = 'owu';
// let domain2 = 'com';
// let domain1 = 'ua';
// let number1 = 1;
// let number2 = 10;
// let number3 = -999;
// let number4 = 123;
// let number5 = 3.14;
// let number6 = 2.7;
// let number7 = 16;
// let someBool = true;
// let isSomething = false;

// console.log(hello);
// // alert(hello);
// document.write(hello);
// document.write('<br>');
// // ...........
// console.log(isSomething);
// // alert(isSomething);
// document.write(isSomething);
// document.write('<br>');

// // - переопределить каждую переменную из задания 1 дав им произвольные значения 
// // Вывести каждую при помощи console.log , alert, document.write

// hello = 'Hey';
// name = 'google';
// domain2 = 'gov';
// domain1 = 'net';
// number1 = 11;
// number2 = 0;
// number3 = -9;
// number4 = 12;
// number5 = 3.14;
// number6 = 11.8;
// number7 = 33;
// someBool = false;
// isSomething = true;


// console.log(hello);
// // alert(hello);
// document.write(hello);
// document.write('<br>');
// // ...............

// console.log(isSomething);
// // alert(isSomething);
// document.write(isSomething);
// document.write('<br>');


// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const PI = 3.14;
// const MININHOUR = 60;
// const ID = 44909;
// const NAME = 'Alex';
// const ADMIN = 'root';
// const PWD = 'nen xnj-nj lkbyyjt b ckj;yjt';
// console.log(PI);
// alert(ID);
// document.write(PWD);

// --------------------------------------
// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. 
// Для фамилии имени и отчества создать разные переменные. 
// Вывести каждую при помощи console.log , alert, document.write
// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

// let surname = prompt('enter surname');
// let name = prompt('enter name');
// let patronymic = prompt('enter patronymic');

// let person = surname + ' ' + name + ' ' + patronymic;
// let person = `${surname} ${name} ${patronymic}`;

// console.log(surname);;
// alert(name);
// document.write(patronymic);


// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let num1 = +prompt('enter num1');
// let num2 = +prompt('enter num2');
// let num3 = +prompt('enter num3');

// // console.log(num1);
// // console.log(num2);
// // console.log(num3);

// -----------------------------
// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. 
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера


// let num1 = prompt('enter num1');
// let num2 = prompt('enter num2');
// let num3 = prompt('enter num3');
// let num4 = prompt('enter num4');
// let result = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);
// console.log(result);



// ------------------------------------
// - при помощи prompt()  получить 3 числа с плавающей точекой. 
// при помощи parseFloat привести их к соответсвующему типу. 
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let num1 = prompt('enter num1');
// let num2 = prompt('enter num2');
// let num3 = prompt('enter num3');
// let result = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
// console.log(result);

// -----------------------------------
// - при помощи prompt()  получить 3 числа с плавающей точекой. 
// Округлить их при помощи Math.round 
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера

// let num1 = +prompt('enter num1');
// let num2 = +prompt('enter num2');
// let num3 = +prompt('enter num3');
// let result = Math.round(num1) + Math.round(num1) + Math.round(num1);
// console.log(result);


// --------------------------------
// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. 
// Первое число - это число которое будут возводить в степень. 
// Второе число - это число которое является степенью. 
// При помощи Math.pow возвести первое число в степень второго числа.

// let num1 = prompt('enter number');
// let num2 = prompt('enter exponent');
// let result = Math.pow(parseInt(num1), parseInt(num2));
// console.log(result);

// --------------------------------
// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и 
// вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

// let a = 100; 
// let b = '100'; 
// let c = true; 
// let d = undefined;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);



// --------------------------------
// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//   5 < 6 -> true
//   5 > 6 -> false
//   5 >= 6 -> false
//   5 === 6 -> false
//   10 === 10 -> true
//   10 >= 10 -> true
//   10 > 10 -> false
//   10 < 10 -> false
//   10 != 10 -> false
//   123 === '123' -> false
//   123 == '123' -> true



// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );  false
// console.log(34 > 33 && 23 < 90 );    true  
// console.log(99 > 100 && 45 > 12 );   false
// console.log(132 > 100 || 45 < 12 );  true
// console.log(111 > 11 || 45 < 111 );  true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );  true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
// console.log(!!'-1');  true  // string
// console.log(!!-1);   true  // !0
// console.log(!!'0');  true // string
// console.log(!!'null');  true  // string
// console.log(!!'undefined'); true  // string
// console.log(!!(3/'owu')); false  // NaN
// console.log((111 > 11 || 45 < 111) ||  !!'0'); true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false



// --------------------------
// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных 
// принадлежат типам: string, number и  boolean.

// const str = 'Привет';
// const num = 123;
// const flag = true;
// const txt = 'true';
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);


// ---------------------
// 2. Создайте переменные a1, a2, a3, a4, a5. 
// При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//   5 + 3,
//   5 - 3,
//   5 * 3,
//   5 / 3,
//   5 % 3
//   поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;


// -----------------------
// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//   5 % 3,
//   3 % 5,
//   5 + '3',
//   '5' - 3,
//   75 + 'кг'

// let a6 = 5 % 3;   // 2
// let a7 = 3 % 5;   // 3   
// let a8 = 5 + '3';  // 53
// let a9 = '5' - 3;  // 2
// let a10 = 75 + 'кг';  //75кг


// ---------------------
// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// const height = 23;
// const widht = 10;
// let s = height * widht;


// --------------------
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) 
// и диаметром основания 4м (dC),
// результат поместите в переменную v.

// const PI = 3.14;
// const heightC = 10;
// const dC = 4;
// let v = PI * ((dC / 2) ** 2)  * heightC;



// -------------------------
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень)
//  или оператор возведения в степень ** ).

// const n = 3;
// const m = 4;
// let k = Math.sqrt(n ** 2 + m ** 2);



// ---------------------------
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str 
// и выводить спомощью document.write, alert и console.log

// let str = 'Hello world';
// console.log(str);
// alert(str);
// document.write(str);


// -----------------------------------
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: 
// Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).  

// alert('ФИО: Жиляков Євгеній Володимирович');
// alert('Хобби: велосипед');


// --------------------------
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
// Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой?';
// // let concatenation = str1 + ' ' + str2 + ' ' + str3;
// let concatenation = `${str1} ${str2} ${str3}`;
// document.write(concatenation);


// --------------------------
// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
  //  let str = "20";
  //  let a = 5;   
  //  document.write(str + a + "<br/>");   // 205 (конкатенация)  + перевод стоки
  //  document.write(str - a + "<br/>");   // 15 (приведение типов при вычитании) + перевод стоки 
  //  document.write(str * "2" + "<br/>"); // 40 (приведение типов при умножении) + перевод стоки
  //  document.write(str / 2 + "<br/>");   // 10 (приведение типов при делении) + перевод стоки



  // ---------------------------------
  // 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
  //   parseInt("3.14")  // 3  
  //   parseInt("-7.875")  // -7
  //   parseInt("435")   //435
  //   parseInt("Вася")   // NaN



  // ---------------------------------
  // 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может 
  // ввести данные, которые будут использоваться далее, повторите код ниже
  //   let str = prompt("Enter something", "ho-ho")
  //   console.log(str);

// let str = promt('enter some text', 'hey');
// console.log(str);



// ---------------------------------
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел,
// а вывод результата при помощи метода alert

// let num1 = +prompt('enter num1', 1);
// let num2 = +prompt('enter num2', 1);
// alert(num1 + num2)



// ---------------------------------
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно
//  выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод
//  результата при помощи метода alert

// let name = prompt('enter name');
// let surname = prompt('enter surname');
// let age = prompt('enter age');
// alert(`Доброго вечера ${name} ${surname}, мои поздравления что вам ${age}`);



// ---------------------------------
// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let num1 = +prompt('enter num1');
let num2 = +prompt('enter num2');
let num3 = +prompt('enter num3');




/*
2.
Все параматры получаем с клавиатуры!!!!
Имитируем поведение пешехода на перекстке.
Если светофор зеленый - вывести "иди".
Если светофор желтый - вывести "подожди".
Если светофор красный - вывести "стой".
Если светофор в аварийном режиме вывести "делай что хочешь"!
3
Все параметры получаем с клавиатуры!!!!(prompt , confirm)
Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
Улучшаем предыдущее задание.
Если светофор зеленый и машин нет - вывести "иди".
Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
Если светофор желтый и машины есть - вывести "жди".
Если светофор желтый и машин нет - вывести "все рано жди".
Если светофор красный и машин нет- вывести "стой все рано".
Если светофор красный - и машины есть вывести "стой и жди".
Если светофор в аварийном режиме вывести "делай что хочешь"! */