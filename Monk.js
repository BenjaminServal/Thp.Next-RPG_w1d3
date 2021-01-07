class Monk extends Character {
  constructor(name = Moana, hp = 8, dmg = 2, mana = 200, status = "playing") {
    super(hp, dmg, mana, status, name);
  }

  heal (){
    if (this.mana >= 25) {
      this.mana -= 25; 
      this.hp += 8;
    }
    else {
      console.log(`tu n'as pas assez de mana`);
    }
  }
}