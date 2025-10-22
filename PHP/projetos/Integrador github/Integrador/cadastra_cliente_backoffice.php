<?php
//conexão com o banco de dados - está ok
include("utils/conectadb.php");
include("utils/verifica_login.php");

// apos vamos cadastrar usuario backoffice
if($_SERVER['REQUEST_METHOD']== 'POST'){

// coletar campos dos inputs por names para variáveis PHPs
$nomecli = $_POST['txtnome'];
$cpfcli = $_POST['txtcpf'];
$contatocli = $_POST['txtcontato'];
$ativocli = $_POST['ativo'];
$datanasccli = $_POST['txtdatanasc'];
 // COLETA SENHA DE USUARIO
$senhacli = md5($_POST['txtsenha']);
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
    $sql ="INSERT INTO clientes (CLI_NOME, CLI_CPF, CLI_TEL, CLI_ATIVO, CLI_DATANASC, CLI_SENHA, CLI_NOME_CRIANCA_1, CLI_IDADE_CRIANCA_1, CLI_NOME_CRIANCA_2, CLI_IDADE_CRIANCA_2, CLI_NOME_CRIANCA_3, CLI_IDADE_CRIANCA_3, CLI_NOME_CRIANCA_4, CLI_IDADE_CRIANCA_4, CLI_NOME_CRIANCA_5, CLI_IDADE_CRIANCA_5, CLI_NOME_CRIANCA_6, CLI_IDADE_CRIANCA_6, CLI_NOME_CONT_ALT_1, CLI_TEL_CONT_ALT_1, CLI_NOME_CONT_ALT_2, CLI_TEL_CONT_ALT_2) VALUES ('$nomecli', '$cpfcli', '$contatocli', $ativocli, '$datanasccli', '$senhacli', '$nomecriancacli1', '$idadecriancacli1', '$nomecriancacli2', '$idadecriancacli2', '$nomecriancacli3', '$idadecriancacli3', '$nomecriancacli4', '$idadecriancacli4', '$nomecriancacli5', '$idadecriancacli5', '$nomecriancacli6', '$idadecriancacli6', '$nomecontatoalternativocli1', '$contatoalternativocli1', '$nomecontatoalternativocli2', '$contatoalternativocli2')";

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
    <link rel ="stylesheet" href ="css/formulario.css">
    <link rel ="stylesheet" href ="css/global.css">
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>Cadastro de Cliente</title>
</head>
<body>
    <div class = "global"> 
        
        <div class ="formulario"><a href="backoffice_kinder_haus.php"><img src='icons/arrow477.png' width=50 height=50></a>
                <form class='login' action ="areacliente/login_cliente.php" method ="post"  > 
                    <label>NOME DO CLIENTE</label>
                    
                    <input type ='text' name = "txtnome" placeholder ='Digite seu nome completo' required>
                    <br>
                    <label>CPF</label>
                    
                    <input type = 'number' name ="txtcpf" placeholder="000.000.000-00" maxlength='14' required>

                    
                    <br>
                    <!-- Telefone = contato -->
                    <label>TELEFONE DO RESPONSÁVEL</label> 
                    
                    <input type = 'number' name ="txtcontato" placeholder="(00) 00000-0000" maxlength='15' required>
                    <br>
                    
                    
                    <!-- agora cadastramos o usuario -->
                    <label>SENHA</label>

                    <input type = 'password' name ="txtsenha" placeholder = 'Digite sua senha'>
                    <br> 

                    <label>INICIAR CLIENTE COMO</label>
                    <div class='rbativo'>
                        
                        <input type ="radio" name="ativo" id="ativo" value="1" checked><label>ATIVO</label>
                        <br> 

                        <input type ="radio" name="ativo" id="inativo" value="0" ><label>INATIVO</label>
                    </div>  
                    <br> 

                     <label>DATA DE NASCIMENTO DO RESPONSÁVEL</label> 
                    
                    <input type = 'date' name ="txtdatanasc" placeholder='DD/MM/AAAA' required>
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

                        

                    <input type ='submit' value = 'CADASTRAR'>

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