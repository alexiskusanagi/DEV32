<?php
include("conectadb.php");
session_start();

$idcliente = $_SESSION['idcliente'] ?? null;
$nomecliente = null;

if ($idcliente) {
    $sql = "SELECT CLI_NOME FROM clientes WHERE CLI_ID = $idcliente";
    $enviaquery = mysqli_query($link, $sql);
    if ($enviaquery && mysqli_num_rows($enviaquery) > 0) {
        $nomecliente = mysqli_fetch_array($enviaquery)[0];
    } else {
        // Se cliente não existe, zera o idcliente para forçar logout
        $idcliente = null;
    }
}

// 🚨 Impede acesso se não estiver logado
if (!$idcliente) {
    header("Location:login_cliente.php");
    exit;
}
?>