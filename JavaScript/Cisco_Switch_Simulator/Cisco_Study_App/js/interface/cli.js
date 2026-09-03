/*
=========================================================
CISCO STUDY SIMULATOR
Arquivo: interface/cli.js

Responsabilidade:

- Controlar somente a interface visual do terminal CLI.
- Capturar entrada do usuário.
- Exibir comandos e resultados.
- Controlar prompt.
- Controlar histórico.
- Manter sessão CLI completamente independente por dispositivo.
- Encaminhar comandos para o commandHandler.

NÃO possui:

- regras do Switch
- regras do Router
- parser
- simulator
- state
- banco de comandos
- lógica de missões
- lógica de laboratório

O commandHandler é fornecido pela camada superior
da aplicação.

=========================================================
*/


/*
=========================================================
ESTADO INTERNO DA CLI
=========================================================
*/

let cliInput = null;
let cliScreen = null;
let cliPrompt = null;

let commandHandler = null;


/*
=========================================================
SESSÕES DA CLI
=========================================================

Cada dispositivo possui sua própria sessão visual.

A sessão contém:

- prompt
- histórico de comandos
- índice do histórico
- conteúdo visual do terminal

IMPORTANTE:

O conteúdo visual NÃO é compartilhado entre
Switch e Router.

Quando o usuário troca de dispositivo,
o terminal restaura somente a sessão daquele
dispositivo.
=========================================================
*/

const cliSessions = {

    switch: {

        prompt:
            "Switch>",

        history:
            [],

        historyIndex:
            -1,

        screen:
            ""

    },

    router: {

        prompt:
            "Router>",

        history:
            [],

        historyIndex:
            -1,

        screen:
            ""

    }

};


/*
=========================================================
DISPOSITIVO ATUAL DA CLI
=========================================================
*/

let currentCliDeviceType =
    "switch";


/*
=========================================================
OBTER SESSÃO ATUAL
=========================================================
*/

function getCurrentSession() {

    return (
        cliSessions[
            currentCliDeviceType
        ]
    ) || cliSessions.switch;

}


/*
=========================================================
NORMALIZAR TIPO DE DISPOSITIVO
=========================================================
*/

function normalizeDeviceType(
    deviceType
) {

    if (
        typeof deviceType !== "string"
    ) {

        return null;

    }

    const normalized =
        deviceType
            .trim()
            .toLowerCase();

    if (
        normalized === "switch" ||
        normalized === "router"
    ) {

        return normalized;

    }

    return null;

}


/*
=========================================================
INICIALIZAÇÃO
=========================================================
*/

export function initializeCLI(
    options = {}
) {

    cliInput =
        document.getElementById(
            "cli-input"
        );

    cliScreen =
        document.getElementById(
            "cli-screen"
        );

    cliPrompt =
        document.getElementById(
            "cli-prompt"
        );


    if (
        !cliInput ||
        !cliScreen ||
        !cliPrompt
    ) {

        console.error(
            "CLI: elementos do terminal não encontrados."
        );

        return false;

    }


    if (
        typeof options.onCommand ===
        "function"
    ) {

        commandHandler =
            options.onCommand;

    }


    if (
        typeof options.deviceType ===
        "string"
    ) {

        const deviceType =
            normalizeDeviceType(
                options.deviceType
            );

        if (deviceType) {

            currentCliDeviceType =
                deviceType;

        }

    }


    if (
        typeof options.prompt ===
        "string"
    ) {

        getCurrentSession().prompt =
            options.prompt;

    }


    /*
    Restaura o terminal da sessão atual.
    */

    restoreCurrentSessionScreen();


    cliInput.addEventListener(
        "keydown",
        handleKeyDown
    );


    updatePrompt();

    cliInput.focus();


    return true;

}


/*
=========================================================
SELECIONAR DISPOSITIVO DA CLI
=========================================================

Troca a sessão visual completa.

Exemplo:

Switch:
    Switch>enable
    Switch#


Router:
    Router>enable
    Router#

Ao voltar para Switch, o terminal volta exatamente
para a sessão visual do Switch.

Nenhum histórico é compartilhado.
=========================================================
*/

export function setCliDevice(
    deviceType
) {

    const normalized =
        normalizeDeviceType(
            deviceType
        );

    if (!normalized) {

        return false;

    }


    /*
    Se já estamos no dispositivo solicitado,
    apenas sincroniza a interface.
    */

    currentCliDeviceType =
        normalized;


    restoreCurrentSessionScreen();

    updatePrompt();


    if (cliInput) {

        cliInput.value = "";

        cliInput.focus();

    }


    return true;

}


