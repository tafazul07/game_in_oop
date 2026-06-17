import { Inventory } from "./inventory.js";
import { Weapon } from "./weapon.js";

export class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.xp = 0;

    this.inventory = new Inventory();
    this.weapon = new Weapon("Sword", 20);
  }

  attack(enemy) {
    console.log(
      `${this.name} attacks with ${this.weapon.name}`
    );

    enemy.takeDamage(this.weapon.damage);
  }

  takeDamage(amount) {
    this.health -= amount;

    console.log(
      `${this.name} has ${this.health} HP left`
    );
  }

  gainXP(amount) {
    this.xp += amount;

    if (this.xp >= 100) {
      this.level++;
      this.xp = 0;

      console.log(
        `${this.name} leveled up to ${this.level}`
      );
    }
  }

  isDead() {
    return this.health <= 0;
  }
}