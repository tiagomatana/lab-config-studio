export class TubeDescriptor {
  constructor(name: string, label: string) {
    this.name = name;
    this.label = label;
    // tslint:disable-next-line:no-bitwise
    this.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  }

  name: string;
  label: string;
  color: string;
}
