// МОДУЛЬ 2-3

// ЩО КОНСОЛЬ ВИВЕДЕ НА ЕКРАН
// const roles = ["user", "tester", "admin"];
// console.log(roles[1]); 
// console.log(roles[0]); 
// console.log(roles[5]); 
// console.log(roles.length);
// console.log(roles[-1]);
// const lastIndex = roles.length - 1;
// console.log(roles[lastIndex]);

const roles = ["user", "tester", "admin"];

// roles.pop();
// console.log(roles);

// const result = roles.push("support");
// console.log(roles); 

// roles.shift();
// console.log(roles);

// roles.unshift("manager");
// console.log(roles);




//ДАВАЙТЕ ПЕРЕВІРЕМО ОБЛАСТЬ ВИДИМОСТІ Ф-ЦІЇ

// 1)
// let a = 5;
// let b = 10;

// function sum() {
//   let a = 50;
//   let b = 100;

//   return a + b;
// }
// console.log(sum()); 


// 2)
// let a = 5;
// let b = 10;

// function sum() {
//   return a + b;
// }
// console.log(sum())


// 3)
// let a = 5;
// let b = 10;

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(100, 300))


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
// console.log(sum())


// 5)

// let a = 5;
// let b = 10;

// function sum() {
//   let a = sum2(); 

//   function sum2() {
//     let a = 30;
//     return a + b;
//   }

//   return a + b;
// }

// console.log(sum());

























// КАХУТ
// const checkString = (str) => {
//     let exp;
//     if (str && 0){
//         console.log(str && 0)
//         exp = false
//     } else {
//         exp = true
//     }
  
//     console.log(exp)
// }
// checkString("html & css & js tasks")






