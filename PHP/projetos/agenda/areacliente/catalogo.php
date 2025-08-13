<?php 

// conexão com banco
include("../utils/conectadb.php");
include("../utilsvalidacliente.php");




// fazer o include do validacliente



//inicia variaveis de sessão

session_start();
//mecanismo de segurança anti variavel de sessao vazia
// talvez apagar o if e else
// if(isset($_SESSION['idfuncionario'])){

//     //preenche a variavel idfuncionario com variavel de sessao
//     $idfuncionario =$_SESSION ["idfuncionario"];

    //query para buscar nome do funcionario

    $sql ="SELECT * FROM catalogo WHERE CAT_ATIVO = 1";

    $enviaquery= mysqli_query($link, $sql);

    
// }

// else{

//     echo"<script>window.alert('NÃO LOGADO'); </script>";
//     echo"<script>window.location.href='login.php'; </script>";
// }




?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = ../css/globalcliente.css> 
    <title>CATALOGO SALOONCCINA</title>
</head>
<body>
    <!-- abrindo o class global -->
<div class ="global"> 

    <!-- FAZER A ANALISE DE LOGIN  -->
  <!-- abertura do php -->
     <!-- ABERTURA DO PORTAL  -->
<?php if(!isset($idcliente)){?>

        <!-- AQUI O CLIENTE NÃO FEZ LOGIN -->
        <div class='topo'>
            <h1>BEM VINDO AO SALÃO SALLONCCINA</h1>
            <!-- BOTÃO DE FAZER LOGIN -->
            <div class='login'>
                <a href='logincliente.php'>
                    <img src='../icons/user2.png'width=50 height=50>
                </a>
            </div>
        </div>
<!-- FECHA PRA ABRIR -->
<?php }


else{?>
        <div class="topo">    <!--abrindo o class topo -->
            <!-- aqui vai trazer o nome do usuario logado -->
            <h1>BEM VINDO,   <?php echo strtoupper($nomecliente)?></h1>
            <!-- botao de encerramento de sessão -->
            <div class = "logout" method='post'><a href ='logoutcliente.php'><img src='../icons/backspace.png' width=50 height=45></a></div>
        </div>  
        <!-- fechando o class topo -->
    

        <?php
     } ?>
<!-- FECHA PRA FECHAR -->

            
         
        

        <div class ="menus">

        <!-- portal php se inicia aqui -->
        <?php
         while($retorno =mysqli_fetch_array($enviaquery)){

        ?>  
            <!-- os cards de menu -->
           
            
            <div class= "menu1"> 
                    <label><?= $retorno[1]?></label> <!-- coleta o nome do serviço posição 1 -->   
                     <img src ='data:image/jpeg;base64,<?=$retorno[6]?>' width ="200" height ="200">
                     
                        <div class ='texto-card'> 
                           
                                 <label>DESCRIÇÃO</label>
                                 <br>
                                 <text><?= $retorno[2]?> </text> <!-- coleta a descrição do serviço poição 2 -->
                                 <br>
                                 <br>
                                 <label>TEMPO DE CORTE </label>
                                 <br>
                                 <text> <?= $retorno[4] <=59? $retorno[4]." Minutos":($retorno[4] / 60)." Hora(s)"?></td>  <!-- Coleta tempo do serviço[4] -->  </text>
                       
                        </div>
                                <label>PREÇO DO SERVIÇO</label>
                                <text>R$ <?= $retorno[3]?></text> <!--COLETA A PREÇO DO SERVIÇO POS 3 -->
                                <!-- <div class= "menu2"> <a href= "servico_lista.php"> <img src = "icons/th2.png" width = "200" height = "200"> </a> </div> 

                                <div class= "menu3">  <a href= "funcionario_cadastra.php"> <img src = "icons/business.png" width = "200" height = "200"> </a> </div>

                                <div class= "menu4">  <a href= "funcionario_lista.php"> <img src = "icons/group1.png" width = "200" height = "200"> </a> </div>

                                <div class= "menu5">  <a href= "cliente_cadastra.php"> <img src = "icons/add10.png" width = "200" height = "200"> </a> </div>

                                <div class= "menu6">  <a href= "cliente_lista.php"> <img src = "icons/clipboard1.png" width = "200" height = "200"> </a> </div> -->

                                <!-- USANDO GET BRABO pro botao alterar -->
                                        <td><a href='verservico.php?id=<?= $retorno[0]?>'><img src='../icons/pencil1.png' width=20 height=20 style='border: 2px solid rgba(224, 229, 231, 1) ; border-radius: 1px; margin: 2px;'></a></td>

            </div>

         <?php
         }
         ?>
            <!-- fim do portal - o html não pode ficar dentro do php -->



</div>  <!-- fechando o class global -->



    
</body>
</html>