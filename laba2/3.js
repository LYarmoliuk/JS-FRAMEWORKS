var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, model, year, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    Car.prototype.getCarInfo = function () {
        return "".concat(this.brand, " ").concat(this.model, " (").concat(this.getYear(), ") \u2014 $").concat(this.price);
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(model, year, price, battery) {
        var _this = _super.call(this, "Tesla", model, year, price) || this;
        _this.batteryCapacity = battery;
        return _this;
    }
    Tesla.prototype.showDescription = function () {
        console.log("".concat(this.getCarInfo(), " \u2014 \u0431\u0430\u0442\u0430\u0440\u0435\u044F ").concat(this.batteryCapacity, " \u043A\u0412\u0442\u00B7\u0433\u043E\u0434 "));
    };
    return Tesla;
}(Car));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year, price, engine) {
        var _this = _super.call(this, "BMW", model, year, price) || this;
        _this.engineType = engine;
        return _this;
    }
    BMW.prototype.showDescription = function () {
        console.log("".concat(this.getCarInfo(), " \u2014 \u0434\u0432\u0438\u0433\u0443\u043D: ").concat(this.engineType, " "));
    };
    return BMW;
}(Car));
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(model, year, price, efficiency) {
        var _this = _super.call(this, "Toyota", model, year, price) || this;
        _this.fuelEfficiency = efficiency;
        return _this;
    }
    Toyota.prototype.showDescription = function () {
        console.log("".concat(this.getCarInfo(), " \u2014 \u0432\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E: ").concat(this.fuelEfficiency, " \u043B/100\u043A\u043C "));
    };
    return Toyota;
}(Car));
var cars = [
    new Tesla("Model S", 2023, 95000, 100),
    new Tesla("Model 3", 2024, 65000, 75),
    new BMW("M3", 2022, 82000, "бензиновий 3.0L"),
    new BMW("X5", 2023, 98000, "дизельний 3.5L"),
    new Toyota("Corolla", 2021, 30000, 6.5),
    new Toyota("Camry", 2022, 35000, 7.0)
];
console.log("\n----- Автомобілі -----");
cars.forEach(function (car) { return car.showDescription(); });
