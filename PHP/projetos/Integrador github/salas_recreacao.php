<?php 
include("utils/conectadb.php");
include("utils/valida_cliente.php");
include("utils/topo.php");


?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = css/home.css>
    <link rel = "stylesheet" href = css/topo.css>
    <title>Estrutura Kinder Haus</title>
</head>
<body>

    <div class="global">
    

        
<div class="content">
    <div id="container">
             <div class="banner">  
                <div class="banner-texto"> <i> Sala de Jogos e Brincadeiras </i> <br> A Kinder Haus oferece três salas de recreação. A sala de
                jogos de brincadeiras é a mais ampla delas. Nela as crianças poderão interagir brincando e participando de atividades
                propostas pelas nossas profissionais. Claro, a criatividade das crianças também é estimulada e elas podem e sãoencorajadas a propor
                seus próprios jogos e brincadeiras. Nesse caso, o papel da supervisora é se certificar que a brincadeira inclua a todos que queiram
                participar e se garantir a segurança de todos os pequenos.
                </div>
                
                    <div class="banner-imagem"> <img src="img/estrutura-opt5.jpg" width="650px" height="auto"> </div>
                    
            </div>
</div>

 <div id="container">
             <div class="banner">  
                    <div class="banner-imagem"> <img src="img/estrutura-opt9.jpg" width="650px" height="auto"> </div>
                    <div class="banner-texto"> <i> Arte e Desenho </i> <br> Também para incentivar a criatividade e lado artístico das crianças,
                    oferemos também esse espaço, onde os pequenos podem deixar a imaginação fluir solta. A Kinder Haus oferece materiais como argila
                    papel, lápis e giz de cera para que as crianças possam se expressar artisticamente, por motivos de segurança, todas as salas de recreação
                    são supervisionadas por três profissionais, e como medida extra de precaução, o acesso a essa sala só é permitido para crianças com três anos ou mais.  
                    
                </div>
                    
            </div>
</div>

             <div id="container">
            <div class="banner">  
                <div class="banner-texto"> <i> Contação de História e Jogos de Tabuleiro </i> <br> Nossas profissionais estão sempre prontas para contar belas e emocionantes
                histórias para as crianças. Esse espaço é dedicado a contação de histórias e jogos de tabuleiro. Importante destacar que os jogos de tabuleiro são reservados 
                para crianças com sete anos ou mais. 
                </div>
                
                    <div class="banner-imagem"> <img src="img/recreacao1.jpg" width="650px" height="auto"> </div>
                    
            </div>
            </div>


            <div id="container">
             <!-- fazer os menus e as páginas html -->
            <div class="menus">
             <div class="menu1">
                    <a href="cadastra_cliente.php"><img src ='icons/add9.png' width="200" height="200"></a>
                    <label>Faça seu Cadastro </label>
                </div>

             <div class="menu1">
                    <a href="areacliente/catalogo.php"><img src ='icons/house1.png' width="240" height="170"></a>
                    <label>Agendar Estadia por Horas</label>
                </div>

                 <div class="menu1">
                    <a href="backoffice_kinder_haus.php"><img src ='icons/business.png' width="200" height="200"></a>
                    <label>Acesso de Funcionários</label>
                </div>

            </div>
            </div>

    </div>
    
</body>
</html>