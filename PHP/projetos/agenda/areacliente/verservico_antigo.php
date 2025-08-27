<?php
include("../utils/conectadb.php");
include("../utils/validacliente.php");


// COLETANDO O SERVIÇO SELECIONADO DO CATALOGO
$id = $_GET['id'];



$sql = "SELECT * FROM catalogo WHERE CAT_ID = $id";
$enviaquery = mysqli_query($link, $sql);

while($tbl = mysqli_fetch_array($enviaquery)){

    $id = $tbl[0];
    $nomeservico = $tbl[1];
    $descricaoservico = $tbl[2];
    $precoservico = $tbl[3];
    $temposervico = $tbl[4];
    $ativo = $tbl[5];
    $imagem_atual = $tbl[6];

}

// coleta cabelereiro
$sqlfuncionario = "SELECT FUN_ID, FUN_NOME FROM funcionarios WHERE FUN_NOME != 'Administrador'";
$enviaqueryfun= mysqli_query($link, $sqlfuncionario);


// verifica agenda


?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href ="../css/catalogo.css">
    <link rel ="stylesheet" href ="../css/testeglobal.css">
    <link rel ="stylesheet" href ="../css/verservico.css">
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>AGENDAMENTO DE SERVIÇOS</title>
</head>
<body>
    <div class = "global"> 
        <!-- ajuste da imagem a parte -->
         <label>IMAGEM</label>
         
         <img name='imagem_atual' src="data:image/jpeg;base64,<?= $imagem_atual?>">
        
    </div>

        <div class ="formulario"><a href="catalogo.php"><img src='../icons/arrow47.png' width=50 height=50 ></a>
                <form class='login' action ="servico_altera.php" method ="post" enctype='multipart/form-data' > 
                    

                <!-- quando gravar ele coleta o que veio do banco para fazer o update -->
                <input type = 'hidden' name = 'id' value= '$id'>
                
                <!-- name="txtnome", name="txtdescricao e name = "txtpreco" não pe usado e nem válido para LABEL -->

                <label>NOME DO SERVIÇO</label>
                    
                    <label name="txtnome"><?=$nomeservico?></label>
                    <br>
                    <label>DESCRIÇÃO</label>
                    
                    <label name='txtdescricao'><?= $descricaoservico?></label>
                    <br>
                   
                    <label>PREÇO</label> 
                    
                    <label name="txtpreco"><?=$precoservico?></label>
                    <br>
                    
<!--                 
                <label>NOME DO SERVIÇO</label>
                    
                    <label><?=$nomeservico?></label>
                    <br>
                    <label>DESCRIÇÃO</label>
                    
                    <label ><?= $descricaoservico?></label>
                    <br>
                   
                    <label>PREÇO</label> 
                    
                    <label><?=$precoservico?></label>
                    <br> -->
                    
                    
                    <!-- agora cadastramos o usuario -->
                    <label>DURAÇÃO EM MINUTOS</label>

                    <!-- <input type = 'number' name ="txttempo" placeholder = 'Digite o tempo em minutos' value =<?=$temposervico?> required> -->
                    <label><?= $temposervico <= 59? $temposervico." Minutos": ($temposervico / 60)." Hora(s)"?> </label> <!--COLETA TEMPO DO CATALOGO [4]-->



                     <!-- TODO TELA DE VERSERVIÇO PARA AGENDAMENTO -->
                <!-- SELECT PARA VER DATA DISPONÍVEL PARA CABELEIREIRO  -->
                <!-- SELECT PARA VER QUAL CABELEIREIRO DISPONÍVEL NESSA DATA -->
                    <br>

                    <!-- SELECIONA A DATA -->

                    <!-- seleciona cabelereiro -->

                    <!-- criar form de verifivcar horario -->

                
                    <form class='login' action='../utils/verificaagenda.php' method="post" onchange="this.form.submit()">
                    <select class='opt' name='idfuncionario' >
                        <option value='sem funcionario'>SELECIONE UM BARBEIRO/ CABELEIREIRO(A)</option>
                        

                    <!-- listando funcionario portal -->

                    <?php while($funcionario = mysqli_fetch_array($enviaqueryfun)){
                        ?>

                    <option value='<?=$funcionario[0]?>'><?=$funcionario[1]?> </option>

                    <?php } ?>
                    </select>

                    <br>

                    <input type='date' name='data'>

                    <br>

                   <!-- SELECT OPTION LISTA DE OPÇÕES  -->
                    <!-- RESPEITA O FORMATO DE HORA 00:00:00 -->
                    <select class='opt' name="horario">
                        <option value="08:00:00">08:00</option>
                        <option value="08:30:00">08:30</option>
                        <option value="09:00:00">09:00</option>
                        <option value="09:30:00">09:30</option>
                        <option value="10:00:00">10:00</option>
                        <option value="10:30:00">10:30</option>
                        <option value="11:00:00">11:00</option>
                        <option value="11:30:00">11:30</option>
                        <option value="12:00:00">12:00</option>
                        <option value="12:30:00">12:30</option>
                        <option value="13:00:00">13:00</option>
                        <option value="13:30:00">13:30</option>
                        <option value="14:00:00">14:00</option>
                        <option value="14:30:00">14:30</option>
                        <option value="15:00:00">15:00</option>
                        <option value="15:30:00">15:30</option>
                        <option value="16:00:00">16:00</option>
                        <option value="16:30:00">16:30</option>
                        <option value="17:00:00">17:00</option>
                        <option value="17:30:00">17:30</option>
                        <option value="18:00:00">18:00</option>
                        
                    </select>
                            <input type='submit' value='VERIFICAR HORÁRIO'>
                            <br>
                            <br>
                            <br>
                             <input type='submit' value='AGENDAR'>
                </form>
                <br>
                
                   

        </div>

    </div>
</body>
</html>