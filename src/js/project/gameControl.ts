import { Food } from "./food";
import { ScorePanel } from "./scorePanel";
import { Snake } from "./snake";

// 遊戲控制器，控制其他所有的類
export class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = "ArrowDown";

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }

  // 遊戲初始化方法
  init() {
    // 綁定鍵盤按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));

    // 調用run方法使蛇移動
    this.run();
  }
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }

  // 創建一個控制蛇移動的方法
  run() {
    // 獲取蛇現在的座標
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
        Y -= 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
    }
    this.snake.X = X;
    this.snake.Y = Y;

    setTimeout(this.run.bind(this), 300);
  }
}

let a = new GameControl();
a.init();
console.log(a);