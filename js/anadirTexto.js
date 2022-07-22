var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar() {
    var boton;
    boton = $("#btnLeer");
    boton.click(Leer);
    boton = $("#btnEscribir");
    boton.click(Escribir);
}

function Leer() {
    var elemento = $("p");
    elemento.css("color", "#00a8ff");
    alert(elemento.text());
}

function Escribir() {
    var elemento = $("p");
    elemento.css("color", "#9c88ff");
    elemento.append("<br> Textico despues <br>");
    elemento.prepend("<br> Textico antes<br>")

}