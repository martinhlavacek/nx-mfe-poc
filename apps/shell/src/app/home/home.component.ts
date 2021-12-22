import { GalleryFacade } from '@nx-mfe-poc/shared/data-store';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'mf-app-gallery-entry',
  template: `
  <div class="container">
    <ng-container *ngFor="let cat of cats | async">
      <div class="child">
        <h3>
          {{ cat.title }}
        </h3>
        <div>
          <img [src]="cat.url" alt="" />
        </div>
      </div>
    </ng-container>
  </div>`,
  styles: [
    `
      .container {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(4, 1fr);
      }

      img {
        width: 20vw;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  cats = this.galleryFacade.selectedCats$.pipe(
    map((selectedCats: any) => Array.from(selectedCats.values()))
  ) as any;
  constructor(
      private galleryFacade: GalleryFacade,
      private cfr: ComponentFactoryResolver,
      private vcref: ViewContainerRef
    ) {}

  async ngOnInit() {
   const { RemoteEntryComponent } = await loadRemoteModule({
     remoteEntry: 'http://localhost:3003/remoteEntry.js',
     remoteName: 'login',
     exposedModule: './LoginComponent'
   })

   const componentRef: ComponentRef<{ username: string, password: string}> = this.vcref.createComponent(
     this.cfr.resolveComponentFactory(RemoteEntryComponent)
   )
    componentRef.instance.username = "demo";
    componentRef.instance.password = "demo";
  }
}
