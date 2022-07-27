import {Usuario} from "../../_models/usuario/usuario";
import {UsuarioInterface} from "./usuario-interface";

export class UsuarioService extends UsuarioInterface{
  constructor() {
    super();
  }

  retornarUsuario(): Object {
    return localStorage.getItem('usuario') ?? '';
  }

  salvarUsuario(user: Usuario): void {
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('usuario');
  }
}
