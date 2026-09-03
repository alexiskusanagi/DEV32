/*
=====================================================
CISCO STUDY SIMULATOR
parser.js

Responsabilidade:

Interpretar comandos digitados pelo usuário
e transformá-los em ações estruturadas.

NÃO altera appState.
=====================================================
*/

const COMMANDS = {
    enable: "enable",
    configureTerminal: "configure terminal",
    exit: "exit",
    end: "end",
    hostname: "hostname",
    bannerMotd: "banner motd",
    enableSecret: "enable secret",
    servicePasswordEncryption: "service password-encryption",

    vlan: "vlan",
    name: "name",

    interface: "interface",

    ipAddress: "ip address",
    noIpAddress: "no ip address",

    shutdown: "shutdown",
    noShutdown: "no shutdown",

    switchportMode: "switchport mode",
    switchportAccessVlan: "switchport access vlan",

    switchportPortSecurity: "switchport port-security",
    switchportPortSecuritySticky:
        "switchport port-security mac-address sticky",

    switchportPortSecurityMac:
        "switchport port-security mac-address",

    noSwitchportPortSecurity:
        "no switchport port-security",

    encapsulation: "encapsulation dot1q",
    noEncapsulation: "no encapsulation",

    description: "description",

    ipRoute: "ip route",
    noIpRoute: "no ip route",

    password: "password",
    login: "login",
    noLogin: "no login",

    line: "line",

    ping: "ping",
    show: "show",
    clear: "clear",

    write: "write",
    copy: "copy",
    erase: "erase",

    attack: "atacar"
};


/*
=====================================================
PADRÕES DE INTERFACE
=====================================================
*/

const INTERFACE_PATTERNS = [

    /^fa0\/\d+$/i,
    /^fastethernet0\/\d+$/i,
    /^fastethernet\s+0\/\d+$/i,

    /^g\d+\/\d+$/i,
    /^gigabitethernet\d+\/\d+$/i,
    /^gigabitethernet\s+\d+\/\d+$/i,

    /^g\d+\/\d+\.\d+$/i,
    /^gigabitethernet\d+\/\d+\.\d+$/i,
    /^gigabitethernet\s+\d+\/\d+\.\d+$/i,

    /^vlan\s+\d+$/i
];


/*
=====================================================
PARSE PRINCIPAL
=====================================================
*/

