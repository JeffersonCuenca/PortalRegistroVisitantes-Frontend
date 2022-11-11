import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserRolService {

  constructor(private http:HttpClient) { }

  public listarUsuariosRoles(){
    return this.http.get(`${baserUrl}/usuariosroles/list`);
  }

  public registrarUsuarioRol(usuarioRol:any){
    return this.http.post(`${baserUrl}/usuariosroles/new`,usuarioRol);
  }

  public eliminarUsuarioRol(id:any){
    return this.http.delete(`${baserUrl}/usuariosroles/delete/${id}`);
  }

  public ListarUsuarioRol(id:any){
    return this.http.get(`${baserUrl}/usuariosroles/list/${id}`);
  }

  public actualizarUsuarioRol(usuarioRol:any){
    return this.http.put(`${baserUrl}/usuariosroles/update`,usuarioRol);
  }
}
