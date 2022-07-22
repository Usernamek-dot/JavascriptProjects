var doc;
doc = $(document);
doc.ready(iniciar);

function iniciar() {
    boton = $("#E");
    boton.click(acordeE);
    boton = $("#F");
    boton.click(acordeF);
    boton = $("#G");
    boton.click(acordeG);

}

function acordeE() {
    var elemento = $("#sexta");
    elemento.mouseover(s6E);
    elemento.mouseout(s6no);
    var elemento = $("#quinta");
    elemento.mouseover(s5B);
    elemento.mouseout(s5no);
    var elemento = $("#cuarta");
    elemento.mouseover(s4E);
    elemento.mouseout(s4no);
    var elemento = $("#tercera");
    elemento.mouseover(s3Gs);
    elemento.mouseout(s3no);
    var elemento = $("#segunda");
    elemento.mouseover(s2B);
    elemento.mouseout(s2no);
    var elemento = $("#primera");
    elemento.mouseover(s1E);
    elemento.mouseout(s1no);
}


// cuerda 6
function s6E() {
    var elemento = $("#sonidoSexta");
    elemento.html('<audio src="sonido/6E.ogg"  autoplay="autoplay"></audio>');
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaSinPulsar.jpg)");
}

function s6no() {
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaPulsada.jpg)");
}

// cuerda 5
function s5B() {
    var elemento = $("#sonidoQuinta");
    elemento.html('<audio src="sonido/5B.ogg"  autoplay="autoplay"></audio>');
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaSinPulsar.jpg)");
}

function s5no() {
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaPulsada.jpg)");
}

// cuerda 4
function s4E() {
    var elemento = $("#sonidoCuarta");
    elemento.html('<audio src="sonido/4E.ogg"  autoplay="autoplay"></audio>');
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaSinPulsar.jpg)");
}

function s4no() {
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaPulsada.jpg)");
}

// cuerda 3
function s3Gs() {
    var elemento = $("#sonidoTercera");
    elemento.html('<audio src="sonido/3Gs.ogg"  autoplay="autoplay"></audio>');
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaSinPulsar.jpg)");
}

function s3no() {
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaPulsada.jpg)");
}

// cuerda 2
function s2B() {
    var elemento = $("#sonidoSegunda");
    elemento.html('<audio src="sonido/2B.ogg"  autoplay="autoplay"></audio>');
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaSinPulsar.jpg)");
}

function s2no() {
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaPulsada.jpg)");
}

// cuerda 1
function s1E() {
    var elemento = $("#sonidoPrima");
    elemento.html('<audio src="sonido/1E.ogg"  autoplay="autoplay"></audio>');
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaSinPulsar.jpg)");
}

function s1no() {
    var elemento = $(this);
    elemento.css("background", "url(img/cuerdaPulsada.jpg)");
}