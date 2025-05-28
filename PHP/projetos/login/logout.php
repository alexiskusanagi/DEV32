<?php
session_start();

session_destroy();

    echo"<script>window.alert('Saindo da Aplicação'); </script>";
    echo"<script>window.location.href='login.php'; </script>";
?>