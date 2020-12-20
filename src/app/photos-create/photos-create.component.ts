import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-photos-create',
  templateUrl: './photos-create.component.html',
  styleUrls: ['./photos-create.component.css']
})
export class PhotosCreateComponent implements OnInit {
  createForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title:['', Validators.required],
      albumId: ['', Validators.required],
      photoUrl: ['', Validators.required],
      thumbnailUrl: ['', Validators.required]
    })
  }

  get f() { return this.createForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.createForm.invalid) {
          return;
      }
      console.log(this.createForm.value);
      alert('Photo is Created!' + JSON.stringify(this.createForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.createForm.reset();
  }

}
