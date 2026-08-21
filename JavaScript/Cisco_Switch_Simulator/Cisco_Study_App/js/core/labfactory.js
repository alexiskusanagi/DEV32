/*
=====================================================
CISCO STUDY SIMULATOR
Arquivo: labFactory.js

Responsabilidade:

* Criar o laboratório inicial padrão.
* Montar o switch.
* Montar os PCs iniciais.
* Definir a topologia inicial.
* Montar um estado compatível com o appState.
* Entregar um estado de fábrica pronto para o simulator/state.

Não possui:

* HTML
* DOM
* CLI
* menus
* missões
* interpretação de comandos
* regras de configuração do switch
* persistência NVRAM
* manipulação direta da interface
* regras de adição/remoção de dispositivos

O factory representa apenas o laboratório inicial.

Limites de quantidade de dispositivos pertencem
à camada responsável pela manipulação da topologia.
=====================================================
*/

import {
    createSwitchState,
    createPCState
} from "./state.js";


/* =====================================================
   CONFIGURAÇÃO DO LABORATÓRIO INICIAL
   ===================================================== */

const DEFAULT_SWITCH_ID =
    "Switch";

const DEFAULT_PC_COUNT =
    5;


/* =====================================================
   CRIAR REFERÊNCIA DE DISPOSITIVO
   ===================================================== */

function createDeviceReference(
    type,
    id
) {

    return {

        type: type,
        id: id

    };

}


/* =====================================================
   CRIAR PCs INICIAIS
   ===================================================== */

function createDefaultPCs() {

    const pcs = [];

    for (
        let i = 1;
        i <= DEFAULT_PC_COUNT;
        i++
    ) {

        pcs.push(

            createPCState(
                "PC" + i,
                "192.168.1." + (9 + i),
                "fa0/" + i
            )

        );

    }

    return pcs;

}


/* =====================================================
   CRIAR REFERÊNCIAS DOS DISPOSITIVOS
   ===================================================== */

function createDefaultDeviceReferences(
    pcs
) {

    const devices = [];

    devices.push(

        createDeviceReference(
            "switch",
            DEFAULT_SWITCH_ID
        )

    );

    pcs.forEach(
        function (pc) {

            devices.push(

                createDeviceReference(
                    "pc",
                    pc.id
                )

            );

        }
    );

    return devices;

}


/* =====================================================
   TOPOLOGIA PADRÃO
   ===================================================== */

export function getDefaultTopology() {

    const devices = [];

    devices.push(

        createDeviceReference(
            "switch",
            DEFAULT_SWITCH_ID
        )

    );

    for (
        let i = 1;
        i <= DEFAULT_PC_COUNT;
        i++
    ) {

        devices.push(

            createDeviceReference(
                "pc",
                "PC" + i
            )

        );

    }

    const connections = [];

    for (
        let i = 1;
        i <= DEFAULT_PC_COUNT;
        i++
    ) {

        connections.push({

            source:
                "PC" + i,

            target:
                DEFAULT_SWITCH_ID,

            sourcePort:
                null,

            targetPort:
                "fa0/" + i

        });

    }

    return {

        devices: devices,

        connections: connections

    };

}


/* =====================================================
   CRIAR LABORATÓRIO DE FÁBRICA
   ===================================================== */

export function createLabFactory() {

    const switchState =
        createSwitchState(
            DEFAULT_SWITCH_ID
        );

    const pcs =
        createDefaultPCs();

    const devices =
        createDefaultDeviceReferences(
            pcs
        );

    const topology =
        getDefaultTopology();

    return {

        stateVersion: 1,

        activeLabId: null,

        activeLabName: null,

        topology:
            topology,

        switch:
            switchState,

        pcs:
            pcs,

        devices:
            devices,

        currentDeviceId:
            DEFAULT_SWITCH_ID,

        currentInterface:
            null,

        runningConfigExists:
            true

    };

}


/* =====================================================
   CRIAR LABORATÓRIO LIMPO
   =====================================================

   "Lab limpo" significa uma nova instância do
   laboratório padrão.

   Não significa apagar a NVRAM.
   A responsabilidade pela NVRAM pertence ao state.js.
*/

export function createCleanLab() {

    return createLabFactory();

}


/* =====================================================
   VALIDAR FACTORY STATE
   ===================================================== */

export function isValidLabFactory(
    factoryState
) {

    if (
        !factoryState ||
        typeof factoryState !== "object" ||
        Array.isArray(factoryState)
    ) {

        return false;

    }


    if (
        !factoryState.switch ||
        typeof factoryState.switch !== "object"
    ) {

        return false;

    }


    if (
        !Array.isArray(
            factoryState.pcs
        )
    ) {

        return false;

    }


    if (
        !Array.isArray(
            factoryState.devices
        )
    ) {

        return false;

    }


    if (
        !factoryState.topology ||
        typeof factoryState.topology !== "object" ||
        Array.isArray(factoryState.topology)
    ) {

        return false;

    }


    if (
        !Array.isArray(
            factoryState.topology.devices
        )
    ) {

        return false;

    }


    if (
        !Array.isArray(
            factoryState.topology.connections
        )
    ) {

        return false;

    }


    if (
        typeof factoryState.currentDeviceId !== "string"
    ) {

        return false;

    }


    if (
        !Object.prototype.hasOwnProperty.call(
            factoryState,
            "currentInterface"
        )
    ) {

        return false;

    }


    if (
        typeof factoryState.runningConfigExists !==
        "boolean"
    ) {

        return false;

    }


    return true;

}


/* =====================================================
   CLONAR FACTORY STATE
   ===================================================== */

export function cloneLabFactory(
    factoryState
) {

    if (
        !isValidLabFactory(
            factoryState
        )
    ) {

        return null;

    }


    try {

        return structuredClone(
            factoryState
        );

    } catch (error) {

        console.error(
            "Erro clonando factory state:",
            error
        );

        return null;

    }

}


/* =====================================================
   OBTER FACTORY STATE
   ===================================================== */

export function getFactoryState() {

    return createLabFactory();

}