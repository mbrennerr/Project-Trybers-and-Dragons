/* eslint-disable class-methods-use-this */
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private readonly _energy: Energy;

  constructor(
    name:string,
    race:Race = new Elf(name, 10),
    archetype:Archetype = new Mage(name),  
  ) {
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = this.defaultEnergy();
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }
  
  public get dexterity(): number {
    return this._dexterity;
  }
  
  public get energy():Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  private defaultEnergy(): Energy {
    const mana = getRandomInt(1, 10); 
    return {
      type_: this._archetype.energyType,
      amount: mana,
    };
  }

  receiveDamage(attackPoints: number): number {
    let lifePoints = this._lifePoints;
    const defense = this._defense;
    const damage = attackPoints - defense;
    if (damage > 0) {
      lifePoints -= damage;
    }
    if (lifePoints <= 0) lifePoints = -1;
    return lifePoints;
  }
  
  attack(enemy: Fighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }
  
  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints; 
    }
    this._lifePoints = this._maxLifePoints;
    
    // TODO:Tentar implementar com Map;
    // const arrayThis = [...this];
    // arrayThis.map((value) => {
    //   if (typeof (value) === 'number' && value !== '_lifePoints') {
    //     return value += getRandomInt(1, 10);
    //   }
    //  else console.log(notToCompile); 
    // });
  }

  special(enemy: Fighter): void {
    const speacialAtack = this._strength / this._dexterity;
    enemy.receiveDamage(speacialAtack);    
  }
}
