
<!-- ok completo -->
<?php
include("./utils/conectadb.php");
session_start();

$idcliente = $_SESSION['idcliente'] ?? null;
$nomecliente = null;

if ($idcliente) {
    $sql = "SELECT CLI_NOME FROM clientes WHERE CLI_ID = $idcliente";
    $enviaquery = mysqli_query($link, $sql);
    if ($enviaquery && mysqli_num_rows($enviaquery) > 0) {
        $nomecliente = mysqli_fetch_array($enviaquery)[0];
    } else {
        $idcliente = null;
        unset($_SESSION['idcliente']);
    }
}

?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = css/home.css>
    <link rel = "stylesheet" href = css/topo.css>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

    <title>KINDER HAUS</title>
</head>
<body>

<div class="global">
    
  <header class="topo-geral">
  <div class="barra-superior">
    <!-- Linha de cima: Contato -->
    <div class="linha-contato">
      <span>📍 Rua: Sem Nada, 0</span>
      <span>📞 Recepção: (16) 36XX-XXXX</span>
      <span>📱 WhatsApp: (16) 99XXX-XXXX</span>
    </div>

    <!-- Linha de baixo: Logo + Boas-vindas + Menu -->
    <div class="linha-menu">
      <div class="logo-e-boasvindas">
        <a href="start_home.php">
          <img src="icons/kinder haus logo 2.png" alt="Logo Kinder Haus" class="logo">
        </a>
        <?php if(!isset($idcliente)){ ?>
          <h3 class="mensagem-magica">Bem-vindo ao Kinder Haus</h3>
        <?php } else { ?>
          <h3 class="mensagem-magica">Bem-vindo(a), <?php echo ($nomecliente); ?></h3>
        <?php } ?>
      </div>

      <nav class="menu-links">
        <a href="sobre.php">Sobre</a>
        <a href="estrutura_kinder_haus.php">Estrutura</a>
        <a href="areacliente/catalogo.php">Fazer Reserva</a>
        <!-- <a href="areacliente/login_cliente.php">Login</a> -->


        <?php if(!isset($idcliente)){ ?>
          <a href="areacliente/login_cliente.php">Login</a>
        <?php } else { ?>
          <a href="areacliente/ver_perfil_cliente.php">Meu Perfil</a>
          <a href="areacliente/ver_agenda_cliente.php">Minhas Reservas</a>
          <a href="areacliente/logout_cliente.php">Logout</a>
        <?php } ?>
      </nav>
    </div>
  </div>
</header>




 <!-- abrindo content da página -->
<div class="content">
    <div id="container">
            <div class="banner">  
                <div class="banner-texto"> <i> Kinder Haus </i> <br>  A Kinder Haus é um novo conceito em hospedagem para crianças.
                É um lugar seguro e acolhedor onde pais podem hospedar seus filhos por um breve período de tempo enquanto aproveitam outras atividades.
                Seja para um pernoite ou por apenas algumas horas, oferecemos uma estrutura completa para crianças de dois a treze anos.
                A estrutura conta com berçarios, quartos, ampla área de lazer para recreação e uma equipe altamente preparada, carinhosa e experiente.

                </div>

                    <div class="banner-imagem"> <img src="img/banner-opt3.jpg" width="650px" height="auto"> </div>
     
            </div>
                        <br>

                        <div id="container">
            <div class="banner">  
              

                    <div class="banner-imagem"> <img src="img/banner-opt1.jpg" width="650px" height="auto"> </div>
                      <div class="banner-texto"> <i> Recreação </i> <br> A recreação tem um importante papel no desenvolvimento da socialização das crianças.
                Na Kinder Haus disponibilizamos espaços que favorecem essa interação entre os pequenos. Nossas pedagogas focam em jogos e brincadeiras interativas
                encorajando humanamente que toda criança participe de alguma atividade proposta. Toda atividade, seja brincadeira livre ou atividade guiada é acompanhada
                de perto por pelo menos três profissionais ao mesmo tempo.

                
                </div>
     
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
                    <a href="cadastra_cliente.php"><img src ='icons/add9.png' width="200" height="200"></a>
                    <label>Faça seu Cadastro </label>
                </div>

             <div class="menu1">
                    <a href="areacliente/catalogo.php"><img src ='icons/moon1.png' width="250" height="160"></a>
                    <label>Agendar Pernoite</label>
                </div>

                 <div class="menu1">
                    <a href="areacliente/catalogo.php"><img src ='icons/house1.png' width="240" height="170"></a>
                    <label>Agendar Estadia por Horas</label>
                </div>

            </div>
                    <div class="agenda"> </div>

     <!-- </div> fechando conteúdo da página abaixo -->
    </div>
</div> 
    
</body>
</html>