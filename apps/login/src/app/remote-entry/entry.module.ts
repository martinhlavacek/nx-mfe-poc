import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { AuthFacade } from '@nx-mfe-poc/shared/data-store';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [
    AuthFacade
  ],
})
export class RemoteEntryModule {}
