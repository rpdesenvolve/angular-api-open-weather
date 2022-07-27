import {Usuario} from "../../_models/usuario/usuario";

export abstract class UsuarioInterface {
  constructor() {
  }

  abstract retornarUsuario(): Object;

  abstract salvarUsuario(user: Usuario): void;

  abstract logout(): void;
}
