<?php
session_start();
//mecanismo de segurança anti variavel de sessao vazia - está ok
if(isset($_SESSION['idfuncionario'])){

    //preenche a variavel idfuncionario com variavel de sessao
    $idfuncionario =$_SESSION ["idfuncionario"];

}

else{

    echo"<script>window.alert('NÃO LOGADO'); </script>";
    echo"<script>window.location.href='login_funcionario.php'; </script>";
}


?>