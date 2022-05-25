(function () {
  /**
   * 以 abstract 開頭的類是抽象類
   * 抽象類和其他類一樣，只是不能創建對象
   * 抽象類是專門用來繼承的類
   */
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name
    };
    abstract sayHello(): void
  }

  class Dog extends Animal {
    /**
     * 定義一個抽象方法
     * 抽象方法使用 abstract 開頭，沒有方法體
     * 抽象方法只能定義在抽象類中，子類必須對抽象方法進行重寫
     */
    sayHello() {
      console.log("wonwon")
    }
  }

  const dog = new Dog("Milk")
  dog.sayHello()
})()