<?php
//conexão com o banco de dados
include("utils/conectadb.php");

//ativa a variável de uso da sessão
session_start();

if($_SERVER['REQUEST_METHOD']== 'POST'){
//COLETA OS DADOS DO CAMPO DE TEXTO DO HTML
$login =$_POST['txtlogin'];
$senha = $_POST['txtsenha'];

// coleta de nome de funcionário
$sqlfun ="SELECT FK_FUN_ID FROM usuarios WHERE usu_login = '$login' AND usu_senha = '$senha'";

//enviando a query para o banco
$enviaquery2 = mysqli_query($link, $sqlfun);
// retorno do que vem do banco
$idfuncionario =mysqli_fetch_array($enviaquery2) [0];
// fim coleta nome funcionário

// para amanhã, sanitizar o erro flick no erro de usu e senha(subindo variavel vazia de id)


//comunica com o bancos montando as queries

$sql ="SELECT COUNT(USU_ID) FROM usuarios where USU_LOGIN ='$login' AND USU_SENHA = '$senha'";

//enviando a query para o banco
$enviaquery = mysqli_query ($link, $sql);
// retorno do que vem do banco
$retorno =mysqli_fetch_array($enviaquery)[0];

//validação de retorno
if ($retorno ==1){

    $_SESSION ['idfuncionario'] = $idfuncionario;

    Header ("Location: backoffice_kinder_haus.php");

    // echo("<script>window.alert('LOGADO'); 


}
else {
    echo("<script>window.alert('LOGIN ou USUARIO INCORRETOS'); </script>");
    echo("<script>window.location.href='login_funcionario.php;</script>");
}



}



?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href ="css/formulario.css">
    <link rel ="stylesheet" href ="css/global.css">
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>LOGIN</title>
</head>
<body>
    <div class = "global"> 
        <div class ="formulario">
                <form class='login' action ="login_funcionario.php" method ="post"  > 
                    <label>LOGIN</label>
                    
                    <input type ='text' name = "txtlogin" placeholder ='Digite seu login' required>
                    <br>
                    <label>SENHA</label>
                    
                    <input type = 'password' name ="txtsenha" placeholder = 'Digite sua senha' required>

                      <!-- FAZ PARTE DO OLINHO -->
                <!-- <span class='togglePassword' id='togglePassword' style="margin: -35px 0px 0px 90%;">👀</span>
                 -->

                    <br> 
                    <input type ='submit' value = 'FAZER LOGIN'>

                    <!-- JS DO OLHINHO -->
                <!-- <script>
                    const passwordInput = document.getElementById('password');
                    const togglePassword = document.getElementById('togglePassword');
                    togglePassword.addEventListener('click', 
                        function(){
                            const type = passwordInput.getAttribute('type') === 'password'?'text':'password';
                            passwordInput.setAttribute('type',type);;

                        this.textContent = type === 'password'?'👀':'🫣';
                        
                    });
                </script> -->
                <!-- FIM JS DO OLHINHO -->



                </form>
                <br>
                
              

                

        </div>

    </div>
</body>
</html>