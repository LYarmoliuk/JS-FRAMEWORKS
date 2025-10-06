
interface Payable {
  pay(): void;
}

abstract class Employee {
  protected name: string;
  protected age: number;
  protected salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  abstract getAnnualBonus(): number;

  getInfo(): string {
    return `${this.name}, ${this.age} років — зарплата $${this.salary}`;
  }
}

class Developer extends Employee implements Payable {
  private level: string; 

  constructor(name: string, age: number, salary: number, level: string) {
    super(name, age, salary);
    this.level = level;
  }

  getAnnualBonus(): number {
    return this.salary * 0.1; 
  }

  pay(): void {
    console.log(`Розробнику ${this.name} виплачено $${this.salary}`);
  }

  showInfo(): void {
    console.log(`${this.getInfo()} — рівень: ${this.level} — бонус $${this.getAnnualBonus()}`);
  }
}

class Manager extends Employee implements Payable {
  private teamSize: number;

  constructor(name: string, age: number, salary: number, teamSize: number) {
    super(name, age, salary);
    this.teamSize = teamSize;
  }

  getAnnualBonus(): number {
    return this.salary * 0.2; 
  }

  pay(): void {
    console.log(`Менеджеру ${this.name} виплачено $${this.salary}`);
  }

  showInfo(): void {
    console.log(`${this.getInfo()} — керує командою з ${this.teamSize} людей — бонус $${this.getAnnualBonus()}`);
  }
}

const employees: Employee[] = [
  new Developer("Андрій", 25, 3000, "Junior"),
  new Developer("Олена", 30, 5000, "Senior"),
  new Manager("Ігор", 35, 7000, 10),
  new Manager("Марина", 40, 8000, 15)
];

console.log("\n----- Співробітники компанії -----");
employees.forEach(emp => {
  if (emp instanceof Developer) (emp as Developer).showInfo();
  if (emp instanceof Manager) (emp as Manager).showInfo();
});

let totalBonus = employees.reduce((sum, emp) => sum + emp.getAnnualBonus(), 0);

console.log(`\n Загальна річна сума бонусів: $${totalBonus}`);
