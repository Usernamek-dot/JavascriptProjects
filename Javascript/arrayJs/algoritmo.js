/* Enunciado: Hacer matriz , tiene email,password,link
recuperar dos datos de una caja de texto correo pasword validar con una matriz y que imprima el 3 resultado de una matriz.
if (si correo es igual a la posición que se busca y el password es igual a la posicion tal que imprima tal. */


var user=[ 	["Wendy","WendyPeter@hotmail.com","123","google.com"],

		["Sol","SolSolesito@hotmail.com","2c4","google.com"],

		["Cristel","Cristel@hotmail.com","c34","google.com"]
	     ];

var validarGmail = document.elementById("gmail");
var validarPassword = document.elementById("password");


for(var i=0 ; i < usuarios.length; i++){

	document.write(usuarios[i]);
	if( valildarGmail == "gmail" || password == "validarPassword" ){
	document.write("El usuario existe en la página.");
	} else{
	document.write("El usuario <b>no existe</b> en la página");
	  }

}