/*
=====================================================
CISCO STUDY SIMULATOR
core/app.js
=====================================================

Responsabilidade:

- Orquestrar a aplicação.
- Inicializar UI e CLI.
- Carregar startup-config.
- Encaminhar comandos ao cliExecutor.
- Atualizar Help, Command Tree, Status e Topologia.
- Trabalhar com Switch e Router.
- Respeitar currentDeviceType definido no state.
- Sincronizar a sessão visual da CLI com o dispositivo ativo.

NÃO possui:

- parser
- regras específicas do Switch
- regras específicas do Router
- banco de comandos
- regras de simulação
- lógica visual direta de DOM
=====================================================
*/


import {
    appState,
    loadStartupConfig,
    hasStartupConfig,
    setCurrentDevice,
    getCurrentDevice
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
} from "./labfactory.js";


import {
    initializeCLI,
    setCliDevice,
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

    initializeUI({
    onDeviceSelect: selectDevice
});



    /*
    Cria laboratório padrão.

    O labFactory cria os dispositivos
    e a topologia inicial.
    */

    resetLab(
        createLabFactory()
    );


    /*
    Sincroniza a sessão inicial da CLI
    com o dispositivo atual.
    */

    setCliDevice(
        appState.currentDeviceType ||
        "switch"
    );


    /*
    Inicializa terminal.
    */

    initializeCLI({

        prompt:
            getCliPrompt(),

        deviceType:
            appState.currentDeviceType ||
            "switch",

        onCommand:
            handleCommand

    });


    /*
    Carrega startup-config.
    */

    const loaded =
        loadSavedConfiguration();


    /*
    Após carregar a configuração,
    garante que a sessão CLI corresponda
    ao dispositivo recuperado.
    */

    setCliDevice(
        appState.currentDeviceType ||
        "switch"
    );


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
    Atualiza toda a interface.
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


        /*
        Registra o comando no histórico
        visual.
        */

        addHistoryEntry(
            command
        );


        /*
        Atualiza prompt conforme
        dispositivo/modo atual.
        */

        setPrompt(
            getCliPrompt()
        );


        /*
        Atualiza interface.
        */

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

function getModeFromPrompt(
    prompt
) {

    if (
        prompt.includes("(config-if)")
    ) {

        return "interface";

    }


    if (
        prompt.includes("(config-subif)")
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
                data?.commands ||
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

    const device =
        getCurrentDevice();


    /*
    Nenhum dispositivo selecionado.
    */

    if (!device) {

        renderStatus({

            Dispositivo:
                "Nenhum dispositivo selecionado."

        });

        return;

    }


    /*
    =============================================
    ROUTER
    =============================================
    */

    if (
        appState.currentDeviceType ===
        "router"
    ) {

        const router =
            appState.router;


        if (!router) {

            renderStatus({

                Dispositivo:
                    "Router indisponível."

            });

            return;

        }


        const activeInterface =
            router.activeInterface ||
            "nenhuma";


        const interfaceData =
            router.interfaces?.[
                activeInterface
            ];


        renderStatus({

            Dispositivo:
                "Router",

            Hostname:
                router.hostname ||
                "Router",

            "Interface atual":
                activeInterface,

            "IP atual":
                interfaceData?.ip ||
                "não configurado",

            "Mask atual":
                interfaceData?.mask ||
                "não configurada",

            "Status atual":
                interfaceData?.status ||
                "down",

            "Encapsulation":
                interfaceData?.encapsulation?.type ||
                "nenhuma",

            "VLAN":
                interfaceData?.encapsulation?.vlanId ||
                "nenhuma",

            "Rotas estáticas":
                Array.isArray(
                    router.routing?.staticRoutes
                )
                    ? router.routing.staticRoutes.length
                    : 0

        });

        return;

    }


    /*
    =============================================
    SWITCH
    =============================================
    */

    if (
        appState.currentDeviceType ===
        "switch"
    ) {

        const switchState =
            appState.switch;


        if (!switchState) {

            renderStatus({

                Dispositivo:
                    "Switch indisponível."

            });

            return;

        }


        renderStatus({

            Dispositivo:
                "Switch",

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

        return;

    }


    /*
    =============================================
    TIPO DESCONHECIDO
    =============================================
    */

    renderStatus({

        Dispositivo:
            appState.currentDeviceType ||
            "desconhecido",

        ID:
            appState.currentDeviceId ||
            "nenhum"

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
SELEÇÃO DE DISPOSITIVO
=====================================================

Esta função sincroniza:

1. appState.currentDeviceId
2. appState.currentDeviceType
3. sessão visual da CLI
4. prompt
5. interface visual
=====================================================
*/

export function selectDevice(
    deviceType
) {

    const normalized =
        String(
            deviceType || ""
        )
        .trim()
        .toLowerCase();


    /*
    =============================================
    SWITCH
    =============================================
    */

    if (
        normalized === "switch"
    ) {

        const switchDevice =
            appState.devices?.find(
                device =>
                    device &&
                    device.type ===
                        "switch"
            );


        const switchId =
            switchDevice?.id ||
            appState.switch?.id ||
            "Switch";


        const selected =
            setCurrentDevice(
                switchId
            );


        if (!selected) {

            return false;

        }


        /*
        Troca para a sessão CLI do Switch.
        */

        setCliDevice(
            "switch"
        );


        /*
        Atualiza prompt.
        */

        setPrompt(
            getCliPrompt()
        );


        refreshUI();

        return true;

    }


    /*
    =============================================
    ROUTER
    =============================================
    */

    if (
        normalized === "router"
    ) {

        const routerDevice =
            appState.devices?.find(
                device =>
                    device &&
                    device.type ===
                        "router"
            );


        const routerId =
            routerDevice?.id ||
            appState.router?.id ||
            "Router";


        const selected =
            setCurrentDevice(
                routerId
            );


        if (!selected) {

            return false;

        }


        /*
        Troca para a sessão CLI do Router.
        */

        setCliDevice(
            "router"
        );


        /*
        Atualiza prompt.
        */

        setPrompt(
            getCliPrompt()
        );


        refreshUI();

        return true;

    }


    return false;

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


    /*
    O laboratório padrão inicia no Switch.
    */

    setCliDevice(
        appState.currentDeviceType ||
        "switch"
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
