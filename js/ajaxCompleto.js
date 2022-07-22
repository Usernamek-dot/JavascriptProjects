var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar() {
    var elemento;
    elemento = $("#enviar");
    elemento.click(enviar);
}

function enviar() {
    var numero;
    // valor de input del año
    numero = $("#anio").attr("value");
    // metodo ajax  envio de datos
    $.ajax({

        async: true, //activar la transferencia asincronica
        type: "POST", //definicion del tipo de transaccion de datos
        dataType: "html", //tipo de datos que se enviarán
        contentType: "application/x-www-form-unlencoded", //tipo de contenido
        url: "ajaxCompleto.php", //archivo que procesará el ajax
        data: "anio=" + numero, //datos que se enviarán
        beforeSend: inicioEnvio, //funcion para antes del envio
        success: llegada, //funcion si se envió exitosamente
        timeout: 4000, //tiempo de ejecución
        error: problemas //funcion si no se envió
    });
    return false;
}

function inicioEnvio() {
    var div;
    div = $("div");
    div.html("Cargando...");
}

function llegada(datos) {
    // escribir en el div los datos
    $("div").text(datos);
}

function problemas() {
    $("div").text("Problemas en el servidor");
}