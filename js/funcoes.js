function multiplicar(a, b) {
    return a * b
}

document.write('<br><br> Resultado da multiplicação: ' + multiplicar(6, 12))
document.write('<br>')

function clickMe(){
    var um = prompt("Entre com um valor : ");
    var dois = prompt("Entre com outro valor : " );

    alert(multiplicar(um, dois) );
    document.write('<br>Resultado na tela : ' + multiplicar(um, dois));
}

function abrirSite() {
    window.open("https://atozed.com");
}

function redirecionar() {
    window.location.href = "https://google.com.br";
}

function entrada(elemento) {
    //document.getElementById("eventos").innerHTML = "<strong> Estou em cima ! </strong>"
    elemento.innerHTML = "<strong> Estou em cima ! </strong>" 
}

function saida(elemento) {
   // document.getElementById("eventos").innerHTML = "<i> Sartei fora! </i>"
   elemento.innerHTML = "<i> Sartei fora! </i>"
}

function load() {
    alert("Essa é o evento onlaod da body  - Carreguei algo aqui")
}

document.write(typeof function ) {
    
})