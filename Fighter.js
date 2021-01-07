class Fighter extends Character {
  constructor(name = Grace, hp = 12, dmg = 4, mana = 40, status = "playing") {
    super(hp, dmg, mana, status, name);
  }

  DarkVision(victim){
    if (this.mana >= 20) {
      victim.hp -= 5;
      this.mana -= 20; 
      this.takeDamage -= 2;
    }
  }
}