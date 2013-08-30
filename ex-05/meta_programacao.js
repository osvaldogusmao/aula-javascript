function executa(){
	var valorBR = Number ( document.getElementById("valor").value );
	var valorBD = Number ( document.getElementById("valor").value );

	console.log("Valor BR : " + valorBR.formataBR());
	console.log("Valor BD : " + valorBD.formataMoney(2, ",", "."));
}


// Formata para exibição: Ex: R$ 12,50 
Number.prototype.formataBR = function(){
	var valorFormatado = this;

	valorFormatado = "R$ " + this.toFixed(2).replace("\.", ",");

	return valorFormatado;
};


// Formata para inserção em Banco de Dados: Ex: 12.50 
Number.prototype.formataMoney = function(precisao, sMilhar, sCentavos){
	
	//Recupera o numero
	var numero = this;

	//Verifica se o número é negativo ou positivo
	var sinal = (numero < 0) ? "-" : "";

	//Verifica se o número passado é valido, caso não seja, use 2 como padrão
	precisao = isNaN(precisao = Math.abs(precisao)) ? 2 : precisao;

	//Verifica se foi passado o caracter usado para seprar milhares, caso não exista use por padrão "."
	sMilhar = (sMilhar === undefined) ? "." : sMilhar;

	//Verifica se foi passado o caracter usado para seprar centavos, caso não exista use por padrão ","
	sCentavos = (sCentavos === undefined ) ? "," : sCentavos;

	//Recuperando a parte inteira do número e converte para String Exe: 125.50 = 125.00
	var inteiro = parseInt(numero = Math.abs(+numero || 0).toFixed(precisao),0) + "";

	//Verifica se o número é maior que 3 digitos, caso não seja, significa que é valor em centavos
	// 0 = true
	// 1 = false
	var validaNumero = ((validaNumero = inteiro.length) > 3) ? inteiro % 3 : 0;

	//Montando o número final
	return sinal + (validaNumero ? inteiro.substr(0,validaNumero) + sCentavos : "") + inteiro.substr(validaNumero).replace(/(d{3})(?=\d)/g, "$1" + sCentavos) + (precisao ? sMilhar + Math.abs(numero - inteiro).toFixed(precisao).slice(2) : "");

};