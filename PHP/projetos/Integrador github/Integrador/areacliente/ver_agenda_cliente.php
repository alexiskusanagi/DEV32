<?php
date_default_timezone_set('America/Sao_Paulo');

include("../utils/conectadb.php");
include("../utils/valida_cliente.php");

$sql = "SELECT AG_ID, AG_DATA, AG_HORA, AG_STATUS, CAT_NOME, CAT_PRECO, CAT_TEMPO 
        FROM agenda 
        INNER JOIN catalogo ON FK_CAT_ID = CAT_ID 
        WHERE FK_CLI_ID = $idcliente 
        ORDER BY AG_DATA DESC, AG_HORA ASC";

$resultado = mysqli_query($link, $sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Minhas Reservas</title>
  <link rel="stylesheet" href = "css/lista.css">
  <link rel="stylesheet" href="../css/global_cliente.css">
  
</head>
<body>
  <div class="global">

 <header> 
<div class='menutopo'>
            <a href='../start_home.php'> <img src= "../icons/kinder haus logo 1.jpg" width="100" height="100">  </a>
               <a href='../sobre.html'> SOBRE </a>
               <a href='../estrutura_kinder_haus.html'> ESTRUTURA </a>
                </div>

    </header>

    <h2>Reservas de <?= strtoupper($nomecliente) ?></h2>

    <table>
      <tr>
        <th class="id">ID</th>
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
        $tempoRestante = ($agendamento - $agora) / 60; // minutos
        $podeAlterarCancelar = $tempoRestante > 30;

      ?>
        <tr>
          
          <td class="id"><?= $ag['AG_ID'] ?></td>
          <td><?= htmlspecialchars($ag['CAT_NOME']) ?></td>
          <td><?= date("d/m/Y", strtotime($ag['AG_DATA'])) ?></td>
          <td><?= date("H:i", strtotime($ag['AG_HORA'])) ?></td>
            <td class="<?= $ag['AG_STATUS'] == '1' ? 'status-confirmado' : 'status-cancelado' ?>">
             <?= $ag['AG_STATUS'] == '1' ? 'Confirmado' : 'Cancelado' ?>
            </td>
          <td><?= $ag['CAT_TEMPO'] <= 59 ? $ag['CAT_TEMPO'] . " min" : number_format($ag['CAT_TEMPO']/60, 1) . " h" ?></td>
          <td>R$ <?= number_format($ag['CAT_PRECO'], 2, ',', '.') ?></td>
          <td>


           <?php
                $duracaoSegundos = $ag['CAT_TEMPO'] * 60;
                $horarioFim = $agendamento + $duracaoSegundos;
                $estadiaConcluida = $ag['AG_STATUS'] == '1' && $agora > ($horarioFim + 60);

                if ($estadiaConcluida) {
                  echo "<span class='concluida'>Estadia concluída</span>";
                } elseif ($podeAlterarCancelar && $ag['AG_STATUS'] == '1') { ?>
                  <form action="agendamento_altera.php" method="post" style="display:inline;" onsubmit="return confirm('Deseja alterar esta reserva?');">
                    <input type="hidden" name="id" value="<?= $ag['AG_ID'] ?>">
                    <button type="submit" class="alterar">Alterar</button>
                  </form>
                  <form action="agendamento_cancela.php" method="post" style="display:inline;" onsubmit="return confirm('Tem certeza que deseja cancelar esta reserva?');">
                    <input type="hidden" name="id" value="<?= $ag['AG_ID'] ?>">
                    <button type="submit" class="cancelar">Cancelar</button>
                  </form>
                <?php } elseif ($ag['AG_STATUS'] != '1') { ?>
                  <span class="cancelada">Reserva cancelada</span>
                <?php } else { ?>
                  <span class="bloqueado">Alteração indisponível (menos de 30 min)</span>
                <?php } ?>



          </td>
        </tr>
      <?php } ?>
    </table>
  </div>
</body>
</html>
