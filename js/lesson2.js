

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