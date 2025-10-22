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
    <link rel ="stylesheet" href ="css/altera_servico.css">
    <link rel ="stylesheet" href ="css/home.css">
    <link rel ="stylesheet" href ="css/topo.css">
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>CADASTRO DE SERVIÇOS</title>
</head>
<body>
   
        <!-- ajuste da imagem a parte -->
    <div class="formulario-duplo">
  <!-- Bloco da imagem -->
   <div class="formulario-clone">
    <label>IMAGEM DO SERVIÇO</label>
    <div class="imagem-preview">
      <img src="data:image/jpeg;base64,<?= $imagem_atual ?>" alt="Imagem do serviço">
    </div>
  </div>

  <!-- Bloco do formulário -->
  <div class="formulario-clone">
    <!-- Botão de voltar -->
    <a href="servico_lista.php" class="botao-voltar">
      <img src="icons/arrow47.png" width="50" height="50" alt="Voltar">
    </a>
    <form class="login" action="servico_altera.php" method="post" enctype="multipart/form-data">
      <input type="hidden" name="id" value="<?= $id ?>">

      <label for="txtnome">NOME DO SERVIÇO</label>
      <input type="text" id="txtnome" name="txtnome" value="<?= $nomeservico ?>" required>

      <label for="txtdescricao">DESCRIÇÃO</label>
      <textarea id="txtdescricao" name="txtdescricao"><?= $descricaoservico ?></textarea>

      <label for="txtpreco">PREÇO</label>
      <input type="text" id="txtpreco" name="txtpreco" value="<?= $precoservico ?>">

      <label for="txttempo">DURAÇÃO</label>
      <input type="number" id="txttempo" name="txttempo" value="<?= $temposervico ?>" required>

      <label for="imagem">UPLOAD DE IMAGEM</label>
      <input type="file" id="imagem" name="imagem">

      <label>STATUS DO SERVIÇO</label>
      <div class="rbativo">
        <input type="radio" id="ativo" name="ativo" value="1" <?= $ativo ? 'checked' : '' ?>>
        <label for="ativo">ATIVO</label>
        <input type="radio" id="inativo" name="ativo" value="0" <?= !$ativo ? 'checked' : '' ?>>
        <label for="inativo">INATIVO</label>
      </div>

      <input type="submit" value="ALTERAR">
    </form>
  </div>
</div>


    <div class="fundo-translucido"></div>
</body>
</html>