/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 passwordType = 'password';
 passwordIcon = 'eye-off';

  loginForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required, ],
    }),
    password: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required],
    }),
  });

  get formControles() {
    return this.loginForm.controls;
  };







  constructor() { }

  ngOnInit() {


  }

  // hide show password
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye' : 'eye-off-outline';
}

userLogin(){
  if (!this.loginForm.valid) {
    return;
  }
  console.log(this.loginForm.value);
}
}
