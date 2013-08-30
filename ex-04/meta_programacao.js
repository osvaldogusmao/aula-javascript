var qtd = 0;
var carcter = "";
var texto = "";

function executa(){
	qtd = Number (document.getElementById("qtd").value);
	caracter = document.getElementById("caracter").value;
	texto = document.getElementById("texto").value;

	console.log(texto.preenche(qtd, caracter));
}

String.prototype.preenche = function(qtd, caracter){
	for (var i = 0; i < qtd-(this.length); i++) {
		this  = this + caracter;
	}
};