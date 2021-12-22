import { Component, OnInit } from '@angular/core';
import { GalleryFacade, AuthFacade } from '@nx-mfe-poc/shared/data-store';
@Component({
  selector: 'mf-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  isLoggedIn$ = this.authFacade.token$;

  constructor(
    private galleryFacade: GalleryFacade,
    private authFacade: AuthFacade,
  ) {}
  ngOnInit(): void {
    this.galleryFacade.init();
  }
}
