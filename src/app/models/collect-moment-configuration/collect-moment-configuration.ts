import {MomentDescriptor} from './moment-descriptor';

export class CollectMomentConfiguration {
  constructor() {
    this.momentDescriptors = [];
  }
  momentDescriptors: MomentDescriptor[];

  public addMomentDescriptor(name: string, label: string): void {
    this.momentDescriptors.push(new MomentDescriptor(name, label));
  }

  public removeMomentDescriptor(index: number): void {
    this.momentDescriptors.splice(index, 1);
  }
}
