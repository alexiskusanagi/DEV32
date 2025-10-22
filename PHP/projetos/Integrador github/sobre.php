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
    <title>Sobre Kinder Haus</title>
</head>
<body>

    <div class="global">
    
           

        <div class="content">
        <div id="container">
            <div class="banner" >  
                <div class="banner-texto"> <i> Kinder Haus </i> <br> Esse é um projeto desenvolvido como parte do aprendizado
                    do curso de Assistente de Desenvolvimento de Aplicativos Computacionais no SENAC Ribeirão Preto.
                    O intuíto é criar um site que ofereça um serviço ao usuário e que também tenha uma estrutura para 
                    os administradores do site fazerem cadastros de funcionários, clientes e serviços.
                    O site Kinder Haus é o resultado desse projeto. 
                    A proposta da Kinder Haus é oferecer um serviço de hotelaria e hospedagem para crianças.
                    Muito parecido com a proposta de "hotéis para pets", a ideia foi adaptada visando atender um público que possua
                    filhos entre as idades de dois até doze anos. A ideia é simples, a Kinder Haus é um espaço onde os pais  
                    deixariam seus filhos em um lugar seguro por algumas horas ou um pernoite enquanto se concentram em outras
                    atividades. O espaço conta com área de lazer e recreação, além de quartos e berçários. Monitores cuidam das
                    crianças a todo momento, inclusive nos momentos de sono, há sempre pelo menos uma cuidadora em cada quarto.
                    
                    
                </div>
                    
                    <div class="banner-imagem"> <img src ='icons/kinder haus logo 2.png' width="500px" height="auto" style="margin-right: 100px; margin-bottom: 30px;"> </div>
     
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