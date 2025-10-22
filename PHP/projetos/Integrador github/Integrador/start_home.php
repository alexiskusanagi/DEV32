
<?php
include("./utils/conectadb.php");
// FAZER O INCLUDE DO VALIDACLIENTE
// include("./utils/valida_cliente.php");

$sql = "SELECT * FROM catalogo WHERE CAT_ATIVO = 1";
$enviaquery = mysqli_query($link, $sql);

?>






<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = css/home.css>
    <title>KINDER HAUS</title>
</head>
<body>

<div class="global">
    
    <header> 
<div class='menutopo'>
            <a href='start_home.php'> <img src= "icons/kinder haus logo 2.png" width="150" height="150">  </a>
               <a href='sobre.html'> SOBRE </a>
               <a href='estrutura_kinder_haus.html'> ESTRUTURA </a>
                </div>

    </header>


    <!-- FAZER A ANALISE DE LOGIN  -->
  <!-- abertura do php -->
     <!-- ABERTURA DO PORTAL  -->
<?php if(!isset($idcliente)){?>

        <!-- AQUI O CLIENTE NÃO FEZ LOGIN -->
        <div class='topo'>
            
            <h3>BEM VINDO AO KINDER HAUS</h3>
            <!-- BOTÃO DE FAZER LOGIN -->
            <div class='login'>
                <a href='areacliente/login_cliente.php'>
                    <img src='icons/user2.png'width=50 height=50> <label>Login</label>
                </a>
            </div>
        </div>
<!-- FECHA PRA ABRIR -->
<?php }


else{?>
        <div class="topo">    <!--abrindo o class topo -->
            <!-- aqui vai trazer o nome do usuario logado -->
            <h3>BEM VINDO(A),   <?php echo strtoupper($nomecliente)?></h3>
             <div class='login'>
                <a href='areacliente/ver_perfil_cliente.php'>
                    <img src='icons/user2.png'width=50 height=50 > <label>Ver Perfil</label>
                </a>
                <a href='areacliente/ver_agenda_cliente.php'> 
                    <img src='icons/calendar52.png'width=50 height=50 > <label>Suas Reservas</label> </a>
            </div>
            <!-- botao de encerramento de sessão -->
            <div class = "login" method='post'><a href ='areacliente/logout_cliente.php'><img src='icons/backspace.png' width=50 height=45 > <label>Logout</label></a></div>
        </div>  
        <!-- fechando o class topo -->
    

        <?php
     } ?>
<!-- FECHA PRA FECHAR -->
 <!-- abrindo content da página -->
<div class="content">
    <div id="container">
            <div class="banner">  
                <div class="banner-texto"> <i> Kinder Haus </i> <br> A Kinder Haus é um novo conceito em hospedagem para crianças.
                É um lugar seguro e acolhedor onde pais podem hospedar seus filhos por um breve período de tempo enquanto aproveitam outras atividades.
                Seja para um pernoite ou por apenas algumas horas, oferecemos uma estrutura completa para crianças de dois a treze anos.
                A estrutura conta com berçarios, quartos, ampla área de lazer para recreação e uma equipe altamente preparada, carinhosa e experiente. 

                </div>

                    <div class="banner-imagem"> <img src="img/banner-opt3.jpg" width="850px" height="auto"> </div>
     
            </div>
                        <br>

                        <div id="container">
            <div class="banner">  
                <div class="banner-texto"> <i> Recreação </i> <br> A recreação tem um importante papel no desenvolvimento da socialização das crianças.
                Na Kinder Haus disponibilizamos espaços que favorecem essa interação entre os pequenos. Nossas pedagogas focam em jogos e brincadeiras interativas
                encorajando humanamente que toda criança participe de alguma atividade proposta. Toda atividade, seja brincadeira livre ou atividade guiada é acompanhada
                de perto por pelo menos três profissionais ao mesmo tempo.

                
                </div>

                    <div class="banner-imagem"> <img src="img/banner-opt1.jpg" width="550px" height="auto"> </div>
     
            </div>
            <br>

            <div id="container">
            <div class="banner">  
                <div class="banner-texto"> <i> Acomodação </i> <br> A Kinder Haus oferece acomodações e quartos para crianças entre dois e treze anos de idade.
                Dispomos de berçários para cochilos das crianças menores, além de quartos para pernoite das crianças das faixas etárias citadas anteriormente.
                Nossos quartos para bebês incluem dois berços e uma poltrona reclinável para a profissional que vai supervisionar o sono da criança.
                Os quartos para as crianças maiores incluem pelo menos um beliche e também uma cama para a profissional que vai supervisionar o sono dos pequenos hóspedes  
                
                
                
                </div>

                    <div class="banner-imagem"> <img src="img/banner-opt2.jpg" width="650px" height="auto"> </div>
     
            </div>


            <!-- fazer os menus e as páginas html -->
           <div class="menus">
             <div class="menu1">
                    <a href="cadastra_cliente.php"><img src ='icons/cadastro1.png' width="200" height="200"></a>
                    <label>Faça seu Cadastro </label>
                </div>

             <div class="menu1">
                    <a href="funcionario_cadastra.php"><img src ='icons/business.png' width="200" height="200"></a>
                    <label>Agendar Pernoite</label>
                </div>

                 <div class="menu1">
                    <a href="areacliente/catalogo.php"><img src ='icons/business.png' width="200" height="200"></a>
                    <label>Agendar Estadia por Horas</label>
                </div>

            </div>
                    <div class="agenda"> </div>

     <!-- </div> fechando conteúdo da página abaixo -->
    </div>
</div> 
    
</body>
</html>