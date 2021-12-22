import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthStoreModule, GalleryStoreModule } from '@nx-mfe-poc/shared/data-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
    GalleryStoreModule,
    AuthStoreModule,
    RouterModule.forRoot(
      [
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'gallery',
          loadChildren: () =>
            import('gallery/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'groceries',
          loadChildren: () =>
            import('groceries/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'takeaways',
          loadChildren: () =>
            import('takeaways/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'login',
          loadChildren: () =>
            import('login/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'profile',
          loadChildren: () =>
            import('profile/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '**',
          redirectTo: 'home',
        },

      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
