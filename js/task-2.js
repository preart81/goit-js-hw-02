"use strict";
function formatMessage(message, maxLength) {
  // приймає рядок (параметр message) та перевіряє його довжину відповідно до
  // заданої максимальної довжини (параметр maxLength).

  // 🔸Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає
  // початковий рядок без змін.

  // 🔸Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength
  // символів, додає трикрапку "..." в кінці та повертає обрізану версію.

  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + "...";
  }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
