 <!-- alterar tudo - está ok -->

<?php

//conexão com o banco de dados
include("utils/conectadb.php");
include("utils/verifica_login.php");

//APÓS ALTERAÇÕES FAZER O SAVE NO BANCO
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    
    // COLETAR CAMPOS DOS INPUTS POR NAMES PARA VARIÁVEIS PHPs
    $id = $_POST['id'];

    $nomecli = $_POST['txtnome'];
    // $cpfcli = $_POST['txtcpf'];
    $contatocli = $_POST['txtcontato'];
    $ativocli = $_POST['ativo'];
    $datanasccli = $_POST['txtdatanasc'];
    
    // COLETA PARA O USUARIO
   $senhaAtualizar = false;
    if (!empty($_POST['txtsenha'])) {
        $senhacli = md5($_POST['txtsenha']);
        $senhaAtualizar = true;
    }


    $nomecriancacli1 = $_POST['txtnomecrianca1'];
    $idadecriancacli1 = $_POST['txtidadecrianca1'];
    $nomecriancacli2 = $_POST['txtnomecrianca2'];
    $idadecriancacli2 = $_POST['txtidadecrianca2'];
    $nomecriancacli3 = $_POST['txtnomecrianca3'];
    $idadecriancacli3 = $_POST['txtidadecrianca3'];
    $nomecriancacli4 = $_POST['txtnomecrianca4'];
    $idadecriancacli4 = $_POST['txtidadecrianca4'];
    $nomecriancacli5 = $_POST['txtnomecrianca5'];
    $idadecriancacli5 = $_POST['txtidadecrianca5'];
    $nomecriancacli6 = $_POST['txtnomecrianca6'];
    $idadecriancacli6 = $_POST['txtidadecrianca6'];
    $nomecontatoalternativocli1 = $_POST['txtnomecontatoalternativo1'];
    $contatoalternativocli1 = $_POST['txtcontatoalternativo1'];
    $nomecontatoalternativocli2 = $_POST['txtnomecontatoalternativo2'];
    $contatoalternativocli2 = $_POST['txtcontatoalternativo2'];

   

    //INICIANDO QUERIES DE BANCO
    $sql = "UPDATE clientes SET CLI_NOME = '$nomecli', CLI_TEL = '$contatocli', CLI_ATIVO = $ativocli, CLI_DATANASC = '$datanasccli', CLI_SENHA = '$senhacli', CLI_NOME_CRIANCA_1 = '$nomecriancacli1', CLI_IDADE_CRIANCA_1 = '$idadecriancacli1', CLI_NOME_CRIANCA_2 = '$nomecriancacli2', CLI_IDADE_CRIANCA_2 = '$idadecriancacli2', CLI_NOME_CRIANCA_3 = '$nomecriancacli3', CLI_IDADE_CRIANCA_3 = '$idadecriancacli3', CLI_NOME_CRIANCA_4 = '$nomecriancacli4', CLI_IDADE_CRIANCA_4 = '$idadecriancacli4', CLI_NOME_CRIANCA_5 = '$nomecriancacli5', CLI_IDADE_CRIANCA_5 = '$idadecriancacli5', CLI_NOME_CRIANCA_6 = '$nomecriancacli6', CLI_IDADE_CRIANCA_6 = '$idadecriancacli6', CLI_NOME_CONT_ALT_1 = '$nomecontatoalternativocli1', CLI_TEL_CONT_ALT_1 = '$contatoalternativocli1', CLI_NOME_CONT_ALT_2 = '$nomecontatoalternativocli2', CLI_TEL_CONT_ALT_2 = '$contatoalternativocli2' WHERE CLI_ID = '$id'";
    mysqli_query($link, $sql);
    
    echo "<script>window.alert('$nomecli ALTERADO');</script>";
    echo "<script>window.location.href='cliente_lista.php'</script>";
    
}

//coletando e preecnhendo os dados nos campos
$id = $_GET['id']; //coletando id via get na url
$sql = "SELECT * FROM clientes WHERE CLI_ID = $id"; //where é condicional e sempre vem NO FINAL da query
$enviaquery = mysqli_query($link, $sql);

//preenchendo os campos com while

