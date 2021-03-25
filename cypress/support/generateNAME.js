function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

export function generateName(){
	var name1 = ["alisha", "adrian", "madalena", "lúcia", "samuel", "enzo", "pedro", "thiago", "luiz", "jorge", "carlos", "ana", "ana", "adriana",
	"rogerio", "maria", "jasmine", "pietra", "sophia", "edgar", "jesus", "davi", "walver"];

	var name2 = ["morão", "fonseca", "sardo", "pinto", "oliveira", "bastos", "carvalho", "vargas", "nogueira", "modesto", "coutinho", "parracho",
	"mangueira", "rosa", "igrejas", "carmo", "carreira", "rodrigues", "fernandes", "cardoso"];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
	return name;

}