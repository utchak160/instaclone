import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm = FormGroup;
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit() {


    // @ts-ignore
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        pswrd: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        pswrd1: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        mobile: new FormControl(null, Validators.required),
      })
  });

  }
  onSignup() {
    console.log(this.signUpForm);
  }
  onclick() {
    this.submitted = true;
    this.router.navigate(['']);
    alert('Successfully Registered!');
    console.log('Successfully Registered!');
  }
  // onCancel() {
  //   this.submitted = false;
  //   this.signUpForm.reset();
  // }
}


