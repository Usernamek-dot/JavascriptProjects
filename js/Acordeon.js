var documento;
documento = $(document);

documento.ready(iniciar);

function iniciar() {
    var elemento = $("#acordeon");
    elemento.accordion();

}