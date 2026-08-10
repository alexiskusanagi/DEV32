/*

CISCO STUDY SIMULATOR
Arquivo: labFactory.js

Responsabilidade:

* Criar o laboratório inicial.
* Montar o switch.
* Montar os PCs.
* Definir a topologia inicial.
* Entregar um estado de fábrica pronto para o simulator.

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

=====================================================
*/

import {
createSwitchState,
createPCState
} from "./state.js";

 /*

# CRIAR LABORATÓRIO DE FÁBRICA

*/

export function createLabFactory() {


return {

    switch:
        createSwitchState(
            "Switch"
        ),

    pcs: [

        createPCState(
            "PC1",
            "192.168.1.10",
            "fa0/1"
        ),

        createPCState(
            "PC2",
            "192.168.1.11",
            "fa0/2"
        ),

        createPCState(
            "PC3",
            "192.168.1.12",
            "fa0/3"
        ),

        createPCState(
            "PC4",
            "192.168.1.13",
            "fa0/4"
        ),

        createPCState(
            "PC5",
            "192.168.1.14",
            "fa0/5"
        )

    ]

};


}

 /*

# CRIAR LABORATÓRIO LIMPO

*/

export function createCleanLab() {


return createLabFactory();


}

 /*

# TOPOLOGIA PADRÃO

*/

export function getDefaultTopology() {


return {

    switch: "Switch",

    connections: [

        {
            device: "PC1",
            interface: "fa0/1",
            switchInterface: "fa0/1"
        },

        {
            device: "PC2",
            interface: "fa0/2",
            switchInterface: "fa0/2"
        },

        {
            device: "PC3",
            interface: "fa0/3",
            switchInterface: "fa0/3"
        },

        {
            device: "PC4",
            interface: "fa0/4",
            switchInterface: "fa0/4"
        },

        {
            device: "PC5",
            interface: "fa0/5",
            switchInterface: "fa0/5"
        }

    ]

};


}

 /*

# VALIDAR FACTORY STATE

*/

export function isValidLabFactory(
factoryState
) {


if (
    !factoryState ||
    typeof factoryState !== "object"
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


return true;


}

 /*

# CLONAR FACTORY STATE

*/

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


return structuredClone(
    factoryState
);


}

 /*

# OBTER FACTORY STATE

*/

export function getFactoryState() {


return createLabFactory();


}
