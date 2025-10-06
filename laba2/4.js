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
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Employee.prototype.getInfo = function () {
        return "".concat(this.name, ", ").concat(this.age, " \u0440\u043E\u043A\u0456\u0432 \u2014 \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430 $").concat(this.salary);
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, salary, level) {
        var _this = _super.call(this, name, age, salary) || this;
        _this.level = level;
        return _this;
    }
    Developer.prototype.getAnnualBonus = function () {
        return this.salary * 0.1;
    };
    Developer.prototype.pay = function () {
        console.log("\u0420\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0443 ".concat(this.name, " \u0432\u0438\u043F\u043B\u0430\u0447\u0435\u043D\u043E $").concat(this.salary));
    };
    Developer.prototype.showInfo = function () {
        console.log("".concat(this.getInfo(), " \u2014 \u0440\u0456\u0432\u0435\u043D\u044C: ").concat(this.level, " \u2014 \u0431\u043E\u043D\u0443\u0441 $").concat(this.getAnnualBonus()));
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary, teamSize) {
        var _this = _super.call(this, name, age, salary) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.getAnnualBonus = function () {
        return this.salary * 0.2;
    };
    Manager.prototype.pay = function () {
        console.log("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443 ".concat(this.name, " \u0432\u0438\u043F\u043B\u0430\u0447\u0435\u043D\u043E $").concat(this.salary));
    };
    Manager.prototype.showInfo = function () {
        console.log("".concat(this.getInfo(), " \u2014 \u043A\u0435\u0440\u0443\u0454 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u044E \u0437 ").concat(this.teamSize, " \u043B\u044E\u0434\u0435\u0439 \u2014 \u0431\u043E\u043D\u0443\u0441 $").concat(this.getAnnualBonus()));
    };
    return Manager;
}(Employee));
var employees = [
    new Developer("Андрій", 25, 3000, "Junior"),
    new Developer("Олена", 30, 5000, "Senior"),
    new Manager("Ігор", 35, 7000, 10),
    new Manager("Марина", 40, 8000, 15)
];
console.log("\n----- Співробітники компанії -----");
employees.forEach(function (emp) {
    if (emp instanceof Developer)
        emp.showInfo();
    if (emp instanceof Manager)
        emp.showInfo();
});
var totalBonus = employees.reduce(function (sum, emp) { return sum + emp.getAnnualBonus(); }, 0);
console.log("\n \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0440\u0456\u0447\u043D\u0430 \u0441\u0443\u043C\u0430 \u0431\u043E\u043D\u0443\u0441\u0456\u0432: $".concat(totalBonus));
