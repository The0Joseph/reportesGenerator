import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoEquipo } from '../tipo-equipo';

@Injectable({
  providedIn: 'root'
})
export class TipoEquipoService {

  private api: string = 'http://localhost:8080/api/v1/tipoEquipos';

  constructor(private http:HttpClient) { }

  getTipoEquipo():Observable<TipoEquipo[]>{
    return this.http.get<TipoEquipo[]>(this.api);
  }

  createTipoEquipo(tipoEquipo: TipoEquipo): Observable<TipoEquipo>{
    return this.http.post<TipoEquipo>(this.api, tipoEquipo);
  }

  deleteTipoEquipo(id:number): Observable<void>{
    console.log(id)
    return this.http.delete<void>(this.api+'/'+id);
  }
}
