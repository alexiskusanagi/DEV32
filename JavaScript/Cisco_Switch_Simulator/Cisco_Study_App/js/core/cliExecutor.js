import {
    parseCommand
} from "./parser.js";

import {
    appState,
    saveStartupConfig,
    loadStartupConfig,
    eraseStartupConfig,
    getCurrentDevice
} from "./state.js";

import {
    setHostname,
    setBanner,
    setEnableSecret,
    enablePasswordEncryption,
    createVlan,
    renameVlan,
    configureManagementIP,
    enableManagementInterface,
    disableManagementInterface,
    selectInterface,
    setPortMode,
    assignPortVlan,
    enablePortSecurity,
    enableStickyMac,
    authorizePortMac,
    triggerViolation,
    clearViolation,
    disablePortSecurity,
    resetLab,
    getSimulatorState
} from "./simulator.js";


/*
=====================================================
CISCO STUDY SIMULATOR
cliExecutor.js

Responsabilidade:

Receber o resultado do parser e executar
a ação correspondente no simulador.

Fluxo:

CLI
↓
parser.js
↓
cliExecutor.js
↓
simulator.js
↓
state.js

Este arquivo NÃO:

- manipula DOM
- renderiza HTML
- cria laboratórios
- contém regras de apresentação
=====================================================
*/


/*
=====================================================
CONTEXTO DA CLI

O estado de modo da CLI pertence à sessão
do terminal, não ao estado permanente do switch.

Modos:

user
Switch>

privileged
Switch#

global
Switch(config)#

interface
Switch(config-if)#

vlan
Switch(config-vlan)#

line
Switch(config-line)#

=====================================================
*/

const cliContext = {

    mode: "user",

    interfaceType: null,

    interfaceName: null,

    lineType: null

};


/*
=====================================================
OBTER CONTEXTO DA CLI
=====================================================
*/

export function getCliContext() {

    return {
        ...cliContext
    };

}


/*
=====================================================
RESETAR CONTEXTO DA CLI
=====================================================
*/

export function resetCliContext() {

    cliContext.mode = "user";

    cliContext.interfaceType = null;

    cliContext.interfaceName = null;

    cliContext.lineType = null;

    return true;

}


/*
=====================================================
EXECUTAR COMANDO
=====================================================
*/

export function executeCommand(input) {

    const parsed =
        typeof input === "string"
            ? parseCommand(input)
            : input;


    if (!parsed) {

        return createResult(
            false,
            "",
            "Comando inválido."
        );

    }


    if (
        parsed.type === "empty"
    ) {

        return createResult(
            true,
            parsed.type,
            ""
        );

    }


    if (
        parsed.type === "unknown"
    ) {

        return createResult(
            false,
            parsed.type,
            `% Comando desconhecido: ${parsed.raw}`
        );

    }


    if (
        parsed.type === "invalid"
    ) {

        return createResult(
            false,
            parsed.type,
            `% ${parsed.error || "Comando inválido."}`
        );

    }


    switch (parsed.type) {

        case "enable":
            return executeEnable();

        case "configure-terminal":
            return executeConfigureTerminal();

        case "exit":
            return executeExit();

        case "end":
            return executeEnd();

        case "hostname":
            return executeHostname(parsed.args);

        case "banner-motd":
            return executeBanner(parsed.args);

        case "enable-secret":
            return executeEnableSecret(parsed.args);

        case "service-password-encryption":
            return executePasswordEncryption();

        case "no-service-password-encryption":
            return executeNoPasswordEncryption();

        case "vlan":
            return executeVlan(parsed.args);

        case "interface":
            return executeInterface(parsed.args);

        case "ip-address":
            return executeIpAddress(parsed.args);

        case "no-ip-address":
            return executeNoIpAddress();

        case "shutdown":
            return executeShutdown();

        case "no-shutdown":
            return executeNoShutdown();

        case "switchport-mode":
            return executeSwitchportMode(parsed.args);

        case "switchport-access-vlan":
            return executeSwitchportAccessVlan(parsed.args);

        case "switchport-port-security":
            return executePortSecurity();

        case "switchport-port-security-sticky":
            return executeStickyMac();

        case "switchport-port-security-mac":
            return executePortSecurityMac(parsed.args);

        case "no-switchport-port-security":
            return executeNoPortSecurity();

        case "line-console":
            return executeLineConsole(parsed.args);

        case "line-vty":
            return executeLineVty(parsed.args);

        case "password":
            return executeLinePassword(parsed.args);

        case "login":
            return executeLogin();

        case "no-login":
            return executeNoLogin();

        case "ping":
            return executePing(parsed.args);

        case "show":
            return executeShow(parsed.args);

        case "clear":
            return executeClear(parsed.args);

        case "write":
            return executeWrite(parsed.args);

        case "copy":
            return executeCopy(parsed.args);

        case "erase":
            return executeErase(parsed.args);

        case "attack":
            return executeAttack(parsed.args);

        default:

            return createResult(
                false,
                parsed.type,
                `% Comando ainda não implementado: ${parsed.raw}`
            );

    }

}


