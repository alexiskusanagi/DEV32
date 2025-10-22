<?php
// conexão com banco e verificação de login falta o css
include("utils/conectadb.php");
include("utils/verifica_login.php");

// consulta de vendas com dados relacionados
$sql = "SELECT 
            venda.VEN_ID,
            venda.VEN_DATAHORA,
            venda.VEN_TOTAL,
            venda.VEN_STATUS,
            clientes.CLI_NOME,
            catalogo.CAT_NOME,
            agenda.AG_DATA,
            agenda.AG_HORA
        FROM venda
        INNER JOIN clientes ON venda.VEN_CLI_ID = clientes.CLI_ID
        INNER JOIN agenda ON venda.FK_AG_ID = agenda.AG_ID
        INNER JOIN catalogo ON agenda.FK_CAT_ID = catalogo.CAT_ID
        ORDER BY VEN_DATAHORA DESC";

$result = mysqli_query($link, $sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/lista.css">
    <link rel="stylesheet" href="css/topo.css">
    <title>Vendas e Pagamentos</title>
</head>
<body>
<div class="global">
    <div class="tabela">
        <!-- botão voltar -->
        <div class="reservas">
        
    <h2>Lista de Vendas </h2>
    <a href="backoffice_kinder_haus.php"><img src='icons/arrow47.png' width=50 height=50></a>
</div>

       
        <table>
            <tr>
                <th>ID</th>
                <th>Data/Hora</th>
                <th>Cliente</th>
                <th>Serviço</th>
                <th>Data Reserva</th>
                <th>Hora</th>
                <th>Total</th>
                <th>Status</th>
                <th>Ações</th>

            </tr>
            <?php while($row = mysqli_fetch_assoc($result)) { ?>
            <tr class="linha">
                <td><?= $row['VEN_ID'] ?></td>
                <td><?= $row['VEN_DATAHORA'] ?></td>
                <td><?= $row['CLI_NOME'] ?></td>
                <td><?= $row['CAT_NOME'] ?></td>
                <td><?= $row['AG_DATA'] ?></td>
                <td><?= $row['AG_HORA'] ?></td>
                <td>R$ <?= number_format($row['VEN_TOTAL'], 2, ',', '.') ?></td>
                <td><?= ucfirst($row['VEN_STATUS']) ?></td>

                <td>
                    <form method="post" action="venda_status.php" style="display:inline;">
                        <input type="hidden" name="id" value="<?= $row['VEN_ID'] ?>">
                        <input type="hidden" name="status" value="pago">
                        <input type="submit" value="Pagar">
                    </form>

                     <form method="post" action="venda_status.php" style="display:inline;">
                        <input type="hidden" name="id" value="<?= $row['VEN_ID'] ?>">
                        <input type="hidden" name="status" value="pendente">
                        <input type="submit" value="Pgto Pendente">
                    </form>

                    <form method="post" action="venda_status.php" style="display:inline;">
                        <input type="hidden" name="id" value="<?= $row['VEN_ID'] ?>">
                        <input type="hidden" name="status" value="cancelado">
                        <input type="submit" value="Cancelar">
                    </form>
                </td>

            </tr>
            <?php } ?>
        </table>
    </div>
</div>
<div class="fundo-translucido"></div>
</body>
</html>
