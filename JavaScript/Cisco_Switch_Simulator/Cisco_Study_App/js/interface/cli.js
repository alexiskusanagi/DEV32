
/*
CISCO STUDY SIMULATOR
interface/cli.js

Responsabilidade:

Controlar somente a interface visual
do terminal CLI.

Não possui:

- regras do switch
- parser
- simulator
- state
- banco de comandos
- lógica de missões
*/

let cliInput = null;
let cliScreen = null;
let cliPrompt = null;

let commandHandler = null;
let currentPrompt = "Switch>";

let cliHistory = [];
let historyIndex = -1;


/*
=========================================
INICIALIZAR CLI
=========================================
*/

export function initializeCLI(options = {}) {

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
        typeof options.prompt ===
        "string"
    ) {

        currentPrompt =
            options.prompt;

    }


    cliInput.addEventListener(
        "keydown",
        handleKeyDown
    );


    updatePrompt();

    cliInput.focus();


    return true;
}


/*
=========================================
TECLADO
=========================================
*/

function handleKeyDown(event) {

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
=========================================
EXECUTAR ENTRADA
=========================================
*/

function executeInput(command) {

    const input =
        String(command || "").trim();


    if (!input) {

        return;
    }


    cliHistory.push(
        input
    );

    historyIndex =
        cliHistory.length;


    let result = "";


    if (
        typeof commandHandler ===
        "function"
    ) {

        try {

            result =
                commandHandler(input);

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


    writeCommand(
        input,
        result
    );


    cliInput.value = "";

    cliInput.focus();
}


/*
=========================================
MOSTRAR COMANDO E RESULTADO
=========================================
*/

function writeCommand(
    command,
    result
) {

    const lines = [];

    lines.push(
        `${currentPrompt}${command}`
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
=========================================
ESCREVER NA TELA
=========================================
*/

export function writeLine(
    text = ""
) {

    if (!cliScreen) {

        return false;
    }


    const current =
        cliScreen.textContent || "";


    if (current) {

        cliScreen.textContent =
            `${current}\n${text}`;

    } else {

        cliScreen.textContent =
            text;

    }


    cliScreen.scrollTop =
        cliScreen.scrollHeight;


    return true;
}


/*
=========================================
PROMPT
=========================================
*/

export function setPrompt(
    prompt = "Switch>"
) {

    currentPrompt =
        String(prompt);


    updatePrompt();


    return true;
}


function updatePrompt() {

    if (!cliPrompt) {

        return;
    }


    cliPrompt.textContent =
        currentPrompt;
}


export function getPrompt() {

    return currentPrompt;
}


/*
=========================================
COMMAND HANDLER
=========================================
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
=========================================
MENSAGEM INICIAL
=========================================
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
=========================================
HISTÓRICO
=========================================
*/

export function getCliHistory() {

    return [
        ...cliHistory
    ];
}


export function getPreviousHistory() {

    if (
        cliHistory.length === 0
    ) {

        return "";
    }


    if (
        historyIndex > 0
    ) {

        historyIndex--;
    }


    return (
        cliHistory[
            historyIndex
        ] || ""
    );
}


export function getNextHistory() {

    if (
        cliHistory.length === 0
    ) {

        return "";
    }


    if (
        historyIndex <
        cliHistory.length - 1
    ) {

        historyIndex++;

        return (
            cliHistory[
                historyIndex
            ] || ""
        );

    }


    historyIndex =
        cliHistory.length;


    return "";
}


export function clearCliHistory() {

    cliHistory = [];

    historyIndex = -1;

    return true;
}


/*
=========================================
RESETAR CLI
=========================================
*/

export function resetCli() {

    cliHistory = [];

    historyIndex = -1;

    currentPrompt =
        "Switch>";


    updatePrompt();


    if (cliInput) {

        cliInput.value = "";

    }


    return true;
}


/*
=========================================
ESTADO DA CLI
=========================================
*/

export function getCliState() {

    return {

        prompt:
            currentPrompt,

        history:
            [
                ...cliHistory
            ],

        historyIndex

    };
}


/*
=========================================
INFORMAÇÕES
=========================================
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
            "app.js"

    };
}

