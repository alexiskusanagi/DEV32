/*
=====================================================
CISCO STUDY SIMULATOR
core/app.js
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
    getSimulatorState,
    resetLab
} from "./simulator.js";

import {
    createLabFactory
} from "./labFactory.js";

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
    renderTopology,
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
    Cria o laboratório padrão.

    O labFactory é responsável por criar:
    - Switch
    - PC1
    - PC2
    - PC3
    - PC4
    - PC5
    - Topologia inicial
    */

    resetLab(
        createLabFactory()
    );


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

    Se existir, ela substitui o estado
    inicial criado pelo labFactory.
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
            "Iniciando laboratório padrão."
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
*/

function handleCommand(command) {

    try {

        const result =
            executeCommand(
                command
            );


        addHistoryEntry(
            command
        );


        setPrompt(
            getCliPrompt()
        );


        refreshUI();


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


        const errorMessage =
            "% Erro interno ao executar comando.";


        addHistoryEntry(
            command,
            errorMessage
        );


        setPrompt(
            getCliPrompt()
        );


        return errorMessage;

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
ATUALIZAR TOPOLOGIA
=====================================================
*/

function updateTopology() {

    const simulatorState =
        getSimulatorState();


    if (
        !simulatorState
    ) {

        renderTopology(null);

        return;

    }


    renderTopology(
        simulatorState.topology ||
        null
    );

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

    updateTopology();

    setPrompt(
        getCliPrompt()
    );

}


/*
=====================================================
SNAPSHOT
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

    resetLab(
        createLabFactory()
    );

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