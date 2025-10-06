var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isBorrowed = false;
    }
    Book.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0430."));
        }
        else {
            console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0430."));
        }
    };
    Book.prototype.returnItem = function () {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0430."));
        }
        else {
            console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u043D\u0435 \u0431\u0443\u043B\u0430 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0430."));
        }
    };
    return Book;
}());
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }
    Magazine.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\" (\u2116").concat(this.issueNumber, ") \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
        }
        else {
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
        }
    };
    Magazine.prototype.returnItem = function () {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\" \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u043E."));
        }
        else {
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\" \u043D\u0435 \u0431\u0443\u0432 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
        }
    };
    return Magazine;
}());
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.isBorrowed = false;
    }
    DVD.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("DVD \"".concat(this.title, "\" \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
        else {
            console.log("DVD \"".concat(this.title, "\" \u0432\u0436\u0435 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
    };
    DVD.prototype.returnItem = function () {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log("DVD \"".concat(this.title, "\" \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u043E."));
        }
        else {
            console.log("DVD \"".concat(this.title, "\" \u043D\u0435 \u0431\u0443\u043B\u043E \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u043E."));
        }
    };
    return DVD;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("\u0414\u043E\u0434\u0430\u043D\u043E: \"".concat(item.title, "\" (").concat(item.author, ")"));
    };
    Library.prototype.findItemByName = function (name) {
        return this.items.find(function (item) { return item.title === name; });
    };
    Library.prototype.listItems = function () {
        console.log("\n----- Список елементів бібліотеки -----");
        if (this.items.length === 0) {
            console.log("Бібліотека порожня.");
            return;
        }
        this.items.forEach(function (item) {
            var status = item.isBorrowed ? "[Позичено]" : "[Доступно]";
            var extra = "";
            if (item.pages !== undefined)
                extra = " \u2014 ".concat(item.pages, " \u0441\u0442\u043E\u0440.");
            if (item.issueNumber !== undefined)
                extra = " \u2014 \u2116".concat(item.issueNumber);
            if (item.duration !== undefined)
                extra = " \u2014 ".concat(item.duration, " \u0445\u0432.");
            console.log("".concat(item.title, " (").concat(item.author, ") ").concat(status).concat(extra));
        });
    };
    Library.prototype.removeItem = function (title) {
        var idx = this.items.findIndex(function (i) { return i.title === title; });
        if (idx !== -1) {
            var removed = this.items.splice(idx, 1)[0];
            if (removed) {
                console.log("\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043E: \"".concat(removed.title, "\" (").concat(removed.author, ")"));
            }
        }
        else {
            console.log("\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \"".concat(title, "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 \u0431\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u0446\u0456."));
        }
    };
    return Library;
}());
var library = new Library();
var book1 = new Book("Кайдашева сім’я", "Іван Нечуй-Левицький", 220);
var book2 = new Book("Тіні забутих предків", "Михайло Коцюбинський", 180);
var mag1 = new Magazine("Всесвіт", "Редакція", 5);
var dvd1 = new DVD("Захар Беркут", "за твором Івана Франка", 130);
library.addItem(book1);
library.addItem(book2);
library.addItem(mag1);
library.addItem(dvd1);
library.listItems();
book1.borrow();
mag1.borrow();
book1.borrow();
console.log("\nПісля позичання:");
library.listItems();
var found = library.findItemByName("Захар Беркут");
if (found) {
    found.borrow();
}
book1.returnItem();
console.log("\nПісля повернення:");
library.listItems();
library.removeItem("Всесвіт");
library.listItems();
