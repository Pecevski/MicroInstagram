import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PhotosDetailsComponent } from "./photos/photos-details.component";
import { PhotosComponent } from "./photos/photos.component";

const appRoutes: Routes = [
    { path: 'photos', component: PhotosComponent},
    { path: '', redirectTo: 'photos', pathMatch: 'full' },
    { path: '**', redirectTo: 'photos', pathMatch: 'full' }
]

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } 
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}