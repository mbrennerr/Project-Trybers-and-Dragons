export default interface SimpleFighter {
  lifePoints:number;
  strength:number;
  atack(enemy:SimpleFighter):void;
  receiveDamage(attackPoints:number):void
}