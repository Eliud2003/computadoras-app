import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Computadora } from '../../models/Computadora';

@Injectable({
  providedIn: 'root'
})
export class ComputadorasjsonService {
  private jsonUrl="../json/datos.json"
  constructor(private http:HttpClient) { }

  getPc():Observable<Computadora[]>{
    return this.http.get<Computadora[]>(this.jsonUrl)
  }

}
