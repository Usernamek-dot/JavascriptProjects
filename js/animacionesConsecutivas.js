var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar() {
    var elemento;
    elemento = $("button");
    elemento.click(animar);

}

function animar() {
    var div;
    div = $("div");
    // animacion consecutiva
    div.animate({ height: 300 }, "slow");
    div.animate({ width: 300 }, "fast");
    div.animate({ height: 100 }, "normal");
    div.animate({ width: 200 }, 1000);

    div.click(esconder);

}

function esconder() {
    var div;
    div = $("div");
    // callback
    div.hide(5000, function() { alert("Ya no me vess !"); });


}