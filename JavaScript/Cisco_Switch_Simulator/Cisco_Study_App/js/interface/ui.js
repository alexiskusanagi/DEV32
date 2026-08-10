
// =====================================================
// CISCO STUDY SIMULATOR
// interface/ui.js
//
// Responsabilidade:
// Controlar a interface visual da aplicação.
//
// NÃO possui:
// - regras do Switch
// - regras de VLAN
// - regras de Port Security
// - lógica de comandos Cisco
// - persistência NVRAM
//
// O ui.js apenas apresenta informações na tela.
// =====================================================


// =====================================================
// ELEMENTOS PRINCIPAIS DO DOM
// =====================================================

const helpList =
    document.getElementById("help-list");

const historyList =
    document.getElementById("history-list");

const statusDisplay =
    document.getElementById("status-display");

const missionSelector =
    document.getElementById("mission-selector");

const treeModal =
    document.getElementById("tree-modal");

const commandTreeContent =
    document.getElementById("command-tree-content");

const btnCommandTree =
    document.getElementById("btn-command-tree");

const btnCloseTree =
    document.getElementById("btn-close-tree");


// =====================================================
// ESTADO INTERNO DA INTERFACE
// =====================================================

const uiState = {

    history: [],

    currentMission: "welcome",

    helpCommands: {},

    statusData: null,

    commandTreeData: null

};


// =====================================================
// INICIALIZAÇÃO DA INTERFACE
// =====================================================

export function initializeUI() {

    bindUIEvents();

    renderInitialState();

}


// =====================================================
// EVENTOS DA INTERFACE
// =====================================================

function bindUIEvents() {

    // ---------------------------------------------
    // COMMAND TREE
    // ---------------------------------------------

    if (btnCommandTree) {

        btnCommandTree.addEventListener(
            "click",
            openCommandTree
        );

    }


    // ---------------------------------------------
    // FECHAR COMMAND TREE
    // ---------------------------------------------

    if (btnCloseTree) {

        btnCloseTree.addEventListener(
            "click",
            closeCommandTree
        );

    }


    // ---------------------------------------------
    // MUDANÇA DE MISSÃO
    // ---------------------------------------------

    if (missionSelector) {

        missionSelector.addEventListener(
            "change",
            handleMissionChange
        );

    }


    // ---------------------------------------------
    // CLIQUE FORA DO MODAL
    // ---------------------------------------------

    if (treeModal) {

        treeModal.addEventListener(
            "click",
            handleModalBackgroundClick
        );

    }

}


// =====================================================
// ESTADO INICIAL
// =====================================================

function renderInitialState() {

    clearHistory();

    clearStatus();

    clearHelp();

    clearCommandTree();

}


// =====================================================
// HELP
// =====================================================

export function renderHelp(commands = {}) {

    uiState.helpCommands =
        commands || {};


    if (!helpList) {

        return;

    }


    helpList.innerHTML = "";


    const entries =
        Object.entries(
            uiState.helpCommands
        );


    if (entries.length === 0) {

        const empty =
            document.createElement("div");

        empty.textContent =
            "Nenhum comando disponível.";

        helpList.appendChild(
            empty
        );

        return;

    }


    entries.forEach(
        ([command, description]) => {

            const item =
                document.createElement("div");

            item.className =
                "help-item";


            const commandElement =
                document.createElement("strong");

            commandElement.textContent =
                `${command}:`;


            const descriptionElement =
                document.createElement("span");

            descriptionElement.textContent =
                String(description);


            item.appendChild(
                commandElement
            );

            item.appendChild(
                descriptionElement
            );


            helpList.appendChild(
                item
            );

        }
    );

}


// =====================================================
// LIMPAR HELP
// =====================================================

export function clearHelp() {

    uiState.helpCommands = {};


    if (!helpList) {

        return;

    }


    helpList.innerHTML = "";

}


// =====================================================
// HISTÓRICO
// =====================================================

export function addHistoryEntry(
    command,
    result = null
) {

    const entry = {

        command:
            String(command),

        result:
            result === null
                ? null
                : String(result)

    };


    uiState.history.push(
        entry
    );


    renderHistory();

}


// =====================================================
// RENDERIZA HISTÓRICO
// =====================================================

