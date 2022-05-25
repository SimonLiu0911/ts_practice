class Dog {
  name: string;
  age: number;
  // 構造函數會在對象被創建時調用
  constructor(name: string, age: number) {
    // 在實例的方法中，this就表示當前的實例
    // 在構造函數中當前對象就是當前新建的那個對象，可以通過 this 向新建的對象中添加屬性
    this.name = name;
    this.age = age;

  }
  bark() {
    // 在方法中可以通過 this 來表示當前調用方法的對象
    // console.log("wonwon!!");
    console.log(this.name);
  }
}

let dog = new Dog('qwe', 1)
let dog2 = new Dog('qwe2', 2)
dog.bark();
dog2.bark();
// console.log(dog);
// console.log(dog2);

