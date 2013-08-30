function calcular(){

	var numero = Number (document.getElementById('numero').value);

	if(typeof numero == "number"){
		alert("O Fatorial de " + numero + " é " + fatorial(numero));
	}else{
		alert("O número digitado não é um número");
	}

}

function fatorial(n){
	if (n == 0) return 1;
	return n * fatorial(n - 1);
}