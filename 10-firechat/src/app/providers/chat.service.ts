import { Injectable  } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chats: any[] = [];
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
   
  }
  addItem(item: any) {
    this.itemsCollection.add(item);
  }

  loadMessage(){
    this.itemsCollection = this.afs.collection<any>('mensajes');
    //acá nos subscribimos a los cambios de la colección
    return this.itemsCollection.valueChanges();
  }
}
