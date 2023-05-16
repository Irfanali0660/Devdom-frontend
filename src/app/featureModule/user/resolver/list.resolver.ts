import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { appstateinterface } from 'src/app/appSatate.interface';
import { getlistcategory, getlistcategorysuccess } from "../store/action";

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<boolean> {
  constructor(
    private store:Store<appstateinterface>,
    private action$: Actions
    ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(getlistcategory())
    return this.action$.pipe(ofType(getlistcategorysuccess))
  }
}
