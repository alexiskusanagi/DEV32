<?php
// conexo com banco
include("utils/conectadb.php");
include("utils/verificalogin.php");

// traz clientes do banco
// $sqlagenda = "SELECT * FROM agenda WHERE FK_FUN_ID = $id";
// $enviaquery =mysqli_query($link, $sqlagenda);



// agora funções de cada click
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $filtrodata =$_POST['filtrodata'];

    if($ativo ==1){
         $sql = "SELECT * FROM funcionarios INNER JOIN clientes ON FK_FUN_ID = FUN_ID WHERE FUN_ATIVO = 1";
        $enviaquery = mysqli_query($link, $sql);
    }

    else if ($ativo ==2){
        $sql = "SELECT * FROM funcionarios INNER JOIN clientes ON FK_FUN_ID = FUN_ID";
        $enviaquery = mysqli_query($link, $sql);
    }

    else{
        $sql = "SELECT * FROM funcionarios INNER JOIN clientes ON FK_FUN_ID = FUN_ID WHERE FUN_ATIVO = 0";
        $enviaquery = mysqli_query($link, $sql);
    }
}

// if($idfuncionario ==1){


// }
// $sqlagenda = "SELECT FK_CAT_ID, CAT_NOME, AG_DATA, AG_HORA, CLI_NOME, FUN_NOME, CAT_IMAGE FROM agenda INNER JOIN catalogo ON FK_CAT_ID = CAT_ID INNER JOIN clientes ON FK_CLI_ID = CLI_ID INNER JOIN funcionarios ON FK_FUN_ID = FUN_ID WHERE FUN_ID = $idfuncionario";
// $enviaquery =mysqli_query($link, $sqlagenda);

// VALIDA FUNCIONÁRIO
if($idfuncionario == 1){
    $sqlagenda = "SELECT FK_CAT_ID, CAT_NOME, AG_DATA, AG_HORA, CLI_NOME, FUN_NOME, CAT_IMAGE
    FROM agenda
    INNER JOIN catalogo ON FK_CAT_ID = CAT_ID
    INNER JOIN clientes ON FK_CLI_ID = CLI_ID
    INNER JOIN funcionarios ON FK_FUN_ID = FUN_ID";
    $enviaqueryagenda = mysqli_query($link, $sqlagenda);
}
else{
//  ALIMENTAÇÃO DA TABELA DE AGENDAMENTOS
// SQL PARA FUNCIONÁRIO
    $sqlagenda = "SELECT FK_CAT_ID, CAT_NOME, AG_DATA, AG_HORA, CLI_NOME, FUN_NOME, CAT_IMAGE
    FROM agenda
    INNER JOIN catalogo ON FK_CAT_ID = CAT_ID
    INNER JOIN clientes ON FK_CLI_ID = CLI_ID
    INNER JOIN funcionarios ON FK_FUN_ID = FUN_ID
    WHERE FUN_ID = $idfuncionario AND AG_DATA = CURRENT_DATE()";

    $enviaqueryagenda = mysqli_query($link, $sqlagenda);

}

// AO CLICAR EM UM RADIO BUTTON ELE JÁ FILTRARÁ
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $filtrodata = $_POST['filtrodata'];
        $sqlagenda = "SELECT FK_CAT_ID, CAT_NOME, AG_DATA, AG_HORA, CLI_NOME, FUN_NOME, CAT_IMAGEM
        FROM agenda
        INNER JOIN catalogo ON FK_CAT_ID = CAT_ID
        INNER JOIN clientes ON FK_CLI_ID = CLI_ID
        INNER JOIN funcionarios ON FK_FUN_ID = FUN_ID
        WHERE AG_DATA = '$filtrodata'";
        $enviaqueryagenda = mysqli_query($link, $sqlagenda);


}







?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href = "css/testeglobal.css">
    <link rel="stylesheet" href = "css/lista.css">

    <title>LISTA DE AGENDAMENTOS</title>
</head>
<body>
<div class ='global'> 
    <div class='tabela'> 
        <!-- botao voltar -->
    <a href="backoffice.php"><img src='icons/arrow47.png' width=50 height=50></a>

