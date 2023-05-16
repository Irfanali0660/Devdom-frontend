import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsercheckService } from '../../service/usercheck.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BlockuserGuard implements CanActivate {
  constructor(private authservice:UsercheckService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // var isBlocked = this.authservice.blockuser();
      var isBlocked=this.authservice.blockuser()
      if (!isBlocked) {
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'error',
          timerProgressBar:false,
          timer: 5000,
          title: 'This Account blocked by admin'
        })
        // setTimeout(() => {
        //    this.router.navigate(['/login']);
        //  }, 5000);
      }
      return isBlocked;
  }
  
}
