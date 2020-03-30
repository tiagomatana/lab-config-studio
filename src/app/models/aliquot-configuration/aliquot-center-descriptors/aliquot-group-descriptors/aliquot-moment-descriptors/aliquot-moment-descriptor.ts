import {AliquotTypesDescriptor} from './aliquot-types-descriptors/aliquot-types-descriptor';

export class AliquotMomentDescriptor {
  constructor() {
  }

  objectType = 'AliquotMomentDescriptor';
  name: string;
  aliquotTypesDescriptors: AliquotTypesDescriptor[];

  public addTypeDescriptor(): void {
    const aliquotTypesDescriptor = new AliquotTypesDescriptor();
    this.aliquotTypesDescriptors.push(aliquotTypesDescriptor);
  }

  public removeTypeDescriptor(index: number): void {
    this.aliquotTypesDescriptors.splice(index, 1);
  }
}
