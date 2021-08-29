document.write("<br><h3>Essa parte trata do Assunto de arrays e dictionarys</h3>");

var estacoesDoAno = ["Verão", "Outono", "Inverno", "Primavera"];
var meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

var mesesNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(estacoesDoAno, meses, mesesNumeros);

document.write('<br> Mes 1 : ' + meses[0] + '<br> Mes 6 : ' + meses[5]);
//adicionando qualquer coisa para criar uma separação dos elementos
meses.push(' ---- ');
//push fuciona com mais de um elemento
meses.push('Jan', 'Feb');
document.write('<br>' + meses);
document.write('<br>' + meses[13]);
//não adianta passar parametros dentro dele 
meses.pop(9);
document.write('<br>' + meses)

//concat é usado para unir dois arrays
var c = meses.concat(estacoesDoAno)
document.write('<br>' + c)
document.write('<br>' + meses)
document.write('<br>' + estacoesDoAno)

