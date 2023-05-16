import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as Action from './action'
import { mergeMap, map, of, take, exhaustMap } from 'rxjs'
import { UsersService } from "../../../coreModule/service/users.service";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { appstateinterface } from "src/app/appSatate.interface";
import { Store } from "@ngrx/store";
import Swal from 'sweetalert2'

@Injectable()
export class authEffects {

    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    Login = createEffect(() =>
        this.actoins$.pipe(ofType(Action.login), mergeMap((action: any) => {
            return this.userservice.loginData(action.formData).pipe(map((data) => {
                if (data.success) {
                    this._snackbar.open('Login successfully', 'close', {
                        horizontalPosition: this.horizontalPosition,
                        verticalPosition: this.verticalPosition,
                        duration: 4000,
                        panelClass: ['my-snackbar']
                    })
                    localStorage.setItem('token', data.token.token)
                    localStorage.setItem('tokenExp', data.token.exp)
                    this.route.navigate(['/'])
                    return Action.loginsuccess({signup:data.user})
                } else {
                    return Action.loginfailure({ error: data.failed })
                }
            }
            ))
        }))
    )

        socialogin=createEffect(()=>
        this.actoins$.pipe(ofType(Action.sociallogin),mergeMap((action)=>{
            return this.userservice.sociallogin(action.formData).pipe(map((data)=>{
                if (data.success) {
                    this._snackbar.open('Login successfully', 'close', {
                        horizontalPosition: this.horizontalPosition,
                        verticalPosition: this.verticalPosition,
                        duration: 4000,
                        panelClass: ['my-snackbar']
                    })
                    localStorage.setItem('token', data.token.token)
                    localStorage.setItem('tokenExp', data.token.exp)
                    this.route.navigate(['/'])
                    return Action.loginsuccess({signup:data.data})
                } else {
                    return Action.loginfailure({ error: data.failed })
                }
            }))
        }))
        )

    signup=createEffect(()=>
    this.actoins$.pipe(ofType(Action.signup),mergeMap((action)=>{
        return this.userservice.SignupData(action.formData).pipe(map((data)=>{
            if (data.success) {
                // this._snackbar.open('Login successfully', 'close', {
                //   horizontalPosition: this.horizontalPosition,
                //   verticalPosition: this.verticalPosition,
                //   duration: 6000,
                // })
                localStorage.setItem('token', data.token.token)
                localStorage.setItem('tokenExp', data.token.exp)
                this.route.navigate(['/otp'])
                this.store.dispatch(Action.generateotp())
                
                return Action.signupsuccess({data:data.data})
              } else {
                return Action.signupfailure({ error: data.failed })
              }
        }))
    })))

    socialsignup=createEffect(()=>
    this.actoins$.pipe(ofType(Action.socialsignup),mergeMap((action)=>{
        return this.userservice.socialsignup(action.token).pipe(map((data)=>{
            localStorage.setItem('token', data.token.token)
            localStorage.setItem('tokenExp', data.token.exp)
            this.route.navigate(['/'])
            return Action.socialsignupsuccess()
        }))
    }))
    )

    otp=createEffect(()=>
    this.actoins$.pipe(ofType(Action.otp),mergeMap((action)=>{
    return this.userservice.otp(action.value).pipe(map((data)=>{
        if(data.success){
            
            //   this._snackbar.open('Login successfully', 'close', {
            //       horizontalPosition: this.horizontalPosition,
            //       verticalPosition: this.verticalPosition,
            //       duration: 6000,
            //     })
            //     localStorage.setItem('token', data.token.token)
            //     localStorage.setItem('tokenExp', data.token.exp)
                this.route.navigate(['/'])
                
            return Action.otpsuccess({signup:data.data})
        }else{
            return Action.otpfailed({error:data.failed})
        }
    }))
   })))


