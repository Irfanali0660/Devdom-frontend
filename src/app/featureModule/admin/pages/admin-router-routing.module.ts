import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AdminAuthGuard } from '../../../coreModule/auth-service/admin-auth.guard';
import { TagsComponent } from './tags/tags.component';
import { AddtagsComponent } from './addtags/addtags.component';
import { EdittagsComponent } from './edittags/edittags.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddListCategoryComponent } from './add-list-category/add-list-category.component';
import { ReportpostComponent } from './reportpost/reportpost.component';

const routes: Routes = [
  {path:'',component:SlidebarComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'users',component:UsersComponent},
    {path:'tags',component:TagsComponent},
    {path:'tags/addtag',component:AddtagsComponent},  
    {path:'tags/edittag/:id',component:EdittagsComponent}  ,
    {path:'listCategory',component:ListCategoryComponent}  ,
    {path:'add-listCategory',component:AddListCategoryComponent},
    {path:'reportedpost',component:ReportpostComponent}  

   
  ],canActivate: [AdminAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouterRoutingModule { }
