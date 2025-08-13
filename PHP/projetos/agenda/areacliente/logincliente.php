<?php
//conexão com o banco de dados
include("../utils/conectadb.php");

//ativa a variável de uso da sessão
session_start();

if($_SERVER['REQUEST_METHOD']== 'POST'){
//COLETA OS DADOS DO CAMPO DE TEXTO DO HTML
$cpf =$_POST['txtcpf'];
$senha = sha1($_POST['txtsenha']);

// VERIFICAR de nome de cliente EXISTE
$sqlcli ="SELECT COUNT (CLI_ID) FROM clientes WHERE cli_cpf = '$clientecpf' AND cli_senha = '$senha' AND CLI_ATIVO = 1";

//enviando a query para o banco
$enviaquery = mysqli_query($link, $sqlcli);
$retorno = mysqli_fetch_array($enviaquery) [0];

// COLETANDO O NOME DO NOSSO CILENTE
$sqlnome = "SELECT CLI_ID FROM clientes WHERE CLI_CPF = $clientecpf AND CLI_SENHA = $senha"; 

$enviaquery2 = mysqli_query($link,$sqlnome);
// retorno do que vem do banco
$idcliente =mysqli_fetch_array($enviaquery) [0];
// fim coleta nome cliente



//validação de retorno
if ($retorno ==1){

    $_SESSION ['idcliente'] = $idcliente;

    Header ("Location: catalogo.php");

    // echo("<script>window.alert('LOGADO'); </script>");


}
else {
    echo("<script>window.alert('LOGIN ou SENHA INCORRETOS'); </script>");
    echo("<script>window.location.href='logincliente.php;</script>");
}



}



?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href ="../css/testeform.css">
    <link rel ="stylesheet" href ="../css/testeglobal.css">
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>LOGIN/CADASTRO DE CLIENTE</title>
</head>
<body>
    <div class = "global"> 
        <h1>LOGIN/CADASTRO DE CLIENTE</h1>
        <div class ="formulario">
                <form class='login' action ="logincliente.php" method ="post"  > 
                    <label>CPF</label>
                    
                    <input type='text' id='cpf' name='txtcpf' placeholder="000.000.000-00" maxlength='14' oninput="formatarCPF(this)" required>
                    <br>
                    <label>SENHA</label>
                    
                    <input type = 'password' id='password' name ="txtsenha" placeholder = 'Digite sua senha' required>

                      <!-- FAZ PARTE DO OLINHO -->
                <!-- <span class='togglePassword' id='togglePassword' style="margin: -35px 0px 0px 90%;">👀</span>
                 -->

                    <br> 
                    <input type ='submit' value = 'FAZER LOGIN'>

                     <!-- JS DO OLHINHO + CPF -->
                <script>
                    const passwordInput = document.getElementById('password');
                    const togglePassword = document.getElementById('togglePassword');
                    togglePassword.addEventListener('click', 
                        function(){
                            const type = passwordInput.getAttribute('type') === 'password'?'text':'password';
                            passwordInput.setAttribute('type',type);;

                        this.textContent = type === 'password'?'🔒':'🔓';
                        
                    });
                    

                    // VALIDA A MASCARA DO CPFZIM
                    document.getElementById('cpf').addEventListener('input', function(event){
                    const input = event.target;
                    let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

                    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
                    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
                    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                    input.value = valor;
                });    
                </script>
                <!-- FIM JS DO OLHINHO + CPF-->


                </form>
                <a href='clientecadastra.php'>Não tem Conta? Clique para Cadastrar</a>
                <br>
                
              

                

        </div>

    </div>
    <!-- <script src= '../scripts/script.js'></script> -->
</body>
</html>