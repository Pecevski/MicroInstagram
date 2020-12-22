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
  private dataStore:{photos: IPhoto[]} = {photos: []};
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

  loadPhoto(id: number): Observable<IPhoto | undefined> {
    return this.photos.pipe(
      map((photos: IPhoto[]) => photos.find(p => p.id === id))
    );
  }

  createPhoto(photo: IPhoto) {
    this.http.post<IPhoto>(`${this.photoUrl}/photos`, JSON.stringify(photo)).subscribe(data => {
      data.id = Math.random();
      this.dataStore.photos.unshift({...data, ...photo});
      this._photos.next(Object.assign({}, this.dataStore).photos);
    }, catchError(this.handleError));
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
