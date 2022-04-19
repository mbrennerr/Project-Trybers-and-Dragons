import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;
  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.addInstances();
  } 
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  public static get instances() {
    return Halfling._instances;
  }

  public static set instances(value) {
    Halfling._instances = value;
  }

  private static addInstances() {
    Halfling._instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instances;
  }
}