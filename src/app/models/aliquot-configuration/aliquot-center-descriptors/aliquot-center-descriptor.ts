import {AliquotGroupDescriptor} from './aliquot-group-descriptors/aliquot-group-descriptor';

export class AliquotCenterDescriptor {
  constructor() {
  }

  objectType = 'AliquotConfiguration';
  name: string;
  aliquotCodeSizes: number[];
  aliquotGroupDescriptors: AliquotGroupDescriptor[];

  public addGroupDescriptor(): void {
    const aliquotGroupDescriptor = new AliquotGroupDescriptor();
    this.aliquotGroupDescriptors.push(aliquotGroupDescriptor);
  }

  public removeGroupDescriptor(index: number): void {
    this.aliquotGroupDescriptors.splice(index, 1);
  }

  public addCodeSize(value: number): void {
    this.aliquotCodeSizes.push(value);
  }

  public removeCodeSize(index: number): void {
    this.aliquotCodeSizes.splice(index, 1);
  }

}
