import { Dwarf, Orc, Elf, Halfling } from './Races';

const gimli = new Dwarf('Gimli', 30);
console.log('Campeão', gimli);

const twoIronFirst = new Orc('TwoIronFirst', 25);
console.log('Campeão', twoIronFirst);

const legolas = new Elf('Legolas', 120);
console.log('Campeão', legolas);

const frodo = new Halfling('Frodo', 80);
console.log('Campeão', frodo);