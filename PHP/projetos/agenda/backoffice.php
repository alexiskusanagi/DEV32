<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = css/global.css> 
    <title>BACKOFFICE</title>
</head>
<body>
<div class ="global"> 
        <div class="topo">
            <!-- aqui vai trazer o nome do usuario logado -->
            <h1>BEM VINDO </h1>
            <!-- botao de encerramento de sessão -->
            <div class = "logout"> 
                <form action ='logout.php'> <input type ="submit" value = 'SAIR'> </form>
            </div>
        </div>
    

        <div class ="menus">
            <!-- os cards de menu -->

            <div class= "menu1"> <a href= "usuario_cadastra.php"> CADASTRAR USUARIO </a> </div>

            <div class= "menu2"> <a href= "usuario_lista.php"> LISTA USUARIO </a> </div>

            <div class= "menu3"> <a href= "funcionario_cadastra.php"> CADASTRAR FUNCIONARIO </a> </div>

            <div class= "menu4"> <a href= "funcionario_lista.php"> LISTA FUNCIONARIO </a> </div>
        </div>


</div>



    
</body>
</html>