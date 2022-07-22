(function(){
var formulario = document.getElementsByName("formulario")[0],
    elementos = formulario.elements,
    boton = document.getElementById("boton");
var validarNombre= function(e){
    if(formulario.nombre.value == 0){
    alert("Complete el campo nombre.");
    e.preventDefault();
    }
};
var validarRadio = function(e){
    if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){
     }else{ 
	alert("Complete el campo del sexo.");
	e.preventDefault();
	} 
};
var validarCheckbox = function(e){
    if(formulario.terminos.checked == false){
     alert("Acepte los términos y condiciones.");
     e.preventDefault();
    }
};
var validar =  function(e){
	validarNombre(e);
        validarRadio(e);
	validarCheckbox(e);
};
formulario.addEventListener("submit",validar);
}())