   addpost=createEffect(()=>
   this.actoins$.pipe(ofType(Action.addpost),mergeMap((action)=>{
    return this.userservice.addpost(action.post).pipe(map((data)=>{        
       if(data.Error){
        console.log(data.Error);
        alert(data.Error)
        return Action.error()
       }else{
        this._snackbar.open('Post added', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 6000,
          })
        this.route.navigate(['/'])
        return Action.addpostsuccess()
       }
    }))
   })))

   gettag=createEffect(()=>
   this.actoins$.pipe(ofType(Action.gettag),mergeMap(()=>{
    return this.userservice.gettag().pipe(map((data)=>{
        return Action.gettagsuccess({tag:data})
    }))
   }))
   )
   gettagdetails=createEffect(()=>
   this.actoins$.pipe(ofType(Action.gettagdetails),mergeMap(()=>{
    return this.userservice.gettagdetails().pipe(map((data)=>{
        return Action.gettagdetailssuccess({tagdetails:data})
    }))
   }))
   )
   generateotp=createEffect(()=>
   this.actoins$.pipe(ofType(Action.generateotp),mergeMap(()=>{
    return this.userservice.generateotp().pipe(map(()=>{
        this.route.navigate(['/otp'])
        return Action.generateotpsuccess()
    }))
   }))
   )

   getusers=createEffect(()=>
   this.actoins$.pipe(ofType(Action.getuser),exhaustMap(()=>{
    return this.userservice.getuser().pipe(map((data)=>{
        return Action.getusersuccess({signup:data})
    }))
   }))
   )

 

   getpost=createEffect(()=>
   this.actoins$.pipe(ofType(Action.getpostdetails),exhaustMap(()=>{
    return this.userservice.getpost().pipe(map((data)=>{
        return Action.getpostdetailssuccess({postdetails:data})
    }))
   }))
   )
   getsingletag = createEffect(() =>
   this.actoins$.pipe(
     ofType(Action.getsingletag),
     exhaustMap((action) => {
       return this.userservice.getsingletag(action.id).pipe(
         map((data) => {
           return Action.getsingletagsuccess({ tag: data });
         })
       );
     })
   )
 );
 getsinglepost=createEffect(()=>
 this.actoins$.pipe(ofType(Action.getsinglepost),
    exhaustMap((action)=>{
    return this.userservice.getsinglepost(action.postid).pipe(
        map((data)=>{
            return Action.getsinglepostsuccess({singlepost:data})
        })
    )
 })
 )
 )
 
forgotpass=createEffect(()=>
this.actoins$.pipe(ofType(Action.forgotpass),
    mergeMap((action)=>{
        return this.userservice.forgotpass(action.email).pipe(
            map((data)=>{
                if(data.success){
                    this._snackbar.open(data.success, 'close', {
                        horizontalPosition:'center' ,
                        verticalPosition:'top' ,
                        panelClass: ['my-snackbar']
                    })
                    return Action.forgotpasssuccess()
                }else{
                    this._snackbar.open(data.error, 'close', {
                        horizontalPosition:'center' ,
                        verticalPosition:'top' ,
                        panelClass: ['my-snackbar']
                    })
                    return Action.error()
                }
            })
        )
    })
  )
)

resetpass=createEffect(()=>
this.actoins$.pipe(ofType(Action.resetpass),
    mergeMap((action)=>{
        return this.userservice.restpass(action.formData).pipe(
            map((data)=>{
                if(data.success){
                    this._snackbar.open(data.success, 'close', {
                        horizontalPosition:'center' ,
                        verticalPosition:'top',
                        duration:3000,
                        panelClass: ['my-snackbar']
                    })
                    setTimeout(() => {
                        this.route.navigate(['/login'])
                    }, 4000);
                    return Action.resetpasssuccess()
                }else{
                    return Action.loginfailure({error:data.failed})
                }
            })
        )
    })
)
)
comments=createEffect(()=>
this.actoins$.pipe(ofType(Action.comments),

mergeMap((action)=>{
    return this.userservice.comments(action.id).pipe(
        map((data)=>{
            return Action.commentssuccess({data:data})
        })
    )
})
)
)
addlike=createEffect(()=>
this.actoins$.pipe(ofType(Action.addlike),
    mergeMap((action)=>{
        return this.userservice.addlike(action.id,action.value).pipe(
            map(()=>{
                return Action.addlikesuccess()
            })
        )
    })
)
)
getliscategory=createEffect(()=>
this.actoins$.pipe(ofType(Action.getlistcategory),mergeMap(()=>{
    return this.userservice.getlistcategory().pipe(
        map((data)=>{
            return Action.getlistcategorysuccess({listcategory:data})
        })
    )
}))
)

addnewlist=createEffect(()=>
this.actoins$.pipe(ofType(Action.addnewlist),mergeMap((action)=>{
    return this.userservice.addnewlist(action.formdata,action.tag,action.location).pipe(
        map(()=>{
            this._snackbar.open('List added successfully', 'close', {
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                duration: 4000,
                panelClass: ['my-snackbar']
            })
            this.route.navigate(['/listing'])
            return Action.addnewlistsucces()
        })
    )
}))
)
getlist=createEffect(()=>
this.actoins$.pipe(ofType(Action.getlist),exhaustMap(()=>{
    return this.userservice.getlist().pipe(
        map((data)=>{
            return Action.getlistsuccess({list:data})
        })
    )
}))
)

