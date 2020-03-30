import {CodeConfiguration} from './models/code-configuration/code-configuration';
import {AliquotConfiguration} from './models/aliquot-configuration/aliquot-configuration';
import {TubeConfiguration} from './models/tube-configuration/tube-configuration';
import {CollectMomentConfiguration} from './models/collect-moment-configuration/collect-moment-configuration';
import {LotConfiguration} from './models/lot-configuration/lot-configuration';
import {MetadataConfiguration} from './models/metadata-configuration/metadata-configuration';
import {LabelPrint} from './models/label-print-configuration/label-print';
import {CollectGroupConfiguration} from './models/collect-group-configuration/collect-group-configuration';


enum Metadata {
  '.nc' = 'Não coletado',
  '.vp' = 'Valor Parcial'
}

export class LaboratoryConfiguration {
  constructor() {
    this.objectType = 'LaboratoryConfiguration';
    this.codeConfiguration = new CodeConfiguration();
    this.aliquotConfiguration = new AliquotConfiguration();
    this.tubeConfiguration = new TubeConfiguration();
    this.collectMomentConfiguration = new CollectMomentConfiguration();
    this.collectGroupConfiguration = new CollectGroupConfiguration();
    this.labelPrintConfiguration = new Object();
    this.metadataConfiguration = [];

    for (const propName in Metadata) {
      this.metadataConfiguration.push(new MetadataConfiguration(propName, Metadata[propName]));
    }
    this.lotConfiguration = new LotConfiguration();
  }

  objectType: string;
  codeConfiguration: CodeConfiguration;
  aliquotConfiguration: AliquotConfiguration;
  tubeConfiguration: TubeConfiguration;
  collectMomentConfiguration: CollectMomentConfiguration;
  collectGroupConfiguration: CollectGroupConfiguration;
  labelPrintConfiguration: object;
  metadataConfiguration: MetadataConfiguration[];
  lotConfiguration: LotConfiguration;

  public addTube(): void {

  }

  public removeTube(): void {

  }

  public initLabelPrint(group: string): void {
    this.labelPrintConfiguration[group] = [];
  }

  public addTubeLabelPrint(group: string, labelPrint: LabelPrint): void {
    this.labelPrintConfiguration[group].push(labelPrint);
  }



}
