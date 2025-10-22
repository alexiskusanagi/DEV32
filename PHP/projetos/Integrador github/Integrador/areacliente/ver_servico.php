<!-- aqui o cliente vê mais detalhes do serviço e realiza o agendamento -->

<?php
date_default_timezone_set('America/Sao_Paulo');

include("../utils/conectadb.php");
include("../utils/valida_cliente.php");



// COLETANDO O SERVIÇO SELECIONADO DO CATALOGO
$id = $_GET['id'] ?? $_POST['id'] ?? null;

if (!$id) {
    die("Serviço não encontrado.");
}

$sql = "SELECT * FROM catalogo WHERE CAT_ID = '$id'";
$enviaquery = mysqli_query($link, $sql);
if (!$enviaquery || mysqli_num_rows($enviaquery) === 0) {
    die("Serviço não encontrado.");
}
while ($tbl = mysqli_fetch_array($enviaquery)) {
    $id            = (int)$tbl[0];
    $nomeservico   = $tbl[1];
    $descricaoservico = $tbl[2];
    $precoservico  = (float)$tbl[3];
    $temposervico  = (int)$tbl[4]; // minutos
    $ativo         = $tbl[5];
    $imagem_atual  = $tbl[6];
}

// nova função - agendamento
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // verificar se nome do cliente vem na variável
    if ($nomecliente != null) {

        // COLETAR INPUTS
        $idservico   = $_POST['id'];
        $dataagenda  = $_POST['data'];
        $horaagenda  = $_POST['horario'];

        // calcular data/hora final (check-out automático às 11h do dia seguinte)
        $checkout = date("Y-m-d 11:00:00", strtotime($dataagenda . " +1 day"));
        $checkin = "$dataagenda $horaagenda";
        $agendamento = strtotime($checkin);
        $agora = time();

if ($agendamento <= $agora) {
    echo "<script>alert('Horário inválido. Escolha um horário futuro.');</script>";
    exit;
}


        // verificar conflito de agendamento
        $sqlverifica = "SELECT * FROM agenda 
                        WHERE ('$checkin' < CONCAT(AG_DATA, ' ', AG_HORA) AND '$checkout' > CONCAT(AG_DATA, ' ', AG_HORA))";
        $res = mysqli_query($link, $sqlverifica);

        if (mysqli_num_rows($res) > 0) {
            echo "<script>document.getElementById('msg').textContent = 'Horário indisponível. Escolha outro.';</script>";

        } else {
            // gravar agendamento no banco
            $sqlagendar = "INSERT INTO agenda (AG_HORA, AG_DATA, AG_STATUS, FK_CLI_ID, FK_CAT_ID , FK_FUN_ID) 
                           VALUES ('$horaagenda', '$dataagenda', 1, $idcliente, $id, NULL)";
            if (mysqli_query($link, $sqlagendar)) {
                    $idagenda = mysqli_insert_id($link); // pega o ID da agenda recém-criada

                    // grava a venda automaticamente com status pendente
                    $sqlvenda = "INSERT INTO venda (VEN_DATAHORA, VEN_TOTAL, FK_AG_ID, VEN_STATUS, VEN_CLI_ID)
                                VALUES (NOW(), $precoservico, $idagenda, 'pendente', $idcliente)";
                    
              
        if (mysqli_query($link, $sqlvenda)) {
        echo "<script>window.alert('Reserva e venda registradas com sucesso!');</script>";
    } else {
        echo "<script>window.alert('Reserva feita, mas houve erro ao registrar a venda.');</script>";
    }
    } else {
        echo "<script>window.alert('Erro ao agendar: " . mysqli_error($link) . "');</script>";
    }

    
        }

    } else {
        echo "<script>window.alert('NÃO LOGADO');</script>";
        echo "<script>window.location.href='login_cliente.php';</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="../css/catalogo.css">
  <link rel="stylesheet" href="../css/global.css">
  <!-- <link rel ="stylesheet" href ="../css/verservico.css"> -->
  <link href="https://fonts.cdnfonts.com/css/master-lemon" rel="stylesheet">
  <title>Agendamento de Serviços</title>
  <style>
    .login { max-width: 480px; }
    .login select, .login input[type="date"] { width: 100%; padding: 8px; margin: 6px 0; }
    .hint { font-size: 12px; color: #666; margin-top: 4px; white-space: pre-wrap; }
    .erro { color: #b00020; }
  </style>
</head>
<body>

<!-- nome do usuário logado no topo -->

<?php if(!isset($idcliente)){?>

        <!-- AQUI O CLIENTE NÃO FEZ LOGIN -->
        <div class='topo'>
            
            <h3>Usuário Não Logado</h3>
            <!-- BOTÃO DE FAZER LOGIN -->
            <div class='login'>
                <a href='/login_cliente.php'>
                    <img src='../icons/user2.png'width=50 height=50> <label>Login</label>
                </a>
            </div>
        </div>
<!-- FECHA PRA ABRIR -->
<?php }


else{?>
        <div class="topo">    <!--abrindo o class topo -->
            <!-- aqui vai trazer o nome do usuario logado -->
            <h3>Usuário(a):    <?php echo strtoupper($nomecliente)?></h3>
             <div class='login'>
                <a href='ver_perfil_cliente.php'>
                    <img src='../icons/user2.png'width=50 height=50 > <label>Ver Perfil</label>
                </a>
            </div>
            <!-- botao de encerramento de sessão -->
            <div class = "login" method='post'><a href ='logout_cliente.php'><img src='../icons/backspace.png' width=50 height=45 > <label>Logout</label></a></div>
        </div>  
        <!-- fechando o class topo -->
    

        <?php
     } ?>



<div class="global">

  <!-- IMAGEM DO SERVIÇO -->
  <div class="imagem">
    <img alt="Imagem do serviço" src="data:image/jpeg;base64,<?= $imagem_atual ?>">
  </div>

  <div class="formulario">

    <a href="catalogo.php"><img src="../icons/arrow47.png" width="50" height="50" alt="Voltar"></a>

    <!-- DETALHES DO SERVIÇO -->

     <form class="login" action="ver_servico.php" method="post">
      <input type="hidden" id="cat_id" value="<?= $id ?>">
      <input type="hidden" id="duracao" value="<?= $temposervico ?>"> <!-- minutos -->

      <label><b>NOME DO SERVIÇO</b></label>
      <label><?= htmlspecialchars($nomeservico) ?></label>
      <br>

      <label><b>DESCRIÇÃO</b></label>
      <label><?= htmlspecialchars($descricaoservico) ?></label>
      <br>

      <label><b>PREÇO</b></label>
      <label>R$ <?= number_format($precoservico, 2, ',', '.') ?></label>
      <br>

      <label><b>DURAÇÃO</b></label>
      <label>
        <?= $temposervico <= 59 ? $temposervico . " minuto(s)" : number_format($temposervico/60, 1, ',', '.') . " hora(s)" ?>
      </label>
    </form>

    <!-- FORM DE AGENDAMENTO -->
    <form class="login" id="formAgendamento" method="post" action="ver_servico.php">
      <input type='hidden' name='id' value='<?=$id?>'>


      

      <label for="data"><b>Data</b></label>
      <input type="date" name="data" id="data" required>
      <!-- <div class="hint">Os horários passados de hoje não serão exibidos.</div> -->

      <label for="horario"><b>Horário de Check-In</b></label>
      <select class="opt" name="horario" id="horario" required>
        <option value="">Selecione um horário</option>
      </select>

      <br>
      <input type="submit" value="AGENDAR">
    </form>

    <!-- mensagem em laranja abaixo do botão agendar -->
    <div id="msg" class="hint"></div>

  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const dataInput   = document.getElementById("data");
  const horarioSel  = document.getElementById("horario");
  const msgBox      = document.getElementById("msg");

  function setMsg(text, isError=false) {
    msgBox.textContent = text || "";
    msgBox.className = "hint" + (isError ? " erro" : "");
  }

  // Carrega horários disponíveis para check-in (sem vínculo com funcionário)
  function carregarHorarios() {
    const data = dataInput.value;

    horarioSel.innerHTML = "<option value=''>Carregando...</option>";
    setMsg("");

    if (!data) {
      horarioSel.innerHTML = "<option value=''>Selecione a data</option>";
      return;
    }

    // Gera horários fixos entre 06:00 e 22:00
    const horarios = [];
    for (let h = 6; h <= 22; h++) {
      const hora = h.toString().padStart(2, "0") + ":00";
      horarios.push(hora);
    }

    horarioSel.innerHTML = "";
    const first = document.createElement("option");
    first.value = "";
    first.textContent = "Selecione um horário";
    horarioSel.appendChild(first);

    horarios.forEach(h => {
      const opt = document.createElement("option");
      opt.value = h;
      opt.textContent = h;
      horarioSel.appendChild(opt);
    });
  }

  dataInput.addEventListener("change", carregarHorarios);

  
});

</script>
</body>
</html>