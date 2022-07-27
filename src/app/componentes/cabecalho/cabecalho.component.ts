import {Component, OnInit} from '@angular/core';
import {Event, NavigationEnd, Router} from "@angular/router";
import {Usuario} from "../../_models/usuario/usuario";
import {UsuarioService} from "../../_services/usuario/usuario.service";

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {
  usuario: any;

  isLogin: boolean = false;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.match('/login')) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.usuario = this.usuarioService.retornarUsuario();
    if (this.usuario) {
      this.usuario = JSON.parse(this.usuario);
    }
  }

  logout(): void {
    this.usuarioService.logout();
    this.router.navigateByUrl('/login');
  }

}
