// =====================================================
// CISCO STUDY SIMULATOR
// interface/ui.js
//
// Responsabilidade:
// Controlar a interface visual da aplicação.
//
// NÃO possui:
// - regras do Switch
// - regras do Router
// - regras de VLAN
// - regras de Port Security
// - lógica de comandos Cisco
// - persistência NVRAM
//
// O ui.js apenas apresenta informações na tela
// e encaminha seleção de dispositivo para a camada
// superior através de onDeviceSelect.
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

const topologyContainer =
    document.getElementById("topology-container");


// =====================================================
// BOTÕES DE DISPOSITIVO
// =====================================================
//
// O HTML pode possuir:
//
// #btn-switch
// #btn-router
//
// O ui.js NÃO altera appState diretamente.
//
// Ele apenas chama:
//
// onDeviceSelect("switch")
// onDeviceSelect("router")
//
// A função é fornecida pelo app.js.
// =====================================================

const btnSwitch =
    document.getElementById("btn-switch");

const btnRouter =
    document.getElementById("btn-router");


// =====================================================
// ESTADO INTERNO DA INTERFACE
// =====================================================

const uiState = {

    history: [],

    currentMission: "welcome",

    helpCommands: {},

    statusData: null,

    commandTreeData: null,

    topologyData: null,

    currentDeviceType: null

};


// =====================================================
// CALLBACK DE SELEÇÃO DE DISPOSITIVO
// =====================================================

let onDeviceSelect = null;


// =====================================================
// INICIALIZAÇÃO DA INTERFACE
// =====================================================

export function initializeUI(
    options = {}
) {

    if (
        typeof options.onDeviceSelect ===
        "function"
    ) {

        onDeviceSelect =
            options.onDeviceSelect;

    }


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


    // ---------------------------------------------
    // SWITCH
    // ---------------------------------------------

    if (btnSwitch) {

        btnSwitch.addEventListener(
            "click",
            () => {

                selectDeviceFromUI(
                    "switch"
                );

            }
        );

    }


    // ---------------------------------------------
    // ROUTER
    // ---------------------------------------------

    if (btnRouter) {

        btnRouter.addEventListener(
            "click",
            () => {

                selectDeviceFromUI(
                    "router"
                );

            }
        );

    }

}


// =====================================================
// SELEÇÃO DE DISPOSITIVO
// =====================================================

function selectDeviceFromUI(
    deviceType
) {

    const normalized =
        String(
            deviceType || ""
        )
        .trim()
        .toLowerCase();


    if (
        normalized !== "switch" &&
        normalized !== "router"
    ) {

        return false;

    }


    uiState.currentDeviceType =
        normalized;


    /*
    A UI não conhece appState.

    A seleção real será feita pelo
    callback fornecido pelo app.js.
    */

    if (
        typeof onDeviceSelect ===
        "function"
    ) {

        const success =
            onDeviceSelect(
                normalized
            );


        if (success === false) {

            return false;

        }

    }


    updateDeviceButtonState();

    return true;

}


// =====================================================
// ESTADO VISUAL DOS BOTÕES
// =====================================================

function updateDeviceButtonState() {

    if (btnSwitch) {

        btnSwitch.classList.toggle(
            "active",
            uiState.currentDeviceType ===
                "switch"
        );

        btnSwitch.setAttribute(
            "aria-pressed",
            String(
                uiState.currentDeviceType ===
                    "switch"
            )
        );

    }


    if (btnRouter) {

        btnRouter.classList.toggle(
            "active",
            uiState.currentDeviceType ===
                "router"
        );

        btnRouter.setAttribute(
            "aria-pressed",
            String(
                uiState.currentDeviceType ===
                    "router"
            )
        );

    }

}


// =====================================================
// DEFINIR DISPOSITIVO VISUALMENTE
// =====================================================

export function setUIDeviceType(
    deviceType
) {

    const normalized =
        String(
            deviceType || ""
        )
        .trim()
        .toLowerCase();


    if (
        normalized !== "switch" &&
        normalized !== "router"
    ) {

        return false;

    }


    uiState.currentDeviceType =
        normalized;


    updateDeviceButtonState();

    return true;

}


// =====================================================
// OBTER DISPOSITIVO VISUAL ATUAL
// =====================================================

export function getUIDeviceType() {

    return uiState.currentDeviceType;

}


// =====================================================
// ESTADO INICIAL
// =====================================================

function renderInitialState() {

    clearHistory();

    clearStatus();

    clearHelp();

    clearCommandTree();

    clearTopology();

    updateDeviceButtonState();

}


// =====================================================
// HELP
// =====================================================

