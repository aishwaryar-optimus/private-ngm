import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth0: auth0.WebAuth;
  private authOptions: auth0.AuthOptions;
  requestedScopes = 'openid profile read:timesheets create:timesheets';

  constructor(public router: Router) {

    // Set-up the authentication options for our flow
    this.authOptions = {
      clientID: AUTH_CONFIG.clientID,
      domain: AUTH_CONFIG.domain,
      responseType: 'token id_token',
      redirectUri: AUTH_CONFIG.callbackURL,
    };

    // Set-up the authentication flow
    this.auth0 = new auth0.WebAuth(this.authOptions);
  }

  public login(value): void {
    console.log(value.password);
    this.auth0.login({
      username: value.email,
      password: value.password,
      realm: 'AngularAuthPoc1'
    }, (err, res) => {
      window.alert(err.error_description);
    });
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
        console.log(authResult);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    // If there is a value on the `scope` param from the authResult,
    // use it to set scopes in the session for the user. Otherwise
    // use the scopes as requested. If no scopes were requested,
    // set it to nothing
    const scopes = authResult.scope || this.requestedScopes || '';

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
    // this.scheduleRenewal();
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scopes');
    // this.unscheduleRenewal();
    // Go back to the home route
    this.router.navigate(['/login']);
  }

  public signup(formValue: any): void {
    console.log(formValue);
    this.auth0.signupAndAuthorize({
      connection: 'AngularAuthPoc1',
      email: formValue.email,
      password: formValue.lastName,
    }, (err, result) => {
      console.log(result);
      if (err) { return console.log('Something went wrong: ' + err); }
      this.setSession(result);
      this.router.navigate(['/home']);
    });
  }

  public changePassword(): void {
    this.auth0.changePassword({
      connection: 'Username-Password-Authentication',
      email: 'devil612512@gmail.com'
    }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        alert('change password link has been send.');
        // this.setSession(result);
        this.router.navigate(['/login']);
      }
    });
  }
}
