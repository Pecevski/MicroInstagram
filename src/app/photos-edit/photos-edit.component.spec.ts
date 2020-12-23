import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosEditComponent } from './photos-edit.component';

describe('PhotosEditComponent', () => {
  let component: PhotosEditComponent;
  let fixture: ComponentFixture<PhotosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
