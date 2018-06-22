$(function(){
    setTimeout(function() {
        $('#screen').fadeOut(500);
        $('#show').show();
    }, 2000);
});



var captch = document.getElementById("captcha"); //.innerHTML
// console.log(captch);
var input = document.getElementById("validar");
// console.log(input);

var validar = document.getElementById("check");
var newCaptcha = document.getElementById("reload");

validar.addEventListener("click", validate);
newCaptcha.addEventListener("click", reload);


/* CODIGO ASCII
 Números: 48-57
 Mayúsculas: 65-90
 Minúsculas: 97-122
*/


function generarCaracteres() {
  var cadena = "";
  var bandera = true;
  
  for(var k=1; k<=7; k++) {
    if(bandera){ //Generar LETRAS & CARACTERES
       var minLetra = 65;
        var maxLetra = 122;
        var caracter = String.fromCharCode(Math.floor(Math.random() * (maxLetra -minLetra) + minLetra));
    } else { //Generar NUMEROS
      var minNum = 48;
      var maxNum = 57;
      var caracter = String.fromCharCode(Math.floor(Math.random() * (maxNum -minNum) + minNum));
    }
    bandera = !bandera;
    cadena += caracter;
  }
  
  // for(var i=0; i<=2; i++) {
  //   var minLetra = 65;
  //   var maxLetra = 122;
  //   var letra = String.fromCharCode(Math.floor(Math.random() * (maxLetra -minLetra) + minLetra));
  //   // console.log(String.fromCharCode(letra));
  //   for(var j=0; j<=3; j++) {
  //     var minNum = 48;
  //     var maxNum = 57;
  //     var numero = String.fromCharCode(Math.floor(Math.random() * (maxNum -minNum) + minNum));
  //     // console.log(String.fromCharCode(numero));
  //   }
  //  cadena += letra + numero;
  // }
  console.log(cadena);
  captch.innerHTML = cadena;
  
}

function validate() {
  console.log("Validando");
  // console.log(input.value +" "+ captch.innerHTML); //probar con inner en vez de value
  if(input.value == captch.innerHTML){
    console.log("CORRECTO");
    swal("Congratulations!", "You're NOT a ROBOT 🤖 !", "success");
  } else {
    console.log("Intentalo nuevamente");
    input.innerHTML = "";
    generarCaracteres();
  }
}

function reload() {
  console.log("Generando nuevo CAPTCHA");
  generarCaracteres();
}


generarCaracteres();
// https://sweetalert.js.org/guides/

$(document).ready(function(){
    $('.modal').modal();
    $('#add-contact').click(getContactData);
});