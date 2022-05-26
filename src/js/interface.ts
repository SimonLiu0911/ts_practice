(function () {

  // 描述一個對象的類型
  type myType = {
    name: string,
    age: number
  }

  // 接口用來定義一個類結構，用來定義一個類中應該包含哪些屬性和方法，同時也可以當成一個類型聲明去使用
  interface myInterface {
    name: string,
    age: number
  }

  const obj: myType = {
    name: "Mike",
    age: 10
  }

  /**
   * 接口可以在定義類的時候去限制類的結構
   * 接口的所有的屬性都不能有實際的值
   * 接口只定義對象的結構，而不考慮實際值
   * 在接口中所有的方法都是抽象方法
   */
  interface myInter {
    name: string,
    sayHello(): void
  }

  class MyClass implements myInter {
    name: string;

    constructor(name) {
      this.name = name
    }

    sayHello() {
      console.log('hello');
    }

  }

})()