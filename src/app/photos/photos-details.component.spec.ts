import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDetailsComponent } from './photos-details.component';

describe('PhotosDetailsComponent', () => {
  let component: PhotosDetailsComponent;
  let fixture: ComponentFixture<PhotosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
