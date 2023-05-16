import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login'
import { take } from 'rxjs';
declare var google:any;
@Directive({
  selector: 'appGoogleSigninButton'
})
export class GoogleSigninButtonDirective {

  @Input('selectable') option: boolean | undefined;
  constructor(private el: ElementRef, private socialAuthService: SocialAuthService) { }
  @Input() buttonText: string = 'Sign in with Google'; // Set the default text of the button
  @Input() buttonTheme: string = 'filled_blue'; // Set the default theme of the button

  ngOnInit() {
    if (!this.option) return;
    this.socialAuthService.initState.pipe(take(1)).subscribe(() => {
        google.accounts.id.renderButton(this.el.nativeElement, {
            type: 'standard',
            size: 'large',
            text: this.buttonText, // Use the buttonText input to set the content of the button
            theme: this.buttonTheme, // Use the buttonTheme input to set the theme of the button
            
        });
    });
}

}
