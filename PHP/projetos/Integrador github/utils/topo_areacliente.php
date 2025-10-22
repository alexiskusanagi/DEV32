<!-- utils/topo.php -->
 
<header class="topo-geral">
  <div class="barra-superior">
    <div class="linha-contato">
      <span>📍 Rua: Sem Nada, 0</span>
      <span>📞 Recepção: (16) 36XX-XXXX</span>
      <span>📱 WhatsApp: (16) 99XXX-XXXX</span>
    </div>

    <div class="linha-menu">
      <div class="logo-e-boasvindas">
        <a href="../start_home.php">
          <img src="../icons/kinder haus logo 2.png" alt="Logo Kinder Haus" class="logo">
        </a>
        <?php if(!isset($idcliente)){ ?>
          <h3 class="mensagem-magica">Bem-vindo ao Kinder Haus</h3>
        <?php } else { ?>
          <h3 class="mensagem-magica">Bem-vindo(a), <?php echo ($nomecliente); ?></h3>
        <?php } ?>
      </div>

      <nav class="menu-links">
        <a href="../sobre.php">Sobre</a>
        <a href="../estrutura_kinder_haus.php">Estrutura</a>
        <a href="catalogo.php">Fazer Reserva</a>
        <?php if(!isset($idcliente)){ ?>
          <a href="login_cliente.php">Login</a>
        <?php } else { ?>
          <a href="ver_perfil_cliente.php">Meu Perfil</a>
          <a href="ver_agenda_cliente.php">Minhas Reservas</a>
          <a href="logout_cliente.php">Logout</a>
        <?php } ?>
      </nav>
    </div>
  </div>
</header>
