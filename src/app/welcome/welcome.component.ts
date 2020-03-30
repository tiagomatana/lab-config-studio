import {Component, OnInit} from '@angular/core';
import {LaboratoryConfiguration} from '../laboratory-configuration';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public initializeConfig(): void {
    this.laboratory = new LaboratoryConfiguration();
    console.log(this.laboratory);
  }

  laboratory: LaboratoryConfiguration;
}
