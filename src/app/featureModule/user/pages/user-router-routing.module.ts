import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { OtpComponent } from './otp/otp.component';
import { NewpostComponent } from './newpost/newpost.component';
import { Dataresolver } from './../resolver/resolver'
import { UserauthguardGuard } from 'src/app/coreModule/auth-service/userauthguard.guard';
import { SingletagComponent } from './singletag/singletag.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { ListingComponent } from './listing/listing.component';
import { NewListComponent } from './new-list/new-list.component';
import { ListResolver } from '../resolver/list.resolver';
import { TagsComponent } from './tags/tags.component';
import { ReadinglistComponent } from './readinglist/readinglist.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { UserpostComponent } from './userpost/userpost.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EditlistComponent } from './editlist/editlist.component';
import { ChatComponent } from './chat/chat.component';
import { SinglechatComponent } from './singlechat/singlechat.component';
import { DefaultchatbgComponent } from './defaultchatbg/defaultchatbg.component';
import { BlockuserGuard } from 'src/app/coreModule/auth-service/block/blockuser.guard';
import { SinglelistingComponent } from './singlelisting/singlelisting.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'otp',component:OtpComponent},
  
  {path:'',component:SlidebarComponent,children:[
    {path:'',component:HomeComponent},
    {path:'singletag/:id',component:SingletagComponent},
    {path:'tags',component:TagsComponent},
    {path:'readinglist',component:ReadinglistComponent},
    {path:'dashboard',component:UserDashbordComponent,canActivate: [UserauthguardGuard,BlockuserGuard]},
    {path:'userpost',component:UserpostComponent,canActivate: [UserauthguardGuard,BlockuserGuard]},
    {path:'userlist',component:UserlistComponent,canActivate: [UserauthguardGuard,BlockuserGuard]},  
    {path:'editlist/:id',component:EditlistComponent,resolve:{
      data:ListResolver},canActivate: [UserauthguardGuard,BlockuserGuard]},
    ]},
    {path:'chat',component:ChatComponent,children:[
      {path:'',component:DefaultchatbgComponent},      
      {path:':id/:userid',component:SinglechatComponent},
    ],canActivate: [UserauthguardGuard,BlockuserGuard]},  


  {path:'singlepost/:id',component:SinglepostComponent},
  {path:"newpost",component:NewpostComponent,
resolve:{
  data:Dataresolver
},canActivate: [UserauthguardGuard,BlockuserGuard]},

{path:'forgotpass',component:ForgotpasswordComponent},
{path:'resetpass/:id',component:ResetpassComponent},  
{path:'listing',component:ListingComponent},
{path:'new-list',component:NewListComponent,resolve:{
  data:ListResolver
},canActivate: [UserauthguardGuard,BlockuserGuard]},
{path:'listing/:id',component:SinglelistingComponent},
{path:'changepass/:id',component:ChangepasswordComponent,canActivate:[UserauthguardGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouterRoutingModule { }
