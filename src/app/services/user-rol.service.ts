import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserRolService {

  constructor(private http:HttpClient) { }

  public listarUsuariosroles(){
    return this.http.get(`${baserUrl}/usuariosroles/list`);
  }

  public registrarUsuariorol(usuarioRol:any){
    return this.http.post(`${baserUrl}/usuariosroles/new`,usuarioRol);
  }
}
