var data = new Date();
document.write("<br>Data" + data);

//getDay retorna o dia do semana - 0 é domingo
document.write("<br>Data - dia : " + data.getDay());

//aqui traz o dia do mes
document.write("<br>Data - Dia (número) " + data.getDate());

//aqui traz o mes - tem que adicionar 1 porque inicia em 0
document.write("<br>Data - Mês (Número)" + data.getMonth() + 1);

//aqui traz o ano
document.write("<br>Data - Ano (4 digitos) : " + data.getFullYear());

//tras as horas
document.write("<br>Data - Horas :" + data.getHours());

//tras os minutos
document.write("<br>Data - Minutos : " + data.getMinutes());

//tras os segundos
document.write("<br>Data - Segundos : " + data.getSeconds());