export function parseCommand(input = "") {

    const original =
        String(input);

    const trimmed =
        original.trim();

    if (!trimmed) {

        return {
            type: "empty",
            command: "",
            args: [],
            raw: original
        };

    }

    const tokens =
        tokenize(trimmed);

    if (tokens.length === 0) {

        return {
            type: "empty",
            command: "",
            args: [],
            raw: original
        };

    }

    const normalizedTokens =
        tokens.map(
            token => token.toLowerCase()
        );

    const command =
        normalizedTokens.join(" ");


    if (command === "enable") {

        return createCommand(
            "enable",
            [],
            original
        );

    }


    if (
        command === "configure terminal" ||
        command === "conf t"
    ) {

        return createCommand(
            "configure-terminal",
            [],
            original
        );

    }


    if (command === "exit") {

        return createCommand(
            "exit",
            [],
            original
        );

    }


    if (command === "end") {

        return createCommand(
            "end",
            [],
            original
        );

    }


    if (
        normalizedTokens[0] === "hostname"
    ) {

        return createCommand(
            "hostname",
            tokens.slice(1),
            original
        );

    }


    if (
        normalizedTokens[0] === "banner" &&
        normalizedTokens[1] === "motd"
    ) {

        return createCommand(
            "banner-motd",
            parseBannerArguments(
                tokens.slice(2)
            ),
            original
        );

    }


    if (
        normalizedTokens[0] === "enable" &&
        normalizedTokens[1] === "secret"
    ) {

        return createCommand(
            "enable-secret",
            tokens.slice(2),
            original
        );

    }


    if (
        normalizedTokens[0] === "service" &&
        normalizedTokens[1] === "password-encryption"
    ) {

        return createCommand(
            "service-password-encryption",
            [],
            original
        );

    }


    if (
        normalizedTokens[0] === "no" &&
        normalizedTokens[1] === "service" &&
        normalizedTokens[2] === "password-encryption"
    ) {

        return createCommand(
            "no-service-password-encryption",
            [],
            original
        );

    }


    if (
        normalizedTokens[0] === "vlan"
    ) {

        return parseVlanCommand(
            tokens,
            original
        );

    }


    if (
        normalizedTokens[0] === "interface"
    ) {

        return parseInterfaceCommand(
            tokens,
            original
        );

    }


    if (
        normalizedTokens[0] === "ip" &&
        normalizedTokens[1] === "address"
    ) {

        return parseIpAddressCommand(
            tokens,
            original
        );

    }


    if (
        normalizedTokens[0] === "no" &&
        normalizedTokens[1] === "ip" &&
        normalizedTokens[2] === "address"
    ) {

        return createCommand(
            "no-ip-address",
            tokens.slice(3),
            original
        );

    }


    if (
        normalizedTokens[0] === "ip" &&
        normalizedTokens[1] === "route"
    ) {

        return createCommand(
            "ip-route",
            tokens.slice(2),
            original
        );

    }


    if (
        normalizedTokens[0] === "no" &&
        normalizedTokens[1] === "ip" &&
        normalizedTokens[2] === "route"
    ) {

        return createCommand(
            "no-ip-route",
            tokens.slice(3),
            original
        );

    }


    if (
        normalizedTokens[0] === "encapsulation" &&
        normalizedTokens[1] === "dot1q"
    ) {

        return createCommand(
            "encapsulation-dot1q",
            tokens.slice(2),
            original
        );

    }


    if (
        normalizedTokens[0] === "no" &&
        normalizedTokens[1] === "encapsulation"
    ) {

        return createCommand(
            "no-encapsulation",
            [],
            original
        );

    }


    if (
        normalizedTokens[0] === "description"
    ) {

        return createCommand(
            "description",
            tokens.slice(1),
            original
        );

    }


    if (
        normalizedTokens[0] === "shutdown"
    ) {

        return createCommand(
            "shutdown",
            [],
            original
        );

    }


    if (
        normalizedTokens[0] === "no" &&
        normalizedTokens[1] === "shutdown"
    ) {

        return createCommand(
            "no-shutdown",
            [],
            original
        );

    }


    if (
        normalizedTokens[0] === "switchport" &&
        normalizedTokens[1] === "mode"
    ) {

        return createCommand(
            "switchport-mode",
            tokens.slice(2),
            original
        );

    }


    if (
        normalizedTokens[0] === "switchport" &&
        normalizedTokens[1] === "access" &&
        normalizedTokens[2] === "vlan"
    ) {

        return createCommand(
            "switchport-access-vlan",
            tokens.slice(3),
            original
        );

    }


    if (
        normalizedTokens[0] === "switchport" &&
        normalizedTokens[1] === "port-security"
    ) {

        return parsePortSecurityCommand(
            tokens,
            original
        );

    }


    if (
        normalizedTokens[0] === "no" &&
        normalizedTokens[1] === "switchport" &&
        normalizedTokens[2] === "port-security"
    ) {

        return createCommand(
            "no-switchport-port-security",
            tokens.slice(3),
            original
        );

    }


    if (
        normalizedTokens[0] === "password"
    ) {

        return createCommand(
            "password",
            tokens.slice(1),
            original
        );

    }


    if (
        normalizedTokens[0] === "login"
    ) {

        return createCommand(
            "login",
            [],
            original
        );

    }


    if (
        normalizedTokens[0] === "no" &&
        normalizedTokens[1] === "login"
    ) {

        return createCommand(
            "no-login",
            [],
            original
        );

    }


    if (
        normalizedTokens[0] === "line"
    ) {

        return parseLineCommand(
            tokens,
            original
        );

    }


    if (
        normalizedTokens[0] === "ping"
    ) {

        return createCommand(
            "ping",
            tokens.slice(1),
            original
        );

    }


    if (
        normalizedTokens[0] === "show"
    ) {

        return createCommand(
            "show",
            tokens.slice(1),
            original
        );

    }


    if (
        normalizedTokens[0] === "clear"
    ) {

        return createCommand(
            "clear",
            tokens.slice(1),
            original
        );

    }


    if (
        normalizedTokens[0] === "write"
    ) {

        return createCommand(
            "write",
            tokens.slice(1),
            original
        );

    }


    if (
        normalizedTokens[0] === "copy"
    ) {

        return createCommand(
            "copy",
            tokens.slice(1),
            original
        );

    }


    if (
        normalizedTokens[0] === "erase"
    ) {

        return createCommand(
            "erase",
            tokens.slice(1),
            original
        );

    }


    if (
        normalizedTokens[0] === "atacar"
    ) {

        return createCommand(
            "attack",
            tokens.slice(1),
            original
        );

    }


    return {
        type: "unknown",
        command:
            tokens[0].toLowerCase(),
        args: tokens.slice(1),
        raw: original,
        tokens
    };
}


