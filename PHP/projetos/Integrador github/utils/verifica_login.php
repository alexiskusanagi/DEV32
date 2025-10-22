<?php
session_start();
//mecanismo de segurança anti variavel de sessao vazia - está ok
if(isset($_SESSION['idfuncionario'])){

    //preenche a variavel idfuncionario com variavel de sessao
    $idfuncionario =$_SESSION ["idfuncionario"];

   //query para buscar nome do funcionario

    $sql ="SELECT FUN_NOME FROM funcionarios WHERE FUN_ID =$idfuncionario";

    $enviaquery= mysqli_query($link, $sql);
    
    $nomeusuario =mysqli_fetch_array($enviaquery) [0]; 
    
    include("utils/topo_backoffice.php");
}

else{

    echo"<script>window.alert('NÃO LOGADO'); </script>";
    echo"<script>window.location.href='login_funcionario.php'; </script>";
}






?>