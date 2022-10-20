import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http:HttpClient) { }

  public listarAreas(){
    return this.http.get(`${baserUrl}/areas/list`);
  }

  public registrarArea(area:any){
    return this.http.post(`${baserUrl}/areas/new`,area);
  }

  public eliminarArea(id:any){
    return this.http.delete(`${baserUrl}/areas/delete/${id}`);
  }

  public ListarArea(id:any){
    return this.http.get(`${baserUrl}/areas/list/${id}`);
  }

  public actualizarArea(area:any){
    return this.http.put(`${baserUrl}/areas/update`,area);
  }

}
