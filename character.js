class Character {
  constructor(name, hp, dmg, mana, status = "playing") {
      this.name = name;
      this.hp = hp;
      this.dmg = dmg;
      this.mana = mana;
      this.status = status;
  }

  takeDamage(numberDamage){
    this.hp -= numberDamage;
    if (this.hp <= 0) {
      this.status = 'loser';
      console.log(`${this.name} est mort`);
    }
    else {
      console.log(`${this.name} a subit ${numberDamage} de degats, il lui reste ${this.hp} points de vie`);
    }
  }

  dealDamage(victim){
    if (victim.hp <= 0){
      victim.status = 'loser';
      console.log(`${victim.name} est mort`);
      this.mana += 20;
    }
    else {
      victime.hp -= this.dmg;
    }
  }

}