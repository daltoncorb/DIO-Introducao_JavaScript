var getAge = prompt("Entre com a sua idade:", "");

if (getAge.trim() == "" ) {
  document.write("<br>Você não digitou uma idade!");
} else {
  document.write("<br>Sua idade é " + getAge);
}
console.log(getAge);
document.write("<br>")
//utilizando o While para repetições
let x = 0 ;
while (x < 5) {
    document.write('<br>Valor de X é : ' + x);
    //ao invés de usar isso
    //x = x + 1;
    //usar dessa forma fica mais sucinto
    x++;
}

//outro tipo de repeticao
document.write('<br>');

for( let c = 0; c < 5; c++){
    document.write('<br> Valor de C é : ' + c)
}

//será que o inverso é assim?
document.write('<br>');
for( let d = 8; d >= 0; d--){
    document.write('<br> Valor de D é : ' + d)
}