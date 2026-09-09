/*

CISCO STUDY SIMULATOR
missions.js

Responsabilidade:
Definir as missões guiadas do simulador.

As missões são OPCIONAIS.

Elas:

* orientam o estudante;
* apresentam um roteiro sugerido;
* ajudam a aprender os comandos;
* não bloqueiam a CLI;
* não obrigam uma ordem de execução;
* não representam regras do Switch ou Router.

O estudante pode ignorar completamente uma missão
e utilizar a CLI livremente.

*/

export const missions = {


/*
=================================================
OBJETIVO 1
=================================================
*/

ip_svi: {

    title:
        "Objetivo 1 — Configurar IP de Gerenciamento (VLAN 1) e Testar Ping",

    category:
        "Gerenciamento",

    difficulty:
        "iniciante",

    description:
        "Configure o IP de gerenciamento do Switch na VLAN 1 e teste a conectividade.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado (Switch#).",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'interface vlan 1' para acessar a interface virtual de gerenciamento.",

        "Digite 'ip address 192.168.1.254 255.255.255.0' para configurar o endereço IP.",

        "Digite 'no shutdown' para ativar a interface VLAN 1.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'end' para retornar ao Modo Privilegiado.",

        "Teste a conectividade com 'ping 192.168.1.10'."

    ]

},


/*
=================================================
OBJETIVO 2
=================================================
*/

security_line: {

    title:
        "Objetivo 2 — Configurar Senhas de Acesso (Console e VTY)",

    category:
        "Segurança",

    difficulty:
        "iniciante",

    description:
        "Proteja o acesso privilegiado, o Console e as linhas VTY do dispositivo.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'enable secret cisco123' para configurar a senha do modo privilegiado.",

        "Digite 'line console 0' para acessar a configuração do Console.",

        "Digite 'password cisco' para definir a senha do Console.",

        "Digite 'login' para exigir a senha no acesso pelo Console.",

        "Digite 'exit' para voltar ao Modo Global.",

        "Digite 'line vty 0 15' para acessar as linhas de acesso remoto.",

        "Digite 'password cisco' para definir a senha VTY.",

        "Digite 'login' para ativar a autenticação das linhas VTY.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'service password-encryption' para ativar a criptografia das senhas simples."

    ]

},


/*
=================================================
OBJETIVO 3
=================================================
*/

vlan_access: {

    title:
        "Objetivo 3 — Criar VLANs Customizadas e Mover Portas",

    category:
        "VLAN",

    difficulty:
        "iniciante",

    description:
        "Crie uma VLAN personalizada, associe portas como Access e configure um enlace Trunk.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'vlan 10' para criar a VLAN 10.",

        "Digite 'name Vendas' para nomear a VLAN.",

        "Digite 'exit' para voltar ao Modo Global.",

        "Digite 'interface fastethernet 0/1' para acessar a porta do primeiro computador.",

        "Digite 'switchport mode access' para definir a porta como Access.",

        "Digite 'switchport access vlan 10' para associar a porta à VLAN 10.",

        "Digite 'exit' para voltar ao Modo Global.",

        "Como exercício adicional, acesse outra porta com 'interface fastethernet 0/2'.",

        "Digite 'switchport mode trunk' para configurar a porta como Trunk.",

        "Use 'show' para verificar a configuração realizada."

    ]

},


/*
=================================================
OBJETIVO 4
=================================================
*/

port_security: {

    title:
        "Objetivo 4 — Ativar Defesa Port-Security contra Hackers",

    category:
        "Segurança",

    difficulty:
        "intermediário",

    description:
        "Proteja uma porta do Switch usando Port Security e Sticky MAC e simule uma violação.",

    steps: [

        "Entre no Modo Privilegiado com 'enable'.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'interface fastethernet 0/1' para acessar a porta do computador.",

        "Digite 'switchport mode access' para garantir que a porta está em modo Access.",

        "Digite 'switchport port-security' para ativar o Port Security.",

        "Digite 'switchport port-security mac-address sticky' para ativar o aprendizado Sticky MAC.",

        "Observe que o MAC legítimo do computador pode ser memorizado pela porta.",

        "Volte ao prompt privilegiado com 'end'.",

        "Simule uma tentativa de invasão usando 'atacar fa0/1'.",

        "Observe o comportamento da porta após a violação.",

        "Verifique o estado da porta e do Port Security.",

        "Para recuperar a porta, acesse novamente 'interface fastethernet 0/1'.",

        "Digite 'shutdown' para desativar administrativamente a porta.",

        "Digite 'no shutdown' para reativar a porta."

    ]

},


