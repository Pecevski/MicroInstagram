import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PhotosCreateComponent } from "./photos-create/photos-create.component";

import { PhotosDetailsComponent } from "./photos-details/photos-details.component";
import { PhotosComponent } from "./photos/photos.component";

const appRoutes: Routes = [
  { path: "photos", component: PhotosComponent },
  { path: "photos/:id", component: PhotosDetailsComponent },
  { path: "photos/add", component: PhotosCreateComponent},
  { path: "", redirectTo: "/photos", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
