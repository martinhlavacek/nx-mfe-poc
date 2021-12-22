import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as fromActions from './auth.actions';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.login),
      switchMap(({username, password}) =>
        this.authService.login(username, password).pipe(
          map(data => fromActions.loginSuccess({token: data})),
          catchError(error => of(fromActions.loginFailure({ error}))),
        )
      )
    )
  });

  constructor(
    private readonly actions$: Actions,
    private authService: AuthService
  ) {}
}
