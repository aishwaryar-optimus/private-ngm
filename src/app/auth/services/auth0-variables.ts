interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  silentCallbackURL: string;
  audience: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'OtzXaYOxRZAYv2meHg9N8wl3HWVDts75',
  domain: 'vaibhav-optimus.us.auth0.com',
  callbackURL: 'http://localhost:4200/home',
  silentCallbackURL: 'http://localhost:3001/silent',
  audience: '{API_IDENTIFIER}',
  apiUrl: 'http://localhost:8080'
};
