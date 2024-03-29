import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './featureModule/admin/pages/adminlogin/adminlogin.component';
import { ErrorComponent } from './featureModule/error/404/error/error.component';



const routes: Routes = [
  {path:'admin',loadChildren:()=>import('./featureModule/admin/pages/admin-router.module').then(m=>m.AdminRouterModule)},
  {path:'',loadChildren:()=>import('./featureModule/user/pages/user-router.module').then(m=>m.UserRouterModule)},
  {path:'adminlogin',component:AdminloginComponent},
  { path: '**', component: ErrorComponent }
];

export function errorHandler(router: Router) {
  return (error: any) => {
    router.navigate(['/error']); // navigate to error page
  };
}

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: [
    { provide: 'errorHandler', useFactory: errorHandler, deps: [Router] }
  ]
})
export class AppRoutingModule { }
