import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  submittedmsg = false;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
  ) {
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

  ngOnInit(): void {
  }

  onSubmit() {
    this.submittedmsg = true;
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    // this._router.navigate(['/update-password'])
    // console.log(this.forgotPasswordForm.value)
  }


}
