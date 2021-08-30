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
meses.pop("Outubro");
document.write('<br> aqui sem o mes de outubro' + meses)

//concat é usado para unir dois arrays
var c = meses.concat(estacoesDoAno)
document.write('<br>' + c)
document.write('<br>' + meses)
document.write('<br>' + estacoesDoAno)

//pega o index do elemento?
document.write('<br>' + meses.indexOf("Outubro"));
//se o item não é achado, o retorno é -1

//daqui para baixo os dictionarys
var dicionario = {nome: "Pedro Tião", idade : 35}
document.write('<br>' + dicionario.nome + ' idade : ' + dicionario.idade)

//vamos criar um array contendo dicionoarios 
var pessoas = [ {nome: "Julio", idade: 35},
{nome: "Maria", idade: 27},
{nome: "Pedro", idade: 48},
{nome: "Cimara", idade: 89},
{nome: "Janaina", idade: 12} ]

document.write('<br>Pessoas : ' + pessoas.length )
document.write('<br>Pessoa : ' + pessoas[2].nome + ' Idade : ' + pessoas[2].idade)


