import {AliquotCenterDescriptor} from './aliquot-center-descriptors/aliquot-center-descriptor';

class AliquotDescriptor {
  objectType = 'AliquotDescriptor';
  name: string;
  label: string;
}

export class AliquotConfiguration {
  constructor() {
    this.aliquotCenterDescriptors = [];
    this.aliquotDescriptors = [];
  }

  objectType = 'AliquotConfiguration';
  aliquotCenterDescriptors: AliquotCenterDescriptor[];
  aliquotDescriptors: AliquotDescriptor[];

  private addCenterDescriptor(): void {
    this.aliquotCenterDescriptors.push(new AliquotCenterDescriptor());
  }

  private removeCenterDescriptor(index: number): void {
    this.aliquotCenterDescriptors.splice(index, 1);
  }

  private addAliquotDescriptor(): void {
    this.aliquotDescriptors.push(new AliquotDescriptor());
  }

  private removeAliquotDescriptor(index: number): void {
    this.aliquotDescriptors.splice(index, 1);
  }
}
