var Cat = /** @class */ (function () {
    function Cat(name) {
        this.legs = 4;
        this.name = name;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " \u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 ").concat(this.legs, " \u043B\u0430\u043F\u043A\u0430\u0445 "));
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.legs = 2;
        this.name = name;
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " \u043B\u0456\u0442\u0430\u0454 \u0443 \u043D\u0435\u0431\u0456 "));
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " \u043F\u043B\u0430\u0432\u0430\u0454 \u0443 \u0432\u043E\u0434\u0456 "));
    };
    return Fish;
}());
var animals = [
    new Cat("Мурчик"),
    new Bird("Кеша"),
    new Fish("Немо")
];
animals.forEach(function (a) { return a.move(); });