/*
=====================================================
ENABLE
=====================================================
*/

function executeEnable() {

    cliContext.mode =
        "privileged";

    return createResult(
        true,
        "enable",
        ""
    );

}


/*
=====================================================
CONFIGURE TERMINAL
=====================================================
*/

function executeConfigureTerminal() {

    if (
        cliContext.mode !== "privileged"
    ) {

        return createResult(
            false,
            "configure-terminal",
            "% Comando permitido somente no modo privilegiado."
        );

    }


    cliContext.mode =
        "global";

    return createResult(
        true,
        "configure-terminal",
        "Enter configuration commands, one per line. End with CNTL/Z."
    );

}


/*
=====================================================
EXIT
=====================================================
*/

function executeExit() {

    if (
        cliContext.mode === "user"
    ) {

        return createResult(
            true,
            "exit",
            ""
        );

    }


    if (
        cliContext.mode === "privileged"
    ) {

        cliContext.mode =
            "user";

        return createResult(
            true,
            "exit",
            ""
        );

    }


    if (
        cliContext.mode === "interface" ||
        cliContext.mode === "vlan" ||
        cliContext.mode === "line"
    ) {

        cliContext.mode =
            "global";

        cliContext.interfaceType =
            null;

        cliContext.interfaceName =
            null;

        cliContext.lineType =
            null;

        return createResult(
            true,
            "exit",
            ""
        );

    }


    if (
        cliContext.mode === "global"
    ) {

        cliContext.mode =
            "privileged";

        return createResult(
            true,
            "exit",
            ""
        );

    }


    return createResult(
        true,
        "exit",
        ""
    );

}


/*
=====================================================
END
=====================================================
*/

function executeEnd() {

    if (
        cliContext.mode !== "user"
    ) {

        cliContext.mode =
            "privileged";

        cliContext.interfaceType =
            null;

        cliContext.interfaceName =
            null;

        cliContext.lineType =
            null;

    }

    return createResult(
        true,
        "end",
        ""
    );

}


/*
=====================================================
HOSTNAME
=====================================================
*/

function executeHostname(args) {

    if (
        cliContext.mode !== "global"
    ) {

        return createResult(
            false,
            "hostname",
            "% Comando permitido somente no modo global."
        );

    }


    const hostname =
        args.join(" ").trim();


    if (
        !hostname
    ) {

        return createResult(
            false,
            "hostname",
            "% Nome inválido."
        );

    }


    const success =
        setHostname(hostname);


    return createResult(
        success,
        "hostname",
        success
            ? ""
            : "% Falha ao configurar hostname."
    );

}


/*
=====================================================
BANNER MOTD
=====================================================
*/

function executeBanner(args) {

    if (
        cliContext.mode !== "global"
    ) {

        return createResult(
            false,
            "banner-motd",
            "% Comando permitido somente no modo global."
        );

    }


    const text =
        args?.text ?? "";


    const success =
        setBanner(text);


    return createResult(
        success,
        "banner-motd",
        success
            ? ""
            : "% Falha ao configurar banner."
    );

}


/*
=====================================================
ENABLE SECRET
=====================================================
*/

