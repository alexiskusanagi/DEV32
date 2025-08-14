<?php
include("../utils/conectadb.php");
include("../utils/verificausuario.php");


// click na alteração do serviço



//coleta o id da url o listando do banco preechendo os campos
$id = $_GET['id'];

$sql = "SELECT * FROM catalogo WHERE CAT_ID = $id";
$enviaquery = mysqli_query($link, $sql);

while($tbl = mysqli_fetch_array($enviaquery)){

    $id= $tbl[0];
    $nomeservico = $tbl[1];
    $descricaoservico = $tbl[2];
    $precoservico = $tbl[3];
    $temposervico = $tbl[4];
    $ativo = $tbl[5];
    $imagem_atual = $tbl[6];

}


?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href ="../css/catalogo.css">
    <link rel ="stylesheet" href ="../css/testeglobal.css">
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>CADASTRO DE SERVIÇOS</title>
</head>
<body>
    <div class = "global"> 
        <!-- ajuste da imagem a parte -->
         <label>IMAGEM</label>
         
         <img name='imagem_atual' src="data:image/jpeg;base64,<?= $imagem_atual?>">
        
    </div>

        <div class ="formulario"><a href="catalogo.php"><img src='icons/arrow47.png' width=50 height=50 ></a>
                <form class='login' action ="servico_altera.php" method ="post" enctype='multipart/form-data' > 
                    

                <!-- quando gravar ele coleta o que veio do banco para fazer o update -->
                <input type = 'hidden' name = 'id' value= '$id'>
                
                <label>NOME DO SERVIÇO</label>
                    
                    <input type ='text' name = "txtnome" placeholder ='Digite nome do serviço' value =<?=$nomeservico?> required>
                    <br>
                    <label>DESCRIÇÃO</label>
                    
                    <textarea name ='txtdescricao' <?= $descricaoservico?>> </textarea>
                    <br>
                   
                    <label>PREÇO</label> 
                    
                    <input type = 'decimal' name ="txtpreco" placeholder = 'HUE$' value = 'R$' <?=$precoservico?> >
                    <br>
                    
                    
                    <!-- agora cadastramos o usuario -->
                    <label>DURAÇÃO</label>

                    <input type = 'number' name ="txttempo" placeholder = 'Digite o tempo em minutos' value =<?=$temposervico?> required>
                    <label><?= $temposervico <= 59? $temposervico." Minutos": ($temposervico / 60)." Hora(s)"?> </label> <!--COLETA TEMPO DO CAT [4]-->

                    <!-- input de imagem para o banco de dados -->
                    <br>
                    <label>FAÇA O UPLOAD DA IMAGEM</label>
                    <input type ='file' name='imagem' >

                    <br> 

                    <!-- <label>STATUS DO SERVIÇO</label>
                    <div class='rbativo'>
                        
                        <input type ="radio" name="ativo" id="ativo" value="1" checked><label>ATIVO</label>
                        <br> 

                        <input type ="radio" name="ativo" id="inativo" value="0" ><label>INATIVO</label>
                    </div>   -->


                    <!-- APRESENTAÇÃO DA IMAGEM -->
                     <!-- <div id = 'cat_imagem'> <img src= 'data:image/jpeg;base64, <?=$imagem_atual?>' width=100 height=100> </div> -->
                    <br> 

                     <!-- TODO TELA DE VERSERVIÇO PARA AGENDAMENTO -->
                <!-- SELECT PARA VER DATA DISPONÍVEL PARA CABELEIREIRO  -->
                <!-- SELECT PARA VER QUAL CABELEIREIRO DISPONÍVEL NESSA DATA -->

                    <input type ='submit' value = 'ALTERAR'>

                </form>
                <br>
                

        </div>

    </div>
</body>
</html>