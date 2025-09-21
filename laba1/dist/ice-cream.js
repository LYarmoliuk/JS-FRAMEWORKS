"use strict";
// src/ice-cream.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topping = exports.IceCreamSize = void 0;
exports.calculateIceCreamPrice = calculateIceCreamPrice;
exports.getAvailableOptions = getAvailableOptions;
exports.validateToppings = validateToppings;
// Енуми для розмірів та начинок
var IceCreamSize;
(function (IceCreamSize) {
    IceCreamSize["SMALL"] = "small";
    IceCreamSize["LARGE"] = "large";
})(IceCreamSize || (exports.IceCreamSize = IceCreamSize = {}));
var Topping;
(function (Topping) {
    Topping["CHOCOLATE"] = "chocolate";
    Topping["CARAMEL"] = "caramel";
    Topping["BERRIES"] = "berries";
})(Topping || (exports.Topping = Topping = {}));
// Константи з цінами
const PRICES = {
    sizes: {
        [IceCreamSize.SMALL]: 10,
        [IceCreamSize.LARGE]: 25
    },
    toppings: {
        [Topping.CHOCOLATE]: 5,
        [Topping.CARAMEL]: 6,
        [Topping.BERRIES]: 10
    },
    marshmallow: 5
};
// Функція розрахунку вартості морозива
function calculateIceCreamPrice(order) {
    let totalPrice = 0;
    // Додаємо вартість розміру
    totalPrice += PRICES.sizes[order.size];
    // Додаємо вартість начинок
    for (const topping of order.toppings) {
        totalPrice += PRICES.toppings[topping];
    }
    // Додаємо маршмелоу якщо вибрано
    if (order.hasMarshmallow) {
        totalPrice += PRICES.marshmallow;
    }
    return totalPrice;
}
// Функція для отримання доступних опцій
function getAvailableOptions() {
    console.log("=== Доступні опції ===");
    console.log("\nРозміри:");
    console.log(`- Маленький стаканчик: ${PRICES.sizes[IceCreamSize.SMALL]} грн`);
    console.log(`- Великий стаканчик: ${PRICES.sizes[IceCreamSize.LARGE]} грн`);
    console.log("\nНачинки:");
    console.log(`- Шоколад: +${PRICES.toppings[Topping.CHOCOLATE]} грн`);
    console.log(`- Карамель: +${PRICES.toppings[Topping.CARAMEL]} грн`);
    console.log(`- Ягоди: +${PRICES.toppings[Topping.BERRIES]} грн`);
    console.log(`\nМаршмелоу: +${PRICES.marshmallow} грн (необов'язково)`);
}
// Функція валідації введення
function validateToppings(toppings) {
    const validToppings = [];
    const availableToppings = Object.values(Topping);
    for (const topping of toppings) {
        const normalizedTopping = topping.toLowerCase().trim();
        if (availableToppings.includes(normalizedTopping)) {
            validToppings.push(normalizedTopping);
        }
        else {
            console.warn(`Невідома начинка: ${topping}`);
        }
    }
    return validToppings;
}
// Головна функція для демонстрації
function demonstrateIceCreamCalculator() {
    getAvailableOptions();
    // Приклади замовлень
    const orders = [
        {
            size: IceCreamSize.SMALL,
            toppings: [Topping.CHOCOLATE],
            hasMarshmallow: false
        },
        {
            size: IceCreamSize.LARGE,
            toppings: [Topping.CHOCOLATE, Topping.BERRIES],
            hasMarshmallow: true
        },
        {
            size: IceCreamSize.SMALL,
            toppings: [Topping.CARAMEL, Topping.BERRIES, Topping.CHOCOLATE],
            hasMarshmallow: true
        }
    ];
    console.log("\n=== Приклади замовлень ===");
    orders.forEach((order, index) => {
        const price = calculateIceCreamPrice(order);
        const sizeText = order.size === IceCreamSize.SMALL ? "Маленький" : "Великий";
        const toppingsText = order.toppings.map(t => {
            switch (t) {
                case Topping.CHOCOLATE: return "шоколад";
                case Topping.CARAMEL: return "карамель";
                case Topping.BERRIES: return "ягоди";
                default: return t;
            }
        }).join(", ");
        console.log(`\nЗамовлення ${index + 1}:`);
        console.log(`  Розмір: ${sizeText} стаканчик`);
        console.log(`  Начинки: ${toppingsText}`);
        console.log(`  Маршмелоу: ${order.hasMarshmallow ? "так" : "ні"}`);
        console.log(`  Загальна вартість: ${price} грн`);
    });
}
// Запуск демонстрації
demonstrateIceCreamCalculator();
//# sourceMappingURL=ice-cream.js.map