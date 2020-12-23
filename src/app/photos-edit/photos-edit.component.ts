import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IPhoto } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos-edit',
  templateUrl: './photos-edit.component.html',
  styleUrls: ['./photos-edit.component.css']
})
export class PhotosEditComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  photo: IPhoto;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private photoServise: PhotoService) { }
  

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get("id");
    if (param) {
      const id = +param;
    this.photo = this.photoServise.loadForEdit(id);
    }
    
    this.editForm = this.formBuilder.group({
      id: [this.photo.id],
      title:[this.photo.title, Validators.required],
      albumId: [this.photo.albumId, Validators.required],
      url: [this.photo.url, Validators.required],
      thumbnailUrl: [this.photo.thumbnailUrl, Validators.required]
    })
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.editForm.invalid) {
          return;
      }
      this.photoServise.editPhoto(this.editForm.value);
      console.log(this.editForm.value);
      this.router.navigate(["/photos"]);
  }

  onReset() {
    this.router.navigate(["/photos"]);
  }

}
