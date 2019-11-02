import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BodyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
