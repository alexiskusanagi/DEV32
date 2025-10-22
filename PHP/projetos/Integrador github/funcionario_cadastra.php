<?php
//conexão com o banco de dados - ok falta o css
include("utils/conectadb.php");
include("utils/verifica_login.php");


// apos fvamos cadastrar usuario e funcionario ao mesmo tempo
if($_SERVER['REQUEST_METHOD']== 'POST'){

// coletar campos dos inputs por names para variáveis PHPs
$nomefun = $_POST['txtnome'];
$cpffun = $_POST['txtcpf'];
$funcaofun = $_POST['txtfuncao'];
$contatofun = $_POST['txtcontato'];
$ativofun = $_POST['ativo'];

// coleta para o usuário
$usulogin = $_POST['txtusuario'];
$ususenha = $_POST['txtsenha'];

// iniciando queries de banco de dados
//verificando se o usuario existe
$sql ="SELECT COUNT(fun_cpf) FROM funcionarios WHERE fun_cpf ='$cpffun'";

//enviando a query para o banco
$enviaquery = mysqli_query ($link, $sql);
// retorno do que vem do banco
$retorno =mysqli_fetch_array($enviaquery)[0];

//validação de retorno
if ($retorno ==1){
 //informa que o usuario já existe pois retorno = 1
    echo("<script>window.alert('FUNCIONÁRIO JÁ EXISTE'); </script>");

}
else {
    //caso funcionario não esteja  cadastrado
    $sql ="INSERT INTO funcionarios (FUN_NOME, FUN_CPF, FUN_FUNCAO, FUN_TEL, FUN_ATIVO) VALUES ('$nomefun', '$cpffun', '$funcaofun', '$contatofun', $ativofun)";

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

    else{
        $sql ="SELECT FUN_ID FROM funcionarios WHERE FUN_CPF = '$cpffun'";
        //enviando a query para o banco
        $enviaquery = mysqli_query ($link, $sql);
        // retorno do que vem do banco
        $retorno =mysqli_fetch_array($enviaquery)[0];

        $usulogin = "Sem Cadastro";
        $ususenha = "Sem Cadastro";
        $usuativo = "0";

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
    <link rel ="stylesheet" href ="css/global.css">
    <link rel ="stylesheet" href ="css/home.css">
    <link rel = "stylesheet" href = css/topo.css> 
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>Cadastro de Funcionario</title>
</head>
<body>
    <div class = "global"> 
        
        <div class ="formulario"><a href="backoffice_kinder_haus.php"><img src='icons/arrow47.png' width=50 height=50></a>
                <form class='login' action ="funcionario_cadastra.php" method ="post"  > 
                    <label>nome do funcionário</label>
                    
                    <input type ='text' name = "txtnome" placeholder ='Digite seu nome completo' required>
                    <br>
                    <label>c.p.f.</label>
                    
                    <input type = 'number' name ="txtcpf" placeholder = 'Digite seu CPF' required>

                    <br>
                    <label>função</label>
                    
                    <input type = 'text' name ="txtfuncao" placeholder = 'Digite a função' required>

                    <br>
                    <!-- Telefone = contato -->
                    <label>contato</label> 
                    
                    <input type = 'number' name ="txtcontato" placeholder = 'Digite seu telefone' required>
                    <br>
                    <br>
                    <br>
                    <!-- agora cadastramos o usuario -->

                    
                    <label>digite login</label>
                    
                    <input type ='text' name = "txtusuario" placeholder ='Digite seu login' >
                    <br>
                    <label>senha</label>

                    <input type = 'password' name ="txtsenha" placeholder = 'Digite sua senha'>
                    <br>

                    <label>iniciar usuário como</label>
                    <div class='rbativo'>
                        
                        <input type ="radio" name="ativo" id="ativo" value="1" checked><label>ativo</label>
                        <br> 

                        <input type ="radio" name="ativo" id="inativo" value="0" ><label>inativo</label>
                    </div>  
                    <br> 

                    <input type ='submit' value = 'CADASTRAR'>

                </form>
                <br>
                

        </div>

    </div>

    <div class="fundo-translucido"></div>
</body>
</html>