/*
=========================================================
OBTER DISPOSITIVO ATUAL DA CLI
=========================================================
*/

export function getCliDevice() {

    return currentCliDeviceType;

}


/*
=========================================================
RESTAURAR TELA DA SESSÃO ATUAL
=========================================================
*/

function restoreCurrentSessionScreen() {

    if (!cliScreen) {

        return;

    }


    const session =
        getCurrentSession();


    cliScreen.textContent =
        session.screen || "";


    cliScreen.scrollTop =
        cliScreen.scrollHeight;

}


/*
=========================================================
SALVAR TELA DA SESSÃO ATUAL
=========================================================
*/

function saveCurrentSessionScreen() {

    if (!cliScreen) {

        return;

    }


    const session =
        getCurrentSession();


    session.screen =
        cliScreen.textContent || "";

}


/*
=========================================================
TECLADO
=========================================================
*/

function handleKeyDown(
    event
) {

    if (
        event.key === "Enter"
    ) {

        event.preventDefault();

        const command =
            cliInput.value;

        executeInput(
            command
        );

        return;

    }


    if (
        event.key === "ArrowUp"
    ) {

        event.preventDefault();

        cliInput.value =
            getPreviousHistory();

        return;

    }


    if (
        event.key === "ArrowDown"
    ) {

        event.preventDefault();

        cliInput.value =
            getNextHistory();

        return;

    }

}


/*
=========================================================
EXECUTAR ENTRADA
=========================================================
*/

function executeInput(
    command
) {

    const input =
        String(
            command || ""
        ).trim();


    if (!input) {

        return;

    }


    const session =
        getCurrentSession();


    /*
    Histórico pertence somente ao dispositivo atual.
    */

    session.history.push(
        input
    );

    session.historyIndex =
        session.history.length;


    let result = "";


    if (
        typeof commandHandler ===
        "function"
    ) {

        try {

            result =
                commandHandler(
                    input
                );

        } catch (error) {

            console.error(
                "CLI command error:",
                error
            );

            result =
                "% Erro interno ao executar comando.";

        }

    } else {

        result =
            "% Nenhum command handler configurado.";

    }


    /*
    Garante que resultados não-string
    não quebrem a renderização.
    */

    if (
        result === null ||
        result === undefined
    ) {

        result = "";

    } else if (
        typeof result !== "string"
    ) {

        result =
            String(result);

    }


    writeCommand(
        input,
        result
    );


    /*
    Salva o conteúdo da tela na sessão
    do dispositivo atual.
    */

    saveCurrentSessionScreen();


    cliInput.value = "";

    cliInput.focus();

}


/*
=========================================================
MOSTRAR COMANDO E RESULTADO
=========================================================
*/

function writeCommand(
    command,
    result
) {

    const lines = [];


    lines.push(
        `${getCurrentSession().prompt}${command}`
    );


    if (
        typeof result === "string" &&
        result.length > 0
    ) {

        lines.push(
            result
        );

    }


    writeLine(
        lines.join("\n")
    );

}


/*
=========================================================
ESCREVER NA TELA
=========================================================
*/

export function writeLine(
    text = ""
) {

    if (!cliScreen) {

        return false;

    }


    const value =
        String(text);


    const current =
        cliScreen.textContent || "";


    if (current) {

        cliScreen.textContent =
            `${current}\n${value}`;

    } else {

        cliScreen.textContent =
            value;

    }


    /*
    IMPORTANTE:

    O conteúdo é salvo na sessão atual.
    Portanto, Router e Switch possuem
    telas independentes.
    */

    saveCurrentSessionScreen();


    cliScreen.scrollTop =
        cliScreen.scrollHeight;


    return true;

}


/*
=========================================================
PROMPT
=========================================================
*/

export function setPrompt(
    prompt = "Switch>"
) {

    const session =
        getCurrentSession();

    session.prompt =
        String(prompt);

    updatePrompt();


    return true;

}


function updatePrompt() {

    if (!cliPrompt) {

        return;

    }


    cliPrompt.textContent =
        getCurrentSession().prompt;

}


export function getPrompt() {

    return getCurrentSession().prompt;

}


/*
=========================================================
COMMAND HANDLER
=========================================================
*/

export function setCommandHandler(
    handler
) {

    if (
        typeof handler !==
        "function"
    ) {

        return false;

    }


    commandHandler =
        handler;


    return true;

}


/*
=========================================================
MENSAGEM INICIAL
=========================================================
*/

export function showWelcomeMessage() {

    writeLine(
        "--- Cisco Study Simulator ---"
    );

    writeLine(
        ""
    );

    writeLine(
        "Inicializando laboratório..."
    );

    writeLine(
        ""
    );


    return true;

}


