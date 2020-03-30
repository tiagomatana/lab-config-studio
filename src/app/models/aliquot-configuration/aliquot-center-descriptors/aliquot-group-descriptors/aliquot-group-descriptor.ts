import {AliquotMomentDescriptor} from './aliquot-moment-descriptors/aliquot-moment-descriptor';

export class AliquotGroupDescriptor {
  constructor() {
  }

  objectType = 'AliquotGroupDescriptor';
  name: string;
  aliquotMomentDescriptors: AliquotMomentDescriptor[];

  public addMomentDescriptor(): void {
    const aliquotMomentDescriptor = new AliquotMomentDescriptor();
    this.aliquotMomentDescriptors.push(aliquotMomentDescriptor);
  }

  public removeMomentDescriptor(index: number): void {
    this.aliquotMomentDescriptors.splice(index, 1);
  }
}
