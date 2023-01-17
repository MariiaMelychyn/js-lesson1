

// ДЛЯ ТОГО , ЩОБ КОНСОЛЬ ЛОГ СПРАЦЬОВУВАВ ПОТРІБНО ВСТАНОВИТИ ПЛАГІН JSSNIPPETS



// 1) базовые операции с массивом
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика».
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Рэп» и «Регги» в начало массива.

// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");//добавили
// console.log(styles)

// styles.splice(1, 1, "Классика");//поміняли, або варіант //splice - може добавити декілька елементів
// styles[1] = "Классика"

// const deletedStyle = styles.shift(); //видаляємо елемент перший, напрклад для того , що ми можемо елемент видалити із початку масива і поставити у кінець масива
// styles.unshift("Рэп", "Регги"); //вставляємо у початок масиву
// console.log(deletedStyle);
// console.log(styles);




// ЩО КОНСОЛЬ ВИВЕДЕ НА ЕКРАН
// const roles = ["user", "tester", "admin"];
// console.log(roles[1]); //tester
// console.log(roles[0]); //user
// console.log(roles[5]); //undefined, тому що у нам такого не має
// console.log(roles.length);//3
// console.log(roles[-1]);//undefined , тому що мінусового індексу у js не існує
// const lastIndex = roles.length - 1;//admin, тому що у нас є рядок, а length -1 , ми отримуємо доступ до останнього елемента масиву 
// console.log(roles[lastIndex]);//admin

// roles.pop();
// console.log(roles);// ['user', 'tester']

// const result = roles.push("support");//
// console.log(roles); // ['user', 'tester', 'admin', 'support']

// roles.shift();
// console.log(roles);//['tester', 'admin']

// roles.unshift("manager");
// console.log(roles);// ['manager', 'user', 'tester', 'admin']

// roles.splice(2, 3);
// console.log(roles);// ['user', 'tester']

// roles.splice(2, 1, "user2");
// roles.splice(2, 0, "user2");
// console.log(roles);//['user', 'tester', 'user2', 'user2']

// const newArr = roles.slice();
// console.log("newArr", newArr);// ['user', 'tester', 'admin']
// console.log(roles === newArr);//false
// console.log(roles.includes("tester"));//true include повертає одне із 2-х варіантів тру або фолс



// 2) Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива
//будет выводить в консоль сообщение в формате < номер элемента > - <значение элемента >.
//Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено
// 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const users = ["Mango", "Poly", "Ajax"]; // 3

// for (let i = 0; i < users.length; i++) {
//   console.log("index", i); // 0 // 1 // 2
//   console.log("value", users[i]); // users[0] // users[1] // users[2]
// }

// for (let user of users) {
//   console.log("index", users.indexOf(user));
//   console.log(user); // Mango //Poly  // Ajax
// }



// 3) Напиши код который ищет самое маленькое число в массиве.

// const numbers = [2, 17, 94, 1, 23, 37];

// 1) Определить стартовое минимальное число
// 2) Сравнить это число со всеми последующими елементами масива
// 3) Если стартовое число меньше числа с которым сравниваем - оставляем как есть
// 4) Если стартовое число больше числа с которым срасниваем - пререзаписываем минимальное число

// let smallestNumber = numbers[0]; // 2 тут ми получаємо стартове число

// for (let number of numbers) { // при ппершому проході циклу ми получаємо 2 потім порівнюємо 2 > 17 фолс, 94 більше 2 пропускаємо, і так поки початкове число не знайде меншого тоді виводить
//   // 2 // 17 // 94 // 1 // 23 // 37
//   if (smallestNumber > number) {
//     smallestNumber = number; // 1
//   }
// }

// console.log(smallestNumber); // 1

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (smallestNumber > number) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37])); // 1
// console.log(findSmallestNumber([49, 4, 83, 7, 12])); // 4



// 4) Проверить является ли строка палиндромом
//таку задачу дають на співбесідаї
//палиндромом - це число яке читає з права на ліво та з ліва на право одинаково, напрклад довод
//

// const str = "довод"; // тут має получитись тру 
// const newString = "Hello"; //тут фолс

// 1) Сделать со строки масив
// 2) Перевевнуть масив наоборот
// 3) С масива сделать строку
// 4) Сравнить 2 строки

// const array = str.split("");// розбиваємо по символьно, і получимо масив з буквами
// array.reverse(); //робить рядок наоборот
// const reverseString = array.join(""); //получаємо новий рядок але наоборот
// console.log(reverseString);
// console.log(str === reverseString)

