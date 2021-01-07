class Paladin extends Character {
  constructor(name = Ulder, hp = 16, dmg = 3, mana = 160, status = "playing") {
    super(hp, dmg, mana, status, name);
  }

  HealingLighting (victim){
    if (this.mana >= 40) {
      victim.hp -= 4;
      this.mana -= 40; 
      this.hp += 5;
    }
    else {
      console.log(`tu n'as pas assez de mana`);
    }
  }
}