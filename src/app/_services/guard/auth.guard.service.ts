import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSegment, Route} from '@angular/router';
import {UsuarioService} from "../usuario/usuario.service";
import {Observable} from "rxjs";
import {AuthGuardInterface} from "./auth.guard-interface";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService extends AuthGuardInterface {

  constructor(
    private router: Router,
    private usuarioServive: UsuarioService
  ) {
    super();
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isUserLoggedIn = this.usuarioServive.retornarUsuario();

    if (isUserLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

}
