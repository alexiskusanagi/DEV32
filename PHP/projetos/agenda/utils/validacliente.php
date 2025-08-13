<?php
include("utils/conectadb.php");
session_start();
//mecanismo de segurança anti variavel de sessao vazia
if(isset($_SESSION['idcliente'])){

    $idcliente =$_SESSION ["idcliente"];

    $sql ="SELECT CLI_NOME FROM clientes WHERE CLI_ID= $idcliente";
    $enviaquery = mysqli_query($link, $sql);

    $nomecliente = mysqli_fetch_array($enviaquery) [0];

    
}

    

// else{

//     echo"<script>window.alert('NÃO LOGADO'); </script>";
//     echo"<script>window.location.href='logincliente.php'; </script>";
// }


?>