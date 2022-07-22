
(function(){
var funcion = function(){alert("Con este botón estoy trabajando el evento click en botones.");}
var botoncito = document.getElementById("botoncito");
botoncito.addEventListener("click",funcion);

var focus= function(){console.log("focus es un evento que funciona  cuando se da un click en  un input.");}
var input = document.getElementById("input");
input.addEventListener("focus",focus);

var remove = function(){console.log("Este mensaje no se ve porque estoy utilizando la funcion remove para remover eventos.");}
var funcion2 = function(){alert("Con este botón estoy practicando como remover un evento creado. Este mensaje indica que removí un evento que deberia aparecer en la consola pero no aparecerá porque yo estoy aqui...WAJAJAJA!");}
var boton = document.getElementById("boton");
boton.removeEventListener("click",remove);
boton.addEventListener("click",funcion2);

var opcion = function(e){console.log("este mensaje debe surgir para que el link redirrecionado no aparezca.");
e.preventDefault();}
var link = document.getElementById("link");
link.addEventListener("click",opcion);
}())
