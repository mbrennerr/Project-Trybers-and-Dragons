import Character from './Character';
import Mage from './Archetypes/Mage';
import Fighter from './Fighter';
import { Dwarf, Orc, Elf, Halfling } from './Races';

const gimli = new Dwarf('Gimli', 30);
console.log('Campeão', gimli);

const twoIronFirst = new Orc('TwoIronFirst', 25);
console.log('Campeão', twoIronFirst);

const legolas = new Elf('Legolas', 120);
console.log('Campeão', legolas);

const frodo = new Halfling('Frodo', 80);
console.log('Campeão', frodo);

const mage = new Mage('Talud');
console.log('Mage', mage);

function hero(fighter: Fighter) {
  return fighter.lifePoints;
}
console.log(hero);

const creation = () => {
  const c = new Character('MB');
  const e = c.energy;
  e.amount -= 5;
  console.log('theChampionIs', c);
  console.log('thisIsPwer', e);
  return c.energy.amount !== e.amount;
};
console.log('thisIsResultFunction', creation());