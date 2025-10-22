
<?php
date_default_timezone_set('America/Sao_Paulo');
include("../utils/conectadb.php");
include("../utils/valida_cliente.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Se o formulário foi enviado com nova data e hora
    if (isset($_POST['nova_data']) && isset($_POST['nova_hora'])) {
        $id_agendamento = intval($_POST['id']);
        $nova_data = $_POST['nova_data'];
        $nova_hora = $_POST['nova_hora'];

        // Verifica se o agendamento pertence ao cliente
        $sql = "SELECT AG_DATA, AG_HORA FROM agenda WHERE AG_ID = $id_agendamento AND FK_CLI_ID = $idcliente";
        $res = mysqli_query($link, $sql);

        if (mysqli_num_rows($res) === 0) {
            echo "<script>alert('Agendamento não encontrado ou não pertence ao cliente.'); window.location.href='ver_agenda_cliente.php';</script>";
            exit;
        }

        $agendamento = mysqli_fetch_array($res);
        $horaFormatada = date("H:i", strtotime($agendamento['AG_HORA']));
        $horario_agendado = strtotime($agendamento['AG_DATA'] . ' ' . $horaFormatada);
        $agora = time();

        if ($horario_agendado - $agora <= 1800) {
            echo "<script>alert('Não é possível alterar agendamentos com menos de 30 minutos de antecedência.'); window.location.href='ver_agenda_cliente.php';</script>";
            exit;
        }

        // Atualiza agendamento
        $sql_update = "UPDATE agenda SET AG_DATA = '$nova_data', AG_HORA = '$nova_hora' WHERE AG_ID = $id_agendamento";
        if (mysqli_query($link, $sql_update)) {
            echo "<script>alert('Agendamento alterado com sucesso!'); window.location.href='ver_agenda_cliente.php';</script>";
        } else {
            echo "<script>alert('Erro ao alterar agendamento.'); window.location.href='ver_agenda_cliente.php';</script>";
        }
        exit;
    }

    // Se o formulário foi acessado pela primeira vez (sem nova data/hora ainda)
    if (isset($_POST['id'])) {
        $id_agendamento = intval($_POST['id']);

        $sql = "SELECT AG_DATA, AG_HORA FROM agenda WHERE AG_ID = $id_agendamento AND FK_CLI_ID = $idcliente";
        $res = mysqli_query($link, $sql);

        if (mysqli_num_rows($res) === 0) {
            echo "<script>alert('Agendamento não encontrado ou não pertence ao cliente.'); window.location.href='ver_agenda_cliente.php';</script>";
            exit;
        }

        $agendamento = mysqli_fetch_array($res);
        $data_atual = $agendamento['AG_DATA'];
        $hora_atual = $agendamento['AG_HORA'];
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Alterar Agendamento</title>
  <link rel="stylesheet" href="../css/global_cliente.css">
  <link rel="stylesheet" href="../css/formulario.css">
  
</head>
<body>
 <div class="global">
  <h2>Alterar Agendamento</h2>

  <?php if (isset($data_atual) && isset($hora_atual)) { ?>
    <form action="agendamento_altera.php" method="post" class="login">
      <input type="hidden" name="id" value="<?= $id_agendamento ?>">

      <label for="nova_data">Nova data:</label>
      <input type="date" name="nova_data" value="<?= $data_atual ?>" required>

     <label for="nova_hora">Nova hora:</label>
        <select class="opt" name="nova_hora" id="nova_hora" required>
        <option value="">Selecione um horário</option>
        </select>

      <input type="submit" value="Confirmar alteração">
    </form>
  <?php } else { ?>
    <p>Agendamento inválido ou não selecionado.</p>
  <?php } ?>
</div>


<script>
document.addEventListener("DOMContentLoaded", () => {
  const horarioSel = document.getElementById("nova_hora");
  const horaAtual = "<?= date("H:i", strtotime($hora_atual)) ?>";

  const horarios = [];
  for (let h = 6; h <= 22; h++) {
    const hora = h.toString().padStart(2, "0") + ":00";
    horarios.push(hora);
  }

  horarios.forEach(h => {
    const opt = document.createElement("option");
    opt.value = h;
    opt.textContent = h;
    if (h === horaAtual) {
      opt.selected = true;
    }
    horarioSel.appendChild(opt);
  });
});
</script>


</body>
</html>
