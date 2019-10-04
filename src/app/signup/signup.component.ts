import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm = FormGroup;

  constructor() { }

  ngOnInit() {
    // @ts-ignore
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        pswrd: new FormControl(null, Validators.required),
        pswrd1: new FormControl(null, Validators.required),
        mobile: new FormControl(null, Validators.required),
      })
  });

  }
  onSignup() {
    console.log(this.signUpForm);
  }
}