while($tbl = mysqli_fetch_array($enviaquery)){
    $id = $tbl[0];
    $nomecli = $tbl[1];
    $cpfcli = $tbl[2];
    $contatocli = $tbl[3];
    $ativocli = $tbl[4];
    $datanasccli = $tbl[5];
    $senhacli = $tbl[6];

    $nomecriancacli1 = $tbl[7];
    $idadecriancacli1 = $tbl[8];
    $nomecriancacli2 = $tbl[9];
    $idadecriancacli2 = $tbl[10];
    $nomecriancacli3 = $tbl[11];
    $idadecriancacli3 = $tbl[12];
    $nomecriancacli4 = $tbl[13];
    $idadecriancacli4 = $tbl[14];
    $nomecriancacli5 = $tbl[15];
    $idadecriancacli5 = $tbl[16];
    $nomecriancacli6 = $tbl[17];
    $idadecriancacli6 = $tbl[18];
    $nomecontatoalternativocli1 = $tbl[19];
    $contatoalternativocli1 = $tbl[20];
    $nomecontatoalternativocli2 = $tbl[21];
    $contatoalternativocli2 = $tbl[22];

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
    <title>Dados de Cliente</title>
</head>
<body>
    <div class = "global"> 
        
        <div class ="formulario"><a href="start_home.php"><img src='icons/arrow47.png' width=50 height=50></a>
                <form class='login' action ="cliente_altera.php" method ="post"  > 
                     <!-- PARA GRAVARMOS REALMENTE O ID DO CLIENTE -->

                    <input type ='hidden' name='id' value ='<?=$id?>' >
                    <label>NOME DO CLIENTE</label>
                    
                    <input type ='text' name = "txtnome" value ='<?= $nomecli?>' required>
                    <br>
                    <label>CPF</label>
                    
                    <input type = 'number' name ="txtcpf" value ='<?= $cpfcli?>' disabled required>

                    <br>
                    <!-- Telefone = contato -->
                    <label>TELEFONE DO RESPONSÁVEL</label> 
                    
                    <input type = 'number' name ="txtcontato" value ='<?= $contatocli?>' required>

                     <label>DATA NASCIMENTO DO RESPONSÁVEL</label>
                    <input type='date' name='txtdatanasc' value="<?= $datanasccli ?>" required>
                      <br>

                    <label>ATUALIZAR SENHA</label>
                    <input type='password' name='txtsenha' placeholder="Deixe em Branco para manter a Senha Atual">
                   
                <!-- ESSE RADIO VERIFICA CLIENTE -->
                <div class='rbativo'>
                    
                    <input type="radio" name="ativo" id="ativo" value="1" <?= $ativocli == 1? 'checked' : ''?>><label>ATIVO</label>
                    <br>
                    <input type="radio" name="ativo" id="inativo" value="0" <?= $ativocli == 0? 'checked' : ''?>><label>INATIVO</label>
                </div>

                   <br> 

                   <label>NOME DO RESPONSÁVEL ALTERNATIVO 1</label>
                    
                        <input type ='text' name = "txtnomecontatoalternativo1" placeholder ='Digite o nome do Responsável alternativo 1' required>
                        <br>

                        <label>TELEFONE PARA CONTATO COM RESPONSÁVEL ALTERNATIVO 1</label> 
                        
                        <input type = 'number' name ="txtcontatoalternativo1" placeholder="(00) 00000-0000" maxlength='15' required>
                        <br>

                        <label>NOME DO RESPONSÁVEL ALTERNATIVO 2 (OPCIONAL)</label>
                    
                        <input type ='text' name = "txtnomecontatoalternativo2" placeholder ='Digite o nome do Responsável alternativo 1'>
                        <br>

                        <label>TELEFONE PARA CONTATO COM RESPONSÁVEL ALTERNATIVO 2 (OPCIONAL)</label> 
                        
                        <input type = 'number' name ="txtcontatoalternativo2" placeholder="(00) 00000-0000" maxlength='15'>
                        <br>

                    <label>SELECIONE O NÚMERO DE DEPENDENTES</label>
                        <select id="numCriancas" onchange="mostrarCampos()">
                        <option value="0">Selecione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        </select>
                        <br> 

                         <div id="crianca1" class="campos-crianca" style="display:none;">
                            <label>NOME DA CRIANÇA 1</label>
                            <input type="text" name="txtnomecrianca1" placeholder = 'Digite o nome completo da Criança 1' required>
                            <label>IDADE DA CRIANÇA 1</label>
                            <input type="number" name="txtidadecrianca1" placeholder = 'Digite a idade da Criança 1' required>
                        </div>

                        <div id="crianca2" class="campos-crianca" style="display:none;">
                            <label>NOME DA CRIANÇA 2</label>
                            <input type="text" name="txtnomecrianca2" placeholder = 'Digite o nome completo da Criança 2 '>
                            <label>IDADE DA CRIANÇA 2</label>
                            <input type="number" name="txtidadecrianca2" placeholder = 'Digite a idade da Criança 2 '>
                        </div>

                        <div id="crianca3" class="campos-crianca" style="display:none;">
                            <label>NOME DA CRIANÇA 3</label>
                            <input type="text" name="txtnomecrianca3" placeholder = 'Digite o nome completo da Criança 3 '>
                            <label>IDADE DA CRIANÇA 3</label>
                            <input type="number" name="txtidadecrianca3" placeholder = 'Digite a idade da Criança 3 '>
                        </div>

                        <div id="crianca4" class="campos-crianca" style="display:none;">
                            <label>NOME DA CRIANÇA 4</label>
                            <input type="text" name="txtnomecrianca4" placeholder = 'Digite o nome completo da Criança 4 '>
                            <label>IDADE DA CRIANÇA 4</label>
                            <input type="number" name="txtidadecrianca4" placeholder = 'Digite a idade da Criança 4 '>
                        </div>

                        <div id="crianca5" class="campos-crianca" style="display:none;">
                            <label>NOME DA CRIANÇA 5</label>
                            <input type="text" name="txtnomecrianca5" placeholder = 'Digite o nome completo da Criança 5 '>
                            <label>IDADE DA CRIANÇA 5</label>
                            <input type="number" name="txtidadecrianca5" placeholder = 'Digite a idade da Criança 5 '>
                        </div>

                        <div id="crianca6" class="campos-crianca" style="display:none;">
                            <label>NOME DA CRIANÇA 6</label>
                            <input type="text" name="txtnomecrianca6" placeholder = 'Digite o nome completo da Criança 6 '> 
                            <label>IDADE DA CRIANÇA 6</label>
                            <input type="number" name="txtidadecrianca6" placeholder = 'Digite a idade da Criança 6 '>
                        </div>
                        <br>


                    <input type ='submit' value = 'Salvar Alterações'>

                </form>
                <br>
                

        </div>

    </div>

    <script>
        function mostrarCampos() {
        const num = parseInt(document.getElementById("numCriancas").value);
        for (let i = 1; i <= 6; i++) {
            const campo = document.getElementById("crianca" + i);
            campo.style.display = i <= num ? "block" : "none";
        }
        }
</script>
</body>
</html>