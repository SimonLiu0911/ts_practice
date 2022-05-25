(function () {
  // 表示人的類
  class Person {
    // ts 可以在屬性前天家屬性的修飾符
    /**
     * public 修飾的屬性可以再任意位子修改(默認)
     * private 私有屬性，只能在類內部進行修改
     * protected 受包含的屬性，只能在當前類和當前類的子類中訪問
     */
    private _name: string;
    private age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this.age = age;
    }
    // 通過類中添加方法使得私有屬性可以被訪問
    get name() { // 此為 ts 中 getter 的方法
      return this._name
    }
    // 此為 ts 中 setter 的方法
    set name(value: string) {
      this._name = value;
    }
  }

  const person = new Person('Milk', 18)
  person.name = 'simon';
  console.log(person.name);


  /**
   * 現在屬性是在對象中設置的，屬性可以任意的被修改
   */


})()