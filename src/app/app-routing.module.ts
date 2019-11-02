import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: LoginComponent},
    {path: 'signUp', component: SignupComponent},
    {path: 'header', component: HeaderComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
