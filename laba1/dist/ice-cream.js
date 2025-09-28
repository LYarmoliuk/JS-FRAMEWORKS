"use strict";
function calculateIceCream(size, toppings, marshmallow = false) {
    let price = 0;
    if (size === "small") {
        price += 10;
    }
    else if (size === "large") {
        price += 25;
    }
    for (let topping of toppings) {
        if (topping === "chocolate")
            price += 5;
        if (topping === "caramel")
            price += 6;
        if (topping === "berries")
            price += 10;
    }
    if (marshmallow) {
        price += 5;
    }
    return price;
}
console.log("Ціна:", calculateIceCream("large", ["chocolate", "berries"], true), "грн");
//# sourceMappingURL=ice-cream.js.map