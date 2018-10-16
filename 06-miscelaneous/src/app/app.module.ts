import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssForOneComponent } from './components/css-for-one/css-for-one.component';
import { ApllyNgClassComponent } from './components/aplly-ng-class/aplly-ng-class.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { ExampleNgSwitchComponent } from './components/example-ng-switch/example-ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GoogleCaptchaComponent } from './components/google-captcha/google-captcha.component';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssForOneComponent,
    ApllyNgClassComponent,
    ResaltadoDirective,
    ExampleNgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent,
    GoogleCaptchaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    RecaptchaModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
