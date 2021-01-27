interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  silentCallbackURL: string;
  audience: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '',
  domain: '',
  callbackURL: 'http://localhost:4200',
  silentCallbackURL: 'http://localhost:3001/silent',
  audience: '{API_IDENTIFIER}',
  apiUrl: 'http://localhost:8080'
};
