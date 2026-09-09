/*
=====================================================
TROUBLESHOOTING LAB 1
Arquivo: lab1.js

Cenário:

PC2
  |
Fa0/2
  |
Switch VLAN 1
  |
G0/0
  |
Router

Configuração esperada:

PC2
IP:
192.168.1.11

Mask:
255.255.255.0

Gateway:
192.168.1.1

Router G0/0:
192.168.1.1
255.255.255.0

Problema proposital:

Fa0/2 está administrativamente down.

Objetivo do usuário:

Descobrir por que o PC2 não possui conectividade
e corrigir o problema.

=====================================================
*/

import {
    createLabFactory
} from "../core/labfactory.js";


export function createTroubleshootingLab1() {

    /*
    -------------------------------------------------
    CRIA LABORATÓRIO BASE
    -------------------------------------------------
    */

    const lab =
        createLabFactory();


    /*
    -------------------------------------------------
    ROUTER
    -------------------------------------------------
    */

    if (
        lab.router?.interfaces?.["GigabitEthernet0/0"]
    ) {

        lab.router.interfaces[
            "GigabitEthernet0/0"
        ].ip =
            "192.168.1.1";

        lab.router.interfaces[
            "GigabitEthernet0/0"
        ].mask =
            "255.255.255.0";

        lab.router.interfaces[
            "GigabitEthernet0/0"
        ].status =
            "up";

    }


    /*
    -------------------------------------------------
    PC2
    -------------------------------------------------
    */

    const pc2 =
        lab.pcs?.find(
            pc =>
                pc?.id === "PC2"
        );


    if (pc2) {

        pc2.ip =
            "192.168.1.11";

        pc2.mask =
            "255.255.255.0";

        pc2.gateway =
            "192.168.1.1";

        pc2.interface =
            "fa0/2";

    }


    /*
    -------------------------------------------------
    FA0/2 — PROBLEMA DO LABORATÓRIO
    -------------------------------------------------
    */

    if (
        lab.switch?.ports?.["fa0/2"]
    ) {

        lab.switch.ports[
            "fa0/2"
        ].status =
            "shutdown";

    }


    /*
    -------------------------------------------------
    DISPOSITIVO INICIAL
    -------------------------------------------------
    */

    lab.currentDeviceId =
        "Switch";

    lab.switch.hostname =
    "Switch-Lab-1";

    lab.troubleshootingMessage =
    "Bem-vindo ao Troubleshooting Lab! Neste modo, você receberá uma topologia com um ou mais problemas de configuração ou conectividade. Seu objetivo é investigar o comportamento da rede, identificar a causa do problema e corrigi-lo usando os comandos disponíveis. O laboratório não informa diretamente qual é a falha.";



    return lab;

}