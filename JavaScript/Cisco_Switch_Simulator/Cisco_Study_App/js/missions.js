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
WELCOME
=================================================
*/

welcome: {

    title:
        "Bem-vindo ao laboratório",

    category:
        "Introdução",

    difficulty:
        "iniciante",

    description:
        "Explore livremente o laboratório de estudos Cisco.",

    steps: [

        "Fique de olho no menu Help à esquerda.",

        "Observe o painel de status à direita.",

        "Escolha uma missão no menu para carregar um roteiro guiado.",

        "Execute os comandos sugeridos diretamente na CLI.",

        "Você é livre para executar outros comandos fora do roteiro."

    ]

},


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

        "Crie a VLAN 10 com 'vlan 10'.",

        "Nomeie a VLAN 10 como Vendas usando 'name Vendas'.",

        "Crie a VLAN 20 com 'vlan 20'.",

        "Nomeie a VLAN 20 como Administracao usando 'name Administracao'.",

        "Configure as portas dos PCs como Access.",

        "Associe os PCs da primeira rede à VLAN 10.",

        "Associe os PCs da segunda rede à VLAN 20.",

        "Configure a porta do Switch conectada ao Router como Trunk.",

        "No Router, acesse 'interface g0/0.10'.",

        "Configure 'encapsulation dot1Q 10'.",

        "Configure o endereço IP do gateway da VLAN 10.",

        "Crie a subinterface 'g0/0.20'.",

        "Configure 'encapsulation dot1Q 20'.",

        "Configure o endereço IP do gateway da VLAN 20.",

        "Configure os PCs com endereços IP, máscaras e gateways correspondentes.",

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

        "Crie a VLAN 10 e nomeie como Vendas.",

        "Crie a VLAN 20 e nomeie como Administracao.",

        "Crie a VLAN 30 e nomeie como TI.",

        "Distribua até cinco PCs entre as três VLANs.",

        "Configure as portas dos PCs como Access.",

        "Associe cada porta à VLAN correspondente.",

        "Configure o enlace Switch → Router como Trunk.",

        "No Router, crie uma subinterface para a VLAN 10.",

        "Configure 'encapsulation dot1Q 10'.",

        "Configure o gateway da rede de Vendas.",

        "Crie uma subinterface para a VLAN 20 e configure 'encapsulation dot1Q 20'.",

        "Configure o gateway da rede de Administração.",

        "Crie uma subinterface para a VLAN 30 e configure 'encapsulation dot1Q 30'.",

        "Configure o gateway da rede de TI.",

        "Configure os endereços IP dos PCs.",

        "Teste a conectividade entre os três segmentos."

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

        "Crie a VLAN 10.",

        "Crie a VLAN 20.",

        "Configure as portas dos PCs como Access.",

        "Associe cada porta à VLAN correspondente.",

        "Ative 'switchport port-security' nas portas dos PCs.",

        "Ative Sticky MAC com 'switchport port-security mac-address sticky'.",

        "Configure o enlace Switch → Router como Trunk.",

        "No Router, crie as subinterfaces correspondentes às VLANs.",

        "Configure o encapsulamento 802.1Q para cada VLAN.",

        "Configure um gateway diferente para cada rede.",

        "Configure os PCs com os respectivos endereços IP e gateways.",

        "Teste o ping entre PCs de VLANs diferentes.",

        "Simule uma tentativa de invasão em uma porta protegida usando 'atacar fa0/1'.",

        "Observe a violação de Port Security.",

        "Recupere a porta utilizando 'shutdown' e 'no shutdown'.",

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

        "Crie a VLAN 99 com 'vlan 99'.",

        "Nomeie a VLAN como GERENCIA.",

        "No Switch, acesse 'interface vlan 99'.",

        "Configure um endereço IP para a SVI da VLAN 99.",

        "Ative a interface com 'no shutdown'.",

        "Configure a porta do Switch conectada ao Router como Trunk.",

        "No Router, acesse a subinterface 'g0/0.99'.",

        "Configure 'encapsulation dot1Q 99'.",

        "Configure o endereço IP do Router para a rede de gerenciamento.",

        "Configure o gateway correspondente.",

        "Configure uma porta para o PC de gerenciamento.",

        "Associe a porta do PC à VLAN 99.",

        "Configure o IP do PC de gerenciamento.",

        "Teste o ping do Switch para o Router.",

        "Teste a comunicação entre o PC de gerenciamento e o Switch."

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
        "Interligue duas redes através do Router utilizando endereçamento e uma rota estática.",

    steps: [

        "Crie a primeira rede para os PCs.",

        "Configure o Switch para essa rede.",

        "Configure a primeira interface do Router.",

        "Atribua o endereço IP e a máscara da primeira rede.",

        "Ative a interface com 'no shutdown'.",

        "Crie uma segunda rede lógica no Router.",

        "Configure a segunda interface ou subinterface.",

        "Atribua o endereço IP e a máscara da segunda rede.",

        "Ative a interface correspondente.",

        "Configure os endereços IP e gateways dos PCs.",

        "Adicione uma rota estática para a rede necessária.",

        "Verifique as interfaces do Router.",

        "Utilize 'show' para conferir as configurações.",

        "Teste a conectividade entre as duas redes com ping."

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

        "Crie a VLAN 10.",

        "Crie a VLAN 20.",

        "Configure as portas dos PCs como Access.",

        "Associe os PCs às VLANs correspondentes.",

        "Configure o enlace Switch → Router como Trunk.",

        "No Router, crie a subinterface correspondente à VLAN 10.",

        "Configure 'encapsulation dot1Q 10'.",

        "Configure o endereço IP do gateway da VLAN 10.",

        "Crie a subinterface correspondente à VLAN 20.",

        "Configure 'encapsulation dot1Q 20'.",

        "Configure o endereço IP do gateway da VLAN 20.",

        "Escolha uma das VLANs para funcionar como VLAN nativa.",

        "Configure o encapsulamento usando o formato 'encapsulation dot1Q <VLAN> native'.",

        "Garanta que a configuração da VLAN nativa esteja coerente entre Switch e Router.",

        "Configure os endereços IP dos PCs.",

        "Teste a comunicação entre as redes."

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

        "No Switch, altere o hostname para um nome de sua escolha.",

        "Configure um banner MOTD no Switch.",

        "Configure um 'enable secret' no Switch.",

        "Acesse 'line console 0' e configure uma senha para o Console.",

        "Ative o 'login' no Console.",

        "Acesse 'line vty 0 15' e configure uma senha VTY.",

        "Ative o 'login' nas linhas VTY.",

        "Ative 'service password-encryption' no Switch.",

        "No Router, altere o hostname para um nome de sua escolha.",

        "Configure um banner MOTD no Router.",

        "Configure um 'enable secret' no Router.",

        "Configure a senha do Console do Router.",

        "Configure a senha das linhas VTY do Router.",

        "Ative a criptografia das senhas no Router.",

        "Configure 'no ip domain-lookup' no Router.",

        "Salve a configuração do Switch.",

        "Salve a configuração do Router.",

        "Exiba 'show running-config' para conferir a configuração.",

        "Verifique o estado das interfaces."

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

        "Configure o PC1 na VLAN 10 — Vendas.",

        "Configure o PC2 na VLAN 10 — Vendas.",

        "Configure o PC3 na VLAN 20 — Administração.",

        "Configure o PC4 na VLAN 20 — Administração.",

        "Configure o PC5 na VLAN 30 — Suporte.",

        "Crie a VLAN 10 e nomeie como Vendas.",

        "Crie a VLAN 20 e nomeie como Administracao.",

        "Crie a VLAN 30 e nomeie como Suporte.",

        "Configure todas as portas dos PCs como Access.",

        "Associe cada porta à VLAN correta.",

        "Configure o enlace Switch → Router como Trunk.",

        "Crie no Router uma subinterface para a VLAN 10.",

        "Configure o encapsulamento 802.1Q da VLAN 10.",

        "Configure o gateway da VLAN 10.",

        "Crie a subinterface da VLAN 20 e configure seu gateway.",

        "Crie a subinterface da VLAN 30 e configure seu gateway.",

        "Configure os endereços IP e máscaras dos cinco PCs.",

        "Configure o gateway de cada PC de acordo com sua VLAN.",

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

        "Comece verificando quais VLANs existem no Switch.",

        "Verifique se as portas dos PCs estão configuradas como Access.",

        "Verifique a VLAN atribuída a cada porta.",

        "Verifique qual porta está configurada como Trunk.",

        "Verifique a SVI e seu estado.",

        "Verifique as interfaces físicas do Router.",

        "Verifique as subinterfaces existentes.",

        "Verifique o encapsulamento 802.1Q de cada subinterface.",

        "Verifique os endereços IP e máscaras.",

        "Verifique se as interfaces estão up ou down.",

        "Verifique o estado do Port Security.",

        "Teste o PC → Gateway com ping.",

        "Teste PC → PC dentro da mesma VLAN.",

        "Teste PC → PC entre VLANs diferentes.",

        "Identifique a origem de cada falha.",

        "Corrija as configurações incorretas.",

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

        "Crie a VLAN 10 — Vendas.",

        "Crie a VLAN 20 — Administração.",

        "Crie a VLAN 30 — TI.",

        "Configure o PC1 e o PC2 na VLAN 10 — Vendas.",

        "Configure o PC3 e o PC4 na VLAN 20 — Administração.",

        "Configure o PC5 na VLAN 30 — TI.",

        "Configure todas as portas dos PCs como Access.",

        "Associe cada porta à VLAN correspondente.",

        "Configure o uplink Switch → Router como Trunk.",

        "Configure o Router utilizando Router-on-a-Stick.",

        "Crie as três subinterfaces no Router.",

        "Configure o encapsulamento 802.1Q de cada VLAN.",

        "Configure um gateway para cada VLAN.",

        "Configure os endereços IP, máscaras e gateways dos cinco PCs.",

        "Ative Port Security nas portas dos PCs.",

        "Ative Sticky MAC nas portas protegidas.",

        "Configure hostname no Switch e no Router.",

        "Configure um banner MOTD nos dispositivos.",

        "Configure as senhas de acesso.",

        "Configure a criptografia das senhas.",

        "Configure uma rede de gerenciamento para o Switch.",

        "Configure o gerenciamento através do Router.",

        "Teste PC → Gateway.",

        "Teste PC → PC dentro da mesma VLAN.",

        "Teste PC → PC entre VLANs diferentes.",

        "Verifique as interfaces e configurações dos dispositivos.",

        "Salve a configuração na startup-config.",

        "Revise toda a topologia e confirme que a infraestrutura está funcionando."

    ]

}

};


/*
=================================================
OBTER MISSÃO
=================================================
*/

export function getMission(id) {

    return missions[id] || null;

}


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
