
function hello1(name:any){
  console.log("hola " + name);
};


var gokuObject = {
  name: "Vegeta"
};

hello1(gokuObject);//esto genera un [object Object] en el console, para eso entonces aprovechemos ts (typescript)


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function hello2(name:String){
  console.log("hola 2 " + name);
}
hello2(gokuObject.name);



//:::::::::::::::::::::::::Arrow functions:::::::::::::::::::::::::::::::::::::::::::
let name2 = "Otro";


let person1 = {
  name2: "Naruto",
  fullName(){
    console.log(" Common function "+ this.name2 + " ->apellido "+ "Gonzalez");
  }
}

//Note como acá no es posible el acceso a nombre o si fuese posible iría por la global name2 en la línea 23
// o tendría que colocarse como name2 sin this
/*
let person2 = {
  name2: "Boruto",
  fullName(){

    setTimeout( function() {
      console.log("person2 -> "+ this.name2);

    },1500);
  }
}
*/

let person3 = {
  name2: "Sazuke",
  fullName(){
    setTimeout( ()=> console.log(" Arrow Function "+this.name2 + " ->apellido "+ "Gonzalez"),1500);
  }
}

person1.fullName();
//error: 
//person2.fullName();
person3.fullName();

console.log("//:::::::::::::::::::::::::Destructuring:::::::::::::::::::::::::::::::::::::::::::")
console.log("//::::1) :Objects::::::::---")
let cow = {
  cowname: "TORO",
  id: "1232",
  brand: "cebu"
}

//lo que haciamos antes
let cow_name = cow.cowname;
let cow_id = cow.id;
let cow_brand = cow.brand; 
console.log(cow_name, cow_id, cow_brand);


// con destructuring: Se debe llamar igual los campos al del objeto
//V1: let {cowname, id, brand} = cow;

//Note como el orden no afecta!, desmomenta el siguiente
//V1.1
let {brand, cowname, id} = cow;

//V1.2, si coloca : después del nombre en destructuring signica que es un alias y no EL TIPO como quizás
//usted pretenda
//let {brand:string, cowname, id} = cow;
//tendria que llamrlo en el console como string (nombre no tipo! )
//console.log(cowname, id, string);

console.log(cowname, id, brand);



console.log("//::::1) :Arrays::::::::---");
//con el string[] estamos diciendo que todos los elementos van a ser string
let boruto_names:string[] = ["Boruto", "Sarada", "toneri"]
//acá es destructuring
let [val1, val2, val3, val4] = boruto_names;
//Note como val4 imprime undefined, pués es cierto no hay un cuarto elemento en el array
console.log(val1, val2, val3, val4);

//que pasa si solo deseo el 3cer valor?
let [, , valTres] = boruto_names;
console.log(valTres);

console.log("//:::::::::::::::::::::::::Promesas ES6:::::::::::::::::::::::::::::::::::::::::::")

//Son propias de es6 (por eso creo que en el tsconfig.json el targe debe apuntar al es2016) que le hacía falta al js
//resolver es lo que se ejecutario si la promesa se cumple y sino 
//se ejecuta el reject (conenciones pero se pueden llama como se deseee)

/*
Promise recibe una funcion que recibe 2 parámetros que también son funciones a 
ejecutar cuando se ejecuta bien o mal la promesa
*/
let prom1 = new Promise( function( resolve, reject ){
  setTimeout( ()=>{
    console.log("Promesa 1 terminanda");

    //si termina bien
    resolve();

    //Sí termina mal entonces ejecuta el reject
    //reject();


  }, 1500 )

})


prom1.then( function(){
  console.log("Se termina bien ")
}, function(){
  console.error("Se termina MAL :s ) ")
})



console.log("//:::::::::::::::::::::::::Interfaces TS:::::::::::::::::::::::::::::::::::::::::::")

//Problema:

function task1(worker:WorkerI){
  console.log("Taks1 worker --> "+worker.name);
}

//v1
let actorBoruto:WorkerI = {
  name: "Shikadai",
  role: "ninja de la hoja"
};

//Que pasaría sí el atributo name se llamara nombre
//Saldría Taks1 worker --> undefined..note como en la funcion task1 no se generó error, pues le dijimos que eny y además
//asumimos que tendría el atributo name
let actor2Boruto:WorkerI = {
  name: "Sakura",
  role: "ninja de la hoja"
};
task1(actorBoruto);
task1(actor2Boruto);

//Cómo solucionar el problema anterior?
//R/ con interface!!, is a way od create new types 
//ombrar en camel case
interface WorkerI{
  name:string,
  role:string
}

//y si tenía una función task2 solo es cambiarle el tipo
function task2(worker:WorkerI){
  console.log("Taks2::: worker --> "+worker.name);
}



console.log("//:::::::::::::::::::::::::Orientado a Objetos Intro:::::::::::::::::::::::::::::::::::::::::::")

class Pet {
  name:string = "";
  breed: String = "";
  isAdopted:boolean = false;
  age:number = 0;

 

  constructor(name:string, breed:string){
    this.name = name;
    this.breed = breed;
  }

  
}

let garfield:Pet = new Pet("garfield", "fatCat");
console.log("Pet es ---> "+garfield.breed);


console.log("//:::::::::::::::::::::::::Concepto de modulos:::::::::::::::::::::::::::::::::::::::::::")
/*
Permiten segmentar el proyecto(nuestro código) en varios archivos
Palabras reservadas:
1) export (anes de class) : Para decir que se va a poder exportar, lo que permute que se realice import en otras clases

Se pueden haces varios imports en nuestra clase o también si se nos llena mucho y queremos que sea en una sola línea
entonces se crea un index.ts que tenga todos los imports yt así ya podemos importar en una sola línea :)
import{Class1, Class2} from "./classes/index"
*/


console.log("//:::::::::::::::::::::::::Decorators:::::::::::::::::::::::::::::::::::::::::::")


function consola( constructor:Function ){
  console.log(constructor)
};

@consola
class Person{ 

  //note el public antes el atributo esto es lo mismo que escribir elatributo por fuera como en Pet (ver arriba)
  constructor(public name:string){


  }
  
}

