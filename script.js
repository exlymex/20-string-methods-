//1
// let str = prompt('Enter a string');
// let target = " ";
// let summ=0
// let pos = 0
// for(i = 0;i<=str.length;i++){
//     let foundPos = str.indexOf(target, pos);
//     console.log(foundPos) 
//     if (foundPos == -1) break;
//     else{
//         summ+=1
//     }
//     alert( `Найдено тут: ${foundPos}` );
//     pos = foundPos + 1; // продолжаем со следующей позиции
//     // console.log(pos)
//   }

// console.log(summ)

// Користувач вводить email.Потрібно перевірити дані на правильність введення.Правильно введений email - це той, в якому міститься символ @.Крім того символ @не може бути на початку тексту або в кінці.
// Приклад правильно введених даних:
// student @ukr.net
// Приклад не правильно введених даних:
// @student.ukr.net
// student.ukr.net@
// student.ukr.net

// 2
// const email = prompt('Enter your email'.includes('@'));
// if(email.startsWith('@') || email.endsWith('@')){
//     console.log('mistake')
//     console.log(email)
// }
// check = email.indexOf("@");
// if (check == -1) {
// alert("Нема\"@\".");
// }

// Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті декілька разів). Потрібно, вивести в консолі загальну кількість слів html у введеному тексті.
// Приклад роботи:
// Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.
//3

// let str = prompt('Enter a string');
// let target = "html";
// let summ=0
// let pos = 0
// for(i = 0;i<=str.length;i++){
//     let foundPos = str.indexOf(target, pos);
//     console.log(foundPos) 
//     if (foundPos == -1) break;
//     else{
//         summ+=1
//     }
//     alert( `Найдено тут: ${foundPos}` );
//     pos = foundPos + 1; // продолжаем со следующей позиции
// console.log(pos)
//   }

//Завдання 4
// Користувач вводить URL адреса в prompt в форматі http або https. Виведіть тільки ім'я домена без префіксів http://, https:// в консолі.
// Приклад роботи:

//4
// let link = prompt('enter a string')
// if(link.includes('http://')){
//     console.log(link.slice(7))
// }else if(link.includes('https://')){
//     console.log(link.slice(8))
// }else{
//     alert("mistake")
// }
