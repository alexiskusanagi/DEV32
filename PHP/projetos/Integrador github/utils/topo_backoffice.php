<!-- NÃO precisa de um novo session start() -->
<!-- utils/topo.php -->
<?php
include("conectadb.php");





?>


<header class="topo-geral">
  <div class="barra-superior">
    <div class="linha-contato">
      <span>📍 Rua: Sem Nada, 0</span>
      <span>📞 Recepção: (16) 36XX-XXXX</span>
      <span>📱 WhatsApp: (16) 99XXX-XXXX</span>
    </div>

    <div class="linha-menu">
      <div class="logo-e-boasvindas">
        <a href="start_home.php">
          <img src="icons/kinder haus logo 2.png" alt="Logo Kinder Haus" class="logo">
        </a>
        
          <h3 class="mensagem-magica">Bem-vindo ao Kinder Haus Backoffice, <?php echo ($nomeusuario)?></h3>
        
      </div>

      <nav class="menu-links">
       
        <a href="sobre.php">Sobre</a>
        <a href="estrutura_kinder_haus.php">Estrutura</a>
        <a href="areacliente/catalogo.php">Fazer Reserva</a>
        <a href="logout_funcionario.php">Logout Funcionário</a>
        
      </nav>
    </div>
  </div>
</header>
