import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { JsonResponse } from '../model/json-response.class';
import { Credit } from '../model/credit.class';


const url: string = "http://localhost:8080/credits/";
const urlByActor: string = "find-by-actor/"
const urlByMovie: string = "find-by-movie/"

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse>{
    return this.http.get(url) as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse>{
    return this.http.get(url+id) as Observable<JsonResponse>;
  }
  create(credit: Credit): Observable<JsonResponse>{
    return this.http.post(url,credit) as Observable<JsonResponse>;
  }
  edit(credit: Credit): Observable<JsonResponse>{
    return this.http.put(url,credit) as Observable<JsonResponse>;
  }
  delete(id: number): Observable<JsonResponse>{
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  listCreditsByActor(id: number): Observable<JsonResponse>{
    return this.http.get(url + urlByActor + id) as Observable<JsonResponse>;
  }
  listCreditsByMovie(id: number): Observable<JsonResponse>{
    return this.http.get(url + urlByMovie + id) as Observable<JsonResponse>;
  }

}
