import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  productoURL = 'http://localhost:8080/api/persona';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.productoURL + '/ver');
  }

}