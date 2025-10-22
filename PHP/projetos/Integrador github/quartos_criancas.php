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
                <div class="banner-texto"> <i> Conforto e Segurança </i> <br> Nossos quartos para crianças de quatro a doze 
                anos, são estruturados pensando no conforto e na segurança de todos. Todos os acomodamentos possuem três
                camas, além de uma cama extra para a monitora responsável pelo pernoite.
                </div>
                
                    <div class="banner-imagem"> <img src="img/quarto-2.jpg" width="650px" height="auto"> </div>
                    
            </div>

             <div class="banner">  
                    <div class="banner-imagem"> <img src="img/quarto-3.jpg" width="650px" height="auto"> </div>
                    <div class="banner-texto"> <i>Decoração e Aconchego </i> <br> Os quartos são decorados de forma a 
                    evocar uma sensação de paz e aconchego. Queremos que as crianças hospedadas se sintam seguras e 
                    bem-vindas, buscando trazer aquela sensação gostosa de estar em casa.
                </div>

            </div>


                
             <div class="banner">  
                <div class="banner-texto"> <i> Monitoras e Atividades para Estimular o Sono </i> <br> Nossas profissionais 
                estão sempre prontas para contar um história e ninar as crianças de modo a proporcionar o sono 
                para que elas tenham uma boa noite de descanso. 
                </div>
                
                    <div class="banner-imagem"> <img src="img/banner-opt2.jpg" width="650px" height="auto"> </div>
                    
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
    </div>

</div>
    
</body>
</html>