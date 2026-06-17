export class Enemy{
    constructor(name, health, damage){
        this.name = name;
        this.health = health;
        this.damage = damage;
    }
    attack(player){
        player.takeDamage(this.damage);
        console.log( `${this.name} attacked ${player.name} for ${this.damage} damage`)
    };
    takeDamage(amount){
        this.health -= amount;
        console.log(`${this.name} has ${this.health} HP left`);
    }
    isDead(){
        return this.health <=0;
    }
}
