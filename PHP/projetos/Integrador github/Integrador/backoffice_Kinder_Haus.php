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
    echo"<script>window.location.href='login_funcionario.php'; </script>";
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
            <h1>BEM VINDO(A), <?php echo strtoupper($nomeusuario)?></h1>
            <!-- botao de encerramento de sessão -->
            <div class = "logout" method='post'><a href ='logout_funcionario.php'><img src='icons/backspace.png' width=50 height=45></a></div>

            <div class = "catalogo" method='post'><a href ='areacliente/catalogo.php'><img src='icons/shopping2.png' width=50 height=45></a></div>
        </div>  <!-- fechando o class topo -->
    

        <div class ="menus">
            <!-- os cards de menu -->

              <!-- VERIFICA E MOSTRA TODOS OS CARDS PARA ADMINISTRADOR -->
                <?php if($idfuncionario == 1){
                    ?>
             <div class= "menu1"><a href= "servico_cadastra.php"> <img src = "icons/add10.png" width = "200" height = "200">   </a> <label> Cadastro de Serviço</label> </div> 

            <div class= "menu1"> <a href= "servico_lista.php"> <img src = "icons/th2.png" width = "200" height = "200"> </a> <label> Lista de Serviços </label> </div> 

            <div class= "menu1">  <a href= "funcionario_cadastra.php"> <img src = "icons/business.png" width = "200" height = "200"> </a> <label>Cadastro de Funcionários </label> </div>

            <div class= "menu1">  <a href= "funcionario_lista.php"> <img src = "icons/group1.png" width = "200" height = "200"> </a> <label> Lista de Funcionários </label></div>

            <div class= "menu1">  <a href= "cadastra_cliente_backoffice.php"> <img src = "icons/add9.png" width = "200" height = "200"> </a> <label> Cadastro de Clientes </label> </div>

            <div class= "menu1">  <a href= "cliente_lista.php"> <img src = "icons/clipboard1.png" width = "200" height = "200"> </a> <label> Lista de Clientes </label> </div>

            <div class= "menu1">  <a href= "ver_agenda.php"> <img src = "icons/calendar52.png" width = "250" height = "150"> </a> <label> Ver Agenda </label> </div>

            <div class= "menu1">  <a href= "vendas.php"> <img src = "icons/payment2.png" width = "250" height = "150"> </a> <label> Vendas e Pagamentos </label> </div>

             <!-- AQUI SÓ MOSTRA 3 CARDS PARA QUEM NÃO É ADMIN -->
                <?php }
                 else {?>

                    <div class= "menu1"> <a href= "servico_lista.php"> <img src = "icons/th2.png" width = "200" height = "200"> </a> <label> Lista de Serviços </label> </div> 

                     <div class= "menu1">  <a href= "cadastra_cliente_backoffice.php"> <img src = "icons/add9.png" width = "200" height = "200"> </a> <label> Cadastro de Clientes </label> </div>

                    <div class= "menu1">  <a href= "cliente_lista.php"> <img src = "icons/clipboard1.png" width = "200" height = "200"> </a> <label> Lista de Clientes </label> </div>

                    <div class= "menu1">  <a href= "ver_agenda.php"> <img src = "icons/calendar52.png" width = "250" height = "150"> </a> <label> Ver Agenda </label> </div>

                    <?php } ?>

                    <br>
                    <br>
                    <!-- aqui tabela agendamento -->
                     <!--  -->

        </div>


</div>  <!-- fechando o class global -->






    
</body>
</html>