/*
=================================================
OBJETIVO 5
=================================================
*/

router_on_a_stick: {

    title:
        "Objetivo 5 — VLANs + Router-on-a-Stick",

    category:
        "Inter-VLAN Routing",

    difficulty:
        "intermediário",

    description:
        "Crie duas VLANs no Switch e permita comunicação entre elas através do Router usando Router-on-a-Stick.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'vlan 10' para criar a VLAN 10.",

        "Digite 'name Vendas' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'vlan 20' para criar a VLAN 20.",

        "Digite 'name Administracao' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Acesse a porta do primeiro PC com 'interface fastethernet 0/1'.",

        "Digite 'switchport mode access' para configurar a porta como Access.",

        "Digite 'switchport access vlan 10' para associar a porta à VLAN 10.",

        "Acesse as portas dos demais PCs e associe cada uma à VLAN correspondente.",

        "Acesse a porta do Switch conectada ao Router.",

        "Digite 'switchport mode trunk' para configurar o enlace como Trunk.",

        "Digite 'exit' para retornar ao Modo Global.",

        "No Router, digite 'interface gigabitethernet 0/0.10' para criar a subinterface da VLAN 10.",

        "Digite 'encapsulation dot1Q 10' para identificar os quadros da VLAN 10.",

        "Digite 'ip address 192.168.10.1 255.255.255.0' para configurar o gateway da VLAN 10.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'interface gigabitethernet 0/0.20' para criar a subinterface da VLAN 20.",

        "Digite 'encapsulation dot1Q 20' para identificar os quadros da VLAN 20.",

        "Digite 'ip address 192.168.20.1 255.255.255.0' para configurar o gateway da VLAN 20.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Acesse a interface física com 'interface gigabitethernet 0/0'.",

        "Digite 'no shutdown' para ativar a interface física.",

        "Configure os PCs com endereços da rede 192.168.10.0/24 ou 192.168.20.0/24 e utilize como gateway o endereço correspondente do Router.",

        "Teste a comunicação entre PCs que pertencem a VLANs diferentes."

    ]

},


/*
=================================================
OBJETIVO 6
=================================================
*/

corporate_three_vlans: {

    title:
        "Objetivo 6 — Rede de Vendas, Administração e TI",

    category:
        "Inter-VLAN Routing",

    difficulty:
        "intermediário",

    description:
        "Monte uma pequena rede corporativa segmentada em três VLANs.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'vlan 10' para criar a VLAN de Vendas.",

        "Digite 'name Vendas' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'vlan 20' para criar a VLAN de Administração.",

        "Digite 'name Administracao' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'vlan 30' para criar a VLAN de TI.",

        "Digite 'name TI' para nomear a VLAN.",

        "Configure as portas dos PCs como Access.",

        "Associe as portas dos PCs da Vendas à VLAN 10.",

        "Associe as portas dos PCs da Administração à VLAN 20.",

        "Associe as portas dos PCs da TI à VLAN 30.",

        "Acesse a porta do Switch conectada ao Router.",

        "Digite 'switchport mode trunk' para configurar o enlace como Trunk.",

        "No Router, acesse 'interface gigabitethernet 0/0.10'.",

        "Digite 'encapsulation dot1Q 10' para configurar o encapsulamento da VLAN 10.",

        "Digite 'ip address 192.168.10.1 255.255.255.0' para configurar o gateway da Vendas.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Acesse 'interface gigabitethernet 0/0.20'.",

        "Digite 'encapsulation dot1Q 20' para configurar o encapsulamento da VLAN 20.",

        "Digite 'ip address 192.168.20.1 255.255.255.0' para configurar o gateway da Administração.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Acesse 'interface gigabitethernet 0/0.30'.",

        "Digite 'encapsulation dot1Q 30' para configurar o encapsulamento da VLAN 30.",

        "Digite 'ip address 192.168.30.1 255.255.255.0' para configurar o gateway da TI.",

        "Acesse 'interface gigabitethernet 0/0'.",

        "Digite 'no shutdown' para ativar a interface física.",

        "Configure os PCs com endereços das redes correspondentes e utilize como gateway o endereço .1 de cada VLAN.",

        "Teste a conectividade entre PCs das três VLANs."

    ]

},


