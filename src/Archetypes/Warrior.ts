import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addInstance();
  }

  private static addInstance() {
    this._instances += 1;
  }

  public static createdArchetypeInstances() {
    return this._instances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public set energyType(value: EnergyType) {
    this._energyType = value;
  }
}