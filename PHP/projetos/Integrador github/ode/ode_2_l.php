<?php

session_start();

$cubo = null;
$resposta = null;
$correto = null;
$numero = null;
$comando = null;

if (!isset($_SESSION['numero']) || ($_SERVER["REQUEST_METHOD"] == "POST" && $_POST['comando'] === "1")) {
    $numero = rand(10, 99);
    $_SESSION['numero'] = $numero;
    $cubo = $numero ** 3;
} else {
    $numero = $_SESSION['numero'];
    $cubo = $numero ** 3;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $resposta = $_POST['resposta'] ?? null;
    $comando = $_POST['comando'] ?? null;

    if ($comando === "0") {
        session_destroy();
        header("Location: ../backoffice_Kinder_Haus.php");
        exit;
    }

    if ($comando === "1") {
        $_SESSION['numero'] = rand(10, 99);
        header("Location: ode_2_l.php");
        exit;
    }

    $correto = ($resposta == $numero);
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Raiz Cúbica - Estilo MS-DOS</title>
  <link rel="stylesheet" href="ode.css">
</head>
<body>
    <pre>
  ==============================================
  | 0   1   2   3   4   5    6    7    8    9  |
  | 0   1   8  27  64  125  216  343  512  729 |
  ==============================================
    </pre>
  <p>A partir das informações acima, você consegue deduzir qual a Raíz Cúbica de:</p>
  <div style="text-align: center;">
  <div class="retangulo"><?= number_format($cubo, 0, ',', '.') ?></div>
</div>

  <div class="resposta-bloco">
    <form method="post">
      Resposta: <input type="number" name="resposta" required>
      <input type="hidden" name="comando" value="verificar">
      <input type="submit" value="Verificar">
    </form>

    <?php if ($resposta !== null): ?>
      <div class="resultado">
        <?php if ($correto): ?>
          ✅ Resposta Correta!
        <?php else: ?>
          ❌ Não foi dessa vez, a resposta correta é: <?= $numero ?>
        <?php endif; ?>
      </div>
    <?php endif; ?>
  </div>

  <?php if ($resposta !== null): ?>
    <div class="comando-bloco">
      <form method="post">
        <label>Digite 0 para sair ou 1 para tentar de novo:</label><br>
        <input type="text" name="comando" maxlength="1" required>
        <input type="submit" value="Executar comando">
      </form>
    </div>
  <?php endif; ?>
</body>
</html>
