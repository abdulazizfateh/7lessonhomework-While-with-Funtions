// TASK 1 ||||||||||||||||||||||||||||||||||||||||||
// A va B butun musbat sonlari berilgan ( A > B). A sunlikdagi kesmada maksimal darajada B kesma joylashtirilgan.
// A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko' paytirish va bo' lish amallarini ishlatmang.

// let a = 18;
// let b = 5;

// const findTheRemainder = (a, b) => {
//     while (a >= b) { // while iterates as long as its condition is true
//         a -= b; // 'a' is subtracted by 'b', and 'a' is assigned a new value after subtraction till the while condition is true
//     }
//     return a;
// }

// let fresult = findTheRemainder(a, b);
// console.log(fresult);



// TASK 1 using remainder operator

// let a = 18;
// let b = 5;

// const findTheRemainder = (a, b) => {
//     let remainder = a % b;
//     return remainder;
// }

// let fresult = findTheMaxRemainder(a, b);
// console.log(fresult);






// TASK 2 ||||||||||||||||||||||||||||||||||||||||||
// A va B butun musbat sonari berilgan ( A > B). 
// A sunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. 
// Ko'paytirish va bo'lish amallarini ishlatmang.

// let a = 21;
// let b = 5;

// const findTheMaxCross = () => {
//     let count = 0;
//     while (a >= b) {
//         a -= b;
//         count++;
//     }
//     return count;
// }

// let fresult = findTheMaxCross(a, b);
// console.log(fresult);




// TASK 3 ||||||||||||||||||||||||||||||||||||||||||

// let k = 123;
// let n = 5;

// const findTheFitRemainder = (biggerNum, smallNum) => {
//     let whole = 0;
//     let remainder = 0;
//     while (biggerNum >= smallNum) {
//         remainder = biggerNum -= smallNum; // biggerNum = Remainder
//         whole++; // 
//     }
//     return { whole, remainder }
// }

// let fresult = findTheFitRemainder(k, n);
// console.log(fresult);





// TASK 4 ||||||||||||||||||||||||||||||||||||||||||

//NEED EXPLANATION IT DOES NOT WORK PROPERLY

// let a = 72;

// const findTheThreePowers = (num) => {
//     let result;
//     while (num >= 3){
//         num -= 3
//         if (num == 0){
//             result = `${a} soni 3 sonining darajasi`;
//         } else {
//             result = `${a} soni 3 sonining darajasi emas`;
//         }
//     }
//     return result;
// }

// let fresult = findTheThreePowers(a);
// console.log(fresult);