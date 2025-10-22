<?php
include("../utils/conectadb.php");
include("../utils/valida_cliente.php");
include("../utils/topo_areacliente.php");

// FAZER O INCLUDE DO VALIDACLIENTE
// include("../utils/valida_cliente.php");

$sql = "SELECT * FROM catalogo WHERE CAT_ATIVO = 1";
$enviaquery = mysqli_query($link, $sql);

?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "../css/catalogo.css">
    <link rel = "stylesheet" href = ../css/home.css>  
    <link rel ="stylesheet" href ="../css/topo.css"> 
    
    <title>CATALOGO KINDER HAUS</title>
</head>
<body>
    <!-- abrindo o class global -->
<div class ="global"> 

<label class="label4">Faça Sua Reserva</label>

<div class="content2">
  <div class="menus33">
    <?php while($retorno = mysqli_fetch_array($enviaquery)) { ?>
      <div class="menu33">
        <div class="cabecalho-servico">
          <label class="label2"><?= $retorno[1] ?></label>
          <img src="data:image/jpeg;base64,<?= $retorno[6] ?>" width="200" height="200">
        </div>

        <div class="texto-card">
          <label>Descrição</label><br>
          <span><?= $retorno[2] ?></span><br><br>

          <label>Tempo de Estadia</label><br>
          <span><?= $retorno[4] <= 59 ? $retorno[4] . " Minutos" : ($retorno[4] / 60) . " Hora(s)" ?></span>
        </div>

        <label class="label2">Preço do Serviço</label><br><br>
        <label class="label3">R$ <?= $retorno[3] ?></label>
        
      <div class="redirecionar">
        <a href="ver_servico.php?id=<?= $retorno[0] ?>">Agendar Reserva</a>
      </div>
    </div>
  <?php } ?>
</div>



</div>  <!-- fechando o class global -->



<div class="fundo-translucido"></div>
    
</body>
</html>