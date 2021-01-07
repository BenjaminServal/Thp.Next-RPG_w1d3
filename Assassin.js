class Assassin extends Character {
  constructor(name = Carl, hp = 6, dmg = 6, mana = 20, status = "playing") {
    super(hp, dmg, mana, status, name);
  }

  ShadowHit (victim){
    if (this.mana >= 20) {
      vicitm.hp -= 7;
        if (victim.hp > 0){
          this.hp -=7
        }
      this.mana -= 20; 
      this.hp = this.hp - (this.takeDamage * 0);
    }
    else {
      console.log(`tu n'as pas assez de mana`);
    }
  }
}