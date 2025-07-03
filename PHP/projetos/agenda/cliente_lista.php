<?php
// conexo com banco
include("utils/conectadb.php");
include("utils/verificalogin.php");

// traz clientes do banco
$sqlcli = "SELECT * FROM clientes";
$enviaquery =mysqli_query($link, $sqlcli);

//Aqui se filtram minhas escolhas
$ativo = 1;

// agora funções de cada click
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $ativo =$_POST['filtro'];

    if($ativo ==1){
        $sql = "SELECT * FROM clientes  WHERE CLI_ATIVO = 1";
        $enviaquery = mysqli_query($link, $sql);
    }

    else if ($ativo ==2){
        $sql = "SELECT * FROM clientes";
        $enviaquery = mysqli_query($link, $sql);
    }

    else{
        $sql = "SELECT * FROM clientes  WHERE CLI_ATIVO = 0";
        $enviaquery = mysqli_query($link, $sql);
    }
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href = "css/testeglobal.css">
    <link rel="stylesheet" href = "css/lista.css">

    <title>LISTA DE CLIENTES</title>
</head>
<body>
<div class ='global'> 
    <div class='tabela'> 
        <!-- botao voltar -->
    <a href="backoffice.php"><img src='icons/arrow47.png' width=50 height=50></a>

<!-- CRIAÇÃO DE FILTRO DE TABLE -->
<form action="cliente_lista.php" method="post">
    <div class='filtro'>
         <input type="radio" name="filtro" value="1" required onclick="submit()" <?=$ativo == "1"? "checked":""?> >ATIVOS
            
         <input type="radio" name="filtro" value="0" required onclick="submit()" <?=$ativo == "0"? "checked":""?> >INATIVOS
            
         <input type="radio" name="filtro" value="2" required onclick="submit()" <?=$ativo == "2"? "checked":""?> >TODOS

    </div>
 </form>


        <table>
            <tr>
                <th>ID CLIENTE</th>
                <th>NOME</th>
                <th>CPF</th>
                <th>CONTATO</th>
                <th>STATUS</th>
                <th>DATA DE NASCIMENTO</th>
                <th>ALTERAÇÃO</th>
              

            </tr>
            <!-- COMEÇANDO O PHP -->
            <?php
            while($tbl = mysqli_fetch_array($enviaquery)){
                // while($tbl2 = mysqli_fetch_array($enviaquery2)){

            ?>
            <tr class='linha'>
                    <td><?=$tbl[0]?></td>  <!-- Coleta codigo do cliente[0] -->
                    <td><?=$tbl[1]?></td>  <!-- Coleta nome do cliente[1] -->
                    <td><?=$tbl[2]?></td>  <!-- Coleta cpf do cliente[2] -->
                    <td><?=$tbl[3]?></td>  <!-- Coleta contato do cliente[3] -->
                    <td><?=$tbl[4]==1? 'ATIVO':'INATIVO'?></td>  <!-- Coleta ativo do cliente[4] -->
                    <td><?=$tbl[5]?></td>  <!-- Coleta data de nascimento do cliente[5] -->

                    <!-- USANDO GET BRABO pro botao alterar -->
                    <td><a href='cliente_altera.php?id=<?= $tbl[0]?>'><img src='icons/pencil1.png' width=20 height=20 style='border: 2px solid rgb(20, 133, 185) ; border-radius: 1px; margin: 2px;'></a></td>


            </tr>
            <?php
            }
            ?>
         </table>
</div>

</div>



    
</body>
</html>