/*
=================================================
OBJETIVO 7
=================================================
*/

port_security_inter_vlan: {

    title:
        "Objetivo 7 — Segurança das Portas + Inter-VLAN Routing",

    category:
        "Segurança",

    difficulty:
        "avançado",

    description:
        "Crie uma rede segmentada, proteja as portas dos PCs e permita comunicação entre VLANs através do Router.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'vlan 10' para criar a VLAN 10.",

        "Digite 'name Vendas' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'vlan 20' para criar a VLAN 20.",

        "Digite 'name Administracao' para nomear a VLAN.",

        "Configure as portas dos PCs como Access.",

        "Associe as portas dos PCs da primeira rede à VLAN 10.",

        "Associe as portas dos PCs da segunda rede à VLAN 20.",

        "Acesse uma porta de PC com 'interface fastethernet 0/1'.",

        "Digite 'switchport mode access' para garantir que a porta está em modo Access.",

        "Digite 'switchport port-security' para ativar o Port Security.",

        "Digite 'switchport port-security mac-address sticky' para ativar o aprendizado Sticky MAC.",

        "Repita a configuração de Port Security nas demais portas dos PCs.",

        "Acesse a porta do Switch conectada ao Router.",

        "Digite 'switchport mode trunk' para configurar o enlace como Trunk.",

        "No Router, acesse 'interface gigabitethernet 0/0.10'.",

        "Digite 'encapsulation dot1Q 10' para configurar o encapsulamento da VLAN 10.",

        "Digite 'ip address 192.168.10.1 255.255.255.0' para configurar o gateway da VLAN 10.",

        "Acesse 'interface gigabitethernet 0/0.20'.",

        "Digite 'encapsulation dot1Q 20' para configurar o encapsulamento da VLAN 20.",

        "Digite 'ip address 192.168.20.1 255.255.255.0' para configurar o gateway da VLAN 20.",

        "Acesse 'interface gigabitethernet 0/0' e digite 'no shutdown' para ativar a interface física.",

        "Configure os PCs com endereços das redes correspondentes e seus respectivos gateways.",

        "Teste o ping entre PCs de VLANs diferentes.",

        "Volte ao Modo Privilegiado com 'end'.",

        "Simule uma tentativa de invasão usando 'atacar fa0/1'.",

        "Observe o comportamento da porta após a violação de Port Security.",

        "Verifique o estado da porta e do Port Security.",

        "Para recuperar a porta, acesse novamente 'interface fastethernet 0/1'.",

        "Digite 'shutdown' para desativar administrativamente a porta.",

        "Digite 'no shutdown' para reativar a porta.",

        "Teste novamente a conectividade da rede."

    ]

},


/*
=================================================
OBJETIVO 8
=================================================
*/

switch_management_router: {

    title:
        "Objetivo 8 — Gerenciamento do Switch pelo Router",

    category:
        "Gerenciamento",

    difficulty:
        "intermediário",

    description:
        "Configure uma VLAN de gerenciamento separada e estabeleça comunicação entre o Switch e o Router.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'vlan 99' para criar a VLAN de gerenciamento.",

        "Digite 'name GERENCIA' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'interface vlan 99' para acessar a SVI de gerenciamento.",

        "Digite 'ip address 192.168.99.2 255.255.255.0' para configurar o IP de gerenciamento do Switch.",

        "Digite 'no shutdown' para ativar a SVI.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Acesse a porta do Switch conectada ao Router.",

        "Digite 'switchport mode trunk' para configurar o enlace como Trunk.",

        "No Router, digite 'interface gigabitethernet 0/0.99' para criar a subinterface de gerenciamento.",

        "Digite 'encapsulation dot1Q 99' para identificar a VLAN 99.",

        "Digite 'ip address 192.168.99.1 255.255.255.0' para configurar o gateway da rede de gerenciamento.",

        "Digite 'exit' e depois acesse 'interface gigabitethernet 0/0'.",

        "Digite 'no shutdown' para ativar a interface física.",

        "No Switch, retorne ao Modo Global e digite 'ip default-gateway 192.168.99.1'.",

        "Acesse a porta destinada ao PC de gerenciamento.",

        "Digite 'switchport mode access' para configurar a porta como Access.",

        "Digite 'switchport access vlan 99' para associar a porta à VLAN de gerenciamento.",

        "Configure o PC de gerenciamento com um endereço da rede 192.168.99.0/24 e utilize 192.168.99.1 como gateway.",

        "Teste o ping do Switch para o Router com 'ping 192.168.99.1'.",

        "Teste a comunicação entre o PC de gerenciamento e o Switch com 'ping 192.168.99.2'."

    ]

},


