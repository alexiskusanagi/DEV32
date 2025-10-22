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
                <div class="banner-texto"> <i> Quartos para Bebês </i> <br> A Kinder Haus oferece cinco quartos para
                crianças de colo, cada quarto possui dois berços e uma poltrona para a profissional que passará a noite
                monitorando o sono das crianças. Todos os quartos também são equipados com babás eletrônicas, para garantir
                a segurança e o conforto das crianças. 
                </div>
                
                    <div class="banner-imagem"> <img src="img/estrutura-opt16.jpg" width="650px" height="auto"> </div>
                    
            </div>
</div>

 <div id="container">
             <div class="banner">  
                    <div class="banner-imagem"> <img src="img/estrutura-opt4.jpg" width="650px" height="auto"> </div>
                    <div class="banner-texto"> <i> Quarto para Sonecas </i> <br> Além dos quartos para pernoite, oferecemos
                    também quartos para sonecas para todos os hóspedes, dessa forma, mesmo as crianças que não irão pernoitar terão
                    acesso a um cantinho confortável para descansar. Assim como nos quartos para bebês, esse quarto equipado com
                    uma poltrona sendo supervisionado e monitorado por profissionais e babá eletrônica.
                    
                    
                </div>
                    
            </div>
</div>

             <div id="container">
            <div class="banner">  
                <div class="banner-texto"> <i> Monitores em Todos os Ambientes </i> <br> Se preocupando com a segurança e bem-estar
                dos pequenos hóspedes, a Kinder House oferece ambientes monitorados. São pelo menos três profissionais monitorando 
                as áreas de recreação e uma cuidadora em cada um dos quartos.
                </div>
                
                    <div class="banner-imagem"> <img src="img/bercario1.jpeg" width="650px" height="auto"> </div>
                    
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