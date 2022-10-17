import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  //Genera el Json web token
  public generateToken(logindata:any){
    return this.httpClient.post(`${baserUrl}/generate-token`,logindata);
  }

  //Inicio de sesion y establecemos el token en el localStorage
  public loginUser(token:any){
    localStorage.setItem('token',token);
  }
  
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //Cerramos sesion y eliminamos el token del localStorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //Obtenemos el token
  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user:any) {
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if(userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  public getUserRol() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser() {
    return this.httpClient.get(`${baserUrl}/usuario-actual`);
  }
}
