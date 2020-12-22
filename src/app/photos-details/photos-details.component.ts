import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IPhoto } from "../photo";
import { PhotoService } from "../photo.service";

@Component({
  selector: "app-photos-details",
  templateUrl: "./photos-details.component.html",
  styleUrls: ["./photos-details.component.css"]
})
export class PhotosDetailsComponent implements OnInit {
  photo: IPhoto | undefined;
  errorMessage = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get("id");
    if (param) {
      const id = +param;
      this.loadPhoto(id);
    }
  }

  loadPhoto(id: number): void {
    this.photoService.loadPhoto(id)
      .subscribe({
        next: photo => (this.photo = photo),
        error: err => (this.errorMessage = err)
    });
  }
}
