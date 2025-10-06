
interface Shape {
  getArea(): number;        
  getPerimeter(): number;   
  scale(factor: number): void; 
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2; 
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;  
  }

  scale(factor: number): void {
    this.radius *= factor;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

  scale(factor: number): void {
    this.width *= factor;
    this.height *= factor;
  }
}

class Triangle implements Shape {
  sideA: number;
  sideB: number;
  sideC: number;

  constructor(a: number, b: number, c: number) {
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }

  getPerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }

  getArea(): number {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  }

  scale(factor: number): void {
    this.sideA *= factor;
    this.sideB *= factor;
    this.sideC *= factor;
  }
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 4, 5)
];

shapes.forEach(shape => shape.scale(2));

let totalArea = 0;
let totalPerimeter = 0;

for (const shape of shapes) {
  totalArea += shape.getArea();
  totalPerimeter += shape.getPerimeter();
}

console.log("\n----- Результати по фігурах -----");
console.log(`Загальна площа: ${totalArea.toFixed(2)}`);
console.log(`Загальний периметр: ${totalPerimeter.toFixed(2)}`);
