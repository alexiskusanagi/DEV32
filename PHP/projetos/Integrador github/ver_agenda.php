<?php
include("utils/conectadb.php");
include("utils/verifica_login.php");

date_default_timezone_set('America/Sao_Paulo');

// Filtro de status
$filtro = 'todos';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $filtro = $_POST['filtro'];
}

$sql = "SELECT AG_ID, AG_DATA, AG_HORA, AG_STATUS, CAT_NOME, CAT_PRECO, CAT_TEMPO, CLI_NOME 
        FROM agenda 
        INNER JOIN catalogo ON FK_CAT_ID = CAT_ID 
        INNER JOIN clientes ON FK_CLI_ID = CLI_ID";

if ($filtro == 'confirmados') {
    $sql .= " WHERE AG_STATUS = 1";
} elseif ($filtro == 'cancelados') {
    $sql .= " WHERE AG_STATUS = 0";
} elseif ($filtro == 'concluidos') {
    $agora = time();
    $sql .= " WHERE AG_STATUS = 1 AND (AG_DATA < CURDATE() OR (AG_DATA = CURDATE() AND ADDTIME(AG_HORA, SEC_TO_TIME(CAT_TEMPO*60)) < CURTIME()))";
}

$sql .= " ORDER BY AG_DATA DESC, AG_HORA ASC";
$resultado = mysqli_query($link, $sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Agenda Geral</title>
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/lista.css">
    <link rel="stylesheet" href="css/topo.css">
</head>
<body>
<div class="global">
    <div class="reservas">
        
    <h2>Agendamentos </h2>
    <a href="backoffice_kinder_haus.php"><img src='icons/arrow47.png' width=50 height=50></a>
</div>
    

    <form action="ver_agenda.php" method="post">
        <div class="filtro">
            <input type="radio" name="filtro" value="confirmados" onclick="submit()" <?= $filtro == 'confirmados' ? 'checked' : '' ?>>CONFIRMADOS
            <input type="radio" name="filtro" value="cancelados" onclick="submit()" <?= $filtro == 'cancelados' ? 'checked' : '' ?>>CANCELADOS
            <input type="radio" name="filtro" value="concluidos" onclick="submit()" <?= $filtro == 'concluidos' ? 'checked' : '' ?>>CONCLUÍDOS
            <input type="radio" name="filtro" value="todos" onclick="submit()" <?= $filtro == 'todos' ? 'checked' : '' ?>>TODOS
        </div>
    </form>

    <table>
        <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Serviço</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Status</th>
            <th>Duração</th>
            <th>Preço</th>
            <th>Ações</th>
        </tr>

        <?php while ($ag = mysqli_fetch_array($resultado)) {
            $agendamento = strtotime($ag['AG_DATA'] . ' ' . $ag['AG_HORA']);
            $agora = time();
            $duracaoSegundos = $ag['CAT_TEMPO'] * 60;
            $horarioFim = $agendamento + $duracaoSegundos;
            $estadiaConcluida = $ag['AG_STATUS'] == 1 && $agora > ($horarioFim + 60);
        ?>
        <tr>
            <td><?= $ag['AG_ID'] ?></td>
            <td><?= htmlspecialchars($ag['CLI_NOME']) ?></td>
            <td><?= htmlspecialchars($ag['CAT_NOME']) ?></td>
            <td><?= date("d/m/Y", strtotime($ag['AG_DATA'])) ?></td>
            <td><?= date("H:i", strtotime($ag['AG_HORA'])) ?></td>
            <td><?= $ag['AG_STATUS'] == 1 ? 'Confirmado' : 'Cancelado' ?></td>
            <td><?= $ag['CAT_TEMPO'] <= 59 ? $ag['CAT_TEMPO'] . " min" : number_format($ag['CAT_TEMPO']/60, 1) . " h" ?></td>
            <td>R$ <?= number_format($ag['CAT_PRECO'], 2, ',', '.') ?></td>
            <td>
                <?php if ($ag['AG_STATUS'] == 1 && $estadiaConcluida) { ?>
                    <a href="agendamento_altera_backoffice.php?id=<?= $ag['AG_ID'] ?>"> <!-- linha inserida -->
                        <button type="button">Alterar</button> <!-- linha inserida -->
                    </a> <!-- linha inserida -->
                    <span class="concluida">Estadia concluída</span>
                <?php } elseif ($ag['AG_STATUS'] == 1) { ?>


                    <a href="agendamento_altera_backoffice.php?id=<?= $ag['AG_ID'] ?>">
                        <button type="button">Alterar</button>
                    </a>

                    <form action="agendamento_cancela_backoffice.php" method="post" style="display:inline;">
                        <input type="hidden" name="id" value="<?= $ag['AG_ID'] ?>">
                        <button type="submit" class="cancelar">Cancelar</button>
                    </form>
                <?php } else { ?>
                        <a href="agendamento_altera_backoffice.php?id=<?= $ag['AG_ID'] ?>">
                            <button type="button">Alterar</button>
                        </a>
                        <span class="cancelada">Reserva cancelada</span>
                    <?php } ?>

            </td>
        </tr>
        <?php } ?>
    </table>
</div>
<div class="fundo-translucido"></div>
</body>
</html>