//КОД ПО ЦЕПОЧКИ
// const reverseStringWithChaining = newString.split("").reverse().join("");
// console.log(newString === reverseStringWithChaining);



//2 МОДУЛЬ 2 ЗАНЯТТЯ
//ДАВАЙТЕ ПЕРЕВІРЕМО ОБЛАСТЬ ВИДИМОСТІ Ф-ЦІЇ

// 1)
// let a = 5;
// let b = 10;

// function sum() {
//   let a = 50;
//   let b = 100;

//   return a + b;
// }
// console.log(sum()); //150- БО МИ ОТРИМУЄМО ДАНІ У СЕРЕДИНІ Ф-ЦІЇ


// 2)
// let a = 5;
// let b = 10;

// function sum() {
//   return a + b;
// }
// console.log(sum())//15 - ТОМУ ЩО , У СЕРЕДИНІ Ф-ЦІЇ НЕМАЄ ПЕРЕМІННИХ, ЧИ БЕРЕМО ЇХ З ГЛОБАЛЬНОЇ ОБЛАСТІ ВИДИМОСТІ


// 3)
// let a = 5;
// let b = 10;

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(100, 300))//400, ТОМУ ЩО ТУТ РОБОТА З НАШИМИ АРГУМЕНТАМИ, ТОДІ ІГНОРУЮТЬСЯ ГЛОБАЛЬНІ ПЕРЕМІННІ


// 4)
// let a = 5;
// let b = 10;

// function sum() {
//   let a = 10;

//   function sum2() {
//     let a = 30;
//     return a + b;
//   }

//   return a + b;
// }
// console.log(sum())//20, У НАС 2 Ф-ЦІЇ sum2 МИ НЕ ЗАПУСТИЛИ, ТОМУ ВОНА ІГНОРУЄТЬСЯ, ЦН ТО САМЕ, ЩО Б ЇЇ НЕ БУЛО


// 5)
// let a = 5;
// let b = 10;

// function sum() {
//   let a = sum2(); // 40

//   function sum2() {
//     let a = 30;
//     return a + b;
//   }

//   return a + b;
// }

// console.log(sum()); // 50 ТОМУ ЩО  let a = sum2(); ВИКОНУЄ Ф-ЦІЮ РЕТИРН, І ТОДІ ДОДАЄ Б



// ЗАДАЧІ

//1) Напиши функцию calculateAverage() которая принимает произвольное кол-во аргументов и возвращает их
// среднее значение.Все аругменты будут только числами.

// 1) Нужно посчитать суму всех аргументов
//2) Посчитать средьнее значение
//3) Вывести результат на экран

// function calculateAverage() {
//   console.log("arguments", arguments);//ARGUMENTS,НАША ЗАДАЧА ВЗЯТИ МАСИВ НАШ ЩОБ ПРАЦЮВАТИ
//   const numbers = Array.from(arguments);//ЯК НАМ ЗРОБИТИ З ПСЕВДОМАСИВА МАВИС, БО АРГУМЕНТ ЦЕ ПСЕВДОМАСИВ
// ARRAY - ЦЕ КОНСТРУКЦІЯ , ЯКА МОЖЕ СТВОРИТИ МАСИВИ, FROM - ЦЕ ДОДАТКОВИЙ МЕТОД , ЯКИЙ МОЖЕ ЗРОБИТИ З ДОДАТКОВОЇ КОЛЕКЦІЇ МАСИВ

//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   const length = numbers.length;
//   const average = total / length;
//   return average;
// }
//

//ТЕПЕР СКОРОТИМО КОД
// function calculateAverage() {//ФАНШИН ДЕКЛАРЕЙШИН
//   console.log("arguments", arguments);
//   const numbers = Array.from(arguments);
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return (total / numbers.length).toFixed(2);
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2


// 2) Напишите функцию greet(name), которая при вызове будет получать имя(например, «Василий») и логировать строку «Привет, <имя>».
// В случае отсутствующего аргумента выводить «Привет, гость»

// const greet = function (name = "гость") {
//   return `Привет ${name}`;
// };

// console.log(greet("Манго"));
// console.log(greet());

// const greet = function (name = "гость") {//ФАНШИН ЕКСПРЕШИН
//   console.log(`Привет ${name}`);
// };

// greet("Манго");
// greet();

// name = "гость" -ЦЕ ДЕФОЛТНИЙ ПАРАМЕНТР, ПО ДЕФОЛТУ МОЖНА ПОСТАВИТИ ЗНАЧАННЯ, ЯКЩО ЗНАЧЕННЯ НЕМАЄ



// 3) Выполните рефакторинг заменив объявление функции на стрелочную функцию.

