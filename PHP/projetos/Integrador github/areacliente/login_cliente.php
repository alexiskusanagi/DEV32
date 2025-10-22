<?php
//conexão com o banco de dados - falta o css do link cadastro 
include("../utils/conectadb.php");
include("../utils/topo_areacliente.php");

//ativa a variável de uso da sessão
session_start();

if($_SERVER['REQUEST_METHOD']== 'POST'){
//COLETA OS DADOS DO CAMPO DE TEXTO DO HTML
$clientecpf =$_POST['txtcpf'];
$senha = md5($_POST['txtsenha']);

// VERIFICAR de nome de cliente EXISTE
$sqlcli ="SELECT COUNT(CLI_ID) FROM clientes WHERE CLI_CPF = '$clientecpf' AND CLI_SENHA = '$senha' AND CLI_ATIVO = 1";

//enviando a query para o banco
$enviaquery = mysqli_query($link, $sqlcli);
$retorno = mysqli_fetch_array($enviaquery) [0];

// COLETANDO O NOME DO NOSSO CILENTE
$sqlnome = "SELECT CLI_ID FROM clientes WHERE CLI_CPF = $clientecpf AND CLI_SENHA = '$senha'"; 

$enviaquery2 = mysqli_query($link, $sqlnome);
// retorno do que vem do banco
$idcliente = mysqli_fetch_array($enviaquery2) [0];
// fim coleta nome cliente



//validação de retorno
if ($retorno == 1){

    $_SESSION ['idcliente'] = $idcliente;

    Header ("Location: ../start_home.php");
    // echo("<script>window.alert('LOGADO'); </script>");


}
else {
    echo("<script>window.alert('LOGIN ou SENHA INCORRETOS'); </script>");
    echo("<script>window.location.href='login_cliente.php;</script>");
}



}



?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href ="../css/topo.css">
    <link rel ="stylesheet" href ="../css/formulario.css">
    <link rel ="stylesheet" href ="../css/home.css">
    
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>LOGIN DE CLIENTE</title>
</head>
<body>
     
    <div class = "global"> 

    <div class ="formulario">
        
    <a href="../start_home.php"><img src='../icons/arrow47.png' width=50 height=50></a>
         
        <h1>Login de Cliente</h1>
        
                <form class='login' action ="login_cliente.php" method ="post"  > 
                    <label>c.p.f.</label>
                    
                    <input type='text' id='cpf' name='txtcpf' placeholder="Insira seu CPF (Apenas Números)" maxlength='14' oninput="formatarCPF(this)" required>
                    <br>
                    <label>senha</label>
                    
                    <input type = 'password' id='password' name ="txtsenha" placeholder = 'Digite sua senha' required>

                      <!-- FAZ PARTE DO OLINHO -->
                <!-- <span class='togglePassword' id='togglePassword' style="margin: -35px 0px 0px 90%;">👀</span>
                 -->

                    <br> 
                    <input type ='submit' value = 'Fazer Login'>

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
                <div class="redirecionar">
                <a href='cadastra_cliente.php'>Não tem Conta? Clique Aqui para Cadastrar</a>
                </div>
                <br>
                
              

                

        </div>

            

    </div>
    <!-- <script src= '../scripts/script.js'></script> -->

    <div class="fundo-translucido"></div>
</body>
</html>