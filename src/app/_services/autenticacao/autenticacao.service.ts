import {Injectable} from '@angular/core';
import {UsuarioService} from "../usuario/usuario.service";
import {Usuario} from "../../_models/usuario/usuario";
import {AutenticacaoInterface} from "./autenticacao-interface";

const usuarioMock = 'builders';
const senhaMock = 'angular'
const nomeMock = 'Platform Builders'

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService extends AutenticacaoInterface{

  constructor() {
    super();
  }

  autenticar(usuario: string, senha: string) {
    if (usuario === usuarioMock && senha === senhaMock) {
      let user: Usuario = {
        usuario: usuarioMock,
        senha: senhaMock,
        nome: nomeMock
      }
      return user;
    } else return false
  }
}
