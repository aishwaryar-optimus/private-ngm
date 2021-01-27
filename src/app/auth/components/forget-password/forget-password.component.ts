// Core Modules
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  submittedMsg = false;

  /**
   * Angular LifeCycle
   * @param formBuilder FormBuilder
   */
  constructor(
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
    this.forgotPasswordForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
        ]
      ]
    });
  }

  /**
   * Submit the form
   */
  onSubmit(): void {
    this.submittedMsg = true;
    if (this.forgotPasswordForm.invalid) {
      return;
    }
  }
}
