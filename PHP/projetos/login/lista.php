<?php
include ("conectadb.php");

// pesquisa no banco
$sql ="SELECT * FROM usuarios";
$enviaquery = mysqli_query($link , $sql);




?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista</title>
</head>
<body>
<table class= 'lista'> 
    <tr>
        <tr>ID</tr>
        <th>LOGIN</th>
        <th>ALTERAR</th>
    </tr>

    <!-- aqui lista os usuários -->
     <?php //abre php
    //  abre while
     while($tbl = mysqli_fetch_array($enviaquery)) {

     
    // fecha php ?> 
    <tr>
        <!-- coleta o id na posição zero do banco -->
        <td><?= $tbl[0]?></td>
        <!-- coleta login na posição 1 do banco -->
         <td><?= $tbl[1]?></td>
        <!-- Botao alterar -->
         

    </tr> 
    <!-- abrir PHP para fecha while acima -->
     <?php
     } //fecha while FORA do php! 
     ?> 
</table>

    
</body>
</html>