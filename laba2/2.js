var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.scale = function (factor) {
        this.radius *= factor;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    Rectangle.prototype.scale = function (factor) {
        this.width *= factor;
        this.height *= factor;
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
    }
    Triangle.prototype.getPerimeter = function () {
        return this.sideA + this.sideB + this.sideC;
    };
    Triangle.prototype.getArea = function () {
        var s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    };
    Triangle.prototype.scale = function (factor) {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    };
    return Triangle;
}());
var shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];
shapes.forEach(function (shape) { return shape.scale(2); });
var totalArea = 0;
var totalPerimeter = 0;
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}
console.log("\n----- Результати по фігурах -----");
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043F\u043B\u043E\u0449\u0430: ".concat(totalArea.toFixed(2)));
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440: ".concat(totalPerimeter.toFixed(2)));
