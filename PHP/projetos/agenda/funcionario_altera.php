<?php

//conexão com o banco de dados
include("utils/conectadb.php");
include("utils/verificalogin.php");


//coletando e preecnhendo os dados nos campos
$id = $_GET['id']; //coletando id via get na url
$sql = "SELECT * FROM funcionarios INNER JOIN usuarios ON FK_FUN_ID = FUN_ID WHERE FUN_ID = $id"; //where é condicional e sempre vem NO FINAL da query

$enviaquery = mysqli_query($link, $sql);

//preenchendo os campos com while

while($tbl = mysqli_fetch_array($enviaquery)){
    $nomefun = $tbl[1];
    $cpffun = $tbl[2];
    $funcaofun = $tbl[3];
    $contatofun = $tbl[4];
    $ativofun = $tbl[5];

    //usuario

    $usulogin = $tbl[6];
    $ususenha = $tbl[7];

}


// apos vamos salvar o usuario e funcionario ao mesmo tempo
if($_SERVER['REQUEST_METHOD']== 'POST'){

// coletar campos dos inputs por names para variáveis PHPs
$id = $_POST ['txtid'];

$nomefun = $_POST['txtnome'];
$cpffun = $_POST['txtcpf'];
$funcaofun = $_POST['txtfuncao'];
$contatofun = $_POST['txtcontato'];
$ativofun = $_POST['ativofun'];

// coleta para o usuário
$usulogin = $_POST['txtusuario'];
$ususenha = $_POST['txtsenha'];
$usuativo = $_POST ['ativousu'];


// iniciando queries de banco de dados
$sql = "UPDATE funcionario SET fun_nome = '$nomefun', FUN_FUNCAO = '$funcaofun', FUN_CONTATO ='$contatofun', FUN_ATIVO = '$ativofun' WHERE FUN_ID = $id";
mysqli_query($link, $sql);

$sqlusu = "UPDATE usuario SET USU_SENHA = '$ususenha', USU_ATIVO = '$usuativo' WHERE FK_FUN_ID =$id";

mysqli_query($link, $sqlusu);

echo ("<script>window.alert('Salvo com Sucesso');</script>");



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
    <title>Dados de Funcionario</title>
</head>
<body>
    <div class = "global"> 
        
        <div class ="formulario"><a href="backoffice.php"><img src='icons/arrow47.png' width=50 height=50></a>
                <form class='login' action ="funcionario_altera.php" method ="post"  > 
                     <!-- PARA GRAVARMOS REALMENTE O ID DO FUNCIONÁRIO -->

                    <input type ="hidden" name= "txtid" value =<?>$id?> >
                    <label>NOME DO FUNCIONÁRIO</label>
                    
                    <input type ='text' name = "txtnome" value ='<?= $nomefun?>' required>
                    <br>
                    <label>CPF</label>
                    
                    <input type = 'number' name ="txtcpf" value ='<?= $cpffun?>' disabled required>

                    <br>
                    <label>FUNÇÃO</label>
                    
                    <input type = 'text' name ="txtfuncao" value ='<?= $funcaofun?>' required>

                    <br>
                    <!-- Telefone = contato -->
                    <label>CONTATO</label> 
                    
                    <input type = 'number' name ="txtcontato" value ='<?= $contatofun?>' required>

                    <!-- ESSE RADIO VERIFICA FUNCIONARIO -->
                <div class='rbativo'>
                    <!-- VERIFICAR POR QUE DESSE VALUE == 1 ANTES DO ROLÊ -->
                    <input type="radio" name="ativofun" id="ativo" value="1" <?= $ativofun == 1? 'checked' : ''?>><label>ATIVO</label>
                    <br>
                    <input type="radio" name="ativofun" id="inativo" value="0" <?= $ativofun == 0? 'checked' : ''?>><label>INATIVO</label>
                </div>

                    <br>
                    <br>
                    <br>
                    <!-- agora cadastramos o usuario -->

                    
                    <label>DIGITE LOGIN</label>
                    
                    <input type ='text' name = "txtusuario" disabled value ='<?= $usulogin?>' >
                    <br>
                    <!-- IMPORTANTE O BANCO NAO SABER A SENHA DO USUÁRIO,nesse caso, a senha será exibida, mas não é recomendado -->
                     <!-- NÃO TRAZER SENHA OU TRZER CRIPTOGRAFADA -->
                    <label>SENHA</label>

                    <input type = 'password' name ="txtsenha" value ='<?= $ususenha?>'>
                    <br>

                    <label>INICIAR USUÁRIO COMO</label>
                    <div class='rbativo'>

                     <!-- ESSE RADIO VERIFICA USUARIO -->
                     <input type="radio" name="ativousu" id="ativo" value="1" <?= $usuativo == 1? 'checked' : ''?>><label>ATIVO</label>
                    <br>
                    <input type="radio" name="ativousu" id="inativo" value="0" <?= $usuativo == 0? 'checked' : ''?>><label>INATIVO</label>
                    <br> 

                    <input type ='submit' value = 'Salvar Alterações'>

                </form>
                <br>
                

        </div>

    </div>
</body>
</html>