/*
=================================================
OBJETIVO 9
=================================================
*/

static_routing: {

    title:
        "Objetivo 9 — Duas Redes com Roteamento Estático",

    category:
        "Roteamento",

    difficulty:
        "intermediário",

    description:
        "Interligue duas redes através de dois Routers utilizando endereçamento e uma rota estática.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado do primeiro Router.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Acesse a interface conectada à primeira rede com 'interface gigabitethernet 0/0'.",

        "Digite 'ip address 192.168.10.1 255.255.255.0' para configurar o gateway da primeira rede.",

        "Digite 'no shutdown' para ativar a interface.",

        "Acesse a interface do Router conectada ao segundo Router.",

        "Configure um endereço da rede de trânsito, por exemplo 'ip address 10.0.0.1 255.255.255.252'.",

        "Digite 'no shutdown' para ativar a interface de trânsito.",

        "No segundo Router, configure a interface conectada ao primeiro Router com um endereço da mesma rede de trânsito, por exemplo '10.0.0.2 255.255.255.252'.",

        "Ative a interface do segundo Router com 'no shutdown'.",

        "Configure a interface do segundo Router conectada à segunda rede.",

        "Utilize 'ip address 192.168.20.1 255.255.255.0' para configurar o gateway da segunda rede.",

        "Ative a interface com 'no shutdown'.",

        "Configure os PCs da primeira rede com endereços da rede 192.168.10.0/24 e gateway 192.168.10.1.",

        "Configure os PCs da segunda rede com endereços da rede 192.168.20.0/24 e gateway 192.168.20.1.",

        "No primeiro Router, utilize 'ip route 192.168.20.0 255.255.255.0 10.0.0.2' para criar uma rota estática até a segunda rede.",

        "No segundo Router, utilize 'ip route 192.168.10.0 255.255.255.0 10.0.0.1' para criar a rota de retorno.",

        "Utilize 'show ip interface brief' para verificar o estado das interfaces.",

        "Utilize 'show ip route' para verificar as rotas instaladas.",

        "Teste a conectividade entre PCs das duas redes com 'ping'."

    ]

},


/*
=================================================
OBJETIVO 10
=================================================
*/

native_vlan: {

    title:
        "Objetivo 10 — Trunk entre Switch e Router com VLAN Nativa",

    category:
        "VLAN",

    difficulty:
        "avançado",

    description:
        "Configure um enlace 802.1Q entre Switch e Router utilizando uma VLAN nativa.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'vlan 10' para criar a VLAN 10.",

        "Digite 'name Vendas' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'vlan 20' para criar a VLAN 20.",

        "Digite 'name Administracao' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Configure as portas dos PCs como Access.",

        "Associe os PCs às VLANs correspondentes.",

        "Acesse a porta do Switch conectada ao Router.",

        "Digite 'switchport mode trunk' para configurar o enlace como Trunk.",

        "Digite 'switchport trunk native vlan 20' para definir a VLAN 20 como VLAN nativa.",

        "No Router, acesse 'interface gigabitethernet 0/0.10'.",

        "Digite 'encapsulation dot1Q 10' para configurar o encapsulamento da VLAN 10.",

        "Digite 'ip address 192.168.10.1 255.255.255.0' para configurar o gateway da VLAN 10.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Acesse 'interface gigabitethernet 0/0.20'.",

        "Digite 'encapsulation dot1Q 20 native' para configurar a VLAN 20 como nativa.",

        "Digite 'ip address 192.168.20.1 255.255.255.0' para configurar o gateway da VLAN 20.",

        "Acesse 'interface gigabitethernet 0/0' e digite 'no shutdown' para ativar a interface física.",

        "Garanta que a VLAN nativa configurada no Switch e no Router seja a mesma.",

        "Configure os PCs com endereços das redes correspondentes e utilize os gateways configurados no Router.",

        "Teste a comunicação entre as duas redes."

    ]

},


