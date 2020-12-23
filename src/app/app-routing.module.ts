import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PhotosCreateComponent } from "./photos-create/photos-create.component";
import { PhotosDetailsComponent } from "./photos-details/photos-details.component";
import { PhotosEditComponent } from "./photos-edit/photos-edit.component";
import { PhotosComponent } from "./photos/photos.component";

const appRoutes: Routes = [
  { path: "photos", component: PhotosComponent },
  { path: "photos/create", component: PhotosCreateComponent },
  { path: "photos/edit/:id", component: PhotosEditComponent },
  { path: "photos/:id", component: PhotosDetailsComponent },
  { path: "", redirectTo: "/photos", pathMatch: "full" }
];
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
