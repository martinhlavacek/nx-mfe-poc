import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';
import { AuthState } from './auth.models';

@Injectable()
export class AuthFacade {
  token$ = this.store.pipe(select(AuthSelectors.getAuthToken));
  error$ = this.store.pipe(select(AuthSelectors.getAuthError));

  constructor(private readonly store: Store<AuthState>) {}

  login(username: string, password: string) {
    this.store.dispatch(AuthActions.login({ username, password}));
  }

  logout() {
    this.store.dispatch(AuthActions.logout())
  }
}