function renderHistory() {

    if (!historyList) {

        return;

    }


    historyList.innerHTML = "";


    uiState.history.forEach(
        entry => {

            const container =
                document.createElement("div");

            container.className =
                "history-item";


            const command =
                document.createElement("div");

            command.className =
                "history-command";


            command.textContent =
                `> ${entry.command}`;


            container.appendChild(
                command
            );


            if (
                entry.result !== null
            ) {

                const result =
                    document.createElement("div");

                result.className =
                    "history-result";


                result.textContent =
                    entry.result;


                container.appendChild(
                    result
                );

            }


            historyList.appendChild(
                container
            );

        }
    );


    scrollElementToBottom(
        historyList
    );

}


// =====================================================
// LIMPA HISTÓRICO
// =====================================================

export function clearHistory() {

    uiState.history = [];


    if (!historyList) {

        return;

    }


    historyList.innerHTML = "";

}


// =====================================================
// STATUS
// =====================================================

export function renderStatus(
    data = {}
) {

    uiState.statusData =
        data;


    if (!statusDisplay) {

        return;

    }


    statusDisplay.innerHTML = "";


    const entries =
        Object.entries(
            data || {}
        );


    if (entries.length === 0) {

        const empty =
            document.createElement("div");

        empty.textContent =
            "Nenhuma informação disponível.";

        statusDisplay.appendChild(
            empty
        );

        return;

    }


    entries.forEach(
        ([label, value]) => {

            const item =
                document.createElement("div");

            item.className =
                "status-item";


            const labelElement =
                document.createElement("strong");

            labelElement.textContent =
                `${label}:`;


            const valueElement =
                document.createElement("span");

                valueElement.className =
                    "status-value";


            if (
                typeof value === "object" &&
                value !== null
            ) {

                valueElement.textContent =
                    JSON.stringify(value);

            } else {

                valueElement.textContent =
                    String(value);

            }


            item.appendChild(
                labelElement
            );

            item.appendChild(
                valueElement
            );



            const statusClass =
                getStatusClass(label, value);

            if (statusClass) {

                item.classList.add(
                    statusClass
                );

            }


            statusDisplay.appendChild(
                item
            );

        }
    );

}


//======================================================
// nova função
//======================================================

function getStatusClass(label, value) {

    const normalizedLabel =
        String(label).toLowerCase();

    const normalizedValue =
        String(value).toLowerCase();

    if (
        normalizedValue === "não configurado" ||
        normalizedValue === "não configurada" ||
        normalizedValue === "nenhuma" ||
        normalizedValue === "none"
    ) {

        return "";

    }

    if (
        normalizedValue === "down" ||
        normalizedValue === "error"
    ) {

        return "error";

    }

    if (
        normalizedLabel.includes("status") &&
        normalizedValue === "up"
    ) {

        return "configured";

    }

    if (
        normalizedLabel.includes("hostname") &&
        normalizedValue !== "switch"
    ) {

        return "configured";

    }

    if (
        normalizedLabel.includes("ip") &&
        normalizedValue !== "não configurado" &&
        normalizedValue !== "não configurada"
    ) {

        return "configured";

    }

    if (
        normalizedLabel.includes("running config") &&
        normalizedValue === "present"
    ) {

        return "configured";

    }

    if (
        normalizedLabel.includes("porta") &&
        normalizedValue !== "nenhuma"
    ) {

        return "configured";

    }

    if (
        normalizedLabel.includes("vlan atual") &&
        normalizedValue !== "nenhuma"
    ) {

        return "configured";

    }

    return "";
}


// =====================================================
// LIMPA STATUS
// =====================================================

export function clearStatus() {

    uiState.statusData =
        null;


    if (!statusDisplay) {

        return;

    }


    statusDisplay.innerHTML = "";

}


// =====================================================
// MISSÕES
//
// Recebe um objeto simples:
//
// {
//     welcome: "Bem-vindo",
//     basic: "Configuração básica",
//     vlan: "Criar VLAN"
// }
//
// Também aceita:
//
// {
//     vlan: {
//         title: "Criar VLAN"
//     }
// }
//
// Futuramente poderá receber dados
// diretamente de missions.js.
// =====================================================

export function renderMissions(
    missions = {}
) {

    if (!missionSelector) {

        return;

    }


    missionSelector.innerHTML = "";


    const defaultOption =
        document.createElement("option");

    defaultOption.value =
        "welcome";

    defaultOption.textContent =
        "-- Selecione um objetivo --";


    missionSelector.appendChild(
        defaultOption
    );


    Object.entries(
        missions || {}
    ).forEach(
        ([id, mission]) => {

            const option =
                document.createElement("option");


            option.value =
                id;


            if (
                typeof mission === "object" &&
                mission !== null
            ) {

                option.textContent =
                    mission.title ||
                    id;

            } else {

                option.textContent =
                    String(mission);

            }


            missionSelector.appendChild(
                option
            );

        }
    );


    missionSelector.value =
        uiState.currentMission;

}


