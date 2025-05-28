<?php
// localização do servidor de banco
$servidor = "localhost";
//nome da base
$banco = "login";
//usuario do banco
$usuario = "root";
//senha do banco
$senha ="";

//recurso para conexão do banco
$link = mysqli_connect($servidor, $usuario, $senha, $banco);



?>