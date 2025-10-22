<?php
date_default_timezone_set('America/Sao_Paulo');
include("../utils/conectadb.php");
include("../utils/valida_cliente.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id_agendamento = intval($_POST['id']);

    // Verifica se o agendamento pertence ao cliente
    $sql = "SELECT AG_DATA, AG_HORA FROM agenda WHERE AG_ID = $id_agendamento AND FK_CLI_ID = $idcliente";
    $res = mysqli_query($link, $sql);

    if (mysqli_num_rows($res) === 0) {
        echo "<script>alert('Agendamento não encontrado ou não pertence ao cliente.'); window.location.href='ver_agenda_cliente.php';</script>";
        exit;
    }

    // Verifica se ainda há tempo para cancelar
    $agendamento = mysqli_fetch_array($res);
    $horaFormatada = date("H:i", strtotime($agendamento['AG_HORA']));
    $horario_agendado = strtotime($agendamento['AG_DATA'] . ' ' . $horaFormatada);

    $agora = time();

    if ($horario_agendado - $agora <= 1800) {
        echo "<script>alert('Não é possível cancelar agendamentos com menos de 30 minutos de antecedência.'); window.location.href='ver_agenda_cliente.php';</script>";
        exit;
    }

    // Cancela agendamento (status = 0)
    $sql_cancelar = "UPDATE agenda SET AG_STATUS = 0 WHERE AG_ID = $id_agendamento";
    if (mysqli_query($link, $sql_cancelar)) {
        echo "<script>alert('Agendamento cancelado com sucesso.'); window.location.href='ver_agenda_cliente.php';</script>";
    } else {
        echo "<script>alert('Erro ao cancelar agendamento.'); window.location.href='ver_agenda_cliente.php';</script>";
    }
}
?>