/*
=================================================
OBJETIVO 11
=================================================
*/

initial_configuration: {

    title:
        "Objetivo 11 — Configuração Inicial Completa do Switch e Router",

    category:
        "Configuração Inicial",

    difficulty:
        "iniciante",

    description:
        "Realize a configuração básica de segurança e identificação do Switch e do Router.",

    steps: [

        "No Switch, digite 'enable' para entrar no Modo Privilegiado.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'hostname SW-CORE' para definir o nome do Switch.",

        "Digite 'banner motd #ACESSO RESTRITO - SOMENTE USUARIOS AUTORIZADOS#' para configurar o banner MOTD.",

        "Digite 'enable secret cisco123' para configurar a senha do Modo Privilegiado.",

        "Digite 'line console 0' para acessar a configuração do Console.",

        "Digite 'password cisco' para definir a senha do Console.",

        "Digite 'login' para exigir a senha no acesso pelo Console.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'line vty 0 15' para acessar as linhas VTY.",

        "Digite 'password cisco' para definir a senha VTY.",

        "Digite 'login' para ativar a autenticação das linhas VTY.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'service password-encryption' para ativar a criptografia das senhas simples.",

        "Digite 'end' para retornar ao Modo Privilegiado.",

        "No Router, digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'hostname R1' para definir o nome do Router.",

        "Digite 'banner motd #ACESSO RESTRITO - SOMENTE USUARIOS AUTORIZADOS#' para configurar o banner MOTD.",

        "Digite 'enable secret cisco123' para configurar a senha do Modo Privilegiado.",

        "Digite 'line console 0' para acessar a configuração do Console.",

        "Digite 'password cisco' para definir a senha do Console.",

        "Digite 'login' para exigir a senha no acesso pelo Console.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'line vty 0 15' para acessar as linhas VTY.",

        "Digite 'password cisco' para definir a senha VTY.",

        "Digite 'login' para ativar a autenticação das linhas VTY.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'service password-encryption' para ativar a criptografia das senhas simples.",

        "Digite 'no ip domain-lookup' para impedir que comandos digitados incorretamente sejam tratados como nomes de domínio.",

        "Digite 'end' para retornar ao Modo Privilegiado.",

        "No Switch, utilize 'copy running-config startup-config' para salvar a configuração.",

        "No Router, utilize 'copy running-config startup-config' para salvar a configuração.",

        "Utilize 'show running-config' para conferir as configurações.",

        "Utilize 'show ip interface brief' no Router para verificar o estado das interfaces."

    ]

},


/*
=================================================
OBJETIVO 12
=================================================
*/

