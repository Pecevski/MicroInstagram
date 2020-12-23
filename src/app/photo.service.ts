import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { IPhoto } from "./photo";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  private _photos = new BehaviorSubject<IPhoto[]>([]);
  private photoUrl = "http://jsonplaceholder.typicode.com/photos?_start=10&_limit=10";
  private dataStore: { photos: IPhoto[] } = { photos: [] };
  readonly photos = this._photos.asObservable();


  constructor(private http: HttpClient) {}

  loadPhotos() {
    if(this.dataStore.photos.length == 0){
      this.http.get<IPhoto[]>(`${this.photoUrl}/photos`).subscribe(
       data => { this.dataStore.photos = data;
                 this._photos.next(Object.assign({}, this.dataStore).photos);
       }, catchError(this.handleError));
    }
  }

  //Observable
  loadPhoto(id: number): Observable<IPhoto | undefined> {
    return this.photos.pipe(
      map((photos: IPhoto[]) => photos.find(p => p.id === id))
    );
  }

  // Not Observable
  loadForEdit(id: number){
    return this.dataStore.photos.filter(p => p.id === id)[0];
  }

  createPhoto(photo: IPhoto) {
    this.http.post<IPhoto>(`${this.photoUrl}/photos`, JSON.stringify(photo)).subscribe(data => {
      data.id = Math.random();
      this.dataStore.photos.unshift({...data, ...photo});
      this._photos.next(Object.assign({}, this.dataStore).photos);
    }, catchError(this.handleError));
  }

  editPhoto(photo: IPhoto){
    console.log('EDIT')
    const url = "https://jsonplaceholder.typicode.com";
    this.http.put<IPhoto>(`${url}/photos/${photo.id}`, JSON.stringify(photo)).subscribe(data => {
       //console.log(data);
        this.dataStore.photos.forEach((item,i) => {
            if(item.id === data.id) {this.dataStore.photos[i] = {...data, ...photo}};
        })
        this._photos.next(Object.assign({}, this.dataStore).photos);
    },  catchError(this.handleError))
  }

  deletePhoto(photoId: number){
    const url = "https://jsonplaceholder.typicode.com";
    this.http.delete(`${url}/photos/${photoId}`).subscribe(res => {
        this.dataStore.photos.forEach((item,i) => {
            if(item.id === photoId) {this.dataStore.photos.splice(i, 1)};
          })
            this._photos.next(Object.assign({}, this.dataStore).photos);
        }, catchError(this.handleError))
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
