<?php
include("utils/conectadb.php");
include("utils/verifica_login.php");

date_default_timezone_set('America/Sao_Paulo');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $nova_data = $_POST['nova_data'];
    $nova_hora = $_POST['nova_hora'];

    // Verifica o status atual do agendamento
    $sql_status = "SELECT AG_STATUS FROM agenda WHERE AG_ID = $id";
    $res_status = mysqli_query($link, $sql_status);
    $status_atual = mysqli_fetch_array($res_status)['AG_STATUS'];

    // Atualiza data, hora e reativa se estiver cancelado
    $sql = "UPDATE agenda 
            SET AG_DATA = '$nova_data', AG_HORA = '$nova_hora'" .
            ($status_atual == 0 ? ", AG_STATUS = 1" : "") .
            " WHERE AG_ID = $id";

    mysqli_query($link, $sql);

    header("Location: ver_agenda.php");
    exit;
}

// Se chegou via GET para exibir o formulário
$id = $_POST['id'] ?? $_GET['id'] ?? null;

if (!$id) {
    echo "ID de agendamento não fornecido.";
    exit;
}

$sql = "SELECT AG_DATA, AG_HORA FROM agenda WHERE AG_ID = $id";
$result = mysqli_query($link, $sql);
$dados = mysqli_fetch_array($result);

$data_atual = $dados['AG_DATA'];
$hora_atual = $dados['AG_HORA'];
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Alterar Agendamento</title>
    <link rel="stylesheet" href="css/formulario.css">
    <link rel="stylesheet" href="css/global.css">
</head>
<body>
<div class="global">
    <h2>Alterar Agendamento (Backoffice)</h2>
    <form action="agendamento_altera_backoffice.php" method="post" class="login">
        <input type="hidden" name="id" value="<?= $id ?>">
        <label>Nova data:</label>
        <input type="date" name="nova_data" value="<?= $data_atual ?>" required><br><br>

        <label>Nova hora:</label>
        <select name="nova_hora" required>
            <?php
            for ($h = 6; $h <= 22; $h++) {
                $hora = str_pad($h, 2, "0", STR_PAD_LEFT) . ":00";
                $selected = ($hora == date("H:i", strtotime($hora_atual))) ? "selected" : "";
                echo "<option value='$hora' $selected>$hora</option>";
            }
            ?>
        </select><br><br>

        <button type="submit">Salvar Alterações</button>
    </form>
</div>
</body>
</html>
