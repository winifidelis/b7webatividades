<?php
//Abaixo estou adicionando header para permitir conexão externas ou de um determinado endereço CORS
//* permite geral
//XXX para permitir um dominio especifico
header('Access-Control-Allow-Origin: *');

//Permitir determinando metodos de requsição
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

//informa o tipo de dados no retorno
//o navegador verifica isso, para apps isso é necessario, se não tiver ele da erro
header('Content-Type: application/json');

echo json_encode($array);

exit;
?>