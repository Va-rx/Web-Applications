import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {

  constructor(private router: Router, private afAuth: AngularFireAuth, private service: AuthService) { };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let url: string = state.url;

    if(this.service.currentUser) {
      if(url === '/panel' && this.service.currentUser.roles.admin == true) {
        return true;
      }
      if(url === '/new-trip' && (this.service.currentUser.roles.admin == true || this.service.currentUser.roles.menager == true)) {
        return true;
      }
    }
    if(url === '/sign-up' && !this.service.currentUser) {
      return true;
    }
    if(url === '/sign-in' && !this.service.currentUser) {
      return true;
    }
    return false;
  }
}