tagpost=createEffect(()=>
this.actoins$.pipe(ofType(Action.tagpost),mergeMap((action)=>{
    return this.userservice.gettagpost(action.id).pipe(
        map((data)=>{
            return Action.tagpostsuccess({post:data})
        })
    )
}))
)

report=createEffect(()=>
this.actoins$.pipe(ofType(Action.report),mergeMap((action)=>{
    return this.userservice.report(action.id,action.formData).pipe(
        map((data)=>{
           if(data=='success'){
            Swal.fire({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                icon: 'success',
                timerProgressBar:false,
                timer: 5000,
                title: 'Report added successfully'
              })
            return Action.reportsucces()
           }else{
            return Action.error()
           }
        })
    )
}))
)

gettags=createEffect(()=>
this.actoins$.pipe(ofType(Action.gettags),mergeMap(()=>{
    return this.userservice.gettags().pipe(map((data)=>{
        return Action.gettagssuccess({tag:data})
    }))
}))
)

addreadlist=createEffect(()=>
this.actoins$.pipe(ofType(Action.addreadlist),mergeMap((action)=>{
    return this.userservice.addreadlist(action.id).pipe(map((data)=>{
        if(data=='success'){
            Swal.fire({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                icon: 'success',
                timerProgressBar:false,
                timer: 5000,
                title: 'This post added to reading list'
              })
              return Action.addreadlistsuccess()
           }else if(data=='alreadyadded'){
            Swal.fire({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                icon: 'warning',
                timerProgressBar:false,
                timer: 5000,
                title: 'This post already added to reading list'
              })
            return Action.addreadlistsuccess()
           }
           else{
            return Action.error()
           }
        
    }))
}))
)

getreadlist=createEffect(()=>
this.actoins$.pipe(ofType(Action.getreadlist),mergeMap(()=>{
    return this.userservice.getreadlist().pipe(map((data)=>{
        return Action.getreadlistsuccess({readlist:data})
    }))
}))
)

updateBio=createEffect(()=>
this.actoins$.pipe(ofType(Action.updateBio),mergeMap((data)=>{
    return this.userservice.updateBio(data.form).pipe(map((data)=>{
if(data.success=='updated suucesfully'){
    Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'success',
        timerProgressBar:false,
        timer: 5000,
        title: 'User bio updated successfully'
      })
    return Action.updateBiosuccess()
}else{
    return Action.error()
}
    }))
}))
)

userlist=createEffect(()=>
this.actoins$.pipe(ofType(Action.userlist),mergeMap(()=>{
    return this.userservice.userlist().pipe(map((data)=>{
        return Action.getlistsuccess({list:data})
    }))
}))
)

editlist=createEffect(()=>
this.actoins$.pipe(ofType(Action.editlist),mergeMap((action)=>{
    return this.userservice.editList(action.id).pipe(map((data)=>{
        return Action.editlistsuccess({list:data})
    }))
}))
)

getuserslist=createEffect(()=>
this.actoins$.pipe(ofType(Action.getusers),mergeMap(()=>{
    return this.userservice.getusers().pipe(map((users)=>{
        return Action.getuserslistsuccess({users:users})
    }))
}))
)

chatmessage=createEffect(()=>
this.actoins$.pipe(ofType(Action.chatmessege),mergeMap((action)=>{
    return this.userservice.chatmessage(action.id).pipe(map((chat)=>{
        return Action.chatmessegesuccess({chat:chat})
    }))
}))
)


getuserpost=createEffect(()=>
this.actoins$.pipe(ofType(Action.getuserpost),mergeMap(()=>{
    return this.userservice.getuserpost().pipe(map((post)=>{
        return Action.getuserpostsuccess({postdetails:post})
    }))
}))
)

changepass=createEffect(()=>
this.actoins$.pipe(ofType(Action.changepass),
    mergeMap((action)=>{
        return this.userservice.restpass(action.formData).pipe(
            map((data)=>{
                if(data.success){
                    this._snackbar.open(data.success, 'close', {
                        horizontalPosition:'center' ,
                        verticalPosition:'top',
                        duration:3000,
                        panelClass: ['my-snackbar']
                    })
                    setTimeout(() => {
                        this.route.navigate(['/dashboard'])
                    }, 4000);
                    return Action.changepasssuccess()
                }else{
                    return Action.error()
                }
            })
        )
    })
)
)
    constructor(private actoins$: Actions, private userservice: UsersService, private _snackbar: MatSnackBar, private route: Router,private store:Store<appstateinterface>) { }
}

