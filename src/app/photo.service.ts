import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { IPhoto } from "./photo";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  private photoUrl =
    "http://jsonplaceholder.typicode.com/photos?_start=10&_limit=10";

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.photoUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPhoto(id: number): Observable<IPhoto | undefined> {
    return this.getPhotos().pipe(
      map((photos: IPhoto[]) => photos.find(p => p.id === id))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
