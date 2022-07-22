var doc;
doc = $(document);
doc.ready(iniciar);

function iniciar() {
    var elemento = $(".login");
    // formulario dinamico
    elemento.dialog({ height: 400, width: 400 });
    var elemento = $("#boton");
    elemento.button();
    elemento.click(noEntras);
}

function noEntras() {
    var elemento = $(".login");
    elemento.effect("shake");
}