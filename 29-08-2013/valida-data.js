
function validaData(){
	var data = String(document.getElementById('txtData').value);
	var pattern = /^([0-9]){1,2}\/([0-9]{1,2})\/([0-9]{4})$/;

	if(pattern.test(data)){
		alert('Data OK');
	}else{
		alert('Data invalida');
	}
}


function validaCEP(){
	var cep = String(document.getElementById('txtCEP').value);
	var pattern = /^(\d{5}-\d{3})$/;

	if(pattern.test(cep)){
		alert('CEP OK');
	}else{
		alert('CEP invalido');
	}
}

function validaCPF(){
	var dado = String(document.getElementById('txtDado').value);
	var pattern = /^(\d{3}\.\d{3}\.\d{3}-\d{2})|([0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2})$/;
	

	if(pattern.test(dado)){
		alert('DADO OK');
	}else{
		alert('Dado Incorreto');
	}
}

//Não pode ter número e deve ser nome.sobrenome@nomeempresa.com.br
function validaEmail () {
	var dado = String(document.getElementById('txtEmail').value);
	var pattern = /^[a-z]{2,}\.[a-z]{2,}@([a-z]|[0-9]){2,20}\.[a-z]{2,3}\.[a-z]{2,3}$/;
	

	if(pattern.test(dado)){
		alert('DADO OK');
	}else{
		alert('Dado Incorreto');
	}	
}