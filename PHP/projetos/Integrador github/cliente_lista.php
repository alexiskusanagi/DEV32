<?php
// conexo com banco - ok 
include("utils/conectadb.php");
include("utils/verifica_login.php");


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
    <link rel = "stylesheet" href = css/home.css>
    <link rel="stylesheet" href = "css/lista.css">
    <link rel = "stylesheet" href = css/topo.css> 

    <title>LISTA DE CLIENTES</title>
</head>
<body>
<div class ='global'> 
    <div class='tabela'> 
        <!-- botao voltar -->
        
    
     <div class="reservas">
        
    <h2>Lista de Clientes </h2>
    <a href="backoffice_kinder_haus.php"><img src='icons/arrow47.png' width=50 height=50></a>
</div>

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
                <th>DEPENDENTE 1</th>
                <th>IDADE DEPENDENTE 1</th>
                <th>DEPENDENTE 2</th>
                <th>IDADE DEPENDENTE 2</th>
                <th>DEPENDENTE 3</th>
                <th>IDADE DEPENDENTE 3</th>
                <th>DEPENDENTE 4</th>
                <th>IDADE DEPENDENTE 4</th>
                <th>DEPENDENTE 5</th>
                <th>IDADE DEPENDENTE 5</th>
                <th>DEPENDENTE 6</th>
                <th>IDADE DEPENDENTE 6</th>
                <th>RESPONSÁVEL ALTERNATIVO 1</th>
                <th>CONTATO DO RESPONSÁVEL ALTERNATIVO 1</th>
                <th>RESPONSÁVEL ALTERNATIVO 2</th>
                <th>CONTATO DO RESPONSÁVEL ALTERNATIVO 2</th>
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
                    <td><?=$tbl[5]?></td>  <!-- Coleta data de nascimento do cliente[5] lembrando que [6] é a senha e não a coletamos -->
                    <td><?=$tbl[7]?></td>  <!-- Coleta nome da criança 1 do cliente[7] -->
                    <td><?=$tbl[8]?></td>  <!-- Coleta idade da criança 1 do cliente[8] -->
                    <td><?=$tbl[9]?></td>  <!-- Coleta nome da criança 2 do cliente[9] -->
                    <td><?=$tbl[10]?></td> <!-- Coleta idade da criança 2 do cliente[10] -->
                    <td><?=$tbl[11]?></td> <!-- Coleta nome da criança 3 do cliente[11] -->
                    <td><?=$tbl[12]?></td> <!-- Coleta idade da criança 3 do cliente[12] -->
                    <td><?=$tbl[13]?></td> <!-- Coleta nome da criança 4 do cliente[13] -->
                    <td><?=$tbl[14]?></td> <!-- Coleta idade da criança 4 do cliente[14] -->
                    <td><?=$tbl[15]?></td> <!-- Coleta nome da criança 5 do cliente[15] -->
                    <td><?=$tbl[16]?></td> <!-- Coleta idade da criança 5 do cliente[16] -->
                    <td><?=$tbl[17]?></td> <!-- Coleta nome da criança 6 do cliente[17] -->
                    <td><?=$tbl[18]?></td> <!-- Coleta idade da criança 6 do cliente[18] -->
                    <td><?=$tbl[19]?></td> <!-- Coleta nome do responsável alternativo 1 do cliente[19] -->
                    <td><?=$tbl[20]?></td> <!-- Coleta telefone do responsável alternativo 1 do cliente[20] -->
                    <td><?=$tbl[21]?></td> <!-- Coleta nome do responsável alternativo 2 do cliente[21] -->
                    <td><?=$tbl[22]?></td> <!-- Coleta telefone do responsável alternativo 2 do cliente[22] -->

                    <!-- USANDO GET BRABO pro botao alterar -->
                    <td><a href='cliente_altera.php?id=<?= $tbl[0]?>'><img src='icons/pencil30.png' width=50 height=30 style='border: 2px solid #3b5e47 ; border-radius: 1px; margin: 2px;'></a></td>


            </tr>
            <?php
            }
            ?>
         </table>
</div>

</div>



    <div class="fundo-translucido"></div>
</body>
</html>