import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthState } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export const initialState: AuthState = {
  token: '',
  error: ''
}

const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token }) => ({ ...state, token, error: '' })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, token: '', error })),
  on(AuthActions.logout, (state) => ({...state, ...initialState}))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
