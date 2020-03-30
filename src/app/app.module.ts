import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DataService} from './data/data.service';
import {AuthService} from './auth.service';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import {FormsModule} from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    NgxJsonViewerModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent
  ]
})
export class AppModule { }
