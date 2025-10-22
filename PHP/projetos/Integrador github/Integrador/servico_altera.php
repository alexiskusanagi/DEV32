<?php
include("utils/conectadb.php");
include("utils/verifica_login.php");

// Obtém o ID do serviço a ser alterado - está ok
// Tenta primeiro pegar da URL (GET), mas se for um POST (submissão do formulário), pega do POST
$id = $_GET['id'] ?? $_POST['id'] ?? null;

// Verifica se o ID está presente. Se não estiver, interrompe o script e exibe erro
if (!$id) {
    die("ID do serviço não especificado.");
}

// Monta a query para buscar o serviço no banco com base no ID
$sql = "SELECT * FROM catalogo WHERE CAT_ID = $id";

// Executa a query
$enviaquery = mysqli_query($link, $sql);

// Verifica se a consulta falhou. Se sim, exibe erro detalhado do banco
if (!$enviaquery) {
    die("Erro ao buscar serviço: " . mysqli_error($link));
}

// Obtém o resultado da consulta (espera-se apenas uma linha, então usamos `mysqli_fetch_array`)
$tbl = mysqli_fetch_array($enviaquery);

// Atribui os valores do banco às variáveis que serão usadas no formulário
// Isso garante que, mesmo antes de enviar o POST, os campos já venham preenchidos corretamente
$nomeservico       = $tbl[1]; // CAT_NOME
$descricaoservico  = $tbl[2]; // CAT_DESCRICAO
$precoservico      = $tbl[3]; // CAT_PRECO
$temposervico      = $tbl[4]; // CAT_TEMPO
$ativo             = $tbl[5]; // CAT_ATIVO
$imagem_atual      = $tbl[6]; // CAT_IMAGE (em base64)



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nomeservico = $_POST['txtnome'];
    $descricaoservico = $_POST['txtdescricao'];
    $precoservico = $_POST['txtpreco'];
    $temposervico = $_POST['txttempo'];
    $ativo = $_POST['ativo'];

    // Assume imagem atual
    $imagem_base64 = $imagem_atual;

    // Verifica se foi enviada nova imagem
    if (isset($_FILES['imagem']) && $_FILES['imagem']['error'] == UPLOAD_ERR_OK) {
        $imagem_temp = $_FILES['imagem']['tmp_name'];
        $imagem = file_get_contents($imagem_temp);
        $imagem_base64 = base64_encode($imagem); 
    }

    // Monta a query (imagem só é atualizada se mudou)
    $sql = "UPDATE catalogo SET 
        CAT_NOME = '$nomeservico',
        CAT_DESCRICAO = '$descricaoservico',
        CAT_PRECO = '$precoservico',
        CAT_TEMPO = '$temposervico',
        CAT_ATIVO = '$ativo',
        CAT_IMAGE = '$imagem_base64'
        WHERE CAT_ID = '$id'";

    $enviaquery = mysqli_query($link, $sql);

    if (!$enviaquery) {
        die("Erro ao atualizar: " . mysqli_error($link));
    }

    echo "<script>window.alert('SERVIÇO ALTERADO COM SUCESSO');</script>";
    echo "<script>window.location.href='servico_lista.php';</script>";
    exit;
}


   




?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href ="css/catalogo.css">
    <link rel ="stylesheet" href ="css/global.css">
    <link rel ="stylesheet" href ="css/altera_servico.css">
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>CADASTRO DE SERVIÇOS</title>
</head>
<body>
    <div class = "global"> 
        <!-- ajuste da imagem a parte -->
         <label>IMAGEM</label>
         
         <img name='imagem_atual' src="data:image/jpeg;base64,<?= $imagem_atual?>">
        
    </div>

        <div class ="formulario"><a href="servico_lista.php"><img src='icons/arrow47.png' width=50 height=50 ></a>
                <form class='login' action ="servico_altera.php" method ="post" enctype='multipart/form-data' > 
                    

                <!-- quando gravar ele coleta o que veio do banco para fazer o update -->
                <input type = 'hidden' name = 'id' value= '<?= $id?>'>
                
                <label>NOME DO SERVIÇO</label>
                    
                    <input type='text' name ="txtnome" placeholder='Digite nome do serviço' value=<?=$nomeservico?> required>
                    <br>
                    <label>DESCRIÇÃO</label>
                    
                    <textarea name='txtdescricao'> <?=$descricaoservico?> </textarea>
                    <br>
                   
                    <label>PREÇO</label> 
                    
                    <input type='decimal' name="txtpreco" placeholder='HUE$' value=<?=$precoservico?> >
                    <br>
                    
                    
                    <!-- agora cadastramos o usuario -->
                    <label>DURAÇÃO</label>

                    <input type ='number' name="txttempo" placeholder='Digite o tempo em minutos' value=<?=$temposervico?> required>

                    <!-- <select name='txttempo' class ='opt'>
                        <option value='<?php= $temposervico?>'><?= $temposervico?></option>
                        <option value='0'>INDISPONÍVEL</option>
                        <option value='30'>30 MINUTOS</option>
                        <option value='60'>1 HORA</option>
                        <option value='90'>1 HORA E 30 MINUTOS</option>
                        <option value='120'>2 HORAS</option>
                        <option value='150'>2 HORAS E 30 MINUTOS</option>
                        <option value='180'>3 HORAS</option>
                        <option value='210'>3 HORAS E 30 MINUTOS</option>
                        <option value='240'>4 HORAS</option>
                     </select> -->

                    <!-- input de imagem para o banco de dados -->
                    <br>
                    <label>FAÇA O UPLOAD DA IMAGEM</label>
                    <input type ='file' name='imagem' >

                    <br> 

                    <label>STATUS DO SERVIÇO</label>
                    <div class='rbativo'>
                        
                        <input type ="radio" name="ativo" id="ativo" value="1" checked><label>ATIVO</label>
                        <br> 

                        <input type ="radio" name="ativo" id="inativo" value="0" ><label>INATIVO</label>
                    </div>  


                    <!-- APRESENTAÇÃO DA IMAGEM -->
                     <div id = 'cat_imagem'> <img src= 'data:image/jpeg;base64, <?=$imagem_atual?>' width=100 height=100> </div>
                    <br> 

                     

                    <input type ='submit' value = 'ALTERAR'>

                </form>
                <br>
                

        </div>

    </div>
</body>
</html>