// РІЗНИЦЯ МІЖ VAR , LET , CONST
// var a = 20;
// var a = 25;
// console.log(a);

// let a = 5;
// let a = 10;

// const a = 10;
// const a = 40;


// Определение типа значения, оператор typeof
//1) Валидация форм
// Де можна використовувати typeof, наприклад юзер заповняє форму, і він у полі має ввести пароль, який має містити цифри, і таким чином за допомогою typeof провіряєте чи юзер ввів число
//Також можна провірити, який тип даних нам прилітає з бекенда

// const productName = 'Mango';
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error); //є тип даних null, але помилку яку допустив хто створював js і прописав , що це буде object
// console.log(typeof quantity);



//2) Шаблонные строки
// ВОНИ ПОТРІБНІ ДЛЯ ТОГО, ЯК ПРИКЛАД ВИВЕСТИ ЮЗЕРУ ШАБЛОННУ СТОКУ, ЩО ВІН ВВІВ НЕ ПРАВИЛЬНІ ДАНІ, АБО ЯК ВАРІАНТ УСІМ ПРИХОДЯТЬ ПОВІДОМЛЕННЯ НА ПОЧТУ , ПРИВІТ МАРІЯ, МИ ГОТОВІ ВАМ ЗАПРОПОНУВАТИ ....
// // Написать фразу с помощью шаблонных строк Здравствуйте, меня зовут А, мне Б лет и мне нравится Ц, где А, Б, Ц - переменные вставленные в строку.


// const name = 'Манго';
// const age = 5;
// const hobby = 'плавать';
// const message = `Здравствуйте, меня зовут ${name} мне ${age} лет и мне нравиться ${hobby}`;

// console.log(message);



//3) Prompt и confirm

//РЕКОМЕНДУЮ, КОЛИ ВАМ ПРИХОДИТЬ ЗАДАЧА , НАПИСАТИ СОБІ ПСЕВДОКОД, ЦЕ ТАК ПРОСТИМИ СЛОВАМИ, ВИ СОБІ РОЗПИСУЄТЕ ПОСТУПОВО , ЩО ВАМ ПОТРІБНО ЗРОБИТИ
// ВСЯ СУТЬ ЗАДАЧІ, ЯК ВИ СТВОРЮЄТЕ АЛГОРИТМ НАПИСАННЯ КОДУ, А ПОТІМ НА ЯКІ ВИ МОВІ БУДЕТЕ РІШАТИ ЗАДАЧУ , ЦЕ ВЖЕ НЕ ГОЛОВНЕ

// Спросить у пользователя имя, почту,  телефон и показать в консоле фразу "Пользоваель под именем ____ использует ____ почту и ____ телелефон"
// 1) Спросить имя юзера (prompt)
// 2) Спросить почту (prompt)
// 3) Спросить телефон (prompt)
// 4) Составить финальную фразу (template string)

// const userName = prompt('Enter your name');
// const email = prompt('Enter your email');
// const phoneNumber = prompt('Enter phon number');

// const message = `Пользоваель под именем ${userName} использует ${email} почту и ${phoneNumber} телелефон`;
// console.log(message);


// 4) Базовые операторы +,-,*,/
//ДЛЯ ЗАСВОЄННЯ МАТЕРІАЛУ ДАВАЙТЕ ПЕРЕГЛЯНЕМО , НАСКІЛЬКИ БУВ ЗРОЗУМІЛИЙ ВАМ МАТЕРІАЛ
// Проверка сложения

// let a = "Join ";
// let b = "us";
// console.log(a + b); 
// console.log(typeof a + b)

// let a = 3;
// let b = ' join'; //ЯКЩО ЯКИЙСЬ ЕЛЕМЕНТ Є РЯДКОВИЙ, ТОДІ ПОЛУЧАЄМО РЯДОК
// console.log(a + b);

// let a = true;
// let b = " join"; // ТОМУ ЩО ТРУ ПЕРЕВОДИТЬ У РЯДОК
// console.log(a + b);

// let a = true; //ТОМУ ЩО ТУТ НЕМАЄ РЯДКА , А ТРУ ЗАВЖЛИ У НАС 1 , ТАКИМ ЧИНОМ НАМ ДОДАЛИ ЧИСЛА
// let b = 12;
// console.log(a + b); //13

// let a = true;
// let b = true;
// console.log(a + b); //2

// let a = true;
// let b = "false";
// console.log(a + b); // TRUEFALSE, ТОМУ ЩО Є РЯДОК, І ТАКИМ ЧИНОМ ПЕРЕВЕЛО У РЯДОК УСЕ

// let a = 12;
// let b = null;
// console.log(a + b); //12, 12 ЧИСЛО, РЯДКІВ НЕМАЄ, NULL - ТИП ДАНИХ, І ПЕРЕВОДИТЬ ЙОГО В 0, ТОМУ 12

// let a = undefined;
// let b = 10;
// console.log(a + b); //NaN -ТОМУ ЩО ПРИ ДОДАВАННІ UNDEFINED JS НЕ РОЗУМІЄ , ЩО ЦЕ ТАКЕ , UNDEFINED - нЕ ОПРИДІЛЕНИЙ, А NULL ЦЕ НОЛИК JS ВВАЖАЄ

// let a = undefined;
// let b = false;
// console.log(a + b); // NaN

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b; //712FALSE , ТОМУ ЩО У НАС ЙДЕ СПОЧАТКУ D  А ПОТІМ B
// console.log(result);
// console.log(typeof result);



//5) Обьект Math
// // Определить площадь круга с радиусом 10см (ПR(2)). Math.pow(a, b) - возведение в степень

// const rad = 10;
// const PI = Math.PI;
// const powRad = Math.pow(rad, 2);
// const result = PI * powRad;
// console.log('result', result)



// const rad = 10;
// const area = Math.PI * Math.pow(rad, 2);
// console.log(area);



//6) Посчитать суму товаров в козине магазина
// Нужно ввести цену 3-х товаров и посчитать их суму

// const phonePrice = Number(prompt('Enter phone price')); // 10
// const tvPrice = +prompt('Enter tv price'); // 12
// const playStationPrice = Number(prompt('Enter ps price')) // 8
  

// РЕЗУЛЬТАТО ДОДАВАННЯ ЗНАЧЕННЯ З PROMPT ЗАВЖДИ БУДЕ РЯДОК , І ПОЛУЧЕТЬСЯ 10128, ДЛЯ ТОГО НАМ ПОТРІБНО PROMT ПЕРЕВЕРНУТИ У МЕТОД NUMBER, ДЛЯ ТОГО 
// + ЦЕ УНАРНИЙ ПЛЮС
// const result = phonePrice + tvPrice + playStationPrice;

// console.log(result); // 30





// 2 ЗАНЯТТЯ 1 МОДУЛЯ