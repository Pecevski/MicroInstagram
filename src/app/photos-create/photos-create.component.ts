import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { PhotoService } from '../photo.service';


@Component({
  selector: 'app-photos-create',
  templateUrl: './photos-create.component.html',
  styleUrls: ['./photos-create.component.css']
})
export class PhotosCreateComponent implements OnInit {
  createForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private photoServise: PhotoService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title:['', Validators.required],
      albumId: ['', Validators.required],
      url: ['', Validators.required],
      thumbnailUrl: ['', Validators.required]
    })
  }

  get f() { return this.createForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.createForm.invalid) {
          return;
      }
      this.photoServise.createPhoto(this.createForm.value);
      console.log(this.createForm.value);
      this.router.navigate(["/photos"]);
  }

  onReset() {
    this.router.navigate(["/photos"]);
  }
}
