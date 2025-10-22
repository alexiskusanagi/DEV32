<!-- falta o texto bla bla -->
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
                <div class="banner-texto"> <i> Quartos para crianças </i> <br> A Kinder Haus conta com dez quartos para pernoite sendo
                cinco deles voltados para crianças a partir dos quatro anos. Todos os quartos possuem três camas, totalizando em quinze
                vagas, além de uma cama extra para monitora que ficará com as crianças a noite toda. 
                  <a href= "quartos_criancas.php"> Saiba Mais</a>
                </div>
                

                    <div class="banner-imagem"> <img src="img/banner-opt2.jpg" width="650px" height="auto"> </div>
                    
            </div>

            <div class="banner">  
               
                
                    <div class="banner-imagem"> <img src="img/estrutura-opt4.jpg" width="650px" height="auto"> </div>
                     <div class="banner-texto"> <i> Berçarios </i> <br> Para crianças de colo a Kinder Haus oferece cinco quartos.
                     Cada quarto possui ao menos dois berços e uma poltrona para a monitora que passará a noite com as crianças.
                     O espaço também conta com três quartos para sonecas, cada um desses tem capacidade para até oito crianças pequenas.
                 
                     
                      <a href= "bercarios.php"> Saiba Mais</a>
                </div>
                    
            </div>

             <div class="banner">  
                <div class="banner-texto"> <i> Atividades e Recreação </i> <br> As monitoras da Kinder Haus estão sempre prontas
                para engajar os pequenos em atividades interativas lúdicas e recreativas, estimulando a socialização entre todas 
                as crianças.

                <a href= "recreacao.php"> Saiba Mais</a>
                </div>
                
                    <div class="banner-imagem"> <img src="img/banner-opt4.jpg" width="650px" height="auto"> </div>
                    
            </div>

             <div class="banner">  
                
                
                    <div class="banner-imagem"> <img src="img/estrutura-opt5.jpg" width="650px" height="auto"> </div>
                    <div class="banner-texto"> <i> Espaço de Recreação</i> <br> A Kinder Haus possui diferentes espaços para atividades
                    internas e externas (essas últimas, restritas ao período da manhã e tarde). São três salas de recreação com foco em 
                    diferentes atividades: brincadeiras e jogos, arte e desenho, jogos de tabuleiro e contação de histórias. Cada sala 
                    conta com pelo menos três monitoras.
                    
                    <a href= "salas_recreacao.php"> Saiba Mais</a>
                    
                </div>
                    
            </div>


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
    
</body>
</html>