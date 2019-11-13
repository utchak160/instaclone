import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showSpinner = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      })
    });
  }

  onSubmit() {
    console.log(this.loginForm);
  }
  onLogin() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);
    this.router.navigate(['/header']);
  }
}

