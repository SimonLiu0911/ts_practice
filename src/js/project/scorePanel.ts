// 定義表示記分牌的類
export class ScorePanel {
  // 用來記錄分數和等級
  score: number = 0;
  level: number = 1;
  // 分數和等級的元素
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  maxLevel: number;
  constructor(maxLevel: number = 10) {
    this.scoreEle = document.querySelector('.score')!;
    this.levelEle = document.querySelector('.level')!;
    this.maxLevel = maxLevel;
  }
  // 設置加分的方法
  addScore() {
    this.scoreEle.innerHTML = String(++this.score);
    if (this.score % 10 !== 0) return
    this.levelUp()
  }
  levelUp() {
    if (this.level > this.maxLevel) return
    this.levelEle.innerHTML = String(++this.level);
  }
}