function executeEnableSecret(args) {

    if (
        cliContext.mode !== "global"
    ) {

        return createResult(
            false,
            "enable-secret",
            "% Comando permitido somente no modo global."
        );

    }


    const secret =
        args.join(" ").trim();


    if (
        !secret
    ) {

        return createResult(
            false,
            "enable-secret",
            "% Senha não informada."
        );

    }


    const success =
        setEnableSecret(secret);


    return createResult(
        success,
        "enable-secret",
        success
            ? ""
            : "% Falha ao configurar enable secret."
    );

}


/*
=====================================================
PASSWORD ENCRYPTION
=====================================================
*/

function executePasswordEncryption() {

    if (
        cliContext.mode !== "global"
    ) {

        return createResult(
            false,
            "service-password-encryption",
            "% Comando permitido somente no modo global."
        );

    }


    const success =
        enablePasswordEncryption();


    return createResult(
        success,
        "service-password-encryption",
        ""
    );

}


function executeNoPasswordEncryption() {

    if (
        cliContext.mode !== "global"
    ) {

        return createResult(
            false,
            "no-service-password-encryption",
            "% Comando permitido somente no modo global."
        );

    }


    appState.switch.encryptionActive =
        false;


    return createResult(
        true,
        "no-service-password-encryption",
        ""
    );

}


/*
=====================================================
VLAN
=====================================================
*/

function executeVlan(args) {

    if (
        cliContext.mode !== "global"
    ) {

        return createResult(
            false,
            "vlan",
            "% Comando permitido somente no modo global."
        );

    }


    const vlanId =
        Number(args[0]);


    if (
        !Number.isInteger(vlanId)
    ) {

        return createResult(
            false,
            "vlan",
            "% ID de VLAN inválido."
        );

    }


    const success =
        createVlan(vlanId);


    if (!success) {

        return createResult(
            false,
            "vlan",
            "% Falha ao criar VLAN."
        );

    }


    cliContext.mode =
        "vlan";

    cliContext.interfaceType =
        "vlan";

    cliContext.interfaceName =
        `vlan ${vlanId}`;


    appState.switch.activeVlanId =
        vlanId;


    return createResult(
        true,
        "vlan",
        ""
    );

}


/*
=====================================================
NAME VLAN
=====================================================
*/

function executeVlanName(args) {

    if (
        cliContext.mode !== "vlan"
    ) {

        return createResult(
            false,
            "name",
            "% Comando permitido somente no modo VLAN."
        );

    }


    const vlanId =
        Number(
            cliContext.interfaceName
                .replace(
                    "vlan ",
                    ""
                )
        );


    const name =
        args.join(" ").trim();


    const success =
        renameVlan(
            vlanId,
            name
        );


    return createResult(
        success,
        "name",
        success
            ? ""
            : "% Falha ao renomear VLAN."
    );

}


/*
=====================================================
INTERFACE
=====================================================
*/

function executeInterface(args) {

    if (
        cliContext.mode !== "global"
    ) {

        return createResult(
            false,
            "interface",
            "% Comando permitido somente no modo global."
        );

    }


    const interfaceName =
        args.join(" ").trim().toLowerCase();


    if (
        /^vlan\s+\d+$/i.test(
            interfaceName
        )
    ) {

        cliContext.mode =
            "interface";

        cliContext.interfaceType =
            "vlan";

        cliContext.interfaceName =
            interfaceName;


        return createResult(
            true,
            "interface",
            ""
        );

    }


    const success =
        selectInterface(
            interfaceName
        );


    if (!success) {

        return createResult(
            false,
            "interface",
            "% Interface inválida."
        );

    }


    cliContext.mode =
        "interface";

    cliContext.interfaceType =
        "physical";

    cliContext.interfaceName =
        interfaceName;


    return createResult(
        true,
        "interface",
        ""
    );

}


/*
=====================================================
IP ADDRESS
=====================================================
*/

