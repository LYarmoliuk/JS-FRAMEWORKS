"use strict";
// src/functions.ts
// Функція з параметром за замовчуванням
function greetUser(name, age = 18) {
    return `Привіт, ${name}! Тобі ${age} років.`;
}
// Функція з типізованими параметрами та типом повернення
function calculateSum(a, b) {
    return a + b;
}
// Функція, що повертає void
function logMessage(message) {
    console.log(`[LOG]: ${message}`);
}
// Функція з кількома параметрами та значеннями за замовчуванням
function createUser(name, age = 25, isActive = true) {
    return { name, age, isActive };
}
// Arrow функція
const multiplyNumbers = (x, y) => x * y;
// Функція з union типом
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value.toString();
    }
}
// Тестування функцій
console.log("=== Тестування функцій ===");
console.log(greetUser("Марія"));
console.log(greetUser("Олексій", 30));
console.log("Сума:", calculateSum(5, 10));
logMessage("Це тестове повідомлення");
const user = createUser("Петро");
console.log("Створений користувач:", user);
console.log("Множення:", multiplyNumbers(4, 7));
console.log("Обробка рядка:", processValue("hello"));
console.log("Обробка числа:", processValue(42));
//# sourceMappingURL=functions.js.map