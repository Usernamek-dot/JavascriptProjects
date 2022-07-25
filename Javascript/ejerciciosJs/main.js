console.log("Otro mensaje")
// create variable
var   text  = "Estoy imprimiendo la primera variable";
document.write(text);
//el salto de linea entre palabras es \n  y el de lineas de código es br
var  sentences=["\nEsto","\nes","\nun","\nvector"];
document.write("<br>"+sentences[0],sentences[1],sentences[2],sentences[3]);


//title
document.write("<br>"+"<h1>"+"Exercises");


//exercise 1

document.write("<br>"+"<h2>"+"1."+"</h2>");

vector=[5,0,2]

document.write(" el vector:");
document.write(vector[0],vector[1],vector[2]);

document.write( "<br>"+"<br>"+"el vector debe revertirse:")

vector[1] = vector[0];
vector[0] = vector[2];
vector[2] = vector[1];
vector[1] = vector[1]-vector[1];

document.write(vector[0],vector[1],vector[2]);



//exercise2

document.write("<br>"+"<h2>"+"2."+"</h2>");

vec=[5,2]

document.write("<br>"+" el vector :");
document.write(vec[0],vec[1]);

vec[1] = vec[1] + vec[0];
vec[0] = vec[1] - vec[0];
vec[1] = vec[1] - vec[0];

document.write("<br>"+"<br>"+"el vector se revierte:")
document.write(vec[0], vec[1]);


//exercise 3

document.write("<br>"+"<h2>"+"3."+"</h2>");

precio= 300
descuento=0.025

document.write("<br>"+"Costo del producto:");
document.write( precio);

valortotal= precio* descuento

document.write("<br>"+"<br>"+"El descuento:");
document.write(valortotal);


//exercise4