// function checkNumbers(a, b) { //ФАНШИН ДЕКЛАРЕЙШИН
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

// const checkNumbers = function (a, b) {//ФАНШИН ЕКСПРЕШИН
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// };

// const checkNumbers = (a, b) => {//СТРІЛОЧНА Ф-ЦІЯ
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// };

// const checkNumbers = (a, b) => {//ПЕРЕВОДИМО У ТЕРНАРНИЙ ОПЕРАТОР
//   return a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;
// };

// const checkNumbers = (a, b) => //ПРИ ЗАПИСІ СТРІЛОЧНОЇ Ф-ЦІЇ МИ МОЖЕМО ВІДКАЗАТИСЯ ВІД ФІГУРНИХ ДУЖОК І ВІД РЕТУРН, ЦЕ НАЗИВАЄТЬСЯ НЕ ЯВНИЙ РЕТОРН
//   a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;



// 4) Написать ф - ю capitalize которая буде принимать строку и будет возвращать новую где каждое слово будет с большой буквы
// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// function capitalize(string) {
//   const arrayFromString = string.split(" ");//1)РОЗБИТИ РЯДОК НА СЛОВА
//   const newArray = [];//4) СТВ МОСИВ ДЕ БУДЕМО ЗАПУШУВАТИ НОВИЙ МАСИВ

//   for (let word of arrayFromString) { 2)СТВОРЮЄМО ЦИКЛ
//     let firstLetter = word[0].toUpperCase();//3) ПЕРЕПИСУЄМО КОЖНУ ПЕРШУ БУКВУ У СЛОВІ, І ПЕРЕВОДИМО У ВЕЛИКУ БУКВУ
    // let restString = word.slice(1);//SPLISE- МНТОДИ МАСИВУ , А SLICE ДЛЯ РЯДКА , ТЕПЕР МИ СТВ НОВУ ЗМІННУ , У ЯКІ МИ ВИРІЗАЄМО ДО 1 ІНДЕКСА РЯДОК
    // let finalString = `${firstLetter}${restString}`;//ТЕПЕР ОБЄДНУЄМО 
    // newArray.push(finalString);//5) ПУШИМО ДО МАСИВУ 
//   }
//   return newArray.join(" ");// 6)ПОЛУЧАЄМО НОВИЙ РЯДОК З ПРОБІЛОМ 
// }

// console.log(capitalize("the quick brown fox"));



// 5) Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName)- изменяет имя на новое

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(course) {
//   if (courses.includes(course)) {//2) ТУТ МИ ПРОВІРЯЄМО ЧИ Є У НАС КУРС, ПИШЕМО ПРОВІРКУ
//     console.log("У вас уже есть такое курс");
//     return;
//   }
//   courses.push(course);1) ТУ МИ ПУШИМО КУРС 
// }

// const addCourse = (course) => {
//   if (courses.includes(course)) {
//     console.log("У вас уже есть такое курс");
//     return;
//   }
//   courses.push(course);
// };

// const removeCourse = (course) => {//СПОЧАТКУ НАМ ПОТРІБНО ЗНАЙТИ ІНДЕКС КУРСА, А ПОТІМ ЙОГО ПОТРІБНО ВИДАЛИТИ ЧЕРЕЗ SPLICE
//   const courseIndex = courses.indexOf(course);//1) ПОЛУЧАЄМО ІНДЕКС
//   if (courseIndex === -1) {//3) ПИШЕМО ПРОВІРКУ , НА ІФ, ЯКЩО НАШ ІНДЕКСТ НЕ РІВНЯЄТЬСЯ -1 ВИДАЄМО ПОВІДОМЛЕННЯ
//     console.log("Курс с таким имененем не найден");
//     return;
//   }
//   courses.splice(courseIndex, 1);//2) ВИДАЛЯЄМО
// };

// const updateCourse = (courseToDelete, courseToAdd) => {
//   const index = courses.indexOf(courseToDelete);//1) ЗНАХОДИМО ІНДЕКС 
//   courses.splice(index, 1, courseToAdd)// ПОТРІЮНО ЗАБРАТИ , УДАЛИТИ 1 ЕЛЕМЕНТ ТА ЗАМІНИТИ
    // courses[index] = courseToAdd;//ЦЕ ВЖЕ 2 ВАРІАНТ
//   //   removeCourse(courseToDelete);//ЦЕ ВЖЕ 3 ВАРІАНТ
//   //   addCourse(courseToAdd);//ЦЕ ВЖЕ 3 ВАРІАНТ
// };

// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже есть такое курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс с таким имененем не найден'
// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// console.log(courses);
