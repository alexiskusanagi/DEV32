<?php

$nome ="";
$sobrenome ="";
$idade =null;

if($_SERVER['REQUEST_METHOD'] == 'POST') {
$nome = $_POST ['txtnome'];
$sobrenome = $_POST ['txtsobrenome'];
$idade = $_POST ['txtidade'];
}

$mensagem ="NOME: $nome $sobrenome <br> IDADE: $idade";

// echo("Nome: $nome<br>");
// echo("Sobrenome: $sobrenome<br>");
// echo("Idade: $idade<br>");


?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FORMULARIO</title>
</head>
<body>
    <!-- formulario chama action para chamar um script php e o metodo de envio -->
<form class = "formulario" action ="formulario.php" method ="post" > 

<label>NOME </label>
<input type= "text" name = "txtnome" placeholder ="Insira seu nome" required> 
<br> <br>
<label>SOBRENOME </label>
<input type= "text" name ="txtsobrenome" placeholder = "Insira seu sobrenome" required>
<br> <br>
<label>IDADE </label>
<input type= "number" name = "txtidade" placeholder = "Somente números"  required>
<br> <br>

<!-- action time! -->
 <input type ="submit" value = "Ação">

</form>    
<!-- exibindo os dados digitados pelo usuário -->
<h3> <?php echo "$mensagem";?></h3>

</body>
</html>