function executeIpAddress(args) {

    if (
        cliContext.mode !== "interface" ||
        cliContext.interfaceType !== "vlan"
    ) {

        return createResult(
            false,
            "ip-address",
            "% O comando ip address deve ser usado na interface VLAN."
        );

    }


    if (
        args.length < 2
    ) {

        return createResult(
            false,
            "ip-address",
            "% IP e máscara são obrigatórios."
        );

    }


    const success =
        configureManagementIP(
            args[0],
            args[1]
        );


    return createResult(
        success,
        "ip-address",
        success
            ? ""
            : "% Falha ao configurar endereço IP."
    );

}


function executeNoIpAddress() {

    if (
        cliContext.mode !== "interface" ||
        cliContext.interfaceType !== "vlan"
    ) {

        return createResult(
            false,
            "no-ip-address",
            "% Comando permitido somente na interface VLAN."
        );

    }


    appState.switch.vlan1.ip =
        null;

    appState.switch.vlan1.mask =
        null;


    return createResult(
        true,
        "no-ip-address",
        ""
    );

}


/*
=====================================================
SHUTDOWN
=====================================================
*/

function executeShutdown() {

    if (
        cliContext.mode !== "interface"
    ) {

        return createResult(
            false,
            "shutdown",
            "% Comando permitido somente no modo de interface."
        );

    }


    if (
        cliContext.interfaceType === "vlan"
    ) {

        disableManagementInterface();

    } else {

        const port =
            appState.switch
                .ports?.[
                    cliContext.interfaceName
                ];


        if (!port) {

            return createResult(
                false,
                "shutdown",
                "% Interface não encontrada."
            );

        }


        port.status =
            "shutdown";

    }


    return createResult(
        true,
        "shutdown",
        ""
    );

}


/*
=====================================================
NO SHUTDOWN
=====================================================
*/

function executeNoShutdown() {

    if (
        cliContext.mode !== "interface"
    ) {

        return createResult(
            false,
            "no-shutdown",
            "% Comando permitido somente no modo de interface."
        );

    }


    if (
        cliContext.interfaceType === "vlan"
    ) {

        enableManagementInterface();

    } else {

        const port =
            appState.switch
                .ports?.[
                    cliContext.interfaceName
                ];


        if (!port) {

            return createResult(
                false,
                "no-shutdown",
                "% Interface não encontrada."
            );

        }


        if (
            port.status === "err-disabled"
        ) {

            clearViolation(
                cliContext.interfaceName
            );

        } else {

            port.status =
                "connected";

        }

    }


    return createResult(
        true,
        "no-shutdown",
        ""
    );

}


/*
=====================================================
SWITCHPORT MODE
=====================================================
*/

function executeSwitchportMode(args) {

    if (
        cliContext.mode !== "interface" ||
        cliContext.interfaceType !== "physical"
    ) {

        return createResult(
            false,
            "switchport-mode",
            "% Comando permitido somente em uma interface física."
        );

    }


    const mode =
        String(
            args[0] || ""
        ).toLowerCase();


    const success =
        setPortMode(mode);


    return createResult(
        success,
        "switchport-mode",
        success
            ? ""
            : "% Modo de porta inválido."
    );

}


/*
=====================================================
SWITCHPORT ACCESS VLAN
=====================================================
*/

function executeSwitchportAccessVlan(args) {

    if (
        cliContext.mode !== "interface" ||
        cliContext.interfaceType !== "physical"
    ) {

        return createResult(
            false,
            "switchport-access-vlan",
            "% Comando permitido somente em uma interface física."
        );

    }


    const vlanId =
        Number(args[0]);


    const success =
        assignPortVlan(vlanId);


    return createResult(
        success,
        "switchport-access-vlan",
        success
            ? ""
            : "% Não foi possível atribuir a VLAN."
    );

}


/*
=====================================================
PORT SECURITY
=====================================================
*/

function executePortSecurity() {

    if (
        cliContext.mode !== "interface"
    ) {

        return createResult(
            false,
            "switchport-port-security",
            "% Comando permitido somente no modo de interface."
        );

    }


    const success =
        enablePortSecurity();


    return createResult(
        success,
        "switchport-port-security",
        success
            ? ""
            : "% Port Security não pode ser ativado nesta interface."
    );

}


function executeStickyMac() {

    const success =
        enableStickyMac();


    return createResult(
        success,
        "switchport-port-security-sticky",
        success
            ? ""
            : "% Não foi possível ativar Sticky MAC."
    );

}


