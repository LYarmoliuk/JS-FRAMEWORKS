"use strict";
// src/variables.ts
// Оголошення змінних різних типів
let userName = "Іван Петренко";
let userAge = 25;
let isStudent = true;
let anyValue = "Це може бути що завгодно";
// Вивід значень у консоль
console.log("=== Змінні ===");
console.log("Ім'я користувача:", userName);
console.log("Вік користувача:", userAge);
console.log("Чи є студентом:", isStudent);
console.log("Значення any:", anyValue);
// Масиви з конкретними типами
let stringArray = ["яблуко", "банан", "апельсин"];
let numberArray = [1, 2, 3, 4, 5];
// Альтернативний синтаксис для масивів
let stringArray2 = ["кот", "собака", "птах"];
let numberArray2 = [10, 20, 30];
console.log("\n=== Масиви ===");
console.log("Масив рядків:", stringArray);
console.log("Масив чисел:", numberArray);
console.log("Масив рядків (Array<string>):", stringArray2);
console.log("Масив чисел (Array<number>):", numberArray2);
// Додаткові типи даних
let undefinedValue = undefined;
let nullValue = null;
let symbolValue = Symbol("mySymbol");
console.log("\n=== Додаткові типи ===");
console.log("Undefined:", undefinedValue);
console.log("Null:", nullValue);
console.log("Symbol:", symbolValue.toString());
//# sourceMappingURL=variables.js.map