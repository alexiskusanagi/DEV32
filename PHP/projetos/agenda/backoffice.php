<?php 

// conexão com banco
include("utils/conectadb.php");

//inicia variaveis de sessão

session_start();
//mecanismo de segurança anti variavel de sessao vazia
if(isset($_SESSION['idfuncionario'])){

    //preenche a variavel idfuncionario com variavel de sessao
    $idfuncionario =$_SESSION ["idfuncionario"];

    //query para buscar nome do funcionario

    $sql ="SELECT FUN_NOME FROM funcionarios WHERE FUN_ID =$idfuncionario";

    $enviaquery= mysqli_query($link, $sql);
    
    $nomeusuario =mysqli_fetch_array($enviaquery) [0]; 
    

}

else{

    echo"<script>window.alert('NÃO LOGADO'); </script>";
    echo"<script>window.location.href='login.php'; </script>";
}




?>









<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = css/global.css> 
    <title>BACKOFFICE</title>
</head>
<body>
    <!-- abrindo o class global -->
<div class ="global"> 
        <div class="topo">   <!-- abrindo o class topo -->
            <!-- aqui vai trazer o nome do usuario logado -->
            <h1>BEM VINDO, <?php echo strtoupper($nomeusuario)?></h1>
            <!-- botao de encerramento de sessão -->
            <div class = "logout" method='post'><a href ='logout.php'><img src='icons/backspace.png' width=50 height=45></a></div>
        </div>  <!-- fechando o class topo -->
    

        <div class ="menus">
            <!-- os cards de menu -->

            <!-- <div class= "menu1"><a href= "usuario_cadastra.php"> <img src = "icons/add9.png" width = "200" height = "200">   </a> </div>

            <div class= "menu2"> <a href= "usuario_lista.php"> <img src = "icons/th2.png" width = "200" height = "200"> </a> </div> -->

            <div class= "menu3">  <a href= "funcionario_cadastra.php"> <img src = "icons/business.png" width = "200" height = "200"> </a> </div>

            <div class= "menu4">  <a href= "funcionario_lista.php"> <img src = "icons/group1.png" width = "200" height = "200"> </a> </div>

            <div class= "menu5">  <a href= "cliente_cadastra.php"> <img src = "icons/add10.png" width = "200" height = "200"> </a> </div>

            <div class= "menu6">  <a href= "cliente_lista.php"> <img src = "icons/clipboard1.png" width = "200" height = "200"> </a> </div>
        </div>


</div>  <!-- fechando o class global -->



    
</body>
</html>