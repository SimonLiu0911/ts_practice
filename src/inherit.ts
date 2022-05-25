(function () {

  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  class Dog extends Animal {
    bark() {
      console.log(`${this.name} 正在 wonwon!!`);
    }
  };

  class Cat extends Animal {
    // 如果子類添加一個與父類一樣的方法，則會覆寫父類
    bark() {
      console.log(`${this.name} 正在 miaomiao!!`);
    }
  }

  const dog = new Dog('Mike', 10);
  const cat = new Cat('Luzy', 3);
  console.log(dog);
  console.log(cat);
  dog.bark();
  cat.bark();

})()