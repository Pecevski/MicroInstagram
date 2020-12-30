import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PhotosComponent } from "./photos/photos.component";
import { PhotosDetailsComponent } from "./photos-details/photos-details.component";
import { PhotoService } from "./photo.service";
import { PhotosCreateComponent } from './photos-create/photos-create.component';
import { PhotosEditComponent } from './photos-edit/photos-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent, 
    PhotosDetailsComponent, 
    PhotosCreateComponent, 
    PhotosEditComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule,
    ReactiveFormsModule
  ],
  // providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
