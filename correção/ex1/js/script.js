var filmes = ["Vingadores","Missão impossível","Tenet","Velozes e furiosos"]

var resultado = filmes.map((element) => `Filme ${filmes.indexOf(element)+1} : ${element}<br>`);
document.write(resultado.join().replaceAll(",",""))
//segunda maneira
// document.write(resultado.join(""))

