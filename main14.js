alert("el código js no funciona");
							//Creando Nodos
				//Se crea un elemento
var elemento = document.createElement("h2");
				//Se crea un nodo
var contenido = document.createTextNode("Utilizando Nodos en el DOM");
				//Se añade el nodo al elemento
element.appendChild(contenido);
				//Se otorga atributos al nodo
element.setAttribute("align","center");
				//Se agrega elemento al documento por medio del Id <sub>
document.getElementById("sub").appendChild(elemento);
/*document.body.appendChild(elemento);*/
