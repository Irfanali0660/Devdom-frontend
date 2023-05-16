import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsercheckService } from '../service/usercheck.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthguardGuard implements CanActivate {
  constructor(private authservice:UsercheckService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var isAuthenticated = this.authservice.getuserstatus();
      if (!isAuthenticated) {
          this.router.navigate(['/login']);
      }
      return isAuthenticated;
  }
}
