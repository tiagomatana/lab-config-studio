import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {LaboratoryConfiguration} from './laboratory-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService) {
    // auth.handleAuthentication();
  }

  lab: LaboratoryConfiguration;

}
