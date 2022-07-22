alert("El archivo js funciona");
										/*Se crea variable "elemento", se le atribuye el 										método "document.createElement"para crear un nuevo 										elemento <li>*/
var elemento = document.createElement("li"),
										/*Se crea otra variable para el contenido del elemento 										<li>,con el método"document.createTextNode"*/
contenido = document.createTextNode("Este es el contenido del PRIMER nodo");
										/*para agregar en  el elemento <li>(representado por 										la var "elemento") el contenido(representado por la 										var -contenido-)se utiliza el método "appendChild"*/
elemento.appendChild(contenido);
										/*Esta linea de código es para mostrar en el cuerpo										(body) el resultado*/
document.body.appendChild(elemento);



										/*Se realiza otro algoritmo con el mismo esquema del 											anterior*/
var elemento2 = document.createElement("li"),
    contenido2 = document.createTextNode("Este es el contenido del SEGUNDO nodo");
elemento2.appendChild(contenido2);
										/*Se crea la var "father" para acceder al elemento 											padre(<ol>) con el método "parentNode". la manera en 											la que se accede al elemento "<li> y <ol>" por este 										método(getElementsByTagName) es atravez de un arreglo, 										por esto se elige la posición en que se quiere que 										aparesca el elemento ([0])*/
var father= document.getElementsByTagName("li")[0].parentNode;

father.appendChild(elemento2);




										/*Se crea otro algoritmo con el método 										"insertBefore"(ultima linea)para que el elemento se 										agrege en la posición dada por la var"elementli1" que 										indica que  el elemento("elemento3") se posicionará 										antes de el primer "<li>"*/
var elemento3 = document.createElement("li"),
    contenido3 = document.createTextNode("Este es el TERCER nodo");
elemento3.appendChild(contenido3);
var elementol = document.getElementsByTagName("li")[0].parentNode,
    elementli1     = document.getElementsByTagName("li")[0];
father.insertBefore(elemento3, elementli1);

