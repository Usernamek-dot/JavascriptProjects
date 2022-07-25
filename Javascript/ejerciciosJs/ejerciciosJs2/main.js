								//Ejercicio1
					
					//1,3,5
var palabra = ["Palabra"];
console.log(palabra);
for(var i=0; i<palabra.length; i++){
document.write("La palabra nueva es:\n"+palabra[i][1],palabra[i][3],palabra[i][5]);
}
					
								//Ejercicio2

var a = [1,2,3,4,5];
var b = [6,7,8,9,11,12,13,14];
var sumaVector1 =0;
var sumaVector2 =0;

for( var i=0; i<a.length;i++){
	sumaVector1 += a[i];
}
for(var i=0; i<b.length;i++){
	sumaVector2 += b[i];
}
var sumaTotal = sumaVector1 + sumaVector2;
document.write(" <hr> <br> la suma es:"+sumaTotal+"<hr>");
								//Ejercicio3

var mercaderista = [
["Juan", " 300.000", "Seguridad Social: 1", "Ventas: 1.500.000","4.65%"],
["Maria", "Salario: 200.000", "Seguridad Social: 2", "Ventas: 2.500.032","Comision: 4.20%"],
["Ostin", "Salario: 400.000", "Seguridad Social: 3", "Ventas: 22.000.000","Comision: 6.50%"],
["Marco", "Salario: 500.000", "Seguridad Social: 6", "Ventas: 490.000.000","Comision: 6.50%"],
["Perla", "Salario: 230.000", "Seguridad Social: 5", "Ventas: 550.000","Comision: 3.25%"],
["Soly", "Salario: 600.000", "Seguridad Social: 6", "Ventas: 120.000","Comision: 3.25%"]
];

for( var i=0; i<mercaderista.length;i++){
	document.write("<br>"+ "<h4>"+mercaderista[i][0]+"</h4>");
	for(var j=0; j<mercaderista[i].length;j++){
		document.write(mercaderista[i][j]+"<br>");
	}
		for(var k=1; k<mercaderista.length;k++){
		salario= mercaderista[k][1];
		comision=mercaderista[i][4];
		salarioDevengado = salario*comision;
			
			
				document.write(salarioDevengado);
		}
				
}

	








