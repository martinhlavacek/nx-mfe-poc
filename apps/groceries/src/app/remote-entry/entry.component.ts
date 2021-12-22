import { Component } from '@angular/core';
import { AuthFacade } from '@nx-mfe-poc/shared/data-store';

@Component({
  selector: 'mf-app-groceries-entry',
  template: `<div class="remote-entry">
    <h2>groceries's Remote Entry Component</h2>
    <div>TOKEN:</div>
    <div>{{token$ | async }}</div>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  token$ = this.authFacade.token$;
  constructor(private authFacade: AuthFacade) {
  }
}
