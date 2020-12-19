import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosDetailsComponent } from './photos-details.component';
import { PhotosComponent } from './photos.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent},
  { path: 'photos/:id', component: PhotosDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PhotosRoutingModule { }
