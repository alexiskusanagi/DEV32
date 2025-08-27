<?php
include("conectadb.php");
session_start();
//mecanismo de segurança anti variavel de sessao vazia
if(isset($_SESSION['idcliente'])){

    $idcliente = $_SESSION ['idcliente'];

    $sql ="SELECT CLI_NOME FROM clientes WHERE CLI_ID = $idcliente";
    $enviaquery = mysqli_query($link, $sql);

    $nomecliente = mysqli_fetch_array($enviaquery) [0];
    echo $idcliente;

    
}




?>