import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: []
})
export class ProtectedComponent implements OnInit {

  profile: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    //si existe
    if (this.auth.userProfile) {
      //obtiene el perfil de mi usuario con queme logee, ejemplo 
      /*

{
  "sub": "google-oauth2|114310935440890740322",
  "given_name": "Julian",
  "family_name": "Gonzalez",
  "nickname": "j.andres2087",
  "name": "Julian Gonzalez",
  "picture": "https://lh4.googleusercontent.com/-SrntjKHiFuY/AAAAAAAAAAI/AAAAAAAALG8/71NqR8U3RI4/photo.jpg",
  "gender": "male",
  "locale": "es",
  "updated_at": "2018-07-03T19:05:40.306Z"
}
      */
      this.profile = this.auth.userProfile;
    } else {
      //sino ejecuta el callback para intentar cargarlo, por ende aparecería error
      //este es un proceso asíncrono
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
