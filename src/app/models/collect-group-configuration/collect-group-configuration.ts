import {LabelPrint} from '../label-print-configuration/label-print';

class Tube {
  count: number;
  type: string;
  moment: string;
  group: string;
}

class GroupDescriptor {
  name: string;
  type: string;
  tubeSet: Tube[];

  public addTube(count: number, info: LabelPrint): void {
    const tube = new Tube();
    tube.count = count;
    tube.type = info.type;
    tube.moment = info.moment;
    tube.group = info.groupName;
    this.tubeSet.push(tube);
  }

  public removeTube(index: number): void {
    this.tubeSet.splice(index, 1);
  }
}

export class CollectGroupConfiguration {
  constructor() {
    this.groupDescriptors = [];
  }

  groupDescriptors: GroupDescriptor[];

  public addGroupDescriptors(name: string, type: string): void {
    this.groupDescriptors.push(new GroupDescriptor());
  }

  public getGroupDescriptor(name: string): GroupDescriptor {
    return this.groupDescriptors.find((group) => {
      return group.name === name;
    });
  }

  public removeGroupDescriptor(index: number): void {
    this.groupDescriptors.splice(index, 1);
  }
}
