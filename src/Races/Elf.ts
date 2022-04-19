import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.addInstances();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  public static get instances() {
    return Elf._instances;
  }

  public static set instances(value) {
    Elf._instances = value;
  }

  private static addInstances() {
    this._instances += 1;
  }

  static createdRacesInstances():number {
    return this._instances;
  }
}