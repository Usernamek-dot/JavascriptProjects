alert("El archivo js funciona");
				// Cambiar un elemento por otro con el método inner.HTML
var primerElemento = document.getElementById("uno");
primerElemento.innerHTML = "Este el nuevo texto al cual accedí a travez de un <b>nodo</b>";

var elemento = document.createElement("li");
var contenido = document.createTextNode("I like to program");
elemento.appendChild(contenido);
				// método "replaceChild" se reemplaza un elemento (elemento) por otro(segundoElemento)
var father= document.getElementsByTagName("li")[1].parentNode,
    segundoElemento = document.getElementsByTagName("li")[1];	
father.replaceChild(elemento,segundoElemento);
				//método "removeChild" se elimina un elemento
var father = document.getElementsByTagName("li")[2].parentNode,
    tercerElemento = document.getElementsByTagName("li")[2];
father.removeChild(tercerElemento);