export class Snake {
  // 表示蛇頭的元素
  head: HTMLElement;
  bodies: HTMLCollection;
  // 獲取蛇的容器
  element: HTMLElement;
  constructor() {
    this.element = document.querySelector('.snake')!;
    this.head = document.querySelector('.snake > div')!;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 捕獲蛇頭座標
  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  // 設置蛇頭座標
  set X(value: number) {
    this.head.style.left = value + 'px';
  }

  set Y(value: number) {
    this.head.style.top = value + 'px';
  }

  // 蛇增加身體的方法
  addBody() {
    // 向element中添加一個div
    const tempDiv = document.createElement('div');
    this.element.insertAdjacentElement("beforeend", tempDiv);
  }
}
