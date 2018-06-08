
// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};

const HOLA1;


// Cree una interfaz que sirva para validar el siguiente objeto

interface Heroe{
  nombre:string,
  artesMarciales: string[];
}

let batman:Heroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
let resultadoDoble = (a:number,b:number) => (a + b) * 2;
console.log("resultado ",resultadoDoble(6,7))

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  var mensaje:string;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
     //usar apostrofe mensaje = { nombre }+ " tiene el poder de: " + poder + " y un arma: " + arma;

  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo{
  public base:number = 0;
  public altura:number = 0;

  constructor(base:number, altura:number){
    this.base  = base;
    this.altura = altura;
  }

    calcularArea():number{
    return this.base * this.altura;
  }

}

let texto = `Hola Mundo`;
console.log("area rectangulo es "+texto+ new Rectangulo(4, 5).calcularArea());