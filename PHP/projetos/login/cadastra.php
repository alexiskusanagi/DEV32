<?php
//conexão com o banco de dados
include("conectadb.php");


if($_SERVER['REQUEST_METHOD']== 'POST'){
//COLETA OS DADOS DO CAMPO DE TEXTO DO HTML
$login =$_POST['txtlogin'];
$senha = $_POST['txtsenha'];

//pesquisa no banco contando usuários - não precisa da senha, pois é só o login.
$sql ="SELECT COUNT(USU_ID) FROM usuarios where USU_LOGIN ='$login' ";

//insert no banco montando as querries
//$sql ="INSERT INTO usuario (USU_LOGIN, USU_SENHA) VALUES ('$login','$senha')";

//enviando a query para o banco
$enviaquery = mysqli_query ($link, $sql);
// retorno do que vem do banco
$retorno =mysqli_fetch_array($enviaquery)[0];

//validação de retorno
if ($retorno ==0){

    //insert no banco montando as querries
    $sql ="INSERT INTO usuarios (USU_LOGIN, USU_SENHA) VALUES ('$login','$senha')";

    //enviando a query para o banco de dados
    $enviaquery = mysqli_query ($link, $sql);

    echo("<script>window.alert('USUARIO CADASTRADO'); </script>");
    echo"<script>window.location.href='login.php'; </script>";


    $_SESSION ['nomeusuario'] = $login;

    Header ("Location: home.php");
    echo("<script>window.alert('LOGADO'); </script>");


}
else {
    echo("<script>window.alert('LOGIN ou USUARIO INCORRETOS'); </script>");
}



}



?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href ="css/cadastro.css">
    <title>LOGIN</title>
</head>
<body>
    <div class = "global"> 
        <div class ="formulario">
                <form id='cadastra' action ="cadastra.php" method ="post"  > 
                    <label>LOGIN</label>
                    
                    <input type ='text' name = "txtlogin" placeholder ='Crie seu login de acesso' required>
                    <br>
                    <label>SENHA</label>
                    
                    <input type = 'password' name ="txtsenha" placeholder = 'Crie sua senha de acesso' required>

                    <br>
                    <input type ='submit' value = 'CADASTRAR'>

                </form>
                <br>
                <a href ='login.php'>Já tem conta? Clique aqui</a> 

        </div>

    </div>
</body>
</html>