// =====================================================
// MISSÃO SELECIONADA
// =====================================================

function handleMissionChange(
    event
) {

    const missionId =
        event.target.value;


    uiState.currentMission =
        missionId;


    // O ui.js não executa a missão.
    //
    // O app.js poderá observar essa mudança
    // futuramente através de um callback.
    //
    // Por enquanto apenas armazenamos a seleção.

}


// =====================================================
// OBTER MISSÃO ATUAL
// =====================================================

export function getCurrentMission() {

    return uiState.currentMission;

}


// =====================================================
// COMMAND TREE
// =====================================================

export function renderCommandTree(
    tree = {}
) {

    uiState.commandTreeData =
        tree;


    if (!commandTreeContent) {

        return;

    }


    commandTreeContent.innerHTML = "";


    const entries =
        Object.entries(
            tree || {}
        );


    if (entries.length === 0) {

        const empty =
            document.createElement("div");

        empty.textContent =
            "Command Tree indisponível.";

        commandTreeContent.appendChild(
            empty
        );

        return;

    }


    entries.forEach(
        ([mode, commands]) => {

            const section =
                document.createElement("section");

            section.className =
                "command-tree-section";


            const title =
                document.createElement("h3");

            title.textContent =
                mode;


            section.appendChild(
                title
            );


            if (
                typeof commands === "object" &&
                commands !== null
            ) {

                Object.entries(commands)
                    .forEach(
                        ([command, description]) => {

                            const item =
                                document.createElement("div");

                            item.className =
                                "command-tree-item";


                            const commandElement =
                                document.createElement("strong");

                            commandElement.textContent =
                                `${command}:`;


                            const descriptionElement =
                                document.createElement("span");

                            descriptionElement.textContent =
                                String(description);


                            item.appendChild(
                                commandElement
                            );

                            item.appendChild(
                                descriptionElement
                            );


                            section.appendChild(
                                item
                            );

                        }
                    );

            } else {

                const item =
                    document.createElement("div");

                item.textContent =
                    String(commands);


                section.appendChild(
                    item
                );

            }


            commandTreeContent.appendChild(
                section
            );

        }
    );

}


// =====================================================
// LIMPAR COMMAND TREE
// =====================================================

export function clearCommandTree() {

    uiState.commandTreeData =
        null;


    if (!commandTreeContent) {

        return;

    }


    commandTreeContent.innerHTML = "";

}


// =====================================================
// ABRIR COMMAND TREE
// =====================================================

export function openCommandTree() {

    if (!treeModal) {

        return;

    }


    treeModal.classList.add(
        "active"
    );


    treeModal.setAttribute(
        "aria-hidden",
        "false"
    );

}


// =====================================================
// FECHAR COMMAND TREE
// =====================================================

export function closeCommandTree() {

    if (!treeModal) {

        return;

    }


    treeModal.classList.remove(
        "active"
    );


    treeModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


// =====================================================
// CLIQUE NO FUNDO DO MODAL
// =====================================================

function handleModalBackgroundClick(
    event
) {

    if (
        event.target === treeModal
    ) {

        closeCommandTree();

    }

}


// =====================================================
// MENSAGENS / NOTIFICAÇÕES
//
// Útil para pequenas notificações futuras.
//
// Exemplo:
//
// showMessage(
//     "Configuração salva."
// );
//
// Por enquanto a função escreve no console.
// Quando o CSS estiver pronto podemos transformar
// isso em um toast visual.
// =====================================================

export function showMessage(
    message,
    type = "info"
) {

    console.log(
        `[${type}] ${message}`
    );

}


// =====================================================
// SCROLL GENÉRICO
// =====================================================

function scrollElementToBottom(
    element
) {

    if (!element) {

        return;

    }


    element.scrollTop =
        element.scrollHeight;

}


// =====================================================
// OBTÉM ESTADO VISUAL
//
// Útil para debug.
// =====================================================

export function getUIState() {

    return {

        history: [
            ...uiState.history
        ],

        currentMission:
            uiState.currentMission,

        helpCommands: {
            ...uiState.helpCommands
        },

        statusData:
            uiState.statusData,

        commandTreeData:
            uiState.commandTreeData

    };

}

