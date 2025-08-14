/*
var MX_imagen = document.createElement("img");
    MX_imagen.setAttribute("width","100px");
    MX_imagen.setAttribute("src","images/novatecfs_mezcladores_estaticos.jpg");
    document.getElementById("resultadoImagen").appendChild(MX_imagen);
*/


function calculator()
{
    var a=document.getElementById("tipo_sistema").value;
    var b=document.getElementById("TipoDeMontaje").value;
    var c = document.getElementById("NumeroDeBombas").value;
    var d = document.getElementById("MarcaDeBomba").value;
    var e = document.getElementById("ModeloDeBomba").value;
    var f = document.getElementById("NumeroDeTanques").value;
    var g = document.getElementById("MaterialDelTanque").value;
    var h = document.getElementById("CapacidadDelTanque").value;
    var i = document.getElementById("TipoTablero").value;
    var j = document.getElementById("Clasificacion").value;
    var k = document.getElementById("CapacidadDelTanque").value;
    var l = document.getElementById("PuntosDeClasificacion").value;

console.log("a:"+a +"Tipo de dato  "+typeof a);
console.log("b:"+b +"Tipo de dato  "+typeof b);
console.log("c:"+c +"Tipo de dato  "+typeof c);
console.log("d:"+d +"Tipo de dato  "+typeof d);
console.log("e:"+e +"Tipo de dato  "+typeof e);
console.log("f:"+f +"Tipo de dato  "+typeof f);
console.log("g:"+g +"Tipo de dato  "+typeof g);
    



model= a+b+c+d+e+f+g+h+i+j+k+l;
console.log("Modelo :"+model +"Tipo de dato  "+typeof model);
document.getElementById("MODELO").textContent=model;

model2= a+b+"-"+c+d+e+"-"+f+g+h+"-"+i+j+k+"/"+l;
console.log("Modelo 2:"+model2 +"Tipo de dato  "+typeof model2);
document.getElementById("MODELO2").textContent=model2;


return model;




}




/*
function modeloMX() {

    let diametro=document.getElementById("diametro").value
    diametro= Number(diametro);
    console.log("Diametro DENTRO DE MODELO: "+diametro+" Tipo de dato: " +typeof diametro);
    

    
    let a="0";
   
    switch (diametro) {
        case 0.5:   a= "050"; break;
        case 0.75:  a= "075"; break;
        case 1.0:   a= "100"; break;
        case 1.5:   a= "150"; break;
        case 2.0:   a= "200"; break;
        case 3.0:   a= "300"; break;
        case 4.0:  a= "400"; break;
        case 6.0:  a= "600"; break;
        case 8.0:  a= "800"; break;
        case 10.0:  a= "1000"; break;
        case 12.0:  a= "1200"; break;
        case 14.0:  a= "1400"; break;
        case 16.0:  a= "1600"; break;       
        default: 0;  break;
    }

    console.log("Diametro en modelo: "+a);

let b=document.getElementById("conexion").value
let c=document.getElementById("rating").value
let d=document.getElementById("material").value
let e=document.getElementById("materialElementos").value
let f=document.getElementById("NumeroElementos").textContent
let g=document.getElementById("union").value


console.log("a:"+a +"Tipo de dato  "+typeof a);
console.log("b:"+b +"Tipo de dato  "+typeof b);
console.log("c:"+c +"Tipo de dato  "+typeof c);
console.log("d:"+d +"Tipo de dato  "+typeof d);
console.log("e:"+e +"Tipo de dato  "+typeof e);
console.log("f:"+f +"Tipo de dato  "+typeof f);
console.log("g:"+g +"Tipo de dato  "+typeof g);




modelMX= "MX"+a+b+c+d+e+f+g;
console.log("Modelo MX ADENTRO de function MX:"+modelMX +"Tipo de dato  "+typeof modelMX);
document.getElementById("MODELO").textContent=modelMX;


return modelMX;

}

*/





