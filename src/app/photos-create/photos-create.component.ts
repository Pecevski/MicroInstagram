import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-photos-create',
  templateUrl: './photos-create.component.html',
  styleUrls: ['./photos-create.component.css']
})
export class PhotosCreateComponent implements OnInit {
  createForm = this.fb.group({
    title:[''],
    albumId: [''],
    photoUrl: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
