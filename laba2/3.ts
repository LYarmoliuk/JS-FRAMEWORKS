
abstract class Car {
  public brand: string;        
  protected model: string;     
  private year: number;        
  protected price: number;     

  constructor(brand: string, model: string, year: number, price: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
  }

  getCarInfo(): string {
    return `${this.brand} ${this.model} (${this.getYear()}) — $${this.price}`;
  }

  private getYear(): number {
    return this.year;
  }

  abstract showDescription(): void;
}

class Tesla extends Car {
  private batteryCapacity: number; 

  constructor(model: string, year: number, price: number, battery: number) {
    super("Tesla", model, year, price); 
    this.batteryCapacity = battery;
  }

  showDescription(): void {
    console.log(`${this.getCarInfo()} — батарея ${this.batteryCapacity} кВт·год `);
  }
}

class BMW extends Car {
  private engineType: string;

  constructor(model: string, year: number, price: number, engine: string) {
    super("BMW", model, year, price);
    this.engineType = engine;
  }

  showDescription(): void {
    console.log(`${this.getCarInfo()} — двигун: ${this.engineType} `);
  }
}

class Toyota extends Car {
  private fuelEfficiency: number;

  constructor(model: string, year: number, price: number, efficiency: number) {
    super("Toyota", model, year, price);
    this.fuelEfficiency = efficiency;
  }

  showDescription(): void {
    console.log(`${this.getCarInfo()} — витрата пального: ${this.fuelEfficiency} л/100км `);
  }
}

const cars: Car[] = [
  new Tesla("Model S", 2023, 95000, 100),
  new Tesla("Model 3", 2024, 65000, 75),
  new BMW("M3", 2022, 82000, "бензиновий 3.0L"),
  new BMW("X5", 2023, 98000, "дизельний 3.5L"),
  new Toyota("Corolla", 2021, 30000, 6.5),
  new Toyota("Camry", 2022, 35000, 7.0)
];

console.log("\n----- Автомобілі -----");
cars.forEach(car => car.showDescription());
