export class CodeConfiguration {
  constructor() {
    this.waveNumberToken = 1;
    this.tubeToken = 1;
    this.palletToken = 2;
    this.cryotubeToken = 3;
    this.lastInsertion = 1;
  }

  waveNumberToken: number;
  tubeToken: number;
  palletToken: number;
  cryotubeToken: number;
  lastInsertion: number;

  public isValid(): boolean {
    return this.cryotubeToken !== this.palletToken;
  }
}
