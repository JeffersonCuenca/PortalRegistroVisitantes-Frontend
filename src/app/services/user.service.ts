import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper' 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public registrarUsuario(user:any){
    return this.http.post(`${baserUrl}/usuarios/new`,user);
  }

  public listarUsuarios(){
    return this.http.get(`${baserUrl}/usuarios/list`);
  }

  public eliminarUsuario(id:any){
    return this.http.delete(`${baserUrl}/usuarios/delete/${id}`);
  }

  public ListarUsuario(username:any){
    return this.http.get(`${baserUrl}/usuarios/list/${username}`);
  }

  public actualizarUsuario(user:any){
    return this.http.put(`${baserUrl}/usuarios/update`,user);
  }

  public actualizarContrasenia(user:any){
    return this.http.put(`${baserUrl}/usuarios/updatePassword`,user)
  }

}
