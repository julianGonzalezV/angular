import { Injectable } from '@angular/core';


@Injectable()
export class PetsService {

    private dataPets:Pet[] = [
        {
          name: "Sultan",
          bio: "Hola, soy divertido, cansón aveces ",
          img: "assets/images/dog1.jpg",
          age: "7 años",
          myFriend:"DC",  
          gender:"M"
        },
        {
          name: "Firulais",
          bio: "No me parezco a ese man con mi mismo nombre",
          img: "assets/images/dog2.jpg",
          age: "5 años",
          myFriend:"DC",  
          gender:"M"
        },
        {
          name: "Pepe",
          bio: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
          img: "assets/images/dog3.jpg",
          age: "5 años",
          myFriend: "Marvel",  
          gender:"M"
        },
        {
          name: "Hulk",
          bio: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
          img: "assets/images/cat1.jpg",
          age: "8 años",
          myFriend:"Marvel",  
          gender:"F"
        },
        {
          name: "Pericles",
          bio: "blablablablablablablablablablablablablablablabla",
          img: "assets/images/cat2.jpg",
          age: "7 años",
          myFriend: "DC",  
          gender:"M"
        },
        {
          name: "Odiseo",
          bio: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
          img: "assets/images/hourse1.jpg",
          age: "7 años",
          myFriend: "Marvel",  
          gender:"F"
        },
        {
          name: "Wolf fine",
          bio: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
          img: "assets/images/1.jpg",
          age: "7 años",
          myFriend: "Marvel",  
          gender:"F"
        }
      ];

    constructor() {
        console.log('servicio Pets');
    }

/*
retorna todos los pets que da el servicio, por ahora es un dummie
*/
  getPets() {
    return this.dataPets;
  }


  getPetByIdx(index:number){
    return this.dataPets[index];
  }

  searchPet(textValue:string):Pet[] {
    console.log('searchPet method');
    let array1=  Array.from(this.dataPets, (pet,index) =>{
      let petResult:Pet = {name: pet.name, bio: pet.bio, img: pet.img, age:pet.age, myFriend: pet.myFriend,   gender: pet.gender };
      if(pet.name.toLowerCase().indexOf(textValue.toLowerCase()) >= 0){
        petResult.index = index;      
      }
      return petResult;
    }).filter(x => x.name.toLowerCase().indexOf(textValue.toLowerCase()) >= 0 );
    
    
    console.log('searchPet', array1);
    //return petsArr;
   return array1;
  }

}


export interface Pet {
    name: string;
    bio: string;
    img: string;
    age: string;
    myFriend: string;
    gender: string;
    index?: number;
}
