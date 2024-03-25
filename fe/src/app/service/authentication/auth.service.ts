import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authConfig: AuthConfig = {
    issuer: 'http://localhost:8080', // URL of your authorization server
    redirectUri: window.location.origin, // Assuming you want to redirect back to the Angular app
    clientId: 'sampleClientId', // The client ID you configured in Spring Boot
    responseType: 'code',
    scope: 'openid profile email', // Adjust the scope according to your setup
    showDebugInformation: true, // Helpful for debugging, turn off in production
  };

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(this.authConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  login(username: string, password: string): Observable<boolean> {
    // Replace this with real authentication logic
    // For demonstration, we're assuming the login is always successful
    return of(true);
  }

  logout(): void {
    this.oauthService.logOut();
  }

  get token() {
    return this.oauthService.getAccessToken();
  }

  get isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}
