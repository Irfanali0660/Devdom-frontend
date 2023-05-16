import { NgModule,NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRouterRoutingModule } from './user-router-routing.module';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { OtpComponent } from './otp/otp.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NewpostComponent } from './newpost/newpost.component';
import { EditorModule } from 'smart-webcomponents-angular/editor';
import {MaterialModule} from '../../../sharedModule/material/material.module';
import { Dataresolver } from './../resolver/resolver';
import { SocialLoginModule} from '@abacritt/angularx-social-login';
import { SingletagComponent } from './singletag/singletag.component';
import { TagsComponent } from './tags/tags.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment.development';
import { ListingComponent } from './listing/listing.component';
import { NewListComponent } from './new-list/new-list.component';
import { TagInputModule } from 'ngx-chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReadinglistComponent } from './readinglist/readinglist.component';
import { ListPipe } from '../pipes/list.pipe';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { UserpostComponent } from './userpost/userpost.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EditlistComponent } from './editlist/editlist.component';
import { ChatComponent } from './chat/chat.component';
import { SinglechatComponent } from './singlechat/singlechat.component';
import { DefaultchatbgComponent } from './defaultchatbg/defaultchatbg.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ChatUserPipe } from '../pipes/chat-user.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SinglelistingComponent } from './singlelisting/singlelisting.component';
// import { GoogleMapsModule } from '@angular/google-maps'
import { NgxHttpLoaderModule } from 'ngx-http-loader';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


const config: SocketIoConfig = {
	url: environment.socketUrl, // socket server url;
	options: {
		transports: ['websocket']
	}
}

@NgModule({
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    SlidebarComponent,
    OtpComponent,
    NewpostComponent,
    SingletagComponent,
    TagsComponent,
    SinglepostComponent,
    ForgotpasswordComponent,
    ResetpassComponent,
    ListingComponent,
    NewListComponent,
    ReadinglistComponent,
    ListPipe,
    UserDashbordComponent,
    UserpostComponent,
    UserlistComponent,
    EditlistComponent,
    ChatComponent,
    SinglechatComponent,
    DefaultchatbgComponent,
    ChatUserPipe,
    SinglelistingComponent,
    ChangepasswordComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UserRouterRoutingModule,
    EditorModule,
    MaterialModule,
    ReactiveFormsModule,
    SocialLoginModule,
    TagInputModule,
    SocketIoModule.forRoot(config),
    FontAwesomeModule,
    PickerModule,
    MatFormFieldModule,
    MatInputModule,
    NgxHttpLoaderModule.forRoot(),
  ],
  providers:[Dataresolver]
})
export class UserRouterModule { }
