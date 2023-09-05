import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { appstateinterface } from "src/app/appSatate.interface";
import { gettag, gettagsuccess } from "../store/action";
import { taginterface } from "../../admin/interfaces/taginterface";


@Injectable()
export class Dataresolver implements Resolve<taginterface>{
    constructor(
        private store:Store<appstateinterface>,
        private action$: Actions
        ){}

        resolve():Observable<taginterface>{
            this.store.dispatch(gettag())
            return this.action$.pipe(ofType(gettagsuccess))
        }
}