class Berzerker extends Character {
  constructor(name = Draven, hp = 8, dmg = 4, mana = 0, status = "playing") {
    super(hp, dmg, mana, status, name);
  }

  Rage (){
    this.mana -= 0; 
    this.dmg += 1;
    this.hp -= 1
  }
}