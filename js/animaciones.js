var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar() {
    var boton = $("#mostrar");
    boton.click(muestrame);
    var boton = $("#ocultar");
    boton.click(ocultame);

}

function muestrame() {
    var div;
    div = $(".divUno");
    // cambiar tamaño
    div.show("fast");
    div = $(".divDos");
    // cambiar transparencia
    div.fadeIn("slow");
    //el mismo boton hace las dos funciones
    div = $(".divTres");
    div.toggle("slow");
    //slide
    div = $(".divCuatro");
    div.slideToggle("slow");

}

function ocultame() {
    var div;
    div = $(".divUno");
    // cambiar tamaño
    div.hide("slow");
    div = $(".divDos");
    // cambiar transparencia
    div.fadeOut("slow");


}