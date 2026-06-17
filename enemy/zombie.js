import { Enemy } from "./enemy.js";

export class Zombie extends Enemy {
  constructor() {
    super("Zombie", 50, 10);
  }

  attack(player) {
    console.log("🧟 Zombie bites!");
    super.attack(player);
  }
}