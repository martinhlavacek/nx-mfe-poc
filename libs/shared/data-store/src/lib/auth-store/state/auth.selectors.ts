import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY } from './auth.reducer';
import { AuthState } from './auth.models';

export const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const getAuthToken = createSelector(
  getAuthState,
  (state: AuthState) => state.token
);

export const getAuthError = createSelector(
  getAuthState,
  (state: AuthState) => state.error
);
