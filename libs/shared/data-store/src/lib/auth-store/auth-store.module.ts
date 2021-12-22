import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './state/auth.reducer';
import { AuthFacade } from './state/auth.facade';
import { AuthService } from './state/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthFacade, AuthService],
})
export class AuthStoreModule {}
