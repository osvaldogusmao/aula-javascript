<?php 

//Setando header como Json

header('Content-Type: text/json');

$nome = $_POST['nome'];

$idade = $_POST['idade'];

//Modo 01 - usando json_encode();

$array = array('nome' => $nome, 'idade' => $idade);

echo json_encode($array);

//Modo 02 - usando String;

/*

$json = '{';

$json .= ' "nome" : "'. $nome . '" ,';
$json .= ' "idade" : ' . $idade ;

$json .= '}';

echo $json;

*/



 ?>