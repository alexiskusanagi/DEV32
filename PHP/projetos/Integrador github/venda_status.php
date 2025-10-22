<?php
include("utils/conectadb.php");
include("utils/verifica_login.php");

$id     = $_POST['id'] ?? null;
$status = $_POST['status'] ?? null;

if ($id && in_array($status, ['pago', 'pendente', 'cancelado'])) {
    $sql = "UPDATE venda SET VEN_STATUS = '$status' WHERE VEN_ID = $id";
    if (mysqli_query($link, $sql)) {
        echo "<script>alert('Status atualizado para $status'); window.location.href='vendas.php';</script>";
    } else {
        echo "<script>alert('Erro ao atualizar: " . mysqli_error($link) . "'); window.location.href='vendas.php';</script>";
    }
} else {
    echo "<script>alert('Dados inválidos'); window.location.href='vendas.php';</script>";
}
?>