five_pcs_three_vlans: {

    title:
        "Objetivo 12 — Rede com 5 PCs e Três VLANs",

    category:
        "Projeto de Rede",

    difficulty:
        "avançado",

    description:
        "Construa um laboratório completo utilizando exatamente cinco PCs distribuídos em três VLANs.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'vlan 10' para criar a VLAN de Vendas.",

        "Digite 'name Vendas' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'vlan 20' para criar a VLAN de Administração.",

        "Digite 'name Administracao' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'vlan 30' para criar a VLAN de Suporte.",

        "Digite 'name Suporte' para nomear a VLAN.",

        "Configure a porta do PC1 como Access e associe-a à VLAN 10.",

        "Configure a porta do PC2 como Access e associe-a à VLAN 10.",

        "Configure a porta do PC3 como Access e associe-a à VLAN 20.",

        "Configure a porta do PC4 como Access e associe-a à VLAN 20.",

        "Configure a porta do PC5 como Access e associe-a à VLAN 30.",

        "Acesse a porta do Switch conectada ao Router.",

        "Digite 'switchport mode trunk' para configurar o enlace como Trunk.",

        "No Router, acesse 'interface gigabitethernet 0/0.10'.",

        "Digite 'encapsulation dot1Q 10' para configurar o encapsulamento da VLAN 10.",

        "Digite 'ip address 192.168.10.1 255.255.255.0' para configurar o gateway da VLAN 10.",

        "Acesse 'interface gigabitethernet 0/0.20'.",

        "Digite 'encapsulation dot1Q 20' para configurar o encapsulamento da VLAN 20.",

        "Digite 'ip address 192.168.20.1 255.255.255.0' para configurar o gateway da VLAN 20.",

        "Acesse 'interface gigabitethernet 0/0.30'.",

        "Digite 'encapsulation dot1Q 30' para configurar o encapsulamento da VLAN 30.",

        "Digite 'ip address 192.168.30.1 255.255.255.0' para configurar o gateway da VLAN 30.",

        "Acesse 'interface gigabitethernet 0/0' e digite 'no shutdown' para ativar a interface física.",

        "Configure o PC1 com 192.168.10.10/24 e gateway 192.168.10.1.",

        "Configure o PC2 com 192.168.10.11/24 e gateway 192.168.10.1.",

        "Configure o PC3 com 192.168.20.10/24 e gateway 192.168.20.1.",

        "Configure o PC4 com 192.168.20.11/24 e gateway 192.168.20.1.",

        "Configure o PC5 com 192.168.30.10/24 e gateway 192.168.30.1.",

        "Teste o ping entre PCs da mesma VLAN.",

        "Teste o ping entre PCs de VLANs diferentes."

    ]

},


/*
=================================================
OBJETIVO 13
=================================================
*/

network_diagnostics: {

    title:
        "Objetivo 13 — Diagnóstico de uma Rede com Falhas",

    category:
        "Diagnóstico",

    difficulty:
        "avançado",

    description:
        "Investigue uma rede com problemas previamente inseridos, encontre os erros e restaure a conectividade.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado.",

        "Digite 'show vlan brief' para verificar quais VLANs existem no Switch.",

        "Utilize 'show interfaces status' para verificar o estado das portas do Switch.",

        "Utilize 'show interfaces switchport' para verificar a configuração das portas.",

        "Utilize 'show interfaces trunk' para verificar qual porta está configurada como Trunk.",

        "Utilize 'show ip interface brief' para verificar a SVI e as interfaces do Router.",

        "No Router, utilize 'show ip interface brief' para verificar as interfaces físicas e subinterfaces.",

        "Utilize 'show running-config' para verificar os endereços IP configurados.",

        "Utilize 'show interfaces' para verificar se as interfaces estão apresentando problemas.",

        "No Switch, utilize 'show port-security' para verificar o estado do Port Security.",

        "Teste a comunicação entre cada PC e seu gateway utilizando 'ping'.",

        "Teste a comunicação entre PCs da mesma VLAN utilizando 'ping'.",

        "Teste a comunicação entre PCs de VLANs diferentes utilizando 'ping'.",

        "Compare os resultados dos testes com a configuração esperada.",

        "Identifique a origem de cada falha encontrada.",

        "Corrija as configurações incorretas utilizando os comandos IOS apropriados.",

        "Repita os comandos de verificação após realizar as correções.",

        "Repita os testes de conectividade após as correções.",

        "Considere o diagnóstico concluído quando os PCs conseguirem alcançar seus gateways e as demais redes."

    ]

},


/*
=================================================
OBJETIVO 14
=================================================
*/

