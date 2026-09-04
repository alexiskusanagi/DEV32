/*
=====================================================
CISCO STUDY SIMULATOR
core/cliExecutor.js
=====================================================

Responsabilidade:

- Receber comandos do parser.
- Executar comandos no dispositivo ativo.
- Manter contexto CLI independente por dispositivo.
- Manter Switch e Router separados.
- Não manipular DOM.
- Não renderizar interface.

IMPORTANTE:

appState.currentDeviceType determina o dispositivo ativo.

Switch:
    appState.currentDeviceType === "switch"

Router:
    appState.currentDeviceType === "router"

Cada dispositivo possui seu próprio contexto CLI
e seu próprio histórico de comandos.
=====================================================
*/


import {
    parseCommand
} from "./parser.js";


import {
    appState,
    saveStartupConfig,
    loadStartupConfig,
    eraseStartupConfig,
    // resetDevices,
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
    getSimulatorState
} from "./simulator.js";


/*
=====================================================
CONTEXTO CLI
=====================================================
*/

const switchContext = {

    mode: "user",

    interfaceType: null,

    interfaceName: null,

    lineType: null

};


const routerContext = {

    mode: "user",

    interfaceType: null,

    interfaceName: null,

    lineType: null

};


/*
=====================================================
OBTER TIPO DO DISPOSITIVO ATIVO
=====================================================
*/

function getDeviceType() {

    if (
        appState.currentDeviceType ===
        "router"
    ) {

        return "router";

    }


    return "switch";

}


/*
=====================================================
OBTER CONTEXTO ATIVO
=====================================================
*/

function getActiveContext() {

    return getDeviceType() === "router"
        ? routerContext
        : switchContext;

}


/*
=====================================================
RESETAR UM CONTEXTO
=====================================================
*/

function resetContext(
    context
) {

    context.mode =
        "user";

    context.interfaceType =
        null;

    context.interfaceName =
        null;

    context.lineType =
        null;

}


/*
=====================================================
OBTER CONTEXTO DA CLI
=====================================================
*/

export function getCliContext() {

    return {
        ...getActiveContext()
    };

}


/*
=====================================================
OBTER CONTEXTOS
=====================================================
*/

export function getCliContexts() {

    return {

        switch:
            {
                ...switchContext
            },

        router:
            {
                ...routerContext
            }

    };

}


/*
=====================================================
RESETAR CONTEXTO ATIVO
=====================================================
*/

export function resetCliContext() {

    resetContext(
        getActiveContext()
    );

    return true;

}


/*
=====================================================
RESETAR TODOS OS CONTEXTOS
=====================================================
*/

export function resetAllCliContexts() {

    resetContext(
        switchContext
    );

    resetContext(
        routerContext
    );

    return true;

}


/*
=====================================================
VALIDAR DISPOSITIVO
=====================================================
*/

function requireDevice(
    type
) {

    return (
        getDeviceType() === type
    );

}


/*
=====================================================
EXECUTAR COMANDO
=====================================================
*/

