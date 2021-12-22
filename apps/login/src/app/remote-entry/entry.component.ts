import { Component, Input, OnInit } from '@angular/core';
import { AuthFacade } from '@nx-mfe-poc/shared/data-store';

@Component({
  selector: 'mf-app-login-entry',
  template: `
    ENTRY
    <div class="login-app" *ngIf="token.length === 0;else logged ">
      <form class="login-form" (ngSubmit)="login()">
        <label>
          Username1:
          <input type="text" name="username" [(ngModel)]="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" [(ngModel)]="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
    <ng-template #logged>
      <div>
        User is logged in!
        <Button (click)="logout()">
          Logout
        </Button>
        {{ token }}
      </div>
    </ng-template>
  `,
  styles: [
    `
      .login-app {
        width: 30vw;
        border: 2px solid black;
        padding: 8px;
        margin: 0 auto;
      }
      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
      }
      label {
        display: block;
      }
    `,
  ],
})
export class RemoteEntryComponent implements OnInit{
  @Input()
  username = '';
  @Input()
  password = '';

  token = '';

  constructor(private authFacade: AuthFacade) {

  }

  login() {
    this.authFacade.login(this.username, this.password);
  }

  logout() {
    this.authFacade.logout()
  }

  ngOnInit(): void {
    this.authFacade.token$.subscribe((token) => this.token = token);
  }
}