/*
=====================================================
CRIAR COMANDO
=====================================================
*/

function createCommand(
    type,
    args = [],
    raw = ""
) {

    return {
        type,
        args,
        raw,
        tokens: tokenize(raw)
    };
}


/*
=====================================================
VLAN
=====================================================
*/

function parseVlanCommand(
    tokens,
    raw
) {

    if (tokens.length < 2) {

        return createCommand(
            "vlan",
            [],
            raw
        );

    }

    const vlanId =
        Number(tokens[1]);

    if (!Number.isInteger(vlanId)) {

        return {
            type: "invalid",
            command: "vlan",
            args: tokens.slice(1),
            raw,
            error: "ID de VLAN inválido."
        };

    }

    return createCommand(
        "vlan",
        [
            vlanId,
            ...tokens.slice(2)
        ],
        raw
    );
}


/*
=====================================================
INTERFACE
=====================================================
*/

function parseInterfaceCommand(
    tokens,
    raw
) {

    if (tokens.length < 2) {

        return {
            type: "invalid",
            command: "interface",
            args: [],
            raw,
            error: "Interface não informada."
        };

    }

    const interfaceName =
        normalizeInterfaceName(
            tokens.slice(1).join(" ")
        );

    if (
        !isValidInterfaceName(
            interfaceName
        )
    ) {

        return {
            type: "invalid",
            command: "interface",
            args: tokens.slice(1),
            raw,
            error: "Interface inválida."
        };

    }

    return createCommand(
        "interface",
        [interfaceName],
        raw
    );
}


/*
=====================================================
IP ADDRESS
=====================================================
*/

function parseIpAddressCommand(
    tokens,
    raw
) {

    if (tokens.length < 3) {

        return {
            type: "invalid",
            command: "ip address",
            args: tokens.slice(2),
            raw,
            error: "IP e máscara são obrigatórios."
        };

    }

    return createCommand(
        "ip-address",
        tokens.slice(2),
        raw
    );
}


/*
=====================================================
PORT SECURITY
=====================================================
*/

function parsePortSecurityCommand(
    tokens,
    raw
) {

    if (tokens.length === 2) {

        return createCommand(
            "switchport-port-security",
            [],
            raw
        );

    }

    const normalized =
        tokens
            .slice(2)
            .map(
                token =>
                    token.toLowerCase()
            );

    if (
        normalized[0] === "mac-address" &&
        normalized[1] === "sticky"
    ) {

        return createCommand(
            "switchport-port-security-sticky",
            [],
            raw
        );

    }

    if (
        normalized[0] === "mac-address" &&
        normalized[1]
    ) {

        return createCommand(
            "switchport-port-security-mac",
            [tokens[3]],
            raw
        );

    }

    return {
        type: "invalid",
        command: "switchport port-security",
        args: tokens.slice(2),
        raw,
        error:
            "Subcomando de Port Security inválido."
    };
}


/*
=====================================================
LINE
=====================================================
*/

function parseLineCommand(
    tokens,
    raw
) {

    if (tokens.length < 2) {

        return {
            type: "invalid",
            command: "line",
            args: [],
            raw,
            error: "Tipo de linha não informado."
        };

    }

    const lineType =
        tokens[1].toLowerCase();

    if (lineType === "console") {

        return createCommand(
            "line-console",
            tokens.slice(2),
            raw
        );

    }

    if (lineType === "vty") {

        return createCommand(
            "line-vty",
            tokens.slice(2),
            raw
        );

    }

    return {
        type: "invalid",
        command: "line",
        args: tokens.slice(1),
        raw,
        error: "Tipo de linha inválido."
    };
}