<!-- CRIAÇÃO DE FILTRO DE TABLE -->
<!-- <form action="backoffice.php" method="post">
    <div class='filtro'>
         <input type="radio" name="filtro" value="1" required onclick="submit()" <?=$filtro == "1"? "checked":""?> >ATIVOS
            
         <input type="radio" name="filtro" value="0" required onclick="submit()" <?=$filtro == "0"? "checked":""?> >INATIVOS
            
         <input type="radio" name="filtro" value="2" required onclick="submit()" <?=$filtro == "2"? "checked":""?> >TODOS

    </div>
 </form> -->


     <div class='listabkoffice'>
                

                <form action='backoffice.php' method='post'>
                    <label>SELECIONE DATA</label>
                    <input type='date' name='filtrodata' placeholder='dd/mm/aaaa'>
                    <input type="submit" value="PESQUISAR DATA">
                </form>
                <table>
                    <tr> 
                        <th>ID SERVIÇO</th>
                        <th>NOME SERVIÇO</th>
                        <th>DATA SERVIÇO</th>
                        <th>HORA SERVIÇO</th>
                        <th>CLIENTE</th>
                        <th>FUNCIONÁRIO</th>
                        <th>IMAGEM</th>
                    </tr>

                    <!-- COMEÇOU O PHP -->
                    <?php
                            while ($tbl = mysqli_fetch_array($enviaqueryagenda)){
        
                    ?>
                    
                    <tr class='linha'>
                        <td><?=$tbl['FK_CAT_ID']?></td> <!--COLETA CÓDIGO DO CAT [0] -->
                        <td><?=$tbl['CAT_NOME']?></td> <!--COLETA NOME DO CAT [1]-->
                        <td><?=$tbl['AG_DATA']?></td> <!--COLETA DATA DO SERVICO [2]-->
                        <td><?=$tbl['AG_HORA']?></td> <!--COLETA HORA DO SERVICO[3]-->
                        <td><?=$tbl['CLI_NOME']?></td> <!--COLETA NOME CLIENTE-->
                        <td><?=$tbl['FUN_NOME']?></td> <!--COLETA NOME FUN-->
                        <td><img id='cat_imagem' src='data:image/jpeg;base64,<?=$tbl['CAT_IMAGEM']?>' width=150 height=150></td>
                        
                    </tr>
                    <?php
                        }
                    
                    ?>
                </table>
            </div>


        <!-- <table>
            <tr>
                <th>ID SERVIÇO</th>
                <th>NOME SERVIÇO</th>
                <th>HORA</th>
                <th>CLIENTE</th>
                <th>CORTE</th>
                <th>FUNCIONÁRIO</th>
                <th>DATA</th>
                <th>ALTERAÇÃO</th>
              

            </tr> -->
            <!-- COMEÇANDO O PHP -->
            <!-- <?php
            while($tbl = mysqli_fetch_array($enviaqueryagenda)){
                // while($tbl2 = mysqli_fetch_array($enviaquery2)){

            ?>
            <tr class='linha'> -->
                    <!-- <td><?=$tbl['FK_CAT_ID']?></td>  Coleta codigo do catalogo[0] -->
                    <!-- <td><?=$tbl['CAT_NOME']?></td>  Coleta nome do serviço no catalogo[1] -->
                    <!-- <td><?=$tbl['AG_DATA']?></td>  Coleta descrição do serviço[2] -->
                    <!-- <td><?=$tbl['AG_HORA']?></td>  Coleta preço do serviço[3] -->
                    <!-- <td><?=$tbl['CLI_NOME']?></td>  Coleta descrição do serviço[2] -->
                    <!-- <td><?=$tbl['FUN_NOME']?></td>  Coleta preço do serviço[3] -->
                    <!-- <td><img id='cat_imagem' src='data:image/jpeg;base64, <?=$tbl[6]?>' width=100 height=100> </td> -->
                   
                      

                    <!-- USANDO GET BRABO pro botao alterar -->
                    <!-- <td><a href='servico_altera.php?id=<?= $tbl[0]?>'><img src='icons/pencil1.png' width=20 height=20 style='border: 2px solid rgb(20, 133, 185) ; border-radius: 1px; margin: 2px;'></a></td>


            </tr>
            <?php
            }
            ?>
         </table> -->
</div>

</div>



    
</body>
</html>