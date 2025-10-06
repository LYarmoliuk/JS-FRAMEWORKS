interface LibraryItem {
  title: string;
  author: string;
  isBorrowed: boolean;
  borrow(): void;
  returnItem(): void;
}

class Book implements LibraryItem {
  isBorrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    public pages: number
  ) {}

  borrow(): void {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`Книга "${this.title}" позичена.`);
    } else {
      console.log(`Книга "${this.title}" вже позичена.`);
    }
  }

  returnItem(): void {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      console.log(`Книга "${this.title}" повернута.`);
    } else {
      console.log(`Книга "${this.title}" не була позичена.`);
    }
  }
}

class Magazine implements LibraryItem {
  isBorrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    public issueNumber: number
  ) {}

  borrow(): void {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`Журнал "${this.title}" (№${this.issueNumber}) позичений.`);
    } else {
      console.log(`Журнал "${this.title}" вже позичений.`);
    }
  }

  returnItem(): void {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      console.log(`Журнал "${this.title}" повернуто.`);
    } else {
      console.log(`Журнал "${this.title}" не був позичений.`);
    }
  }
}

class DVD implements LibraryItem {
  isBorrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    public duration: number
  ) {}

  borrow(): void {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`DVD "${this.title}" позичено.`);
    } else {
      console.log(`DVD "${this.title}" вже позичено.`);
    }
  }

  returnItem(): void {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      console.log(`DVD "${this.title}" повернуто.`);
    } else {
      console.log(`DVD "${this.title}" не було позичено.`);
    }
  }
}

class Library {
  private items: LibraryItem[] = [];

  addItem(item: LibraryItem): void {
    this.items.push(item);
    console.log(`Додано: "${item.title}" (${item.author})`);
  }

  findItemByName(name: string): LibraryItem | undefined {
    return this.items.find(item => item.title === name);
  }

  listItems(): void {
    console.log("\n----- Список елементів бібліотеки -----");
    if (this.items.length === 0) {
      console.log("Бібліотека порожня.");
      return;
    }

    this.items.forEach(item => {
      const status = item.isBorrowed ? "[Позичено]" : "[Доступно]";
      let extra = "";
      if ((item as Book).pages !== undefined) extra = ` — ${(item as Book).pages} стор.`;
      if ((item as Magazine).issueNumber !== undefined) extra = ` — №${(item as Magazine).issueNumber}`;
      if ((item as DVD).duration !== undefined) extra = ` — ${(item as DVD).duration} хв.`;

      console.log(`${item.title} (${item.author}) ${status}${extra}`);
    });
  }

  removeItem(title: string): void {
    const idx = this.items.findIndex(i => i.title === title);
    if (idx !== -1) {
      const removed = this.items.splice(idx, 1)[0];
      if (removed) {
        console.log(`Видалено: "${removed.title}" (${removed.author})`);
      }
    } else {
      console.log(`Елемент "${title}" не знайдено в бібліотеці.`);
    }
  }
}

const library = new Library();

const book1 = new Book("Кайдашева сім’я", "Іван Нечуй-Левицький", 220);
const book2 = new Book("Тіні забутих предків", "Михайло Коцюбинський", 180);
const mag1 = new Magazine("Всесвіт", "Редакція", 5);
const dvd1 = new DVD("Захар Беркут", "за твором Івана Франка", 130);

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

const found = library.findItemByName("Захар Беркут");
if (found) {
  found.borrow();
}

book1.returnItem();

console.log("\nПісля повернення:");
library.listItems();

library.removeItem("Всесвіт");
library.listItems();
