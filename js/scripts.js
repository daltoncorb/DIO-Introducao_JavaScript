//como está na seqüência, ele usa primeiro o script da página para depois executar essa parte daqui.
alert("Entrei agora emitindo o aviso de alert através do arquivo de Javascript dentro da pasta !");

//certo - saiu beleza!
document.write('<br> Vamos ver se ele escreve isso no documento do Browser');

//teoricamente são variáveis globais, vamos ver como atuam em relação as variáveis no script anterior
var numeroDois = 200 ;
var numeroTres = 300 ;

//as variáveis daqui anularam as mesmas variáveis existentes no arquivo html
document.write('<br>' + numeroDois * numeroTres + numeroDois / numeroTres);