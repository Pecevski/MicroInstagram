import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PhotosComponent } from "./photos/photos.component";
import { PhotosDetailsComponent } from "./photos-details/photos-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { PhotoService } from "./photo.service";
import { PhotosCreateComponent } from './photos-create/photos-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent, 
    PhotosDetailsComponent, 
    PhotosCreateComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
