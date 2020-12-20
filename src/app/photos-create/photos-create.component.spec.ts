import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosCreateComponent } from './photos-create.component';

describe('PhotosCreateComponent', () => {
  let component: PhotosCreateComponent;
  let fixture: ComponentFixture<PhotosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
