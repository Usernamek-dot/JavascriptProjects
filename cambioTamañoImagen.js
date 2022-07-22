alert("jajaj");

var zoom = function(){
 var thumb = document.getElementById("thumb");
 				//thumb.setAttribute("class","thumb grande");
//se hace un condicional que diga : si la variable thumb = thumb entonces se agrega la clase thumb grande, si no se deja solo thumb
if(thumb.className == "thumb"){
   thumb.className = "thumb grande";
}else{
   thumb.className = "thumb";
}
}