final_corporate_project: {

    title:
        "Objetivo 14 — Projeto Final: Pequena Rede Corporativa",

    category:
        "Projeto Final",

    difficulty:
        "avançado",

    description:
        "Construa uma infraestrutura completa Switch + Router com VLANs, Router-on-a-Stick, segurança e gerenciamento.",

    steps: [

        "Monte a topologia com 1 Router, 1 Switch e 5 PCs.",

        "Digite 'enable' para entrar no Modo Privilegiado do Switch.",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'vlan 10' para criar a VLAN de Vendas.",

        "Digite 'name Vendas' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'vlan 20' para criar a VLAN de Administração.",

        "Digite 'name Administracao' para nomear a VLAN.",

        "Digite 'exit' para retornar ao Modo Global.",

        "Digite 'vlan 30' para criar a VLAN de TI.",

        "Digite 'name TI' para nomear a VLAN.",

        "Configure as portas do PC1 e PC2 como Access e associe-as à VLAN 10.",

        "Configure as portas do PC3 e PC4 como Access e associe-as à VLAN 20.",

        "Configure a porta do PC5 como Access e associe-a à VLAN 30.",

        "Acesse a porta do Switch conectada ao Router.",

        "Digite 'switchport mode trunk' para configurar o uplink como Trunk.",

        "Configure Port Security nas portas dos cinco PCs.",

        "Utilize 'switchport port-security mac-address sticky' para ativar o aprendizado Sticky MAC.",

        "No Router, acesse 'interface gigabitethernet 0/0.10'.",

        "Digite 'encapsulation dot1Q 10' para configurar o encapsulamento da VLAN 10.",

        "Digite 'ip address 192.168.10.1 255.255.255.0' para configurar o gateway da Vendas.",

        "Acesse 'interface gigabitethernet 0/0.20'.",

        "Digite 'encapsulation dot1Q 20' para configurar o encapsulamento da VLAN 20.",

        "Digite 'ip address 192.168.20.1 255.255.255.0' para configurar o gateway da Administração.",

        "Acesse 'interface gigabitethernet 0/0.30'.",

        "Digite 'encapsulation dot1Q 30' para configurar o encapsulamento da VLAN 30.",

        "Digite 'ip address 192.168.30.1 255.255.255.0' para configurar o gateway da TI.",

        "Acesse 'interface gigabitethernet 0/0' e digite 'no shutdown' para ativar a interface física.",

        "Configure o PC1 com 192.168.10.10/24 e gateway 192.168.10.1.",

        "Configure o PC2 com 192.168.10.11/24 e gateway 192.168.10.1.",

        "Configure o PC3 com 192.168.20.10/24 e gateway 192.168.20.1.",

        "Configure o PC4 com 192.168.20.11/24 e gateway 192.168.20.1.",

        "Configure o PC5 com 192.168.30.10/24 e gateway 192.168.30.1.",

        "Configure hostname no Switch e no Router.",

        "Configure um banner MOTD nos dois dispositivos.",

        "Configure as senhas de acesso nos dois dispositivos.",

        "Ative 'service password-encryption' nos dois dispositivos.",

        "Crie a VLAN 99 para gerenciamento.",

        "Acesse 'interface vlan 99' no Switch.",

        "Digite 'ip address 192.168.99.2 255.255.255.0' para configurar o IP de gerenciamento.",

        "Digite 'no shutdown' para ativar a SVI.",

        "Digite 'ip default-gateway 192.168.99.1' no Switch.",

        "No Router, acesse 'interface gigabitethernet 0/0.99'.",

        "Digite 'encapsulation dot1Q 99'.",

        "Digite 'ip address 192.168.99.1 255.255.255.0' para configurar o gateway da rede de gerenciamento.",

        "Teste PC → Gateway em cada VLAN.",

        "Teste PC → PC dentro da mesma VLAN.",

        "Teste PC → PC entre VLANs diferentes.",

        "Utilize 'show vlan brief' para verificar as VLANs do Switch.",

        "Utilize 'show interfaces trunk' para verificar o enlace Trunk.",

        "Utilize 'show ip interface brief' para verificar as interfaces do Router.",

        "Utilize 'show port-security' para verificar a proteção das portas.",

        "Utilize 'show running-config' para revisar as configurações.",

        "No Switch, utilize 'copy running-config startup-config' para salvar a configuração.",

        "No Router, utilize 'copy running-config startup-config' para salvar a configuração.",

        "Revise toda a topologia e confirme que a infraestrutura está funcionando."

    ]

}

};


/*
=================================================
OBTER TODAS AS MISSÕES
=================================================
*/

export function getAllMissions() {

    return {
        ...missions
    };

}


/*
=================================================
VERIFICAR MISSÃO
=================================================
*/

export function missionExists(id) {

    return Boolean(
        missions[id]
    );

}


/*
=================================================
OBTER MISSÕES POR CATEGORIA
=================================================
*/

export function getMissionsByCategory(category) {

    return Object.entries(missions)

        .filter(
            ([, mission]) =>
                mission.category === category
        )

        .reduce(
            (result, [id, mission]) => {

                result[id] = mission;

                return result;

            },
            {}
        );

}