function executePortSecurityMac(args) {

    const mac =
        args.join(" ").trim();


    const success =
        authorizePortMac(mac);


    return createResult(
        success,
        "switchport-port-security-mac",
        success
            ? ""
            : "% MAC inválido ou Port Security desativado."
    );

}


function executeNoPortSecurity() {

    const success =
        disablePortSecurity();


    return createResult(
        success,
        "no-switchport-port-security",
        success
            ? ""
            : "% Não foi possível desativar Port Security."
    );

}


/*
=====================================================
LINE CONSOLE
=====================================================
*/

function executeLineConsole(args) {

    if (
        cliContext.mode !== "global"
    ) {

        return createResult(
            false,
            "line-console",
            "% Comando permitido somente no modo global."
        );

    }


    cliContext.mode =
        "line";

    cliContext.lineType =
        "console";


    return createResult(
        true,
        "line-console",
        ""
    );

}


/*
=====================================================
LINE VTY
=====================================================
*/

function executeLineVty(args) {

    if (
        cliContext.mode !== "global"
    ) {

        return createResult(
            false,
            "line-vty",
            "% Comando permitido somente no modo global."
        );

    }


    cliContext.mode =
        "line";

    cliContext.lineType =
        "vty";


    return createResult(
        true,
        "line-vty",
        ""
    );

}


/*
=====================================================
LINE PASSWORD

O modelo atual do simulator ainda não possui
funções específicas para console/vty.

Por enquanto o executor informa isso claramente,
em vez de alterar appState diretamente.

=====================================================
*/

function executeLinePassword() {

    if (
        cliContext.mode !== "line"
    ) {

        return createResult(
            false,
            "password",
            "% Comando permitido somente no modo line."
        );

    }


    return createResult(
        false,
        "password",
        "% Configuração de senha de line ainda não implementada no simulator."
    );

}


/*
=====================================================
LOGIN
=====================================================
*/

function executeLogin() {

    if (
        cliContext.mode !== "line"
    ) {

        return createResult(
            false,
            "login",
            "% Comando permitido somente no modo line."
        );

    }


    return createResult(
        false,
        "login",
        "% Configuração de login de line ainda não implementada no simulator."
    );

}


function executeNoLogin() {

    if (
        cliContext.mode !== "line"
    ) {

        return createResult(
            false,
            "no-login",
            "% Comando permitido somente no modo line."
        );

    }


    return createResult(
        false,
        "no-login",
        "% Configuração de login de line ainda não implementada no simulator."
    );

}


/*
=====================================================
PING
=====================================================
*/

function executePing(args) {

    const target =
        args.join(" ").trim();


    if (!target) {

        return createResult(
            false,
            "ping",
            "% Endereço de destino não informado."
        );

    }


    const managementIp =
        appState.switch.vlan1.ip;


    if (
        target === managementIp
    ) {

        return createResult(
            true,
            "ping",
            `Ping ${target}: sucesso.`
        );

    }


    const reachable =
        appState.pcs.some(
            pc =>
                pc &&
                pc.ip === target &&
                pc.status === "online"
        );


    return createResult(
        reachable,
        "ping",
        reachable
            ? `Ping ${target}: sucesso.`
            : `Ping ${target}: destino inalcançável.`
    );

}


/*
=====================================================
SHOW
=====================================================
*/

function executeShow(args) {

    const command =
        args
            .join(" ")
            .trim()
            .toLowerCase();


    if (
        command === "running-config"
    ) {

        return createResult(
            true,
            "show",
            JSON.stringify(
                appState,
                null,
                4
            )
        );

    }


    if (
        command === "startup-config"
    ) {

        const loaded =
            loadStartupConfig();


        if (!loaded) {

            return createResult(
                true,
                "show",
                "% Startup-config não encontrada."
            );

        }


        return createResult(
            true,
            "show",
            JSON.stringify(
                appState,
                null,
                4
            )
        );

    }


    if (
        command === "vlan" ||
        command === "vlan brief"
    ) {

        return createResult(
            true,
            "show",
            JSON.stringify(
                appState.switch.vlans,
                null,
                4
            )
        );

    }


    if (
        command === "interfaces"
    ) {

        return createResult(
            true,
            "show",
            JSON.stringify(
                appState.switch.ports,
                null,
                4
            )
        );

    }


    return createResult(
        false,
        "show",
        `% Comando show não implementado: ${command}`
    );

}


