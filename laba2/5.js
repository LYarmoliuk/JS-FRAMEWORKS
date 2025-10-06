var OnlineCourse = /** @class */ (function () {
    function OnlineCourse(name, duration) {
        this.students = [];
        this.name = name;
        this.duration = duration;
    }
    OnlineCourse.prototype.registerStudent = function (student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(" ".concat(student, " \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441 \"").concat(this.name, "\""));
        }
        else {
            console.log(" ".concat(student, " \u0432\u0436\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441 \"").concat(this.name, "\""));
        }
    };
    OnlineCourse.prototype.isStudentRegistered = function (student) {
        return this.students.includes(student);
    };
    return OnlineCourse;
}());
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
    }
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("\u041A\u0443\u0440\u0441 \"".concat(course.name, "\" \u0434\u043E\u0434\u0430\u043D\u043E."));
    };
    CourseManager.prototype.removeCourse = function (courseName) {
        var index = this.courses.findIndex(function (c) { return c.name === courseName; });
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(" \u041A\u0443\u0440\u0441 \"".concat(courseName, "\" \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E."));
        }
        else {
            console.log(" \u041A\u0443\u0440\u0441 \"".concat(courseName, "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E."));
        }
    };
    CourseManager.prototype.findCourse = function (courseName) {
        return this.courses.find(function (c) { return c.name === courseName; });
    };
    CourseManager.prototype.listCourses = function () {
        console.log("\n----- Список курсів -----");
        this.courses.forEach(function (course) {
            console.log(" ".concat(course.name, " (").concat(course.duration, " \u0433\u043E\u0434\u0438\u043D)"));
            if (course.students.length > 0) {
                console.log("    \u0421\u0442\u0443\u0434\u0435\u043D\u0442\u0438: ".concat(course.students.join(", ")));
            }
            else {
                console.log("    Студентів поки немає");
            }
        });
    };
    return CourseManager;
}());
var tsCourse = new OnlineCourse("TypeScript з нуля", 30);
var jsCourse = new OnlineCourse("JavaScript для початківців", 25);
var reactCourse = new OnlineCourse("React Framework", 40);
var manager = new CourseManager();
manager.addCourse(tsCourse);
manager.addCourse(jsCourse);
manager.addCourse(reactCourse);
tsCourse.registerStudent("Андрій");
tsCourse.registerStudent("Марина");
jsCourse.registerStudent("Олена");
reactCourse.registerStudent("Ігор");
reactCourse.registerStudent("Андрій");
tsCourse.registerStudent("Андрій");
manager.listCourses();
manager.removeCourse("JavaScript для початківців");
manager.listCourses();
