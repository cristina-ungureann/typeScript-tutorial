"use strict";
// import { Invoice } from "./classes/Invoice.js";
// import { ListTemplate } from "./classes/ListTemplate.js";
// import { Payment } from "./classes/Payments.js";
// import { Savings } from "./classes/Savings.js";
// import { HasFormatter } from "./interfaces.ts/HasFormatter.js";
// document.addEventListener("DOMContentLoaded", () => {
//   // list template instance
//   const ul = document.querySelector('ul')!;
//   const list = new ListTemplate(ul);
//   const form = document.querySelector('.new-item-form') as HTMLFormElement;
//   const type = document.querySelector('#type') as HTMLSelectElement;
//   const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
//   const details = document.querySelector('#details') as HTMLInputElement;
//   const amount = document.querySelector('#amount') as HTMLInputElement;
//   form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     let doc: HasFormatter;
//     if (type.value === 'invoice') {
//       doc = new Invoice(tofrom.value, details.value, parseFloat(amount.value));
//     } else if (type.value === 'payment') {
//       doc = new Payment(tofrom.value, details.value, parseFloat(amount.value));
//     } else {
//       doc = new Savings(tofrom.value, details.value, parseFloat(amount.value));
//     }
//     list.render(doc, type.value, 'end');
//   });
// });
// const addUID = <T extends { name: string }>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let docOne = addUID({ name: 'Criss', age: 22, uni: 'Architecture' });
// let docTwo = addUID({ name: 'ypu' });
// // interfaces
// interface Resources <T>{
//   uid: number;
//   resourceName: string,
//   data: T;
// }
// const docThree : Resources<object> = {
//   uid: 1,
//   resourceName: 'Person',
//   data: {name:'Tina'}
// }
// const docFour : Resources<string[]> =  {
//   uid:2,
//   resourceName:'shoppingList',
//   data: ['bread', 'milk']
// }
// function printData <X, Y> (data1: X, data2: Y){
//   console.log("Output is: ", data1, data2);
// }
// printData("Hello", "World");
// printData(123, ["Hi", 123])
// interface UserData <X, Y> {
//   name: X;
//   rollNo: Y;
// }
// const user: UserData <string, number> = {
//   name: "Ram",
//   rollNo:1
// }
// const person: UserData <string, string> = {
//   name: "Tina",
//   rollNo:"Martina"
// }
// [0, 1, 2, 3]
// [1, 2, 3, 4]
function reverseArray(array) {
    let n = array.length - 1; //4
    let na = 0;
    let myArray = [];
    let i;
    for (i = n; i >= 0; i--) {
        myArray[na] = array[i];
        na += 1;
    }
    return myArray;
}
function findMin(array) {
    const n = array.length - 1;
    let min = array[0];
    let i;
    for (i = 0; i <= n; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
const nunbers = [-25, -3495, 23482, 438];
const myMin = findMin(nunbers);
console.log(myMin);
