
interface Course {
  name: string;           
  duration: number;       
  students: string[];     
}

class OnlineCourse implements Course {
  name: string;
  duration: number;
  students: string[] = []; 

  constructor(name: string, duration: number) {
    this.name = name;
    this.duration = duration;
  }

  registerStudent(student: string): void {
    if (!this.isStudentRegistered(student)) {
      this.students.push(student);
      console.log(` ${student} зареєстрований на курс "${this.name}"`);
    } else {
      console.log(` ${student} вже зареєстрований на курс "${this.name}"`);
    }
  }

  
  isStudentRegistered(student: string): boolean {
    return this.students.includes(student);
  }
}

class CourseManager {
  private courses: Course[] = [];

  addCourse(course: Course): void {
    this.courses.push(course);
    console.log(`Курс "${course.name}" додано.`);
  }

  removeCourse(courseName: string): void {
    const index = this.courses.findIndex(c => c.name === courseName);
    if (index !== -1) {
      this.courses.splice(index, 1);
      console.log(` Курс "${courseName}" видалено.`);
    } else {
      console.log(` Курс "${courseName}" не знайдено.`);
    }
  }

  findCourse(courseName: string): Course | undefined {
    return this.courses.find(c => c.name === courseName);
  }

  listCourses(): void {
    console.log("\n----- Список курсів -----");
    this.courses.forEach(course => {
      console.log(` ${course.name} (${course.duration} годин)`);
      if (course.students.length > 0) {
        console.log(`    Студенти: ${course.students.join(", ")}`);
      } else {
        console.log("    Студентів поки немає");
      }
    });
  }
}

const tsCourse = new OnlineCourse("TypeScript з нуля", 30);
const jsCourse = new OnlineCourse("JavaScript для початківців", 25);
const reactCourse = new OnlineCourse("React Framework", 40);

const manager = new CourseManager();
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
