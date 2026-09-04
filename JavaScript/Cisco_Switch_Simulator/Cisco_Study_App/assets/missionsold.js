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
* não representam regras do switch.

O usuário pode ignorar completamente uma missão
e utilizar a CLI livremente.
============================

*/

/*

# BANCO DE MISSÕES

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

        "Escolha uma missão para carregar um roteiro guiado.",

        "Você é livre para executar outros comandos fora do roteiro."

    ]

},


/*
=================================================
IP SVI
=================================================
*/

ip_svi: {

    title:
        "Configurar IP de Gerenciamento (VLAN 1)",

    category:
        "Gerenciamento",

    difficulty:
        "iniciante",

    description:
        "Configure o endereço IP de gerenciamento da VLAN 1.",

    steps: [

        "Digite 'enable' para entrar no Modo Privilegiado (Switch#).",

        "Digite 'configure terminal' para entrar no Modo Global.",

        "Digite 'interface vlan 1' para entrar na interface virtual.",

        "Digite 'ip address 192.168.1.254 255.255.255.0' para atribuir o IP.",

        "Digite 'no shutdown' para ativar a interface.",

        "Volte ao prompt privilegiado com 'exit' e teste: 'ping 192.168.1.10'."

    ]

},


/*
=================================================
SECURITY LINE
=================================================
*/

security_line: {

    title:
        "Configurar Senhas de Acesso",

    category:
        "Segurança",

    difficulty:
        "iniciante",

    description:
        "Configure proteção para o acesso privilegiado, console e VTY.",

    steps: [

        "Entre no Modo Global ('enable' → 'configure terminal').",

        "Digite 'enable secret cisco123' para proteger o modo privilegiado.",

        "Acesse a console física com 'line console 0'.",

        "Defina a senha com 'password cisco' e ative-a com 'login'.",

        "Saia com 'exit' e faça o mesmo para 'line vty 0 15'.",

        "Ative a criptografia visual das senhas simples com 'service password-encryption'."

    ]

},


/*
=================================================
VLAN ACCESS
=================================================
*/

vlan_access: {

    title:
        "Criar VLANs Customizadas e Mover Portas",

    category:
        "VLAN",

    difficulty:
        "iniciante",

    description:
        "Crie uma VLAN e configure portas de acesso e trunk.",

    steps: [

        "Entre no Modo Global ('enable' → 'configure terminal').",

        "Crie a rede de Vendas digitando 'vlan 10'.",

        "Dê um nome para ela digitando 'name Vendas' e saia com 'exit'.",

        "Acesse a porta do primeiro computador com 'interface fastethernet 0/1'.",

        "Defina o tipo da porta com 'switchport mode access'.",

        "Mova a porta para a nova rede com 'switchport access vlan 10'.",

        "Como exercício extra, acesse a porta 2 e configure-a como trunk com 'switchport mode trunk'."

    ]

},


/*
=================================================
PORT SECURITY
=================================================
*/

port_security: {

    title:
        "Ativar Defesa Port-Security",

    category:
        "Segurança",

    difficulty:
        "intermediário",

    description:
        "Configure Port Security e simule uma violação de segurança.",

    steps: [

        "Acesse a porta física 1 com 'enable' → 'conf t' → 'interface fastethernet 0/1'.",

        "Certifique-se de que ela está em modo access com 'switchport mode access'.",

        "Ative o Port Security com 'switchport port-security'.",

        "Associe o MAC do computador atual com 'switchport port-security mac-address sticky'.",

        "Volte ao prompt inicial e simule uma invasão com 'atacar fa0/1'.",

        "Observe a porta entrar em estado de violação.",

        "Para recuperar, volte à interface e utilize 'shutdown' seguido de 'no shutdown'."

    ]

}


};

 /*

# OBTER MISSÃO

*/

export function getMission(id) {


return missions[id] || null;


}

 /*

# OBTER TODAS AS MISSÕES

*/

export function getAllMissions() {


return {
    ...missions
};


}

 /*

 VERIFICAR MISSÃO

*/

export function missionExists(id) {


return Boolean(
    missions[id]
);


}

 /*

# OBTER MISSÕES POR CATEGORIA

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
