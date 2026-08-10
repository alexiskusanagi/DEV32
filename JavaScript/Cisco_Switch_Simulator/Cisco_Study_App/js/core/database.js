
/*
CISCO STUDY SIMULATOR
Arquivo: database.js

Responsabilidade:

- Guardar banco de comandos.
- Manter o estado atual do laboratório.
- Simular NVRAM usando localStorage.
- Salvar e carregar startup-config.

Não possui:

- HTML
- DOM
- CLI
- Interface
- Regras de configuração do switch
- Criação direta do laboratório

A criação do laboratório pertence ao:

labFactory.js
*/


import {
    createLabFactory
} from "./labFactory.js";


/*
=================================================
BANCO DE COMANDOS
=================================================
*/

export const commandDatabase = {

    /*
    =============================================
    USER EXEC
    =============================================
    */

    user: {

        prompt: ">",

        commands: {

            "enable":
                "Entra no Modo Privilegiado",

            "exit":
                "Encerra a sessão"

        }

    },


    /*
    =============================================
    PRIVILEGED EXEC
    =============================================
    */

    privileged: {

        prompt: "#",

        commands: {

            "configure terminal":
                "Entra no modo de configuração global",

            "show vlan brief":
                "Mostra VLANs",

            "copy running-config startup-config":
                "Salva a configuração na NVRAM",

            "write":
                "Salva a configuração",

            "erase startup-config":
                "Apaga a startup-config",

            "clear":
                "Limpa informações",

            "exit":
                "Volta para o Modo User"

        }

    },


    /*
    =============================================
    GLOBAL CONFIGURATION
    =============================================
    */

    global: {

        prompt: "(config)#",

        commands: {

            "hostname":
                "Configura o hostname",

            "banner motd":
                "Configura o banner MOTD",

            "enable secret":
                "Configura a senha secreta",

            "service password-encryption":
                "Ativa criptografia de senhas",

            "no service password-encryption":
                "Desativa criptografia de senhas",

            "vlan":
                "Cria ou configura uma VLAN",

            "interface":
                "Entra na configuração de uma interface",

            "line console":
                "Entra na configuração do console",

            "line vty":
                "Entra na configuração das linhas VTY",

            "exit":
                "Volta para o modo privilegiado",

            "end":
                "Volta diretamente ao modo privilegiado"

        }

    },


    /*
    =============================================
    INTERFACE CONFIGURATION
    =============================================
    */

    interface: {

        prompt: "(config-if)#",

        commands: {

            "ip address":
                "Configura endereço IP",

            "no ip address":
                "Remove endereço IP",

            "shutdown":
                "Desativa a interface",

            "no shutdown":
                "Ativa a interface",

            "switchport mode":
                "Configura o modo da porta",

            "switchport access vlan":
                "Atribui VLAN à porta",

            "switchport port-security":
                "Ativa Port Security",

            "switchport port-security mac-address sticky":
                "Ativa Sticky MAC",

            "switchport port-security mac-address":
                "Autoriza um MAC",

            "no switchport port-security":
                "Desativa Port Security",

            "exit":
                "Volta ao modo de configuração global",

            "end":
                "Volta diretamente ao modo privilegiado"

        }

    },


    /*
    =============================================
    LINE CONFIGURATION
    =============================================
    */

    line: {

        prompt: "(config-line)#",

        commands: {

            "password":
                "Configura senha da linha",

            "login":
                "Ativa autenticação da linha",

            "no login":
                "Desativa autenticação da linha",

            "exit":
                "Volta ao modo de configuração global",

            "end":
                "Volta diretamente ao modo privilegiado"

        }

    }

};


/*
=================================================
LAB FACTORY
=================================================
*/

export function createFactoryState() {

    return createLabFactory();

}


/*
=================================================
ESTADO ATUAL DO SIMULADOR

Equivalente ao running-config em RAM.
=================================================
*/

export let appState =
    createFactoryState();


/*
=================================================
NVRAM

Simulação da startup-config usando localStorage.
=================================================
*/

const NVRAM_KEY =
    "cisco-study-simulator-startup-config";


/*
=================================================
SALVAR CONFIGURAÇÃO

Equivalente:

copy running-config startup-config
wr
=================================================
*/

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
    catch (error) {

        console.error(
            "Erro salvando NVRAM:",
            error
        );


        return false;

    }

}


/*
=================================================
VERIFICAR STARTUP-CONFIG
=================================================
*/

export function hasStartupConfig() {

    return (

        localStorage.getItem(
            NVRAM_KEY
        ) !== null

    );

}


/*
=================================================
CARREGAR CONFIGURAÇÃO

Equivalente ao boot do switch.
=================================================
*/

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
            JSON.parse(
                saved
            );


        if (
            !recovered ||
            typeof recovered !== "object"
        ) {

            return false;

        }


        Object.assign(
            appState,
            recovered
        );


        return true;

    }
    catch (error) {

        console.error(
            "Erro carregando NVRAM:",
            error
        );


        return false;

    }

}


/*
=================================================
APAGAR NVRAM

Equivalente:

erase startup-config

Não altera automaticamente
o running state.
=================================================
*/

export function eraseStartupConfig() {

    localStorage.removeItem(
        NVRAM_KEY
    );

}


/*
=================================================
RESET DE FÁBRICA

Apaga startup-config e cria
um novo estado de laboratório.
=================================================
*/

export function factoryReset() {

    eraseStartupConfig();


    appState =
        createFactoryState();

}


/*
=================================================
EXPORTAR CONFIGURAÇÃO
=================================================
*/

export function exportConfig() {

    return JSON.stringify(
        appState,
        null,
        4
    );

}
