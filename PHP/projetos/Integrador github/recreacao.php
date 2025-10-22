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
    <title>Recreação Kinder Haus</title>
</head>
<body>

    <div class="global">
    

        
<div class="content">
    <div id="container">
             <div class="banner">  
                <div class="banner-texto"> <i> Amplas Atividades Internas </i> <br> São três salas para recreação dentro do nosso espaço.
                Diferentes atividades são propostas nesses espaços: jogos de brincadeiras, arte e desenho e contação de histórias e jogos de tabuleiro.
                Todas as atividades são acompanhadas por nossas profissionais para garantr a segurança e diversão de todos. É importante destacar que,
                por medidas de segurança, jogos de tabuleiro são restritos para crianças com sete anos ou mais, e artes e desenho são liberados apenas 
                para crianças com mais de três anos de idade.
                </div>
                
                    <div class="banner-imagem"> <img src="img/estrutura-opt9.jpg" width="650px" height="auto"> </div>
                    
            </div>
</div>

 <div id="container">
             <div class="banner">  
                    <div class="banner-imagem"> <img src="img/recreacao2.jpg" width="650px" height="auto"> </div>
                    <div class="banner-texto"> <i> Atividade Externa no Quintal </i> <br> Somente durante os períodos da manha e tarde, a Kinder Haus abre o seu quintal 
                    para que a crianças possam usurfruir do nosso parquinho externo. Outras atividades ao ar livre, como jogos e brincadeiras de pique  também estão liberados.
                    Todas as atividades externas são acompanhadas de perto por nossas profissionais, visando a segurança e diversão de todos.  
                    
                </div>
                    
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