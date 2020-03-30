class Label {
  constructor(plainText: string = '' , formattedText: string = '') {
    this.extends = 'StudioObject';
    this.objectType = 'Label';
    this.oid = '';
    this.plainText = plainText;
    this.formattedText = formattedText;
  }
  extends: string;
  objectType: string;
  oid: string;
  plainText: string;
  formattedText: string;
}

class Labels {
  ptBr: Label;
  enUS: Label;
  esES: Label;
}

export class MetadataConfiguration {
  constructor(extractionValue: string, plainText: string) {
    this.objectType = 'MetadataConfiguration';
    this.extractionValue = extractionValue;
    this.label = new Labels();
    this.label.ptBr = new Label();
    this.label.enUS = new Label();
    this.label.esES = new Label();
    this.label.ptBr.plainText = plainText;
  }
  objectType: string;
  extractionValue: string;
  label: Labels;
}