export function executeCommand(
    input
) {

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


    switch (
        parsed.type
    ) {

        /*
        =============================================
        MODOS BÁSICOS
        =============================================
        */

        case "enable":
            return executeEnable();

        case "disable":
            return executeDisable();

        case "configure-terminal":
            return executeConfigureTerminal();

        case "exit":
            return executeExit();

        case "end":
            return executeEnd();


        /*
        =============================================
        CONFIGURAÇÃO
        =============================================
        */

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


        /*
        =============================================
        VLAN
        =============================================
        */

        case "vlan":
            return executeVlan(parsed.args);

        case "name":
            return executeVlanName(parsed.args);


        /*
        =============================================
        INTERFACES
        =============================================
        */

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


        /*
        =============================================
        SWITCHPORT
        =============================================
        */

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


        /*
        =============================================
        LINHAS
        =============================================
        */

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


        /*
        =============================================
        EXEC
        =============================================
        */

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

        case "reset":
            return executeReset();

        case "erase":
            return executeErase(parsed.args);

        case "reload":
            return executeReload();


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

    const context =
        getActiveContext();


    context.mode =
        "privileged";


    return createResult(
        true,
        "enable",
        ""
    );

}


/*
=====================================================
DISABLE
=====================================================
*/

function executeDisable() {

    const context =
        getActiveContext();


    if (
        context.mode !== "privileged"
    ) {

        return createResult(
            false,
            "disable",
            "% Comando permitido somente no modo privilegiado."
        );

    }


    context.mode =
        "user";

    context.interfaceType =
        null;

    context.interfaceName =
        null;

    context.lineType =
        null;


    return createResult(
        true,
        "disable",
        ""
    );

}


/*
=====================================================
CONFIGURE TERMINAL
=====================================================
*/

function executeConfigureTerminal() {

    const context =
        getActiveContext();


    if (
        context.mode !== "privileged"
    ) {

        return createResult(
            false,
            "configure-terminal",
            "% Comando permitido somente no modo privilegiado."
        );

    }


    context.mode =
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

    const context =
        getActiveContext();


    if (
        context.mode === "user"
    ) {

        return createResult(
            true,
            "exit",
            ""
        );

    }


    if (
        context.mode === "privileged"
    ) {

        context.mode =
            "user";

        return createResult(
            true,
            "exit",
            ""
        );

    }


    if (
        context.mode === "interface" ||
        context.mode === "vlan" ||
        context.mode === "line"
    ) {

        context.mode =
            "global";

        context.interfaceType =
            null;

        context.interfaceName =
            null;

        context.lineType =
            null;

        return createResult(
            true,
            "exit",
            ""
        );

    }


    if (
        context.mode === "global"
    ) {

        context.mode =
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

    const context =
        getActiveContext();


    if (
        context.mode !== "user"
    ) {

        context.mode =
            "privileged";

        context.interfaceType =
            null;

        context.interfaceName =
            null;

        context.lineType =
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

function executeHostname(
    args
) {

    const context =
        getActiveContext();


    if (
        context.mode !== "global"
    ) {

        return createResult(
            false,
            "hostname",
            "% Comando permitido somente no modo global."
        );

    }


    const hostname =
        args.join(" ").trim();


    if (!hostname) {

        return createResult(
            false,
            "hostname",
            "% Nome inválido."
        );

    }


    /*
    ---------------------------------------------
    ROUTER
    ---------------------------------------------
    */

    if (
        requireDevice("router")
    ) {

        if (!appState.router) {

            return createResult(
                false,
                "hostname",
                "% Router indisponível."
            );

        }


        appState.router.hostname =
            hostname;


        return createResult(
            true,
            "hostname",
            ""
        );

    }


    /*
    ---------------------------------------------
    SWITCH
    ---------------------------------------------
    */

    const success =
        setHostname(
            hostname
        );


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

function executeBanner(
    args
) {

    const context =
        getActiveContext();


    if (
        context.mode !== "global"
    ) {

        return createResult(
            false,
            "banner-motd",
            "% Comando permitido somente no modo global."
        );

    }


    const text =
        args?.text ?? "";


    /*
    ---------------------------------------------
    ROUTER
    ---------------------------------------------
    */

    if (
        requireDevice("router")
    ) {

        if (!appState.router) {

            return createResult(
                false,
                "banner-motd",
                "% Router indisponível."
            );

        }


        appState.router.bannerMotd =
            String(text);


        return createResult(
            true,
            "banner-motd",
            ""
        );

    }


    /*
    ---------------------------------------------
    SWITCH
    ---------------------------------------------
    */

    const success =
        setBanner(
            text
        );


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

function executeEnableSecret(
    args
) {

    const context =
        getActiveContext();


    if (
        context.mode !== "global"
    ) {

        return createResult(
            false,
            "enable-secret",
            "% Comando permitido somente no modo global."
        );

    }


    const secret =
        args.join(" ").trim();


    if (!secret) {

        return createResult(
            false,
            "enable-secret",
            "% Senha não informada."
        );

    }


    /*
    ---------------------------------------------
    ROUTER
    ---------------------------------------------
    */

    if (
        requireDevice("router")
    ) {

        if (!appState.router) {

            return createResult(
                false,
                "enable-secret",
                "% Router indisponível."
            );

        }


        appState.router.enableSecret =
            secret;


        return createResult(
            true,
            "enable-secret",
            ""
        );

    }


    /*
    ---------------------------------------------
    SWITCH
    ---------------------------------------------
    */

    const success =
        setEnableSecret(
            secret
        );


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

    const context =
        getActiveContext();


    if (
        context.mode !== "global"
    ) {

        return createResult(
            false,
            "service-password-encryption",
            "% Comando permitido somente no modo global."
        );

    }


    if (
        requireDevice("router")
    ) {

        if (appState.router) {

            appState.router.encryptionActive =
                true;

        }


        return createResult(
            true,
            "service-password-encryption",
            ""
        );

    }


    const success =
        enablePasswordEncryption();


    return createResult(
        success,
        "service-password-encryption",
        success
            ? ""
            : "% Falha ao ativar password encryption."
    );

}


function executeNoPasswordEncryption() {

    const context =
        getActiveContext();


    if (
        context.mode !== "global"
    ) {

        return createResult(
            false,
            "no-service-password-encryption",
            "% Comando permitido somente no modo global."
        );

    }


    if (
        requireDevice("router")
    ) {

        if (appState.router) {

            appState.router.encryptionActive =
                false;

        }


        return createResult(
            true,
            "no-service-password-encryption",
            ""
        );

    }


    if (appState.switch) {

        appState.switch.encryptionActive =
            false;

    }


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

function executeVlan(
    args
) {

    if (
        !requireDevice("switch")
    ) {

        return createResult(
            false,
            "vlan",
            "% O comando vlan pertence ao Switch."
        );

    }


    const context =
        switchContext;


    if (
        context.mode !== "global"
    ) {

        return createResult(
            false,
            "vlan",
            "% Comando permitido somente no modo global."
        );

    }


    const vlanId =
        Number(
            args[0]
        );


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
        createVlan(
            vlanId
        );


    if (!success) {

        return createResult(
            false,
            "vlan",
            "% Falha ao criar VLAN."
        );

    }


    context.mode =
        "vlan";

    context.interfaceType =
        "vlan";

    context.interfaceName =
        `vlan ${vlanId}`;


    if (appState.switch) {

        appState.switch.activeVlanId =
            vlanId;

    }


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

function executeVlanName(
    args
) {

    if (
        !requireDevice("switch")
    ) {

        return createResult(
            false,
            "name",
            "% Comando name pertence ao Switch."
        );

    }


    if (
        switchContext.mode !== "vlan"
    ) {

        return createResult(
            false,
            "name",
            "% Comando permitido somente no modo VLAN."
        );

    }


    const vlanId =
        Number(
            switchContext.interfaceName
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

function executeInterface(
    args
) {

    const context =
        getActiveContext();


    if (
        context.mode !== "global"
    ) {

        return createResult(
            false,
            "interface",
            "% Comando permitido somente no modo global."
        );

    }


    let interfaceName =
        args
            .join(" ")
            .trim()
            .toLowerCase();


    /*
    ---------------------------------------------
    NORMALIZAÇÃO DE ATALHOS
    ---------------------------------------------
    */

    interfaceName =
        normalizeInterfaceName(
            interfaceName
        );


    /*
    ---------------------------------------------
    ROUTER
    ---------------------------------------------
    */

    if (
        requireDevice("router")
    ) {

        const router =
            appState.router;


        if (!router) {

            return createResult(
                false,
                "interface",
                "% Router indisponível."
            );

        }


        const interfaces =
            router.interfaces || {};


        const resolvedName =
            Object.keys(
                interfaces
            ).find(
                name =>
                    normalizeInterfaceName(
                        name.toLowerCase()
                    ) === interfaceName
            );


        if (!resolvedName) {

            return createResult(
                false,
                "interface",
                "% Interface inválida."
            );

        }


        router.activeInterface =
            resolvedName;


        context.mode =
            "interface";

        context.interfaceType =
            "physical";

        context.interfaceName =
            resolvedName;


        return createResult(
            true,
            "interface",
            ""
        );

    }


    /*
    ---------------------------------------------
    SWITCH VLAN
    ---------------------------------------------
    */

    if (
        /^vlan\s+\d+$/i.test(
            interfaceName
        )
    ) {

        context.mode =
            "interface";

        context.interfaceType =
            "vlan";

        context.interfaceName =
            interfaceName;


        return createResult(
            true,
            "interface",
            ""
        );

    }


    /*
    ---------------------------------------------
    SWITCH PORTA FÍSICA
    ---------------------------------------------
    */

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


    context.mode =
        "interface";

    context.interfaceType =
        "physical";

    context.interfaceName =
        getSwitchInterfaceName(
            interfaceName
        );


    return createResult(
        true,
        "interface",
        ""
    );

}


/*
=====================================================
NORMALIZAR NOME DE INTERFACE
=====================================================
*/

function normalizeInterfaceName(
    name
) {

    let normalized =
        String(name || "")
            .trim()
            .toLowerCase();


    normalized =
        normalized.replace(
            /^int\s+/,
            ""
        );


    normalized =
        normalized.replace(
            /^fa\s+/,
            "fastethernet "
        );


    normalized =
        normalized.replace(
            /^fastethernet\s+/,
            "fastethernet "
        );


    normalized =
        normalized.replace(
            /^gi\s+/,
            "gigabitethernet "
        );


    normalized =
        normalized.replace(
            /^gigabitethernet\s+/,
            "gigabitethernet "
        );


    return normalized;

}


/*
=====================================================
OBTER NOME REAL DA INTERFACE DO SWITCH
=====================================================
*/

function getSwitchInterfaceName(
    interfaceName
) {

    const normalized =
        normalizeInterfaceName(
            interfaceName
        );


    const ports =
        appState.switch?.ports ||
        {};


    return (
        Object.keys(
            ports
        ).find(
            name =>
                normalizeInterfaceName(
                    name
                ) === normalized
        )
        ||
        interfaceName
    );

}


/*
=====================================================
IP ADDRESS
=====================================================
*/

function executeIpAddress(
    args
) {

    const context =
        getActiveContext();


    if (
        context.mode !== "interface"
    ) {

        return createResult(
            false,
            "ip-address",
            "% Comando permitido somente no modo de interface."
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


    /*
    ---------------------------------------------
    ROUTER
    ---------------------------------------------
    */

    if (
        requireDevice("router")
    ) {

        const router =
            appState.router;


        if (!router) {

            return createResult(
                false,
                "ip-address",
                "% Router indisponível."
            );

        }


        const interfaceName =
            context.interfaceName;


        const interfaceData =
            router.interfaces?.[
                interfaceName
            ];


        if (!interfaceData) {

            return createResult(
                false,
                "ip-address",
                "% Interface do Router não encontrada."
            );

        }


        interfaceData.ip =
            args[0];

        interfaceData.mask =
            args[1];


        return createResult(
            true,
            "ip-address",
            ""
        );

    }


    /*
    ---------------------------------------------
    SWITCH
    ---------------------------------------------
    */

    if (
        context.interfaceType !== "vlan"
    ) {

        return createResult(
            false,
            "ip-address",
            "% O comando ip address deve ser usado na interface VLAN."
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


/*
=====================================================
NO IP ADDRESS
=====================================================
*/

function executeNoIpAddress() {

    const context =
        getActiveContext();


    if (
        context.mode !== "interface"
    ) {

        return createResult(
            false,
            "no-ip-address",
            "% Comando permitido somente no modo de interface."
        );

    }


    if (
        requireDevice("router")
    ) {

        const interfaceData =
            appState.router
                ?.interfaces?.[
                    context.interfaceName
                ];


        if (!interfaceData) {

            return createResult(
                false,
                "no-ip-address",
                "% Interface não encontrada."
            );

        }


        interfaceData.ip =
            null;

        interfaceData.mask =
            null;


        return createResult(
            true,
            "no-ip-address",
            ""
        );

    }


    if (
        context.interfaceType !== "vlan"
    ) {

        return createResult(
            false,
            "no-ip-address",
            "% Comando permitido somente na interface VLAN."
        );

    }


    if (appState.switch?.vlan1) {

        appState.switch.vlan1.ip =
            null;

        appState.switch.vlan1.mask =
            null;

    }


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

    const context =
        getActiveContext();


    if (
        context.mode !== "interface"
    ) {

        return createResult(
            false,
            "shutdown",
            "% Comando permitido somente no modo de interface."
        );

    }


    /*
    ---------------------------------------------
    ROUTER
    ---------------------------------------------
    */

    if (
        requireDevice("router")
    ) {

        const interfaceData =
            appState.router
                ?.interfaces?.[
                    context.interfaceName
                ];


        if (!interfaceData) {

            return createResult(
                false,
                "shutdown",
                "% Interface não encontrada."
            );

        }


        interfaceData.status =
            "administratively down";


        return createResult(
            true,
            "shutdown",
            ""
        );

    }


    /*
    ---------------------------------------------
    SWITCH
    ---------------------------------------------
    */

    if (
        context.interfaceType === "vlan"
    ) {

        disableManagementInterface();

    } else {

        const port =
            appState.switch
                ?.ports?.[
                    context.interfaceName
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

    const context =
        getActiveContext();


    if (
        context.mode !== "interface"
    ) {

        return createResult(
            false,
            "no-shutdown",
            "% Comando permitido somente no modo de interface."
        );

    }


    /*
    ---------------------------------------------
    ROUTER
    ---------------------------------------------
    */

    if (
        requireDevice("router")
    ) {

        const interfaceData =
            appState.router
                ?.interfaces?.[
                    context.interfaceName
                ];


        if (!interfaceData) {

            return createResult(
                false,
                "no-shutdown",
                "% Interface não encontrada."
            );

        }


        interfaceData.status =
            "up";


        return createResult(
            true,
            "no-shutdown",
            ""
        );

    }


    /*
    ---------------------------------------------
    SWITCH
    ---------------------------------------------
    */

    if (
        context.interfaceType === "vlan"
    ) {

        enableManagementInterface();

    } else {

        const port =
            appState.switch
                ?.ports?.[
                    context.interfaceName
                ];


        if (!port) {

            return createResult(
                false,
                "no-shutdown",
                "% Interface não encontrada."
            );

        }


        if (
            port.status ===
            "err-disabled"
        ) {

            clearViolation(
                context.interfaceName
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

function executeSwitchportMode(
    args
) {

    if (
        !requireDevice("switch")
    ) {

        return createResult(
            false,
            "switchport-mode",
            "% switchport pertence ao Switch."
        );

    }


    if (
        switchContext.mode !== "interface" ||
        switchContext.interfaceType !== "physical"
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
        )
            .trim()
            .toLowerCase();


    if (
        mode !== "access" &&
        mode !== "trunk"
    ) {

        return createResult(
            false,
            "switchport-mode",
            "% Modo de porta inválido."
        );

    }


    const success =
        setPortMode(
            mode
        );


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

function executeSwitchportAccessVlan(
    args
) {

    if (
        !requireDevice("switch")
    ) {

        return createResult(
            false,
            "switchport-access-vlan",
            "% switchport pertence ao Switch."
        );

    }


    if (
        switchContext.mode !== "interface" ||
        switchContext.interfaceType !== "physical"
    ) {

        return createResult(
            false,
            "switchport-access-vlan",
            "% Comando permitido somente em uma interface física."
        );

    }


    const vlanId =
        Number(
            args[0]
        );


    const success =
        assignPortVlan(
            vlanId
        );


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
        !requireDevice("switch")
    ) {

        return createResult(
            false,
            "switchport-port-security",
            "% Port Security pertence ao Switch."
        );

    }


    if (
        switchContext.mode !== "interface" ||
        switchContext.interfaceType !== "physical"
    ) {

        return createResult(
            false,
            "switchport-port-security",
            "% Comando permitido somente em uma interface física."
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

    if (
        !requireDevice("switch")
    ) {

        return createResult(
            false,
            "switchport-port-security-sticky",
            "% Sticky MAC pertence ao Switch."
        );

    }


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


function executePortSecurityMac(
    args
) {

    if (
        !requireDevice("switch")
    ) {

        return createResult(
            false,
            "switchport-port-security-mac",
            "% Port Security pertence ao Switch."
        );

    }


    const mac =
        args.join(" ").trim();


    const success =
        authorizePortMac(
            mac
        );


    return createResult(
        success,
        "switchport-port-security-mac",
        success
            ? ""
            : "% MAC inválido ou Port Security desativado."
    );

}


function executeNoPortSecurity() {

    if (
        !requireDevice("switch")
    ) {

        return createResult(
            false,
            "no-switchport-port-security",
            "% Port Security pertence ao Switch."
        );

    }


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

function executeLineConsole() {

    const context =
        getActiveContext();


    if (
        context.mode !== "global"
    ) {

        return createResult(
            false,
            "line-console",
            "% Comando permitido somente no modo global."
        );

    }


    context.mode =
        "line";

    context.lineType =
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

function executeLineVty() {

    const context =
        getActiveContext();


    if (
        context.mode !== "global"
    ) {

        return createResult(
            false,
            "line-vty",
            "% Comando permitido somente no modo global."
        );

    }


    context.mode =
        "line";

    context.lineType =
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
=====================================================
*/

function executeLinePassword(
    args
) {

    const context =
        getActiveContext();


    if (
        context.mode !== "line"
    ) {

        return createResult(
            false,
            "password",
            "% Comando permitido somente no modo line."
        );

    }


    const password =
        args.join(" ").trim();


    if (!password) {

        return createResult(
            false,
            "password",
            "% Senha não informada."
        );

    }


    const device =
        getCurrentDevice();


    if (!device) {

        return createResult(
            false,
            "password",
            "% Dispositivo indisponível."
        );

    }


    /*
    ---------------------------------------------
    GARANTE ESTRUTURA DE LINHAS
    ---------------------------------------------
    */

    if (!device.lines) {

        device.lines = {};

    }


    const lineName =
        context.lineType === "vty"
            ? "vty"
            : "console";


    if (!device.lines[lineName]) {

        device.lines[lineName] = {};

    }


    device.lines[lineName].password =
        password;


    return createResult(
        true,
        "password",
        ""
    );

}


/*
=====================================================
LOGIN
=====================================================
*/

function executeLogin() {

    const context =
        getActiveContext();


    if (
        context.mode !== "line"
    ) {

        return createResult(
            false,
            "login",
            "% Comando permitido somente no modo line."
        );

    }


    const device =
        getCurrentDevice();


    if (!device) {

        return createResult(
            false,
            "login",
            "% Dispositivo indisponível."
        );

    }


    if (!device.lines) {

        device.lines = {};

    }


    const lineName =
        context.lineType === "vty"
            ? "vty"
            : "console";


    if (!device.lines[lineName]) {

        device.lines[lineName] = {};

    }


    device.lines[lineName].login =
        true;


    return createResult(
        true,
        "login",
        ""
    );

}


function executeNoLogin() {

    const context =
        getActiveContext();


    if (
        context.mode !== "line"
    ) {

        return createResult(
            false,
            "no-login",
            "% Comando permitido somente no modo line."
        );

    }


    const device =
        getCurrentDevice();


    if (!device) {

        return createResult(
            false,
            "no-login",
            "% Dispositivo indisponível."
        );

    }


    if (!device.lines) {

        device.lines = {};

    }


    const lineName =
        context.lineType === "vty"
            ? "vty"
            : "console";


    if (!device.lines[lineName]) {

        device.lines[lineName] = {};

    }


    device.lines[lineName].login =
        false;


    return createResult(
        true,
        "no-login",
        ""
    );

}


/*
=====================================================
PING
=====================================================
*/

function executePing(
    args
) {

    const target =
        args.join(" ").trim();


    if (!target) {

        return createResult(
            false,
            "ping",
            "% Endereço de destino não informado."
        );

    }


    /*
    ---------------------------------------------
    ROUTER
    ---------------------------------------------
    */

    if (
        requireDevice("router")
    ) {

        const router =
            appState.router;


        if (!router) {

            return createResult(
                false,
                "ping",
                "% Router indisponível."
            );

        }


        const interfaces =
            router.interfaces || {};


        const reachable =
            Object.values(
                interfaces
            ).some(
                iface =>
                    iface &&
                    iface.ip === target &&
                    iface.status !==
                        "administratively down" &&
                    iface.status !==
                        "down"
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
    ---------------------------------------------
    SWITCH
    ---------------------------------------------
    */

    const managementIp =
        appState.switch
            ?.vlan1
            ?.ip;


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
        Array.isArray(
            appState.pcs
        ) &&
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

function executeShow(
    args
) {

    const command =
        args
            .join(" ")
            .trim()
            .toLowerCase();


    /*
    ---------------------------------------------
    RUNNING CONFIG
    ---------------------------------------------
    */

    if (
        command === "running-config"
    ) {

        const device =
            requireDevice("router")
                ? appState.router
                : appState.switch;


        return createResult(
            true,
            "show",
            JSON.stringify(
                device,
                null,
                4
            )
        );

    }


    /*
    ---------------------------------------------
    IP INTERFACE BRIEF
    ---------------------------------------------
    */

    if (
        command === "ip interface brief"
    ) {

        if (
            requireDevice("router")
        ) {

            return createResult(
                true,
                "show",
                formatRouterInterfaceBrief()
            );

        }


        return createResult(
            true,
            "show",
            formatSwitchInterfaceBrief()
        );

    }


    /*
    ---------------------------------------------
    MAC ADDRESS TABLE
    ---------------------------------------------
    */

    if (
        command === "mac address-table"
    ) {

        if (
            !requireDevice("switch")
        ) {

            return createResult(
                false,
                "show",
                "% A tabela MAC pertence ao Switch."
            );

        }


        return createResult(
            true,
            "show",
            formatMacAddressTable()
        );

    }


    /*
    ---------------------------------------------
    INTERFACES STATUS
    ---------------------------------------------
    */

    if (
        command === "interfaces status"
    ) {

        if (
            !requireDevice("switch")
        ) {

            return createResult(
                false,
                "show",
                "% interfaces status pertence ao Switch."
            );

        }


        return createResult(
            true,
            "show",
            formatSwitchInterfacesStatus()
        );

    }


    /*
    ---------------------------------------------
    STARTUP CONFIG
    ---------------------------------------------
    */

    if (
        command === "startup-config"
    ) {

        const loaded =
            loadStartupConfig(
                getCurrentDevice().type
            );


        if (!loaded) {

            return createResult(
                true,
                "show",
                "% Startup-config não encontrada."
            );

        }


        const device =
            requireDevice("router")
                ? appState.router
                : appState.switch;


        return createResult(
            true,
            "show",
            JSON.stringify(
                device,
                null,
                4
            )
        );

    }


    /*
    ---------------------------------------------
    VLAN
    ---------------------------------------------
    */

    if (
        command === "vlan" ||
        command === "vlan brief"
    ) {

        if (
            !requireDevice("switch")
        ) {

            return createResult(
                false,
                "show",
                "% VLAN é um recurso do Switch."
            );

        }


        return createResult(
            true,
            "show",
            formatVlanBrief()
        );

    }


    /*
    ---------------------------------------------
    INTERFACES
    ---------------------------------------------
    */

    if (
        command === "interfaces"
    ) {

        if (
            requireDevice("router")
        ) {

            return createResult(
                true,
                "show",
                JSON.stringify(
                    appState.router?.interfaces || {},
                    null,
                    4
                )
            );

        }


        return createResult(
            true,
            "show",
            JSON.stringify(
                appState.switch?.ports || {},
                null,
                4
            )
        );

    }


    /*
    ---------------------------------------------
    ROUTES
    ---------------------------------------------
    */

    if (
        command === "ip route" ||
        command === "ip routes"
    ) {

        if (
            !requireDevice("router")
        ) {

            return createResult(
                false,
                "show",
                "% Routing pertence ao Router."
            );

        }


        return createResult(
            true,
            "show",
            JSON.stringify(
                appState.router?.routing || {},
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
SHOW IP INTERFACE BRIEF - ROUTER
=====================================================
*/

function formatRouterInterfaceBrief() {

    const interfaces =
        appState.router?.interfaces ||
        {};


    const lines = [
        "Interface              IP-Address      Status"
    ];


    Object.entries(
        interfaces
    ).forEach(
        ([name, iface]) => {

            const ip =
                iface?.ip ||
                "unassigned";

            const status =
                iface?.status ||
                "down";


            lines.push(
                `${name.padEnd(22)} ${ip.padEnd(15)} ${status}`
            );

        }
    );


    return lines.join("\n");

}


/*
=====================================================
SHOW IP INTERFACE BRIEF - SWITCH
=====================================================
*/

function formatSwitchInterfaceBrief() {

    const lines = [
        "Interface              IP-Address      Status"
    ];


    const vlan1 =
        appState.switch?.vlan1;


    if (vlan1) {

        lines.push(
            `${"Vlan1".padEnd(22)} ${(vlan1.ip || "unassigned").padEnd(15)} ${vlan1.isUp ? "up" : "administratively down"}`
        );

    }


    Object.entries(
        appState.switch?.ports || {}
    ).forEach(
        ([name, port]) => {

            lines.push(
                `${name.padEnd(22)} ${"unassigned".padEnd(15)} ${port?.status || "down"}`
            );

        }
    );


    return lines.join("\n");

}


/*
=====================================================
SHOW INTERFACES STATUS
=====================================================
*/

function formatSwitchInterfacesStatus() {

    const lines = [
        "Port                    Status"
    ];


    Object.entries(
        appState.switch?.ports || {}
    ).forEach(
        ([name, port]) => {

            lines.push(
                `${name.padEnd(23)} ${port?.status || "down"}`
            );

        }
    );


    return lines.join("\n");

}


/*
=====================================================
SHOW MAC ADDRESS-TABLE
=====================================================
*/

function formatMacAddressTable() {

    const ports =
        appState.switch?.ports ||
        {};


    const lines = [
        "Vlan    Mac Address          Port"
    ];


    Object.entries(
        ports
    ).forEach(
        ([name, port]) => {

            const vlan =
                port?.vlan ||
                1;


            const mac =
                port?.portSecurity?.authorizedMac ||
                port?.mac ||
                null;


            if (mac) {

                lines.push(
                    `${String(vlan).padEnd(8)} ${String(mac).padEnd(20)} ${name}`
                );

            }

        }
    );


    if (
        lines.length === 1
    ) {

        lines.push(
            "Nenhum endereço MAC aprendido."
        );

    }


    return lines.join("\n");

}


/*
=====================================================
SHOW VLAN BRIEF
=====================================================
*/

function formatVlanBrief() {

    const vlans =
        appState.switch?.vlans ||
        {};


    const lines = [
        "VLAN    Name"
    ];


    Object.entries(
        vlans
    ).forEach(
        ([id, name]) => {

            lines.push(
                `${String(id).padEnd(8)} ${name}`
            );

        }
    );


    return lines.join("\n");

}


/*
=====================================================
CLEAR
=====================================================
*/

function executeClear(
    args
) {

    const command =
        args
            .join(" ")
            .trim()
            .toLowerCase();


    if (
        command === "violation"
    ) {

        if (
            !requireDevice("switch")
        ) {

            return createResult(
                false,
                "clear",
                "% Violations pertencem ao Switch."
            );

        }


        if (
            switchContext.mode !== "interface"
        ) {

            return createResult(
                false,
                "clear",
                "% Entre na interface primeiro."
            );

        }


        const success =
            clearViolation(
                switchContext.interfaceName
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

function executeWrite() {

    
    const success =
        saveStartupConfig(
             getCurrentDevice().type
            );


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

function executeCopy(
    args
) {

    const normalized =
        args
            .join(" ")
            .trim()
            .toLowerCase();


    if (
        normalized ===
        "running-config startup-config"
    ) {

        const success =
            saveStartupConfig(
                getCurrentDevice().type
            );



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

function executeErase(
    args
) {

    const normalized =
        args
            .join(" ")
            .trim()
            .toLowerCase();


    if (
        normalized ===
        "startup-config"
    ) {

        const success =
            eraseStartupConfig(
                getCurrentDevice().type
            );


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
RESET
=====================================================
*/

function executeReset() {

    const success =
        resetDevices();


    if (!success) {

        return createResult(
            false,
            "reset",
            "% Falha ao resetar os dispositivos."
        );

    }


    resetAllCliContexts();


    return createResult(
        true,
        "reset",
        "NVRAM do Switch e Router apagada."
    );

}



/*
=====================================================
RELOAD
=====================================================
*/

function executeReload() {

    resetCliContext();


    return createResult(
        true,
        "reload",
        "Proceed with reload? [confirm]"
    );

}


/*
=====================================================
ATTACK
=====================================================
*/

function executeAttack(
    args
) {

    if (
        !requireDevice("switch")
    ) {

        return createResult(
            false,
            "attack",
            "% atacar pertence ao ambiente do Switch."
        );

    }


    const interfaceName =
        args[0] ||
        switchContext.interfaceName;


    if (!interfaceName) {

        return createResult(
            false,
            "attack",
            "% Interface não informada."
        );

    }


    const resolvedName =
        getSwitchInterfaceName(
            normalizeInterfaceName(
                interfaceName
            )
        );


    const success =
        triggerViolation(
            resolvedName
        );


    return createResult(
        success,
        "attack",
        success
            ? `%PORT-SECURITY: Violação detectada em ${resolvedName}.`
            : "% Port Security não está habilitado."
    );

}


/*
=====================================================
RESULTADO
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

        deviceType:
            getDeviceType(),

        device:
            getCurrentDevice(),

        state:
            getSimulatorState()

    };

}


/*
=====================================================
PROMPT
=====================================================
*/

export function getCliPrompt() {

    const context =
        getActiveContext();


    let hostname;


    if (
        requireDevice("router")
    ) {

        hostname =
            appState.router?.hostname ||
            "Router";

    } else {

        hostname =
            appState.switch?.hostname ||
            "Switch";

    }


    switch (
        context.mode
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
ESTADO DO EXECUTOR
=====================================================
*/

export function getExecutorState() {

    return {

        deviceType:
            getDeviceType(),

        context:
            getCliContext(),

        contexts:
            getCliContexts(),

        prompt:
            getCliPrompt(),

        device:
            getCurrentDevice()

    };

}
