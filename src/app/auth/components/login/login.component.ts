// Core Modules
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Components and Services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submittedMsg = false;

  /**
   * Angular LifeCycle
   * @param auth AuthService
   * @param formBuilder FormBuilder
   */
  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  /**
   * Angular LifeCycle
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialize form
   */
  initForm(): void {
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
  }

  /**
   * Submit the form
   */
  onSubmit(): void {
    this.submittedMsg = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value);
  }
}
