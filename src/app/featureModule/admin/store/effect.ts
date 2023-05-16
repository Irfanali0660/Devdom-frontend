import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as adminAction from './action'
import { mergeMap, map } from 'rxjs'
import { AdminService } from "../../../coreModule/service/admin.service";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { appstateinterface } from "src/app/appSatate.interface";
import * as tag from '../store/action'
import Swal from 'sweetalert2'

@Injectable()
export class adminEffect{

    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

Tag = createEffect(()=>
this.action.pipe(ofType(adminAction.addtag),mergeMap((action:any)=>{
   
    return this.adminservice.addtag(action.TagData,action.image).pipe(map((data)=>{
        console.log(data);
        if(data.success){
            this._snackbar.open('Tag added successfully', 'close', {
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                duration: 4000,
                panelClass: ['my-snackbar']
            })
            this.route.navigate(['/admin/tags'])
            return adminAction.addtagsuccess()
        }else{
            Swal.fire({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                icon: 'error',
                timerProgressBar:false,
                timer: 5000,
                title: 'This name already exist'
              })
            return adminAction.addtagfailure({error:data.error})
        }   
        
    }))
})))

edittag=createEffect(()=>
this.action.pipe(ofType(adminAction.edittag),mergeMap((action)=>{
   return this.adminservice.edittag(action.TagData,action.image).pipe(map((data)=>{
    if(data.success){
        this.route.navigate(['/admin/tags'])
        return adminAction.edittagsuccess()
    }else{
        return adminAction.editfailure({error:data.falied})
    }
   })) 
}))
)

gettag=createEffect(()=>
this.action.pipe(ofType(adminAction.gettag),mergeMap(()=>{
return this.adminservice.gettags().pipe(map((data)=>{
    return adminAction.gettagsuccess({tagdetails:data})
}))
}))
)

deleteTag=createEffect(()=>
this.action.pipe(ofType(adminAction.deletetag),mergeMap((action)=>{
    return this.adminservice.deletetag(action.id).pipe(map(()=>{
        this.store.dispatch(tag.gettag())
        return adminAction.deletesuccess()
    }))
}))
)

gettagDetails=createEffect(()=>
this.action.pipe(ofType(adminAction.gettagDetails),mergeMap((action)=>{
    return this.adminservice.gettagDetails(action.id).pipe(map((details)=>{
        console.log( details.data);
        console.log("gettagDetails");   
        this.route.navigate(['/admin/tags/edittag/'+details.data._id])
        return adminAction.gettagdetailssuccess({tagdetails:details.data})
       
    }))
}))
)

addlist=createEffect(()=>
this.action.pipe(ofType(adminAction.addlist),mergeMap((action)=>{
    return this.adminservice.addlist(action.listCategory).pipe(map((data)=>{
      if(data.success=='added succesfully'){
        this._snackbar.open(data.success, 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 4000,
            panelClass: ['my-snackbar']
        })
        this.route.navigate(['/admin/listCategory'])
        return adminAction.addlistsuccess()
      }else{
        Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            icon: 'error',
            timerProgressBar:false,
            timer: 5000,
            title: 'This name already exist'
          })
            return adminAction.error()
        }
    }))
}))
)

adgetlist=createEffect(()=>
this.action.pipe(ofType(adminAction.adgetlist),mergeMap(()=>{
    return this.adminservice.adgetlist().pipe(map((data)=>{
        console.log(data,'admineffect');
        
        return adminAction.adgetlistsuccess({adlist:data})
    }))
}))
)

liststatus=createEffect(()=>
this.action.pipe(ofType(adminAction.liststatus),mergeMap((action)=>{
    return this.adminservice.liststatus(action.listid).pipe(map(()=>{
        
        return adminAction.liststatussuccess()

    }))
}))
)
adminreportpost=createEffect(()=>
this.action.pipe(ofType(adminAction.getreportedpost),mergeMap(()=>{
    return this.adminservice.getreportpost().pipe(map((data)=>{
        console.log("getreppoooo");
        return adminAction.getreportedpostsuccess({reportpost:data})
    }))
}))
)

deletepost=createEffect(()=>
this.action.pipe(ofType(adminAction.deletepost),mergeMap((action)=>{
    return this.adminservice.deletepost(action.id).pipe(map(()=>{
        Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            icon: 'success',
            timerProgressBar:false,
            timer: 5000,
            title: 'deleted successfully'
          })
        return adminAction.deletepostsuccess()
    }))
}))
)
constructor(private action:Actions,private adminservice:AdminService,private _snackbar: MatSnackBar,private route:Router,private store:Store<appstateinterface>){}

}