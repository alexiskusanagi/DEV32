<?php
// conexo com banco - está ok
include("utils/conectadb.php");
include("utils/verifica_login.php");

// traz clientes do banco
$sqlcat = "SELECT * FROM catalogo";
$enviaquery =mysqli_query($link, $sqlcat);

//Aqui se filtram minhas escolhas
$ativo = 1;

// agora funções de cada click
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $ativo =$_POST['filtro'];

    if($ativo ==1){
        $sql = "SELECT * FROM catalogo  WHERE CAT_ATIVO = 1";
        $enviaquery = mysqli_query($link, $sql);
    }

    else if ($ativo ==2){
        $sql = "SELECT * FROM catalogo";
        $enviaquery = mysqli_query($link, $sql);
    }

    else{
        $sql = "SELECT * FROM catalogo  WHERE CAT_ATIVO = 0";
        $enviaquery = mysqli_query($link, $sql);
    }
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href = "css/lista.css">
    <link rel ="stylesheet" href ="css/home.css">
    <link rel ="stylesheet" href ="css/topo.css">

    <title>LISTA DE CLIENTES</title>
</head>
<body>
<div class ='global'> 
    <div class='tabela'> 
        <!-- botao voltar -->
    <div class="reservas">
        
    <h2>Lista de Serviços </h2>
    <a href="backoffice_kinder_haus.php"><img src='icons/arrow47.png' width=50 height=50></a>
</div>

<!-- CRIAÇÃO DE FILTRO DE TABLE -->
<form action="servico_lista.php" method="post">
    <div class='filtro'>
         <input type="radio" name="filtro" value="1" required onclick="submit()" <?=$ativo == "1"? "checked":""?> >ATIVOS
            
         <input type="radio" name="filtro" value="0" required onclick="submit()" <?=$ativo == "0"? "checked":""?> >INATIVOS
            
         <input type="radio" name="filtro" value="2" required onclick="submit()" <?=$ativo == "2"? "checked":""?> >TODOS

    </div>
 </form>


        <table>
            <tr>
                <th>ID SERVIÇO</th>
                <th>NOME</th>
                <th>DESCRIÇÃO</th>
                <th>PREÇO</th>
                <th>TEMPO DE SERVIÇO</th>
                <th>ATIVO</th>
                <th>IMAGEM</th>
                <th>ALTERAÇÃO</th>
              

            </tr>
            <!-- COMEÇANDO O PHP -->
            <?php
            while($tbl = mysqli_fetch_array($enviaquery)){
                // while($tbl2 = mysqli_fetch_array($enviaquery2)){

            ?>
            <tr class='linha'>
                    <td><?=$tbl[0]?></td>  <!-- Coleta codigo do serviço[0] -->
                    <td><?=$tbl[1]?></td>  <!-- Coleta nome do serviço[1] -->
                    <td><?=$tbl[2]?></td>  <!-- Coleta descrição do serviço[2] -->
                    <td><?=$tbl[3]?></td>  <!-- Coleta preço do serviço[3] -->
                    <td><?=$tbl[4]<=59? $tbl[4]." Minutos":($tbl[4] / 60)." Hora(s)"?></td>  <!-- Coleta tempo do serviço[4] -->
                    <td><?=$tbl[5]==1? 'ATIVO':'INATIVO'?></td>  <!-- Coleta ativo do serviço[5] -->
                    <td><img id='cat_imagem' src='data:image/jpeg;base64, <?=$tbl[6]?>' width=100 height=100> </td>
                   
                      

                    <!-- USANDO GET BRABO pro botao alterar -->
                    <td><a href='servico_altera.php?id=<?= $tbl[0]?>'><img src='icons/pencil30.png' width=50 height=30 style='border: 2px solid #3b5e47 ; border-radius: 1px; margin: 2px;'></a></td>


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