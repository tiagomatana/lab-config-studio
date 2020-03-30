import {Role} from '../../../../../../Role';

class AliquotType {
  name: string;
  role: Role;
}

export class AliquotTypesDescriptor {
  constructor() {
  }

  objectType = 'AliquotTypesDescriptor';
  name: string;
  aliquots: AliquotType[];

  public addAliquot(): void {
    const aliquot = new AliquotType();
    this.aliquots.push(aliquot);
  }

  public removeAliquot(index: number): void {
    this.aliquots.splice(index, 1);
  }
}
