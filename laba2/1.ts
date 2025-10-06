
interface Animal {
  name: string;                
  legs?: number;               
  move(): void;                
}

class Cat implements Animal {
  name: string;
  legs = 4;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} ходить на ${this.legs} лапках `);
  }
}

class Bird implements Animal {
  name: string;
  legs = 2;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} літає у небі `);
  }
}

class Fish implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} плаває у воді `);
  }
}

const animals: Animal[] = [
  new Cat("Мурчик"),
  new Bird("Кеша"),
  new Fish("Немо")
];

animals.forEach(a => a.move());
