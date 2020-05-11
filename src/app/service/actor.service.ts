import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs/internal/Observable';
import { Actor } from '../model/actor.class';

const url: string = "http://localhost:8080/actors/";

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(url+id) as Observable<JsonResponse>;
  }
  create(actor: Actor): Observable<JsonResponse> {
    return this.http.post(url, actor) as Observable<JsonResponse>;
  }
  edit(actor: Actor): Observable<JsonResponse> {
    return this.http.put(url, actor) as Observable<JsonResponse>;
  }
  delet(id: number): Observable<JsonResponse> {
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

}