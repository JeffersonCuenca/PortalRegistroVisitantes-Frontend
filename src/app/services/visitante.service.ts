import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private http:HttpClient) { }

  public listarVisitantes(){
    return this.http.get(`${baserUrl}/visitantes/list`);
  }

  public registrarVisitante(visitante:any){
    return this.http.post(`${baserUrl}/visitantes/new`,visitante);
  }

  public eliminarVisitante(id:any){
    return this.http.delete(`${baserUrl}/visitantes/delete/${id}`);
  }

  public ListarVisitante(id:any){
    return this.http.get(`${baserUrl}/visitantes/list/${id}`);
  }

  public actualizarVisitante(area:any){
    return this.http.put(`${baserUrl}/visitantes/update`,area);
  }

}