export function renderHelp(
    commands = {}
) {

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
// RENDERIZAR HISTÓRICO
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
// LIMPAR HISTÓRICO
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
                getStatusClass(
                    label,
                    value
                );


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


// =====================================================
// CLASSE VISUAL DO STATUS
// =====================================================

function getStatusClass(
    label,
    value
) {

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
        normalizedValue !== "switch" &&
        normalizedValue !== "router"
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
        (
            normalizedValue === "present" ||
            normalizedValue === "presente"
        )
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
// LIMPAR STATUS
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
// TOPOLOGIA
// =====================================================

export function renderTopology(
    topology = null
) {

    uiState.topologyData =
        topology;


    if (!topologyContainer) {

        return;

    }


    topologyContainer.innerHTML = "";


    if (
        !topology ||
        typeof topology !== "object"
    ) {

        renderTopologyEmpty();

        return;

    }


    const devices =
        Array.isArray(topology.devices)
            ? topology.devices
            : [];


    const connections =
        Array.isArray(topology.connections)
            ? topology.connections
            : [];


    if (
        devices.length === 0
    ) {

        renderTopologyEmpty();

        return;

    }


    const topologyBoard =
        document.createElement("div");

    topologyBoard.className =
        "topology-board";


    const title =
        document.createElement("div");

    title.className =
        "topology-title";

    title.textContent =
        "Topologia do Laboratório";


    topologyBoard.appendChild(
        title
    );


    const deviceArea =
        document.createElement("div");

    deviceArea.className =
        "topology-device-area";


    /*
    -------------------------------------------------
    SWITCHES
    -------------------------------------------------
    */

    const switches =
        devices.filter(
            device =>
                device &&
                device.type === "switch"
        );


    switches.forEach(
        device => {

            const switchElement =
                createTopologyDevice(
                    device,
                    "switch"
                );


            deviceArea.appendChild(
                switchElement
            );

        }
    );


    /*
    -------------------------------------------------
    ROUTERS
    -------------------------------------------------
    */

    const routers =
        devices.filter(
            device =>
                device &&
                device.type === "router"
        );


    routers.forEach(
        device => {

            const routerElement =
                createTopologyDevice(
                    device,
                    "router"
                );


            deviceArea.appendChild(
                routerElement
            );

        }
    );


    /*
    -------------------------------------------------
    PCS
    -------------------------------------------------
    */

    const pcs =
        devices.filter(
            device =>
                device &&
                device.type === "pc"
        );


    const pcContainer =
        document.createElement("div");

    pcContainer.className =
        "topology-pc-container";


    pcs.forEach(
        (device, index) => {

            const pcElement =
                createTopologyDevice(
                    device,
                    "pc"
                );


            pcElement.dataset.index =
                String(index + 1);


            pcContainer.appendChild(
                pcElement
            );

        }
    );


    deviceArea.appendChild(
        pcContainer
    );


    topologyBoard.appendChild(
        deviceArea
    );


    /*
    -------------------------------------------------
    CONEXÕES
    -------------------------------------------------
    */

    const connectionArea =
        document.createElement("div");

    connectionArea.className =
        "topology-connections";


    connections.forEach(
        connection => {

            const connectionElement =
                createTopologyConnection(
                    connection
                );


            connectionArea.appendChild(
                connectionElement
            );

        }
    );


    topologyBoard.appendChild(
        connectionArea
    );


    topologyContainer.appendChild(
        topologyBoard
    );

}


// =====================================================
// CRIAR DISPOSITIVO DA TOPOLOGIA
// =====================================================

function createTopologyDevice(
    device,
    type
) {

    const element =
        document.createElement("div");


    element.className =
        `topology-device topology-${type}`;


    element.dataset.deviceId =
        device?.id || "";


    const icon =
        document.createElement("div");

    icon.className =
        "topology-device-icon";


    if (type === "switch") {

        icon.textContent = "🔀";

    }
    else if (type === "router") {

        icon.textContent = "🌐";

    }
    else {

        icon.textContent = "🖥️";

    }


    const name =
        document.createElement("div");

    name.className =
        "topology-device-name";


    name.textContent =
        device?.id ||
        "Dispositivo";


    const typeLabel =
        document.createElement("div");

    typeLabel.className =
        "topology-device-type";


    if (type === "switch") {

        typeLabel.textContent =
            "Switch";

    }
    else if (type === "router") {

        typeLabel.textContent =
            "Router";

    }
    else {

        typeLabel.textContent =
            "PC";

    }


    element.appendChild(
        icon
    );

    element.appendChild(
        name
    );

    element.appendChild(
        typeLabel
    );


    return element;

}


// =====================================================
// CRIAR CONEXÃO
// =====================================================

function createTopologyConnection(
    connection
) {

    const element =
        document.createElement("div");


    element.className =
        "topology-connection";


    const source =
        connection?.source ||
        "?";


    const target =
        connection?.target ||
        "?";


    const targetPort =
        connection?.targetPort ||
        "";


    element.textContent =
        targetPort
            ? `${source} → ${target} (${targetPort})`
            : `${source} → ${target}`;


    return element;

}


// =====================================================
// TOPOLOGIA VAZIA
// =====================================================

function renderTopologyEmpty() {

    const empty =
        document.createElement("div");


    empty.className =
        "topology-empty";


    empty.textContent =
        "Nenhuma topologia disponível.";


    topologyContainer.appendChild(
        empty
    );

}


// =====================================================
// LIMPAR TOPOLOGIA
// =====================================================

export function clearTopology() {

    uiState.topologyData =
        null;


    if (!topologyContainer) {

        return;

    }


    topologyContainer.innerHTML = "";

}


// =====================================================
// MISSÕES
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
// SCROLL
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
// ESTADO VISUAL
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
            uiState.commandTreeData,

        topologyData:
            uiState.topologyData,

        currentDeviceType:
            uiState.currentDeviceType

    };

}
