import {TubeDescriptor} from './tube-descriptor';

export class TubeConfiguration {
  constructor() {
    this.tubeDescriptors = [];
  }
  tubeDescriptors: TubeDescriptor[];

  public addTubeDescriptor(name: string, label: string): void {
    this.tubeDescriptors.push(new TubeDescriptor(name, label));
  }

  public removeTubeDescriptor(index: number): void {
    this.tubeDescriptors.splice(index, 1);
  }
}
