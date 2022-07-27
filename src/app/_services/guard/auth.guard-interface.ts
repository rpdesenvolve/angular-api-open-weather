import {ActivatedRouteSnapshot, Route, RouterStateSnapshot, UrlSegment} from "@angular/router";

export abstract class AuthGuardInterface {
  constructor() {
  }

  abstract canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): void;

  abstract canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): void;

  abstract canLoad(route: Route, segments: UrlSegment[]): void;
}
