import { Enemy } from "./enemy.js";

export class Alien extends Enemy {
  constructor() {
    super("Alien", 80, 15);
  }

  attack(player) {
    console.log("👽 Alien shoots laser!");
    super.attack(player);
  }
}