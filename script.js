"use strict"

function saludo(nombre){
    nombre = "Cesar";
    return "Hola " + nombre;
}

console.log(saludo("Pepe"));


function cocinarIngrediente(ingrediente1,ingrediente2, ...masIngredientes){
    console.log(ingrediente1);
    console.log(ingrediente2);
    console.log("Mas Ingredientes ", masIngredientes);
}

cocinarIngrediente("Papa","Pollo","Pimienta","Tomate","Cebolla","Ajo","Lechuga");


var nombreUSR = document.getElementById("nombre");
nombreUSR.value = "";

nombreUSR.addEventListener("focus",function(){
    document.getElementById("ayudaNombre").textContent="Introducir un Nombre"
});

nombreUSR.addEventListener("blur",function(){
    document.getElementById("ayudaNombre").textContent = "";
});

document.getElementById("confirmacion").addEventListener("change",function(evento){
    console.warn("Enviar correo electronico de confirmacion" + evento.target.checked);
});

document.getElementById("conciertos").addEventListener("change",function(e){
    console.log("Conciertos: " + e.target.value);
});

var formulario = document.querySelector("form");

console.log("Numero de Campos: " + formulario.elements.length);
console.log(formulario.elements[0].name);
console.log(formulario.elements.clave.type);
console.log(formulario.elements[2].name);
console.log(formulario.elements.newsPromo.type);

function foo(){
    for(var i=1;i<=10;i++){
        console.log(i);
    }
    console.log(i+3);
}
