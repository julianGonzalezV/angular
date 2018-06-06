"use strict";
function hello1(name) {
    console.log("hola " + name);
}
;
var gokuObject = {
    name: "Vegeta"
};
hello1(gokuObject); //esto genera un [object Object] en el console, para eso entonces aprovechemos ts (typescript)
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function hello2(name) {
    console.log("hola 2 " + name);
}
hello2(gokuObject.name);
//:::::::::::::::::::::::::Arrow functions:::::::::::::::::::::::::::::::::::::::::::
var name2 = "Otro";
var person1 = {
    name2: "Naruto",
    fullName: function () {
        console.log(" Common function " + this.name2 + " ->apellido " + "Gonzalez");
    }
};
var person2 = {
    name2: "Boruto",
    fullName: function () {
        setTimeout(function () {
            console.log(name2 + " ->apellido " + "Gonzalez");
        }, 1500);
    }
};
var person3 = {
    name2: "Sazuke",
    fullName: function () {
        setTimeout(function () { return console.log(" Arrow Function " + name2 + " ->apellido " + "Gonzalez"); }, 1500);
    }
};
person1.fullName();
person2.fullName();
person3.fullName();