/*
=====================================================
CLEAR
=====================================================
*/

function executeClear(args) {

    const command =
        args
            .join(" ")
            .trim()
            .toLowerCase();


    if (
        command === "violation"
    ) {

        if (
            cliContext.mode !== "interface"
        ) {

            return createResult(
                false,
                "clear",
                "% Entre na interface primeiro."
            );

        }


        const success =
            clearViolation(
                cliContext.interfaceName
            );


        return createResult(
            success,
            "clear",
            success
                ? ""
                : "% Não foi possível limpar a violação."
        );

    }


    return createResult(
        true,
        "clear",
        ""
    );

}


/*
=====================================================
WRITE
=====================================================
*/

function executeWrite(args) {

    const success =
        saveStartupConfig();


    return createResult(
        success,
        "write",
        success
            ? "Building configuration..."
            : "% Falha ao salvar startup-config."
    );

}


/*
=====================================================
COPY
=====================================================
*/

function executeCopy(args) {

    const normalized =
        args
            .join(" ")
            .toLowerCase();


    if (
        normalized ===
        "running-config startup-config"
    ) {

        const success =
            saveStartupConfig();


        return createResult(
            success,
            "copy",
            success
                ? "Building configuration..."
                : "% Falha ao copiar running-config."
        );

    }


    return createResult(
        false,
        "copy",
        "% Origem ou destino não suportado."
    );

}


/*
=====================================================
ERASE
=====================================================
*/

function executeErase(args) {

    const normalized =
        args
            .join(" ")
            .toLowerCase();


    if (
        normalized ===
        "startup-config"
    ) {

        const success =
            eraseStartupConfig();


        return createResult(
            success,
            "erase",
            success
                ? "Startup configuration erased."
                : "% Falha ao apagar startup-config."
        );

    }


    return createResult(
        false,
        "erase",
        "% Configuração informada não suportada."
    );

}


/*
=====================================================
ATACAR
=====================================================
*/

function executeAttack(args) {

    const interfaceName =
        args[0] ||
        cliContext.interfaceName;


    if (!interfaceName) {

        return createResult(
            false,
            "attack",
            "% Interface não informada."
        );

    }


    const success =
        triggerViolation(
            interfaceName
        );


    return createResult(
        success,
        "attack",
        success
            ? `%PORT-SECURITY: Violação detectada em ${interfaceName}.`
            : "% Port Security não está habilitado."
    );

}


/*
=====================================================
RESULTADO PADRÃO
=====================================================
*/

function createResult(
    success,
    type,
    output = ""
) {

    return {

        success,

        type,

        output,

        context:
            getCliContext(),

        state:
            getSimulatorState()

    };

}


/*
=====================================================
OBTER PROMPT
=====================================================
*/

export function getCliPrompt() {

    const hostname =
        appState.switch?.hostname ||
        "Switch";


    switch (
        cliContext.mode
    ) {

        case "privileged":

            return `${hostname}#`;

        case "global":

            return `${hostname}(config)#`;

        case "interface":

            return `${hostname}(config-if)#`;

        case "vlan":

            return `${hostname}(config-vlan)#`;

        case "line":

            return `${hostname}(config-line)#`;

        case "user":

        default:

            return `${hostname}>`;

    }

}


/*
=====================================================
EXECUTAR VÁRIOS COMANDOS
=====================================================
*/

export function executeCommands(
commands = []
) {

    if (
        !Array.isArray(commands)
    ) {

        return [];

    }


    return commands.map(
        command =>
            executeCommand(
                command
            )
    );

}


/*
=====================================================
OBTER ESTADO DO EXECUTOR
=====================================================
*/

export function getExecutorState() {

    return {

        context:
            getCliContext(),

        prompt:
            getCliPrompt(),

        device:
            getCurrentDevice()

    };

}