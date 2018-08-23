import { Injectable  } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../interfaces/mensaje.interface';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chats: Mensaje[] = [];
  public userLogged: any = {};
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  mensajesList: Mensaje[];
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    // para escuchar cualquier cambio en el estado de la autenticación
    this.afAuth.authState.subscribe(user => {
      console.log('estado usuario', user);
      if(!user){
        return;
      }
      this.userLogged.nombre = user.displayName;
      this.userLogged.uid = user.uid;
    });
  }

  login(provider: string) {
    if ( provider === "google" ){
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    else {
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  addItem(item: any) {
    this.userLogged = {};
    this.itemsCollection.add(item);
  }

  loadMessage(){
    this.itemsCollection = this.afs.collection<Mensaje>('mensajes', 
    ref => ref.orderBy('fecha', 'desc').limit(5)// note comko ordeno los mensajes y obtengo los ultimos 5
    );
    // acá nos subscribimos a los cambios de la colección
    return this.itemsCollection.valueChanges().pipe(map((msjs: Mensaje[])=> {
      // console.log('usando pipe con map',msjs)
      this.mensajesList = [];
      for (let msj of msjs){
        this.mensajesList.unshift( msj );
      }
    }));
  }


 addMessage( msj: string ) {
   // TODO faltaUID
    let mensaje : Mensaje = {
      nombre: this.userLogged.nombre,
      text: msj,
      fecha: new Date().getTime(),
      uid: this.userLogged.uid
    };
    return this.itemsCollection.add( mensaje );
 }


 

}
