
/*
=====================================================
CISCO STUDY SIMULATOR
core/app.js

Responsabilidade:

- Inicializar o simulador
- Inicializar CLI e UI
- Carregar startup-config
- Encaminhar comandos para cliExecutor
- Atualizar a interface

Não possui:

- Regras de comandos
- Estado de modo da CLI
- Parser
- Regras do switch
- Manipulação direta do DOM
- Criação do laboratório
=====================================================
*/

import {
    appState,
    loadStartupConfig,
    hasStartupConfig
} from "./state.js";

import {
    commandDatabase
} from "./database.js";

import {
    executeCommand,
    getCliPrompt
} from "./cliExecutor.js";

import {
    getSimulatorState
} from "./simulator.js";

import {
    initializeCLI,
    setPrompt,
    showWelcomeMessage,
    writeLine
} from "../interface/cli.js";

import {
    initializeUI,
    renderHelp,
    renderStatus,
    renderCommandTree,
    addHistoryEntry
} from "../interface/ui.js";


/*
=====================================================
INICIALIZAÇÃO
=====================================================
*/

function initializeApp() {

    console.log(
        "Cisco Study Simulator iniciando..."
    );


    /*
    Inicializa interface visual.
    */

    initializeUI();


    /*
    Inicializa terminal.
    */

    initializeCLI({

        prompt:
            getCliPrompt(),

        onCommand:
            handleCommand

    });


    /*
    Carrega startup-config.
    */

    const loaded =
        loadSavedConfiguration();


    /*
    Mensagem inicial.
    */

    showWelcomeMessage();


    if (loaded) {

        writeLine(
            "Startup-config carregada da NVRAM."
        );

    } else {

        writeLine(
            "Nenhuma startup-config encontrada."
        );

        writeLine(
            "Iniciando com a configuração atual."
        );

    }


    writeLine("");


    /*
    Atualiza interface.
    */

    refreshUI();


    console.log(
        "Cisco Study Simulator pronto."
    );

}


/*
=====================================================
STARTUP-CONFIG
=====================================================
*/

function loadSavedConfiguration() {

    try {

        if (
            !hasStartupConfig()
        ) {

            return false;

        }


        return loadStartupConfig();

    }
    catch (error) {

        console.error(
            "Erro carregando startup-config:",
            error
        );

        return false;

    }

}


/*
=====================================================
EXECUÇÃO DE COMANDOS
=====================================================

O app.js NÃO interpreta comandos.

Tudo é enviado para:

cliExecutor.js
=====================================================
*/

function handleCommand(command) {

    try {

        const result =
            executeCommand(
                command
            );


        /*
        Atualiza o prompt de acordo
        com o contexto real do executor.
        */

        setPrompt(
            getCliPrompt()
        );


        /*
        Atualiza a interface.
        */

        refreshUI();


        /*
        O terminal espera uma string.
        */

        if (
            result &&
            typeof result.output ===
            "string"
        ) {

            return result.output;

        }


        return "";

    }
    catch (error) {

        console.error(
            "Erro executando comando:",
            error
        );


        setPrompt(
            getCliPrompt()
        );


        return (
            "% Erro interno ao executar comando."
        );

    }

}


/*
=====================================================
ATUALIZAR HELP
=====================================================
*/

function updateHelp() {

    const prompt =
        getCliPrompt();


    /*
    Obtém o modo a partir do prompt.

    A seleção detalhada dos comandos
    continua no database.
    */

    const mode =
        getModeFromPrompt(
            prompt
        );


    const modeData =
        commandDatabase[
            mode
        ];


    if (!modeData) {

        renderHelp({});

        return;

    }


    renderHelp(
        modeData.commands ||
        {}
    );

}


/*
=====================================================
OBTER MODO PELO PROMPT
=====================================================
*/

function getModeFromPrompt(prompt) {

    if (
        prompt.includes("(config-if)")
    ) {

        return "interface";

    }


    if (
        prompt.includes("(config-vlan)")
    ) {

        return "vlan";

    }


    if (
        prompt.includes("(config-line)")
    ) {

        return "line";

    }


    if (
        prompt.includes("(config)")
    ) {

        return "global";

    }


    if (
        prompt.endsWith("#")
    ) {

        return "privileged";

    }


    return "user";

}


/*
=====================================================
ATUALIZAR COMMAND TREE
=====================================================
*/

function updateCommandTree() {

    const tree = {};


    Object.entries(
        commandDatabase
    ).forEach(
        ([mode, data]) => {

            tree[mode] =
                data.commands ||
                {};

        }
    );


    renderCommandTree(
        tree
    );

}


/*
=====================================================
ATUALIZAR STATUS
=====================================================
*/

function updateStatus() {

    const switchState =
        appState.switch;


    if (!switchState) {

        renderStatus({

            Status:
                "Switch indisponível."

        });

        return;

    }


    renderStatus({

        Hostname:
            switchState.hostname ||
            "Switch",

        "VLAN 1 IP":
            switchState.vlan1?.ip ||
            "não configurado",

        "VLAN 1 Mask":
            switchState.vlan1?.mask ||
            "não configurada",

        "VLAN 1 Status":
            switchState.vlan1?.isUp
                ? "up"
                : "down",

        "Porta atual":
            switchState.activePhysicalPort ||
            "nenhuma",

        "VLAN atual":
            switchState.activeVlanId ||
            "nenhuma",

        "Running Config":
            switchState.runningConfigExists
                ? "presente"
                : "ausente"

    });

}


/*
=====================================================
REFRESH UI
=====================================================
*/

export function refreshUI() {

    updateHelp();

    updateCommandTree();

    updateStatus();

    setPrompt(
        getCliPrompt()
    );

}


/*
=====================================================
SNAPSHOT DO SIMULADOR
=====================================================
*/

export function getAppSnapshot() {

    return getSimulatorState();

}


/*
=====================================================
RESET DA APLICAÇÃO
=====================================================
*/

export function resetApp() {

    setPrompt(
        getCliPrompt()
    );

    refreshUI();

    return true;

}


/*
=====================================================
INICIALIZAÇÃO DOM
=====================================================
*/

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeApp
    );

}
else {

    initializeApp();

}

