<?php
include("utils/conectadb.php");
include("utils/verifica_login.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];

    $sql = "UPDATE agenda SET AG_STATUS = 0 WHERE AG_ID = $id";
    mysqli_query($link, $sql);

    header("Location: ver_agenda.php");
    exit;
} else {
    echo "Requisição inválida.";
}