/*
=========================================================
HISTÓRICO
=========================================================
*/

export function getCliHistory() {

    return [
        ...getCurrentSession().history
    ];

}


export function getPreviousHistory() {

    const session =
        getCurrentSession();


    if (
        session.history.length === 0
    ) {

        return "";

    }


    if (
        session.historyIndex > 0
    ) {

        session.historyIndex--;

    }


    return (
        session.history[
            session.historyIndex
        ] || ""
    );

}


export function getNextHistory() {

    const session =
        getCurrentSession();


    if (
        session.history.length === 0
    ) {

        return "";

    }


    if (
        session.historyIndex <
        session.history.length - 1
    ) {

        session.historyIndex++;

        return (
            session.history[
                session.historyIndex
            ] || ""
        );

    }


    session.historyIndex =
        session.history.length;


    return "";

}


/*
=========================================================
LIMPAR HISTÓRICO DO DISPOSITIVO ATUAL
=========================================================
*/

export function clearCliHistory() {

    const session =
        getCurrentSession();

    session.history = [];

    session.historyIndex =
        -1;


    return true;

}


/*
=========================================================
LIMPAR HISTÓRICO DE UMA SESSÃO ESPECÍFICA
=========================================================
*/

export function clearCliDeviceHistory(
    deviceType
) {

    const normalized =
        normalizeDeviceType(
            deviceType
        );

    if (!normalized) {

        return false;

    }

    cliSessions[
        normalized
    ].history = [];

    cliSessions[
        normalized
    ].historyIndex = -1;


    return true;

}


/*
=========================================================
LIMPAR TELA DO DISPOSITIVO ATUAL
=========================================================
*/

export function clearCliScreen() {

    const session =
        getCurrentSession();


    session.screen =
        "";


    if (cliScreen) {

        cliScreen.textContent =
            "";

    }


    return true;

}


/*
=========================================================
RESETAR CLI ATUAL
=========================================================
*/

export function resetCli() {

    const session =
        getCurrentSession();


    session.history = [];

    session.historyIndex =
        -1;

    session.screen =
        "";

    session.prompt =
        currentCliDeviceType === "router"
            ? "Router>"
            : "Switch>";


    if (cliScreen) {

        cliScreen.textContent =
            "";

    }


    updatePrompt();


    if (cliInput) {

        cliInput.value = "";

    }


    return true;

}


/*
=========================================================
RESETAR TODAS AS SESSÕES
=========================================================
*/

export function resetAllCliSessions() {

    cliSessions.switch.history =
        [];

    cliSessions.switch.historyIndex =
        -1;

    cliSessions.switch.prompt =
        "Switch>";

    cliSessions.switch.screen =
        "";


    cliSessions.router.history =
        [];

    cliSessions.router.historyIndex =
        -1;

    cliSessions.router.prompt =
        "Router>";

    cliSessions.router.screen =
        "";


    currentCliDeviceType =
        "switch";


    if (cliScreen) {

        cliScreen.textContent =
            "";

    }


    updatePrompt();


    if (cliInput) {

        cliInput.value = "";

    }


    return true;

}


/*
=========================================================
ESTADO DA CLI
=========================================================
*/

export function getCliState() {

    const session =
        getCurrentSession();


    return {

        deviceType:
            currentCliDeviceType,

        prompt:
            session.prompt,

        history:
            [
                ...session.history
            ],

        historyIndex:
            session.historyIndex,

        screen:
            session.screen

    };

}


/*
=========================================================
ESTADO DE TODAS AS SESSÕES
=========================================================
*/

export function getAllCliSessions() {

    return {

        switch: {

            prompt:
                cliSessions.switch.prompt,

            history:
                [
                    ...cliSessions.switch.history
                ],

            historyIndex:
                cliSessions.switch.historyIndex,

            screen:
                cliSessions.switch.screen

        },

        router: {

            prompt:
                cliSessions.router.prompt,

            history:
                [
                    ...cliSessions.router.history
                ],

            historyIndex:
                cliSessions.router.historyIndex,

            screen:
                cliSessions.router.screen

        }

    };

}


/*
=========================================================
INFORMAÇÕES
=========================================================
*/

export function getCliInfo() {

    return {

        name:
            "Cisco Study Simulator CLI",

        version:
            "1.0.0",

        responsibility:
            "Interface visual do terminal CLI",

        parser:
            "app.js",

        executor:
            "app.js",

        sessions:
            [
                "switch",
                "router"
            ]

    };

}
