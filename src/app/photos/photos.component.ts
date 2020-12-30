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
  photosObservable: Observable<IPhoto[]>;
  photos: IPhoto[]=[];
  start: number;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {   
        this.photosObservable = this.photoService.photos;
        this.photosObservable.subscribe({
          next: photos => this.photos = photos
        })
        this.start = this.photoService.getStart();
        if(this.start == 0){
          this.photoService.loadPhotos();
        }
  } 

  loadMore(){
    this.photoService.loadPhotos(); 
  }

  search(value: string){
    this.photosObservable.subscribe({
      next: photos => {
        this.photos = photos.filter(p => 
          {return p.title.includes(value)})
      }
    })
  }

  deletePhotoById(photoId: number){
    this.photoService.deletePhoto(photoId);
  }
}
