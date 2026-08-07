/*
=================================================
Cisco Study Simulator

Arquivo:
database.js

Responsabilidade:

- Guardar banco de comandos
- Criar estado atual do laboratório
- Simular NVRAM do switch usando localStorage

Não possui:
- HTML
- DOM
- Interface
- CLI

=================================================
*/


import {
    createSwitchState,
    createPCState
} from "./state.js";




// =================================================
// BANCO DE COMANDOS
// =================================================

export const commandDatabase = {


    user: {

        prompt: ">",

        commands: {

            "enable":
                "Entra no Modo Privilegiado",

            "exit":
                "Encerra a sessão"

        }

    },



    privileged: {

        prompt: "#",

        commands: {

            "show vlan brief":
                "Mostra VLANs"

        }

    }


};





// =================================================
// LABORATÓRIO INICIAL
// Estado criado quando o simulador inicia
// =================================================

export function createFactoryState() {


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





// =================================================
// ESTADO ATUAL DO SIMULADOR
// Equivalente ao running-config em RAM
// =================================================

export let appState =
    createFactoryState();





// =================================================
// NVRAM
// Simulação da startup-config
// =================================================

const NVRAM_KEY =
"cisco-study-simulator-startup-config";





// =================================================
// SALVAR CONFIGURAÇÃO
//
// Equivalente:
// copy running-config startup-config
// wr
// =================================================

export function saveStartupConfig() {


    try {


        const snapshot =
            JSON.stringify(
                appState
            );



        localStorage.setItem(

            NVRAM_KEY,

            snapshot

        );



        return true;


    }
    catch(error) {


        console.error(
            "Erro salvando NVRAM:",
            error
        );


        return false;


    }


}





// =================================================
// VERIFICAR STARTUP-CONFIG
// =================================================

export function hasStartupConfig() {


    return (

        localStorage.getItem(
            NVRAM_KEY
        ) !== null

    );


}





// =================================================
// CARREGAR CONFIGURAÇÃO
//
// Equivalente ao boot do switch
// =================================================

export function loadStartupConfig() {


    try {


        const saved =
            localStorage.getItem(
                NVRAM_KEY
            );



        if(!saved) {


            return false;


        }



        const recovered =
            JSON.parse(
                saved
            );



        Object.assign(

            appState,

            recovered

        );



        return true;



    }
    catch(error) {


        console.error(

            "Erro carregando NVRAM:",

            error

        );


        return false;


    }


}





// =================================================
// APAGAR NVRAM
//
// Equivalente:
// erase startup-config
// =================================================

export function eraseStartupConfig() {


    localStorage.removeItem(

        NVRAM_KEY

    );


}





// =================================================
// RESET DE FÁBRICA
// =================================================

export function factoryReset() {


    eraseStartupConfig();



    appState =
        createFactoryState();



}





// =================================================
// EXPORTAR CONFIGURAÇÃO
// Útil para debug
// =================================================

export function exportConfig() {


    return JSON.stringify(

        appState,

        null,

        4

    );


}