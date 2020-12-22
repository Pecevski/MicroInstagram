import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { IPhoto } from "../photo";
import { PhotoService } from "../photo.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  photos: Observable<IPhoto[]>;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {   
        this.photos = this.photoService.photos;
        this.photoService.loadPhotos();    
  } 

  deletePhotoById(photoId: number){
    this.photoService.deletePhoto(photoId);
    console.log('DElete');
  }
}
