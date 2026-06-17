import { Enemy } from "./enemy.js";

export class Dragon extends Enemy {
  constructor() {
    super("Dragon", 150, 30);
  }

  attack(player) {
    console.log("🐉 Dragon uses Fire Breath!");
    player.takeDamage(this.damage * 2);
  }
}