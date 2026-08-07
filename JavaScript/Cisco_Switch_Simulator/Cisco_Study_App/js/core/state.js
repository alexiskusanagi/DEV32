/*
=================================================

Cisco Study Simulator

Arquivo:
state.js

Responsabilidade:
Modelos de estado dos dispositivos.

Não cria laboratórios.

=================================================
*/


// =================================================
// CRIA UMA CONFIGURAÇÃO DE PORT SECURITY
// =================================================


export function createPortSecurityEntry() {


    return {

        isEnabled: false,

        isSticky: false,

        authorizedMac: null,

        isViolated: false

    };


}





// =================================================
// CRIA PORTAS DE UM SWITCH
// =================================================


export function createSwitchPorts(quantity = 5) {


    const ports = {};



    for(let i = 1; i <= quantity; i++) {


        ports[`fa0/${i}`] = {


            status: "connected",


            mode: "access",


            vlan: 1,


            portSecurity: createPortSecurityEntry()



        };


    }



    return ports;


}







// =================================================
// MODELO DE SWITCH
// =================================================


export function createSwitchState(
    hostname = "Switch",
    portQuantity = 5
) {


    return {



        // Identificação

        hostname,





        // Configuração global


        bannerMotd: null,


        enableSecret: null,


        encryptionActive: false,






        // Controle de acesso


        console: {


            password: null,


            hasLogin: false


        },



        vty: {


            password: null,


            hasLogin: false


        },






        // Interface virtual


        vlan1: {


            ip: null,


            mask: null,


            isUp: false


        },






        // Banco VLAN


        vlans: {


            1: "default"


        },



        activeVlanId: null,







        // Interfaces físicas


        ports: createSwitchPorts(portQuantity),



        activePhysicalPort: null,








        // Controle interno


        runningConfigExists: true



    };


}

//----------------------------------------------------------

// =================================================
// MODELO DE COMPUTADOR
// =================================================
//
// Representa qualquer equipamento final.
//
// Futuramente pode virar:
// - PC
// - Server
// - Printer
// - IoT
//
// =================================================



function generateRandomMac() {


    const hex = "0123456789abcdef";


    let mac = "";



    for(let i = 0; i < 12; i++) {


        mac += hex[
            Math.floor(
                Math.random() * 16
            )
        ];



        if(i % 2 === 1 && i !== 11) {


            mac += ".";


        }


    }



    return mac;


}







// =================================================
// MODELO DE HOST
// =================================================


export function createPCState(


    id,

    ip,

    port = null


) {



    return {



        id,


        hostname: id,



        ip,


        mac: generateRandomMac(),



        connectedPort: port,



        vlan: 1,



        gateway: null,



        status: "online"



    };


}

//------------------oarte 3------------------------



//---------------parte 4 NVRAM--------------------

// =====================================================
// CISCO STUDY SIMULATOR
// state.js
// PARTE 4
// Persistência NVRAM usando localStorage
// =====================================================



const NVRAM_KEY =
    "cisco-study-simulator-startup-config";




// =====================================================
// SALVAR CONFIGURAÇÃO
// Equivalente ao:
// copy running-config startup-config
// wr
// =====================================================


export function saveStartupConfig() {


    try {


        const snapshot =
            JSON.stringify(appState);



        localStorage.setItem(

            NVRAM_KEY,

            snapshot

        );



        return true;



    } catch(error) {


        console.error(
            "Erro salvando NVRAM:",
            error
        );


        return false;


    }


}




// =====================================================
// VERIFICAR SE EXISTE STARTUP-CONFIG
// =====================================================


export function hasStartupConfig() {


    return (

        localStorage.getItem(
            NVRAM_KEY
        ) !== null

    );


}



// =====================================================
// CARREGAR STARTUP-CONFIG
// Equivalente ao boot do switch
// =====================================================


export function loadStartupConfig() {


    try {



        const saved =
            localStorage.getItem(
                NVRAM_KEY
            );



        if (!saved) {


            return false;


        }



        const recovered =
            JSON.parse(saved);



        Object.assign(

            appState,

            recovered

        );



        return true;



    } catch(error) {



        console.error(
            "Erro carregando NVRAM:",
            error
        );


        return false;



    }


}





// =====================================================
// APAGAR NVRAM
// Equivalente:
// erase startup-config
// =====================================================


export function eraseStartupConfig() {



    localStorage.removeItem(

        NVRAM_KEY

    );


}





// =====================================================
// RESET COMPLETO DO EQUIPAMENTO
// =====================================================


export function factoryReset(factoryState) {


    eraseStartupConfig();



    Object.assign(

        appState,

        structuredClone(factoryState)

    );


}




// =====================================================
// EXPORTAR SNAPSHOT
// ÚTIL PARA DEBUG
// =====================================================


export function exportConfig() {


    return JSON.stringify(

        appState,

        null,

        4

    );


}




// =====================================================
// IMPORTAR CONFIGURAÇÃO
// FUTURO:
// backup/restauração
// =====================================================


export function importConfig(json) {



    try {


        const imported =
            JSON.parse(json);



        Object.assign(

            appState,

            imported

        );



        return true;



    } catch(error) {


        return false;


    }


}