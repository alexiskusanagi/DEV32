<?php
//conexão com o banco de dados
include("utils/conectadb.php");
include("utils/verificalogin.php");

// apos fvamos cadastrar usuario e funcionario ao mesmo tempo
if($_SERVER['REQUEST_METHOD']== 'POST'){

// coletar campos dos inputs por names para variáveis PHPs
$nomecli = $_POST['txtnome'];
$cpfcli = $_POST['txtcpf'];
$contatocli = $_POST['txtcontato'];
$ativocli = $_POST['ativo'];
$datanasccli = $_POST['ativo'];


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
    $sql ="INSERT INTO clientes (CLI_NOME, CLI_CPF, CLI_TEL, CLI_ATIVO, CLI_DATANASC) VALUES ('$nomecli', '$cpfcli', '$contatocli', $ativocli, '$datanasccli')";

    //conecta com o banco e manda a query
    $enviaquery = mysqli_query ($link, $sql);

    //cadastrando os insert na tabela de usuário

    //pergunta para a tabla de funcionarios qual foi o ultimo ID cadastrado, antes é preciso saber se a variável usu_fun está preenchida

    if($usulogin != null){
        $sql ="SELECT FUN_ID FROM funcionarios WHERE FUN_CPF = '$cpffun'";
        //enviando a query para o banco
        $enviaquery = mysqli_query ($link, $sql);
        // retorno do que vem do banco
        $retorno =mysqli_fetch_array($enviaquery)[0];

        //AGORA SALVAMOS TUDO NA TABELA DO USUARIO
        $sqlusu = "INSERT INTO usuarios (USU_LOGIN, USU_SENHA, FK_FUN_ID, USU_ATIVO) VALUES('$usulogin', '$ususenha', $retorno, $ativofun)";
        $enviaquery = mysqli_query ($link, $sqlusu);

    }
    echo("<script>window.alert('FUNCIONÁRIO CADASTRADO COM SUCESSO'); </script>");


}


}

?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href ="css/formulario.css">
    <link rel ="stylesheet" href ="css/testeglobal.css">
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>Cadastro de Funcionario</title>
</head>
<body>
    <div class = "global"> 
        
        <div class ="formulario"><a href="backoffice.php"><img src='icons/arrow47.png' width=50 height=50></a>
                <form class='login' action ="funcionario_cadastra.php" method ="post"  > 
                    <label>NOME DO FUNCIONÁRIO</label>
                    
                    <input type ='text' name = "txtnome" placeholder ='Digite seu nome completo' required>
                    <br>
                    <label>CPF</label>
                    
                    <input type = 'number' name ="txtcpf" placeholder = 'Digite seu CPF' required>

                    <br>
                    <label>FUNÇÃO</label>
                    
                    <input type = 'text' name ="txtfuncao" placeholder = 'Digite a função' required>

                    <br>
                    <!-- Telefone = contato -->
                    <label>CONTATO</label> 
                    
                    <input type = 'number' name ="txtcontato" placeholder = 'Digite seu telefone' required>
                    <br>
                    <br>
                    <br>
                    <!-- agora cadastramos o usuario -->

                    
                    <label>DIGITE LOGIN</label>
                    
                    <input type ='text' name = "txtusuario" placeholder ='Digite seu login' >
                    <br>
                    <label>SENHA</label>

                    <input type = 'password' name ="txtsenha" placeholder = 'Digite sua senha'>
                    <br>

                    <label>INICIAR USUÁRIO COMO</label>
                    <div class='rbativo'>
                        
                        <input type ="radio" name="ativo" id="ativo" value="1" checked><label>ATIVO</label>
                        <br> 

                        <input type ="radio" name="ativo" id="inativo" value="0" ><label>INATIVO</label>
                    </div>  
                    <br> 

                    <input type ='submit' value = 'CADASTRAR'>

                </form>
                <br>
                

        </div>

    </div>
</body>
</html>