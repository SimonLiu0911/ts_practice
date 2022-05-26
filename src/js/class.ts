class Person {
	/**
	 * 1. 直接定義的屬性是實例屬性，需要通過對象的實例去訪問
	 * 2. 使用 static 開頭的屬性是靜態屬性(類屬性)，可以直接通過類去訪問
	 * 3. readonly 開頭的屬性表示一個只讀的屬性無法修改
	 */
	name: string = "Simon";
	// 在屬性前使用 static 關鍵字可以定義類屬性(靜態屬性)
	static age: number = 18;
	static readonly height: number = 177;
	sayHello() {
		console.log('Hi')
	}
}

let per = new Person();
// console.log(per.sayHello());
console.log(Person.age);

per.sayHello()