import { NgModule, isDevMode,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './featureModule/user/pages/login/login.component';
import { SignupComponent } from './featureModule/user/pages/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './featureModule/user/pages/home/home.component';
import { DashboardComponent } from './featureModule/admin/pages/dashboard/dashboard.component';
import { UsersComponent } from './featureModule/admin/pages/users/users.component';
import { AdminloginComponent } from './featureModule/admin/pages/adminlogin/adminlogin.component';
import { SlidebarComponent } from './featureModule/admin/pages/slidebar/slidebar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 
import { reducer as reducerAuth} from './featureModule/user/store/reducer';
import { authEffects } from './featureModule/user/store/effect';
import { DragDropDirective } from './sharedModule/directives/drag-drop.directive';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { adminEffect } from './featureModule/admin/store/effect';
import { reducer as reducerAdmin } from './featureModule/admin/store/reducer';
import { ApiInterceptorService } from './coreModule/interceptor/api-interceptor.service';

import {MaterialModule} from './sharedModule/material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleSigninButtonDirective } from './sharedModule/directives/google-signin-button.directive';
import { environment } from 'src/environments/environment.development';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserPipe } from './featureModule/admin/pipes/user.pipe';
import { ErrorComponent } from './featureModule/error/404/error/error.component';
import { BackenderrorComponent } from './featureModule/error/500/backenderror/backenderror.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    UsersComponent,
    AdminloginComponent,
    SlidebarComponent,
    DragDropDirective,
    GoogleSigninButtonDirective,
    UserPipe,
    ErrorComponent,
    BackenderrorComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatSnackBarModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgxDropzoneModule,
    MaterialModule,
    MatSelectModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([authEffects,adminEffect]),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
     }),
     StoreModule.forFeature('authentication',reducerAuth),
     StoreModule.forFeature('adminstate',reducerAdmin)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.socialAuth.googleKey
            )
          },
        
        ],
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
