export abstract class AutenticacaoInterface {
  constructor() {
  }

  abstract autenticar(usuario: string, senha: string): Object;
}
