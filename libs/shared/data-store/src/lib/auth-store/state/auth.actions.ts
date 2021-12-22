import { createAction, props } from '@ngrx/store';

const LOGIN = '[Auth] Login';
const LOGIN_SUCCESS = '[Auth] Login success';
const LOGIN_FAILURE = '[Auth] Login failure';
const LOGOUT = '[Auth] Logout';

export const login = createAction(
  LOGIN,
  props<{username: string, password: string}>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{token: string}>()
);

export const loginFailure = createAction(
  LOGIN_FAILURE,
  props<{error: string}>()
);

export const logout = createAction(
  LOGOUT
)
