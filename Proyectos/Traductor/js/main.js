var doc;
doc = $(document);
doc.ready(iniciar);

function iniciar() {
    var elemento = $("#input");
    elemento.focus(enfocar);
    elemento.blur(desenfocar);
    elemento.keypress(AutoCompletadotecla);

}

function enfocar() {
    var elemento = $("#input");
    // attr = atributo.. vaciando el campo
    elemento.attr("value", "");
}

function desenfocar() {
    var elemento = $("#input");

    elemento.attr("value", "Introduce una palabra"); // attr = atributo.. 

}

function AutoCompletadotecla() {
    //animacion que oculta resultado anterior
    $(".resultado").hide();
    // llamar metodo ajax
    $.ajax({
        type: 'POST',
        url: "../php/busca.php",
        data: $("form").serialize(), //datos que seran enviados
        //si funciona :
        success: function(data) {
            //animacion muestra lentamente el resultado
            $(".resultado").fadeIn("slow");
            $(".resultado").html(data);
        }
    })
}