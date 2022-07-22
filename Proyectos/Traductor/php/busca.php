<?php
include "../includes/conexion.php";
$palabra = $_POST["palabra"];
// busqueda exacta

$consulta = "SELECT * FROM inglesfrances WHERE Ingles ='".$palabra."'   ";
$resultado = mysqli_query($conexion,$consulta);


while($fila = mysqli_fetch_array($resultado)){
    echo '    <div class="resultado ">
                    <div class="izquierda ">
                        '.$fila['Ingles'].'
                        <img src="../img/Ingles.jfif " >
                    </div>
                    <div class="derecha ">
                    '.$fila['Frances'].'
                        <img src="../img/Frances.jfif " >
                    </div>
                </div>
                ';
}

//busqueda aproximada
$consulta = "SELECT * FROM inglesfrances WHERE Ingles LIKE'%".$palabra."%'";
$resultado = mysqli_query($conexion,$consulta);


while($fila = mysqli_fetch_array($resultado)){
    echo '    <div class="resultado ">
    <div class="izquierda ">
        '.$fila['Ingles'].'
        <img src="../img/Ingles.jfif " alt=" ">
    </div>
    <div class="derecha ">
    '.$fila['Frances'].'
        <img src="../img/Frances.jfif " alt=" ">
    </div>
</div>
';
}


include "../includes/desconexion.php";
