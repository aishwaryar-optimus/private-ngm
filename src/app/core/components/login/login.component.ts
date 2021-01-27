import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submittedmsg = false;

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
        ]
      ],
      password: ['', [Validators.required]]
    });
    this.auth.handleAuthentication();
  }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   this.submittedmsg = true;
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   this._router.navigate(['/home']);
  //   console.log(this.loginForm.value);
  // }

  login(): any {
    this.auth.login(this.loginForm.value);
  }
}
