import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submittedmsg = false;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    public auth: AuthService,
  ) {

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

  ngOnInit(): void {
  }

  onSubmit() {
    this.submittedmsg = true;
    if (this.signupForm.invalid) {
      return;
    }
    // this.auth.signup(this.signupForm.value);
    // this._router.navigate(['/home']);
  }

}
