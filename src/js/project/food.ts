// 定義類 - Food
export class Food {
  element: HTMLElement;
  constructor() {
    // 獲取頁面中的food元素並將其賦值給 element
    this.element = document.querySelector('.food')!;
  }
  // 定義一個獲取食物X軸標的方法
  get X() {
    return this.element.offsetLeft;
  }
  // 定義一個獲取食物Y軸標的方法
  get Y() {
    return this.element.offsetTop;
  }
  // 修改食物的位置(食物的位置最小是0，最大是290)
  // 蛇移動一次就是一格(10)，所以食物座標必須是10的倍數
  change() {
    let x = Math.round(Math.random() * 29) * 10;
    let y = Math.round(Math.random() * 29) * 10;
    this.element.style.left = x + "px";
    this.element.style.top = y + "px";
  }
}