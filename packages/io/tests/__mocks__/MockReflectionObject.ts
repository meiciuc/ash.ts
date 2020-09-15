import { MockComponent } from './MockComponent';
import { MockComponentExtended } from './MockComponentExtended';

export class MockReflectionObject {
  private _fullAccessor = 0;

  private _setter = 0;

  public numberVariable = 0;

  public booleanVariable = false;

  public stringVariable = '';

  public pointVariable:MockComponent | null = null;

  public point2Variable:MockComponent | null = null;

  public matrixVariable:MockComponentExtended | null = null;

  public matrix2Variable:MockComponentExtended | null = null;

  public arrayVariable:number[] | null = [];

  public get fullAccessor():number {
    return this._fullAccessor;
  }

  public set fullAccessor(value:number) {
    this._fullAccessor = value;
  }

  public get getOnlyAccessor():number {
    return 1;
  }

  public set setOnlyAccessor(value:number) {
    this._setter = value;
  }
}
