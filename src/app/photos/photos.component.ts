import { Component, OnInit } from '@angular/core';

import { IPhoto } from './photo';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: IPhoto[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe({
      next: photos => {
        this.photos = photos;  
      },
    });
  }

}
