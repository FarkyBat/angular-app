import { inject, Injectable } from '@angular/core';
import { Pickup } from '../model/pickup';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  http: HttpClient = inject(HttpClient);

  apiUrl: string = environment.apiUrl;

  entityName: string = 'pickup';

  list$: Pickup[] = [
      {"id": 1, "title": "Angular1", "totalPages": 123, "author": "asd", "price": { "currency": "HUF", "value": 1000}},
      {"id": 2, "title": "Angular2", "totalPages": 163, "author": "asd", "price": { "currency": "USD", "value": 6}},
      {"id": 3, "title": "Angular3", "totalPages": 23, "author": "asd", "price": { "currency": "HUF", "value": 1000}},
      {"id": 4, "title": "Angular4", "totalPages": 253, "author": "asd", "price": { "currency": "HUF", "value": 1000}},
      {"id": 5, "title": "Angular5", "totalPages": 103, "author": "asd", "price": { "currency": "HUF", "value": 1000}}
    ]

  getAll(): Observable<Pickup[]>{
    return this.http.get<Pickup[]>(`${this.apiUrl}${this.entityName}`);
  }
  
  get(id: number): Observable<Pickup>{
    return this.http.get<Pickup>(`${this.apiUrl}${this.entityName}/${id}`);
  }
  
  create(pickup: Pickup): Observable<Pickup>{
    return this.http.post<Pickup>(`${this.apiUrl}${this.entityName}`, pickup);
  }
  
  update(pickup: Pickup): Observable<Pickup>{
    return this.http.patch<Pickup>(`${this.apiUrl}${this.entityName}/${pickup.id}`, pickup);
  }

  delete(id: number): Observable<Pickup>{
    return this.http.delete<Pickup>(`${this.apiUrl}${this.entityName}/${id}`);
  }
}
