<?php
include("../utils/conectadb.php");

// Garante que a sessão está ativa
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

// Verifica se o cliente está logado
if (isset($_SESSION['idcliente']) && is_numeric($_SESSION['idcliente'])) {
    $idcliente = $_SESSION['idcliente'];

    // Consulta segura ao nome do cliente - protege contra sql injection
    $stmt = $link->prepare("SELECT CLI_NOME FROM clientes WHERE CLI_ID = ?");
    $stmt->bind_param("i", $idcliente);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_array()) {
        $nomecliente = $row[0];
    } else {
        echo "<script>window.alert('Cliente não encontrado.');</script>";
        echo "<script>window.location.href='start_home.php';</script>";
        exit;
    }
} else {
    echo "<script>window.alert('NÃO LOGADO');</script>";
    echo "<script>window.location.href='start_home.php';</script>";
    exit;
}
?>
