
<?php

//conexão com o banco de dados
include("../utils/conectadb.php");
include("../utils/validacliente_verperfil.php");

session_start();

//APÓS ALTERAÇÕES FAZER O SAVE NO BANCO
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    
    // COLETAR CAMPOS DOS INPUTS POR NAMES PARA VARIÁVEIS PHPs
    $id = $_POST['id'];

    $nomecli = $_POST['txtnome'];
    $contatocli = $_POST['txtcontato'];
    $datanasccli = $_POST['dtdata'];
    // COLETA PARA O USUARIO
    $senhacli = md5($_POST['txtsenha']);
   

    //INICIANDO QUERIES DE BANCO
    $sql = "UPDATE clientes SET CLI_NOME = '$nomecli', CLI_TEL = '$contatocli', CLI_DATANASC = '$datanasccli', CLI_SENHA = '$senhacli' WHERE CLI_ID = $id";
    mysqli_query($link, $sql);
    
    echo "<script>window.alert('$nomecli ALTERADO COM SUCESSO');</script>";
    echo "<script>window.location.href='catalogo.php'</script>";
    
}

//coletando e preecnhendo os dados nos campos
$id = $_SESSION['idcliente']; //coletando id via get na url
$sql = "SELECT * FROM clientes WHERE CLI_ID = $id"; //where é condicional e sempre vem NO FINAL da query
$enviaquery = mysqli_query($link, $sql);

//preenchendo os campos com while

while($tbl = mysqli_fetch_array($enviaquery)){
    $id = $tbl[0];
    $nomecli = $tbl[1];
    $cpfcli = $tbl[2];
    $contatocli = $tbl[3];
    $datanasccli = $tbl[5];
    $senhacli = $tbl[6];

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
    <title>Dados de Cliente</title>
</head>
<body>
    <div class = "global"> 
        
        <div class ="formulario"><a href="catalogo.php"><img src='../icons/arrow477.png' background-color=#4facfe width=50 height=50></a>
                <form class='login' action ="verperfil.php" method ="post"  > 
                     <!-- PARA GRAVARMOS REALMENTE O ID DO FUNCIONÁRIO -->

                    <input type ='hidden' name='id' value ='<?=$id?>' >
                    <label>NOME DO CLIENTE</label>
                    
                    <input type ='text' name = "txtnome" value ='<?= $nomecli?>' required>
                    <br>
                    <label>CPF</label>
                    
                    <input type = 'number' name ="txtcpf" value ='<?= $cpfcli?>' disabled required>

                    <br>
                    <!-- Telefone = contato -->
                    <label>CONTATO</label> 
                    
                    <input type = 'number' name ="txtcontato" value ='<?= $contatocli?>' required>

                     <label>DATA NASCIMENTO</label>
                    <input type='date' name='dtdata' value="<?= $datanasccli ?>" required>
                      <br>

                    <label>ATUALIZAR SENHA</label>
                    <input type='password' name='txtsenha' value="<?= $senhacli ?>" required>
                   
                <!-- ESSE RADIO VERIFICA FUNCIONARIO -->
                <!-- <div class='rbativo'> -->
                    <!-- VERIFICAR POR QUE DESSE VALUE == 1 ANTES DO ROLÊ -->
                    <!-- <input type="radio" name="ativocli" id="ativo" value="1" <?= $ativocli == 1? 'checked' : ''?>><label>ATIVO</label>
                    <br>
                    <input type="radio" name="ativocli" id="inativo" value="0" <?= $ativocli == 0? 'checked' : ''?>><label>INATIVO</label>
                </div> -->

                   <br> 

                    <input type ='submit' value = 'Salvar Alterações'>

                </form>
                <br>
                

        </div>

    </div>
</body>
</html>