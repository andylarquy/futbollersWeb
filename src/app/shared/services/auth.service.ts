import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Usuario, UsuarioLogueado } from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged: boolean;


  constructor(private http: HttpClient) {
    this.logged = false;
  }

  usuarioLogueado: Usuario;

  login(usuario: UsuarioLogueado) {
    return this.http
      .post<Usuario>("http://localhost:16005/usuario/login", usuario)
      .toPromise();
  }

  getUsuarioLogueado(id: string) {
    return (this.http
      .get<Usuario>(
        "http://localhost:16005/usuario/" +
        id
      )
      .toPromise());
  }
}