/*
var MX_imagen = document.createElement("img");
    MX_imagen.setAttribute("width","100px");
    MX_imagen.setAttribute("src","images/novatecfs_mezcladores_estaticos.jpg");
    document.getElementById("resultadoImagen").appendChild(MX_imagen);
*/


// Debes definir el optionsMap y llamar a updateSelectOptions después de cargar el DOM
const optionsMap = {
    '': [
       { value: '', label: 'Seleccione una opción' },
    ],
    'M': [
       { value: '01', label: 'mRoy A' },
       { value: '02', label: 'mRoy B' },
       { value: '03', label: 'mRoy H' },
       { value: '04', label: 'mRoy J' },
       { value: '05', label: 'mRoy M' },
       { value: '06', label: 'mRoy P' },
       { value: '07', label: 'mRoy XT' },
       { value: '08', label: 'mRoy XW' },
       { value: '09', label: 'Milroyal B' },
       { value: '10', label: 'Milroya C' },
       { value: '11', label: 'Milroyal D' },
       { value: '12', label: 'Milroyal G' },
       { value: '13', label: 'MacRoy D' },
       { value: '14', label: 'Macroy G' },
       { value: '15', label: 'Maxroy B' },
       { value: '16', label: 'mRoy T' },
       { value: '17', label: 'Primeroyal K' },
       { value: '18', label: 'mRoy S' },
       { value: '19', label: 'SolaryRoy' }
    ],
    'L': [
       { value: '01', label: 'A' },
       { value: '02', label: 'B' },
       { value: '03', label: 'C' },
       { value: '04', label: 'E' },
       { value: '05', label: 'J5' },
       { value: '06', label: 'P' },
       { value: '07', label: 'SG' },
       { value: '08', label: 'SD' },
       { value: '09', label: 'HH' },
       { value: '10', label: 'TD' }
    ],
    'W': [
       { value: '01', label: 'CP125V125' },
       { value: '02', label: 'CP250V225' },
       { value: '03', label: 'CP250V300' },
       { value: '04', label: 'CP500V250' },
       { value: '05', label: 'CP500V300' },
       { value: '06', label: 'CRP500V400' },
       { value: '07', label: 'CRP750V400' },
       { value: '08', label: 'CRP1000V400' },
       { value: '09', label: 'CRP1000V600' },
       { value: '10', label: 'CRP1000V800' },
       { value: '11', label: 'LD100-316-TFE' },
       { value: '12', label: 'LD200-316-TFE'  },
       { value: '13', label: 'LD400-316-TFE'  },
       { value: '14', label: 'LD100-TFE-TFE'  },
       { value: '15', label: 'LD200-TFE-TFE' },
       { value: '16', label: 'LD400-TFE-TFE' },
       { value: '17', label: 'CRP250W600' }
    ],
    'S': [
       { value: '01', label: 'BCSB' },
       { value: '02', label: 'BCSO' },
       { value: '03', label: 'BTCS' },
       { value: '04', label: 'BN/NM' },
       { value: '05', label: 'MD' },
       { value: '06', label: 'NS' }       
    ],
    'LQ': [
       { value: '01', label: 'Series H' },
       { value: '02', label: 'Series 2' },
       { value: '03', label: 'Series 3' },
       { value: '04', label: 'Series 4' },
       { value: '05', label: 'Series Centry'},
       { value: '06', label: 'Series Endura_AB'},
       { value: '07', label: 'Series Max'}          
    ],
    'AB': [
       { value: '01', label: 'ALP-05N' },
       { value: '02', label: 'ALP-09N' },
       { value: '03', label: 'ALP-13N' }
         
    ],
    'N': [
       { value: '01', label: 'F-TEC-40P' },
       { value: '02', label: 'F-TEC-50P'},
       { value: '03', label: 'F-TEC-40D' },
       { value: '04', label: 'F-TEC-50D' },
       { value: '05', label: 'F-TEC-LM'},
       { value: '06', label: 'F-TEC-MP'},
       { value: '07', label: 'SDFFlow-F (B. Tornillo Helicoidal)' }          
    ]
};

const optionsMap2 = {
    '': [
       { value: '', label: 'Seleccione una opción' },
    ],   
    'N': [
       { value: '01', label: 'F-TEC-40P' },
       { value: '02', label: 'F-TEC-50P'},
       { value: '03', label: 'F-TEC-40D' },
       { value: '04', label: 'F-TEC-50D' },
       { value: '05', label: 'F-TEC-LM'},
       { value: '06', label: 'F-TEC-MP'},
       { value: '07', label: 'SDFFlow-F (B. Tornillo Helicoidal)' }          
    ]
};




updateSelectOptions('MarcaDeBomba', 'ModeloDeBomba', optionsMap);
//SelectOptions2('NumeroDeTanques', 'MaterialDelTanque', 'CapacidadDelTanque',optionsMap2);//

function calculator()
{

console.log("optionsMap:"+optionsMap );
updateSelectOptions('MarcaDeBomba', 'ModeloDeBomba', optionsMap);


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






function updateSelectOptions(primarySelectId, secondarySelectId, optionsMap) {
    const primarySelect = document.getElementById(primarySelectId);
    const secondarySelect = document.getElementById(secondarySelectId);

    function setOptions(options) {
        secondarySelect.innerHTML = '<option value="">Seleccione una opción</option>';
        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.label;
            secondarySelect.appendChild(option);
        });
    }

    primarySelect.addEventListener('change', function() {
        const selectedValue = primarySelect.value;
        if (optionsMap[selectedValue]) {
            setOptions(optionsMap[selectedValue]);
        } else {
            setOptions([]);
        }
    });
}

/*
function updateSelectOptions2(primarySelectId, secondarySelectId,TerciarySelectId, optionsMap) {
    const primarySelect = document.getElementById(primarySelectId);
    const secondarySelect = document.getElementById(secondarySelectId);
    const terciarySelect = document.getElementById(TerciarySelectId);

    function setOptions(options) {
        secondarySelect.innerHTML = '<option value="">Seleccione una opción</option>';
        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.label;
            secondarySelect.appendChild(option);
        });
    }

    primarySelect.addEventListener('change', function() {
        const selectedValue = primarySelect.value;
        if (optionsMap[selectedValue]) {
            setOptions(optionsMap[selectedValue]);
        } else {
            setOptions([]);
        }
    });
}
*/


// Ejemplo de uso:
// const optionsMap = {
//     'opcion1': [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }],
//     'opcion2': [{ value: 'c', label: 'C' }, { value: 'd', label: 'D' }]
// };
// updateSelectOptions('primerSelect', 'segundoSelect', optionsMap);




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





