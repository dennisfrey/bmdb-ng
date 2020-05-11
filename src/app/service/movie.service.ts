import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { JsonResponse } from '../model/json-response.class';
import { Movie } from '../model/movie.class';

const url: string = "http://localhost:8080/movies/";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse>{
    return this.http.get(url) as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse>{
    return this.http.get(url+id) as Observable<JsonResponse>;
  }
  create(movie: Movie): Observable<JsonResponse>{
    return this.http.post(url,movie) as Observable<JsonResponse>;
  }
  edit(movie: Movie): Observable<JsonResponse>{
    return this.http.put(url,movie) as Observable<JsonResponse>;
  }
  delete(id: number): Observable<JsonResponse>{
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }
}
