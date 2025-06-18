<?php
// conexo com banco
include("utils/conectadb.php");
include("utils/verificalogin.php");

// traz funcionários do banco
$sqlfun = "SELECT * FROM funcionarios INNER JOIN usuarios ON FK_FUN_ID = FUN_ID";
$enviaquery =mysqli_query($link, $sqlfun);

// $sqlusu = "SELECT * FROM usuarios";
// $enviaquery2 =mysqli_query($link, $sqlusu);


?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href = "css/testeglobal.css">
    <link rel="stylesheet" href = "css/lista.css">

    <title>LISTA FUNCIONÁRIOS</title>
</head>
<body>
<div class ='global'> 
    <div class='tabela'> 
        <!-- botao voltar -->
    <a href="backoffice.php"><img src='icons/arrow47.png' width=50 height=50></a>
        <table>
            <tr>
                <th>ID FUNCIONARIO</th>
                <th>NOME</th>
                <th>CPF</th>
                <th>FUNÇÃO</th>
                <th>CONTATO</th>
                <th>STATUS</th>
                <!-- DADOS DO USUÁRIO -->
                <th>LOGIN</th>
                <th>CADASTRO NO SISTEMA</th>
                <th>ALTERAÇÃO</th>

            </tr>
            <!-- COMEÇANDO O PHP -->
            <?php
            while($tbl = mysqli_fetch_array($enviaquery)){
                // while($tbl2 = mysqli_fetch_array($enviaquery2)){

            ?>
            <tr>
                    <td><?=$tbl[0]?></td>  <!-- Coleta codigo do fun[0] -->
                    <td><?=$tbl[1]?></td>  <!-- Coleta nome do fun[1] -->
                    <td><?=$tbl[2]?></td>  <!-- Coleta cpf do fun[2] -->
                    <td><?=$tbl[3]?></td>  <!-- Coleta função do fun[3] -->
                    <td><?=$tbl[4]?></td>  <!-- Coleta contato do fun[4] -->
                    <td><?=$tbl[5]==1? 'ATIVO':'INATIVO'?></td>  <!-- Coleta ativo do fun[5] -->
                                <!-- dados do usuário  -->
                    <td><?=$tbl[7]?></td>  <!-- Coleta login do usu[7] -->
                    <td><?=$tbl[10]==1? 'SIM': 'NÃO'?></td>  <!-- Coleta status do usu (se ativo ou inativo)[10] -->
                    <td><a href='funcionario_altera.php?id=<?=$tbl[0]?>'><button>ALTERAR</button></a></td>  <!-- Botao Altera dados do fun[7] -->
                    

            </tr>
            <?php
            }
            ?>
         </table>
</div>

</div>



    
</body>
</html>