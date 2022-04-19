import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _instaces = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addInstances();
  }

  private static addInstances() {
    this._instaces += 1;
  }

  static createdRacesInstances(): number {
    return this._instaces;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }
}