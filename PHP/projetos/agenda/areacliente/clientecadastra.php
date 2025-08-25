<?php
//conexão com o banco de dados
include("utils/conectadb.php");
// include("utils/verificalogin.php");

// apos fvamos cadastrar usuario e funcionario ao mesmo tempo
if($_SERVER['REQUEST_METHOD']== 'POST'){

// coletar campos dos inputs por names para variáveis PHPs
$nomecli = $_POST['txtnome'];
$cpfcli = $_POST['txtcpf'];
$contatocli = $_POST['txtcontato'];
// $ativocli = $_POST['ativo'];
$datanasccli = $_POST['txtdatanasc'];
 // COLETA SENHA DE USUARIO
$senhacli = md5($_POST['txtsenha']);


// iniciando queries de banco de dados
//verificando se o usuario existe
$sql ="SELECT COUNT(cli_cpf) FROM clientes WHERE cli_cpf ='$cpfcli'";

//enviando a query para o banco
$enviaquery = mysqli_query ($link, $sql);
// retorno do que vem do banco
$retorno =mysqli_fetch_array($enviaquery)[0];

//validação de retorno
if ($retorno ==1){
 //informa que o usuario já existe pois retorno = 1
    echo("<script>window.alert('CLIENTE JÁ CADASTRADO'); </script>");

}
else {
    //caso funcionario não esteja  cadastrado
    $sql ="INSERT INTO clientes (CLI_NOME, CLI_CPF, CLI_TEL, CLI_ATIVO, CLI_DATANASC, CLI_SENHA) VALUES ('$nomecli', '$cpfcli', '$contatocli', 1, '$datanasccli', '$senhacli')";

    //conecta com o banco e manda a query
    $enviaquery = mysqli_query ($link, $sql);

    echo("<script>window.alert('CLIENTE CADASTRADO COM SUCESSO'); </script>");


}


}

?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href ="../css/formulario.css">
    <link rel ="stylesheet" href ="../css/testeglobal.css">
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>Cadastro de Cliente</title>
</head>
<body>
    <div class = "global"> 
        
        <div class ="formulario"><a href="logincliente.php"><img src='../icons/arrow477.png' width=50 height=50></a>
                <form class='login' action ="clientecadastra.php" method ="post"  > 
                    <label>NOME DO CLIENTE</label>
                    
                    <input type ='text' name = "txtnome" placeholder ='Digite seu nome completo' required>
                    <br>
                    <label>CPF</label>
                    
                    <input type = 'number' name ="txtcpf" placeholder = 'Digite seu CPF' required>

                    
                    <br>
                    <!-- Telefone = contato -->
                    <label>CONTATO</label> 
                    
                    <input type = 'number' name ="txtcontato" placeholder = 'Digite seu telefone' required>
                    <br>
                    
                    
                    <!-- agora cadastramos o usuario -->
                    <label>SENHA</label>

                    <input type = 'password' name ="txtsenha" placeholder = 'Digite sua senha'>
                    <br> 

                    <!-- <label>INICIAR CLIENTE COMO</label>
                    <div class='rbativo'>
                        
                        <input type ="radio" name="ativo" id="ativo" value="1" checked><label>ATIVO</label>
                        <br> 

                        <input type ="radio" name="ativo" id="inativo" value="0" ><label>INATIVO</label>
                    </div>  
                    <br>  -->

                     <label>DATA DE NASCIMENTO</label> 
                    
                    <input type = 'date' name ="txtdatanasc" placeholder = 'Digite sua data de Nascimento' required>
                    <br>

                    <input type ='submit' value = 'CADASTRAR'>

                </form>
                <br>
                

        </div>

    </div>
    <script src= '../scripts/script.js'> </script>
</body>
</html>