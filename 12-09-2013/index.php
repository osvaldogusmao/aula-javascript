<html>
<head>
	<title>Exemplo Ajax</title>
	<script type="text/javascript" src="../jquery.js"></script>
</head>
<body>

<form action="cadastra.php" id="frmPessoa">

	<label>Nome</label>
	<input type="text" id="nome" name="nome">

	<label>Idade</label>
	<input type="text" id="idade" name="idade">

	<input type="button" value="Cadastrar com POST" id="btnCadastra">

</form>

<hr>

<div id="resultado">

</div>


<script type="text/javascript">

$(document).ready(function(){

	$('#btnCadastra').click(function(){

		var data = {
			nome  : $('#nome').val(), 
			idade : $('#idade').val()
		};

		$.post('cadastra.php', data, function(pessoa){

			$('#resultado').append('<p> <b>Nome  :</b> ' + pessoa.nome + '</p>');
			$('#resultado').append('<p> <b>Idade :</b> ' + pessoa.idade + '</p>');
		});

	});

});


</script>
</body>
</html>