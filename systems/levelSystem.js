import { Zombie } from "../enemy/zombie.js";
import { Alien } from "../enemy/alien.js";
import { Dragon } from "../enemy/dragon.js";

export class LevelSystem {
  getEnemy(level) {
    switch (level) {
      case 1:
        return new Zombie();

      case 2:
        return new Alien();

      case 3:
        return new Dragon();

      default:
        return null;
    }
  }
}