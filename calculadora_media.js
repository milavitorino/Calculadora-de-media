function Media() {
	var nota1 = parseFloat(document.getElementById("notaUm").value);
	var nota2 = parseFloat(document.getElementById("notaDois").value);
	var nota3 = parseFloat(document.getElementById("notaTres").value);
	var nota4 = parseFloat(document.getElementById("notaQuatro").value);

	var media = (nota1 + nota2 + nota3 + nota4) / 4;

	if (media >= 6) {
		var text = "Parabéns, você foi aprovado." + "\r Sua nota foi " + media;
	}
	if (media < 6) {
		var text = "Que pena! Não foi dessa vez.\nSua nota foi " + media;
	}

	var elementoMediaFinal = document.getElementById("mediaFinal");
	elementoMediaFinal.innerHTML = text;
}