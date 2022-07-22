alert("el js funciona");
						//crear un nuevo div
var elemento = document.createElement("div");
						// Se accede al elemento padre (section)
var father = document.getElementById("container");
						//se accede a una posición de referencia por medio de un arreglo
var referencia = document.getElementsByTagName("div")[1];
						//Se agrega un atributo de color al div
elemento.setAttribute("class","red");
						//Se utiliza la referencia para insertar el div dentro del section
father.insertBefore(elemento,referencia);