/**
 * 在定義函數或類時，如果遇到類型不明確就可以使用泛型
 */

// #1
function fn<T>(a: T): T {
	return a;
}

// 可以直接調用具有泛型的函數
fn(10);
// 指定泛型
fn<string>('hello')

// #2
// 泛型可以同時指定多個
function fn2<T, K>(a: T, b: K): T {
	return a;
}

fn2<number, string>(10, 'test')

// #3
interface Inter {
	length: number
}

// T extends Inter 表示泛型T必須是 Inter 的實現類(子類)
function fn3<T extends Inter>(a: T): number {
	console.log(a.length);
	return a.length
}

fn3([1, 2, 3]);
fn3('123');