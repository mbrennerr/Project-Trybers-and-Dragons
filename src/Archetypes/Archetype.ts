import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private readonly _name: string;
  private _special: number;
  private _cost: number;
  
  constructor(name:string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  public static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  } 

  abstract get energyType():EnergyType;

  public get name(): string {
    return this._name;
  }
    
  public get special(): number {
    return this._special;
  }

  public set special(value: number) {
    this._special = value;
  }
  
  public get cost(): number {
    return this._cost;
  }

  public set cost(value: number) {
    this._cost = value;
  }
} 
