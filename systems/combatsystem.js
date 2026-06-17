export class CombatSystem {
  battle(player, enemy) {
    while (!player.isDead() && !enemy.isDead()) {
      player.attack(enemy);

      if (enemy.isDead()) break;

      enemy.attack(player);
    }
  }
}