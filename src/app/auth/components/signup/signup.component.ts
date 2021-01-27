// Core Modules
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Components and Services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
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
    this.signupForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
        ]
      ],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
  }

  /**
   * Submit the form
   */
  onSubmit(): any {
    this.submittedMsg = true;
    if (this.signupForm.invalid) {
      return;
    }
    // this.auth.signup(this.signupForm.value);
  }
}
