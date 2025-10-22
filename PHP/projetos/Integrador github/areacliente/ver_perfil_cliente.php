<!-- é um cliente altera só que da area cliente -->

<!-- css -->
<?php
include("../utils/conectadb.php");
include("valida_cliente_ver_perfil.php");
include("../utils/topo_areacliente.php");


// Verifica se a variável de sessão 'idcliente' está definida
// e se o valor armazenado nela é um número válido.
// Isso garante que o usuário está autenticado e que o ID é seguro para uso.
if (!isset($_SESSION['idcliente']) || !is_numeric($_SESSION['idcliente'])) {
    // Se a verificação falhar, interrompe a execução do script imediatamente
    // e exibe uma mensagem de erro. Isso impede acesso não autorizado.
    die("Sessão inválida ou não autenticado.");
}

// Se passou pela verificação, atribui o valor da sessão à variável $id.
// Essa variável será usada para identificar o cliente nas consultas ao banco.
$id = $_SESSION['idcliente'];

// Atualização dos dados
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Validação básica dos campos obrigatórios
    $camposObrigatorios = ['id', 'txtnome', 'txtcontato', 'txtdatanasc'];
        // Captura opcional da quantidade de crianças selecionada no combobox
    $quantidadeCriancas = isset($_POST['quantidade_criancas']) ? (int)$_POST['quantidade_criancas'] : 0;

    foreach ($camposObrigatorios as $campo) {
        if (!isset($_POST[$campo])) {
            die("Campo obrigatório '$campo' não foi enviado.");
        }
    }

    // Coleta dos dados
    $id = $_POST['id'];
    $nomecli = $_POST['txtnome'];
    $contatocli = $_POST['txtcontato'];
    
    $datanasccli = $_POST['txtdatanasc'];

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

    // Prepara a query com ou sem atualização de senha
    if ($senhaAtualizar) {
       $stmt = $link->prepare("UPDATE clientes SET 
            CLI_NOME = ?, CLI_TEL = ?, CLI_DATANASC = ?, CLI_SENHA = ?, 
            CLI_NOME_CRIANCA_1 = ?, CLI_IDADE_CRIANCA_1 = ?, 
            CLI_NOME_CRIANCA_2 = ?, CLI_IDADE_CRIANCA_2 = ?, 
            CLI_NOME_CRIANCA_3 = ?, CLI_IDADE_CRIANCA_3 = ?, 
            CLI_NOME_CRIANCA_4 = ?, CLI_IDADE_CRIANCA_4 = ?, 
            CLI_NOME_CRIANCA_5 = ?, CLI_IDADE_CRIANCA_5 = ?, 
            CLI_NOME_CRIANCA_6 = ?, CLI_IDADE_CRIANCA_6 = ?, 
            CLI_NOME_CONT_ALT_1 = ?, CLI_TEL_CONT_ALT_1 = ?, 
            CLI_NOME_CONT_ALT_2 = ?, CLI_TEL_CONT_ALT_2 = ? 
            WHERE CLI_ID = ?");

$stmt->bind_param("sssssisisisisisissssi", 
    $nomecli, $contatocli, $datanasccli, $senhacli,
    $nomecriancacli1, $idadecriancacli1,
    $nomecriancacli2, $idadecriancacli2,
    $nomecriancacli3, $idadecriancacli3,
    $nomecriancacli4, $idadecriancacli4,
    $nomecriancacli5, $idadecriancacli5,
    $nomecriancacli6, $idadecriancacli6,
    $nomecontatoalternativocli1, $contatoalternativocli1,
    $nomecontatoalternativocli2, $contatoalternativocli2,
    $id
);

    } else {
        $stmt = $link->prepare("UPDATE clientes SET 
            CLI_NOME = ?, CLI_TEL = ?, CLI_DATANASC = ?, 
            CLI_NOME_CRIANCA_1 = ?, CLI_IDADE_CRIANCA_1 = ?, 
            CLI_NOME_CRIANCA_2 = ?, CLI_IDADE_CRIANCA_2 = ?, 
            CLI_NOME_CRIANCA_3 = ?, CLI_IDADE_CRIANCA_3 = ?, 
            CLI_NOME_CRIANCA_4 = ?, CLI_IDADE_CRIANCA_4 = ?, 
            CLI_NOME_CRIANCA_5 = ?, CLI_IDADE_CRIANCA_5 = ?, 
            CLI_NOME_CRIANCA_6 = ?, CLI_IDADE_CRIANCA_6 = ?, 
            CLI_NOME_CONT_ALT_1 = ?, CLI_TEL_CONT_ALT_1 = ?, 
            CLI_NOME_CONT_ALT_2 = ?, CLI_TEL_CONT_ALT_2 = ? 
            WHERE CLI_ID = ?");

$stmt->bind_param("ssssisisisisisissssi", 
            $nomecli, $contatocli, $datanasccli,
            $nomecriancacli1, $idadecriancacli1,
            $nomecriancacli2, $idadecriancacli2,
            $nomecriancacli3, $idadecriancacli3,
            $nomecriancacli4, $idadecriancacli4,
            $nomecriancacli5, $idadecriancacli5,
            $nomecriancacli6, $idadecriancacli6,
            $nomecontatoalternativocli1, $contatoalternativocli1,
            $nomecontatoalternativocli2, $contatoalternativocli2,
            $id
        );

    }

    $stmt->execute();
    echo "<script>window.alert('$nomecli ALTERADO');</script>";
    echo "<script>window.location.href='catalogo.php'</script>";
}

// Consulta para preencher os campos
$sql = "SELECT * FROM clientes WHERE CLI_ID = ?";
$stmt = $link->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

if ($tbl = $result->fetch_array()) {
    $id = $tbl[0];
    $nomecli = $tbl[1];
    $cpfcli = $tbl[2];
    $contatocli = $tbl[3];
    $datanasccli = $tbl[5];
    $senhacli = ""; // Não exibir hash da senha
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
    <link rel="stylesheet" href="../css/formulario.css">
    <link rel="stylesheet" href="../css/home.css">
    <link rel ="stylesheet" href ="../css/topo.css">
    <link href="https://fonts.cdnfonts.com/css/schuboisehandwrite" rel="stylesheet">
    <title>Dados de Cliente</title>
</head>
<body>
    <div class="global">
        <div class="formulario">
            <!-- <a href="../start_home.php">
                <img src='../icons/arrow47.png' background-color=#4facfe width=50 height=50>
            </a> -->

            <form class='login' action="ver_perfil_cliente.php" method="post">
                <input type='hidden' name='id' value='<?= $id ?>'>

                <label>nome do cliente</label>
                <input type='text' name='txtnome' value='<?= $nomecli ?>' required>

                <label>c.p.f.</label>
                <input type='number' name='txtcpf' value='<?= $cpfcli ?>' disabled required>

                <label>telefone do responsável</label>
                <input type='number' name='txtcontato' value='<?= $contatocli ?>' required>

                <label>data nascimento do responsável</label>
                <input type='date' name='txtdatanasc' value='<?= $datanasccli ?>' required>

                <label>atualizar senha </label>
                <input type='password' name='txtsenha' placeholder="Deixe em Branco para manter a Senha Atual">

                <label>nome do responsável alternativo 1</label>
                <input type='text' name='txtnomecontatoalternativo1' value='<?= $nomecontatoalternativocli1 ?>' required>

                <label>telefone para contato com responsável alternativo 1</label>
                <input type='number' name='txtcontatoalternativo1' value='<?= $contatoalternativocli1 ?>' required>

                <label>nome do responsável alternativo 2 (opcional)</label>
                <input type='text' name='txtnomecontatoalternativo2' value='<?= $nomecontatoalternativocli2 ?>'>

                <label>telefone para contato com responsável alternativo 2 (opconal)</label>
                <input type='number' name='txtcontatoalternativo2' value='<?= $contatoalternativocli2 ?>'>

                <!-- Combobox para número de crianças -->
                <label>quantas crianças deseja cadastrar?</label>
                <select name="quantidade_criancas" id="quantidade_criancas" onchange="mostrarCamposCrianca()" required>
                    <option value="">Selecione</option>
                    <?php for ($i = 1; $i <= 6; $i++): ?>
                        <option value="<?= $i ?>"><?= $i ?></option>
                    <?php endfor; ?>
                </select>

                <!-- Campos das crianças -->
                <?php for ($i = 1; $i <= 6; $i++): 
                    $nomeVar = "nomecriancacli$i";
                    $idadeVar = "idadecriancacli$i";
                ?>
                    <div id="crianca<?= $i ?>" class="campos-crianca" style="display:none;">
                        <label>nome da criança <?= $i ?></label>
                        <input type="text" name="txtnomecrianca<?= $i ?>" value="<?= $$nomeVar ?>" placeholder="Digite o nome completo da Criança <?= $i ?>">
                        <label>idade da criança <?= $i ?></label>
                        <input type="number" name="txtidadecrianca<?= $i ?>" value="<?= $$idadeVar ?>" placeholder="Digite a idade da Criança <?= $i ?>">
                    </div>
                <?php endfor; ?>

                <input type='submit' value='Salvar Alterações'>
            </form>
        </div>
    </div>

    <!-- Script para exibir campos das crianças dinamicamente -->
    <script>
        function mostrarCamposCrianca() {
            const quantidade = parseInt(document.getElementById('quantidade_criancas').value);
            for (let i = 1; i <= 6; i++) {
                const campo = document.getElementById('crianca' + i);
                campo.style.display = i <= quantidade ? 'block' : 'none';
            }
        }

        // Executa ao carregar a página (se já houver valor selecionado)
        window.onload = function() {
            mostrarCamposCrianca();
        };
    </script>
     <div class="fundo-translucido"></div>
</body>
</html>

