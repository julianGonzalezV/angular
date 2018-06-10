import { Injectable } from '@angular/core';


@Injectable()
export class PetsService {

    private dataPets:Pet[] = [
        {
          name: "Sultan",
          bio: "Hola, soy divertido, cansón aveces ",
          img: "assets/images/dog1.jpg",
          age: "7 años",
          myFriend:"DC"
        },
        {
          name: "Firulais",
          bio: "No me parezco a ese man con mi mismo nombre",
          img: "assets/images/dog2.jpg",
          age: "5 años",
          myFriend:"DC"
        },
        {
          name: "Pepe",
          bio: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
          img: "assets/images/dog3.jpg",
          age: "5 años",
          myFriend: "Marvel"
        },
        {
          name: "Hulk",
          bio: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
          img: "assets/images/cat1.jpg",
          age: "8 años",
          myFriend:"Marvel"
        },
        {
          name: "Pericles",
          bio: "blablablablablablablablablablablablablablablabla",
          img: "assets/images/cat2.jpg",
          age: "7 años",
          myFriend: "DC"
        },
        {
          name: "Odiseo",
          bio: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
          img: "assets/images/hourse1.jpg",
          age: "7 años",
          myFriend: "Marvel"
        },
        {
          name: "Wolf fine",
          bio: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
          img: "assets/images/1.jpg",
          age: "7 años",
          myFriend: "Marvel"
        }
      ];

    constructor() {
        console.log('servicio Pets');
    }


  getPets() {
    return this.dataPets;
  }
}


export interface Pet {
    name: string;
    bio: string;
    img: string;
    age: string;
    myFriend: string;
}
