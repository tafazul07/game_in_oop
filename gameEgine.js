import { Player } from "./player/player.js";
import { CombatSystem } from "./systems/combatsystem.js";
import { LevelSystem } from "./systems/levelSystem.js";

export class GameEngine {
  constructor(playerName) {
    this.player = new Player(playerName);
    this.levelSystem = new LevelSystem();
    this.combatSystem = new CombatSystem();
    this.currentLevel = 1;
  }

  start() {
    console.log("🎮 Game Started");

    while (this.currentLevel <= 3) {
      console.log(
        `\n===== LEVEL ${this.currentLevel} =====`
      );

      const enemy =
        this.levelSystem.getEnemy(this.currentLevel);

      this.combatSystem.battle(
        this.player,
        enemy
      );

      if (this.player.isDead()) {
        console.log("💀 GAME OVER");
        return;
      }

      console.log(
        `✅ ${enemy.name} defeated`
      );

      this.player.gainXP(50);

      this.currentLevel++;
    }

    console.log("🏆 YOU WON THE GAME!");
  }
}