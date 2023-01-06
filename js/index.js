// 1) КАХУТ
// 2) ПЕРЕВІРКА ЗАСВОЄНОГО МАТЕРІАЛУ;
// 3) ЗАДАЧІ;



//  Базовые оператори +,-,*,/
// Проверка сложения

// let a = "DEN ";
// let b = "UK";
// console.log(a + b); 


// let a = 3;
// let b = ' join'; 
// console.log(a + b);


// let a = true;
// let b = " join"; 
// console.log(a + b);

// let a = true; 
// let b = 12;
// console.log(a + b); 

// let a = true;
// let b = true;
// console.log(a + b); 

// let a = true;
// let b = "false";
// console.log(a + b);

// let a = 12;
// let b = null;
// console.log(a + b); 

// let a = undefined;
// let b = 10;
// console.log(a + b); 

// let a = undefined;
// let b = false;
// console.log(a + b); 

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b; 
// console.log(result);
// console.log(typeof (result));




//Визначення типу значення, оператор typeof

// const productName = 'Mango';
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error); 
// console.log(typeof quantity);

//2 ЗАНЯТТЯ

// console.log(0.1 + 0.2 === 0.3); //FALSE
// console.log(0.1 + 0.2); //0.300000000004
// let result = 0.1 + 0.2;
// console.log(result) //0.300000000004
// console.log(Math.floor(result)) //0
// console.log(Math.ceil(result)) //1
// console.log(Math.round(result)) //0
// console.log(result.toFixed(2)) //0.30

// let name = 'Bob';
// let slicedName = name.slice(0, 2);
// console.log('name', name); // BOB
// console.log("slicedName", slicedName) //B






//ЗАДАЧА ПО ФУНКЦІЇ
// function sum() {
//     let result = null;
//     result = 2 + 3;
//     return result;
// }

// const myNewResult = sum();

// console.log("myNewResult", myNewResult)




// || - превый true
// && - первый false

// Логические операторы
// // Что выведет код?

// console.log(true && 3); // 3

// console.log(false && 3); //false

// console.log(true && 4 && "hello"); //hello

// console.log(true && 0 && "hello"); //0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); //true

// console.log(null || 2 || undefined); //2

// console.log(null || 2 && 3 || 4); //3 спочатку js проопрацьовує і




// if...else и prompt
// // Используя конструкцию if..else, напишите код, который будет спрашивать: «Какое количество месяцев в году». Если пользователь вводит 12 , 
// то показать: «Верно!», в противном случае – отобразить: «Не знаете ? 12!»

// 1) Попросить у юзера число
// 2) Проверить равно ли оно 12
// 3) На основе проверки запустить if или else

// const userNumber = Number(prompt('Enter number'));

// if (userNumber === 12) {
//     console.log('Correct')
// } else {
//     console.log('Error')
// }







// // Написать программу которая получит от пользователя число и определит четное это число или не четное.

// 1) Получить число
// 2) Написать проверку на чет нечет
// 3) Вивести результат


// const day = prompt("Enter day");

// if (day % 2 === 0) {
//     console.log('Четное')
// } else {
//     console.log("Нечет")
// }






// Написать программу где мы спрашиваем у пользователя номер месяца  и показываем к какому времени года он принадлежит 
// Если пользователь вводит 2 - показываем слово Зима

// 1) Получить данные от юзера
// 2) Проверка на время года
// 3) Вывести результат

// const monthNumber = Number(prompt('enter month number'));

// if (monthNumber === 1) {
//     console.log('Зима')
// } else if (monthNumber === 2) {
//     console.log('Зима')
// } else if (monthNumber === 12) {
//     console.log('Зима')
// }

// ВИКОРИСТОВУЄМО ЛОГІЧНИЙ ОПЕРАТОР
// if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
//     console.log("Зима")
// } else if (monthNumber >= 3 && monthNumber <= 5) {
//     console.log('Весна');
// } else if (monthNumber >= 6 && monthNumber <= 8) {
//     console.log('Лето')
// } else if (monthNumber >= 9 && monthNumber <= 11) {
//     console.log('Осень')
// } else {
//     console.log('данные не валидны')
// }





// Написать программу которая проверяет логин и пароль пользователя и выводит приветствие - если все отлично и ошибку если неверный логин

// const login = 'user@gmail.com';
// const password = '12345'

// const userLogin = prompt('Enter login')
// const userPassword = prompt('Enter password')

// if (login === userLogin && password === userPassword) {
//     console.log('Wellcome')
// } else {
//     console.log('Error')
// }


//ТЕРНАРНИЙ ОПЕРАТОР

// const result = login === userLogin && password === userPassword ? "Wellcome" : 'Error'

// console.log('result', result)
