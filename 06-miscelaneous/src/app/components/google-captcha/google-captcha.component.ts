import { Component } from '@angular/core';

@Component({
  selector: 'app-google-captcha',
  templateUrl: './google-captcha.component.html',
  styleUrls: ['./google-captcha.component.css']
})
export class GoogleCaptchaComponent  {

  public googleSiteKey = '6Le4oXIUAAAAAO2nV3BatqriH6vXVmYdzSc_2Y4q';

  resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}`);
    }
}
