(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name
    };
    sayHello() {
      console.log("動物在叫");
    }
  }

  class Dog extends Animal {
    age: number
    // 如果在子類中寫了構造函數，在子類構造函數中必須用 super 對父類的構造函數進行調用，否則會覆寫掉
    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }
    sayHello() {
      // 在類的方法中 super 就表示當前類的父類
      super.sayHello()
    }
  }

  const dog = new Dog("Milk", 10)
  dog.sayHello()
})()