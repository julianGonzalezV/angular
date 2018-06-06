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
let name2:String = "Otro";

let person1 = {
  name2: "Naruto",
  fullName(){
    console.log(" Common function "+ this.name2 + " ->apellido "+ "Gonzalez");
  }
}

let person2 = {
  name2: "Boruto",
  fullName(){
    setTimeout( function() {
      console.log(this.name2 + " ->apellido "+ "Gonzalez")
    },1500);
  }
}

let person3 = {
  name2: "Sazuke",
  fullName(){
    setTimeout( ()=> console.log(" Arrow Function "+this.name2 + " ->apellido "+ "Gonzalez"),1500);
  }
}

person1.fullName();
person2.fullName();
person3.fullName();