/*
=====================================================
BANNER
=====================================================
*/

function parseBannerArguments(
    args
) {

    if (args.length === 0) {

        return {
            delimiter: null,
            text: ""
        };

    }

    const text =
        args.join(" ");

    const delimiter =
        text.charAt(0);

    if (
        delimiter &&
        text.charAt(
            text.length - 1
        ) === delimiter
    ) {

        return {
            delimiter,
            text:
                text.slice(1, -1)
        };

    }

    return {
        delimiter: null,
        text
    };
}


/*
=====================================================
TOKENIZER
=====================================================
*/

function tokenize(input) {

    const tokens = [];

    let current = "";

    let quote = null;

    for (
        let i = 0;
        i < input.length;
        i++
    ) {

        const char =
            input[i];

        if (quote !== null) {

            if (char === quote) {

                quote = null;

                continue;
            }

            current += char;

            continue;
        }

        if (
            char === '"' ||
            char === "'"
        ) {

            quote = char;

            continue;
        }

        if (/\s/.test(char)) {

            if (current) {

                tokens.push(
                    current
                );

                current = "";
            }

            continue;
        }

        current += char;
    }

    if (current) {

        tokens.push(
            current
        );

    }

    return tokens;
}


/*
=====================================================
NORMALIZAR INTERFACE
=====================================================
*/

function normalizeInterfaceName(
    value
) {

    const trimmed =
        value.trim();

    const normalized =
        trimmed.toLowerCase();

    if (
        /^fastethernet\s+0\/\d+$/i.test(
            trimmed
        )
    ) {

        return normalized.replace(
            /^fastethernet\s+/i,
            "fa"
        );

    }

    if (
        /^fastethernet0\/\d+$/i.test(
            trimmed
        )
    ) {

        return normalized.replace(
            /^fastethernet/i,
            "fa"
        );

    }

    if (
        /^gigabitethernet\s+\d+\/\d+(\.\d+)?$/i.test(
            trimmed
        )
    ) {

        return normalized.replace(
            /^gigabitethernet\s*/i,
            "g"
        );

    }

    if (
        /^gigabitethernet\d+\/\d+(\.\d+)?$/i.test(
            trimmed
        )
    ) {

        return normalized.replace(
            /^gigabitethernet/i,
            "g"
        );

    }

    if (
        /^g\d+\/\d+(\.\d+)?$/i.test(
            trimmed
        )
    ) {

        return normalized;

    }

    if (
        /^fa0\/\d+$/i.test(
            trimmed
        )
    ) {

        return normalized;

    }

    if (
        /^vlan\s+\d+$/i.test(
            trimmed
        )
    ) {

        const parts =
            trimmed.split(/\s+/);

        return (
            "vlan " +
            parts[1]
        );

    }

    return trimmed;
}


/*
=====================================================
VALIDAR INTERFACE
=====================================================
*/

function isValidInterfaceName(
    name
) {

    return INTERFACE_PATTERNS.some(
        pattern =>
            pattern.test(name)
    );
}


/*
=====================================================
API
=====================================================
*/

export function isKnownCommand(
    input = ""
) {

    const parsed =
        parseCommand(input);

    return (
        parsed.type !== "unknown" &&
        parsed.type !== "invalid" &&
        parsed.type !== "empty"
    );
}


export function getCommandType(
    input = ""
) {

    return parseCommand(
        input
    ).type;
}


export function normalizeCommand(
    input = ""
) {

    return tokenize(
        String(input).trim()
    )
        .join(" ")
        .toLowerCase();
}


export function parseCommands(
    commands = []
) {

    if (!Array.isArray(commands)) {

        return [];

    }

    return commands.map(
        command =>
            parseCommand(command)
    );
}


export function getParserInfo() {

    return {

        name:
            "Cisco Study Simulator Parser",

        version:
            "2.0.0",

        responsibility:
            "Interpretar comandos e produzir ações estruturadas.",

        modifiesState:
            false,

        modifiesDOM:
            false
    };

}
