/*
=========================================================
CISCO STUDY SIMULATOR
Arquivo: devices/router.js

Responsabilidade:

- Regras específicas do ROUTER.
- Configuração de interfaces físicas.
- Configuração de subinterfaces.
- Encapsulation 802.1Q.
- Native VLAN.
- Configurações gerais aplicáveis ao router.
- Alteração do estado de appState.router.

NÃO possui:

- DOM
- HTML
- CLI
- menus
- renderização
- criação de laboratório
- lógica exclusiva de switch

O CLI deverá chamar as funções deste módulo.

=========================================================
*/

import {
    appState
} from "../core/state.js";


/*
=========================================================
VALIDAÇÃO DO DISPOSITIVO
=========================================================
*/

function isRouterActive() {

    return (
        appState.currentDeviceType === "router" &&
        appState.router &&
        appState.currentDeviceId ===
            appState.router.id
    );

}


/*
=========================================================
OBTER ROUTER
=========================================================
*/

function getRouter() {

    if (!isRouterActive()) {

        return null;

    }

    return appState.router;

}


/*
=========================================================
NORMALIZAR NOME DE INTERFACE
=========================================================
*/

function normalizeInterfaceName(
    interfaceName
) {

    if (
        typeof interfaceName !== "string"
    ) {

        return null;

    }

    const name =
        interfaceName
            .trim()
            .toLowerCase();

    if (!name) {

        return null;

    }

    /*
    Aceita:

    g0/0
    gigabitethernet0/0
    g0/0.10
    gigabitethernet0/0.10
    */

    let normalized =
        name;

    normalized =
        normalized.replace(
            /^gigabitethernet/,
            "g"
        );

    return normalized;

}


/*
=========================================================
VALIDAR INTERFACE FÍSICA
=========================================================
*/

function isPhysicalInterface(
    interfaceName
) {

    if (
        typeof interfaceName !== "string"
    ) {

        return false;

    }

    return /^g\d+\/\d+$/.test(
        interfaceName
    );

}


/*
=========================================================
VALIDAR SUBINTERFACE
=========================================================
*/

function isSubinterface(
    interfaceName
) {

    if (
        typeof interfaceName !== "string"
    ) {

        return false;

    }

    return /^g\d+\/\d+\.\d+$/.test(
        interfaceName
    );

}


/*
=========================================================
OBTER INTERFACE FÍSICA
=========================================================
*/

function getPhysicalInterface(
    interfaceName
) {

    const router =
        getRouter();

    if (!router) {

        return null;

    }

    const normalized =
        normalizeInterfaceName(
            interfaceName
        );

    if (
        !normalized ||
        !isPhysicalInterface(
            normalized
        )
    ) {

        return null;

    }

    if (
        !router.interfaces[
            normalized
        ]
    ) {

        return null;

    }

    return router.interfaces[
        normalized
    ];

}


/*
=========================================================
OBTER INTERFACE ATUAL
=========================================================
*/

export function getCurrentRouterInterface() {

    const router =
        getRouter();

    if (!router) {

        return null;

    }

    const interfaceName =
        router.activeInterface;

    if (!interfaceName) {

        return null;

    }

    return (
        router.interfaces &&
        router.interfaces[
            interfaceName
        ]
    ) || null;

}


/*
=========================================================
SELECIONAR INTERFACE
=========================================================
*/

export function selectRouterInterface(
    interfaceName
) {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    const normalized =
        normalizeInterfaceName(
            interfaceName
        );

    if (!normalized) {

        return false;

    }


    /*
    Interface física existente.
    */

    if (
        router.interfaces[
            normalized
        ]
    ) {

        router.activeInterface =
            normalized;

        appState.currentInterface =
            normalized;

        return true;

    }


    /*
    Subinterface.

    A subinterface será criada
    quando o comando interface
    for utilizado.
    */

    if (
        isSubinterface(
            normalized
        )
    ) {

        const parent =
            normalized.split(".")[0];

        if (
            !router.interfaces[parent]
        ) {

            return false;

        }

        router.interfaces[
            normalized
        ] = {

            name:
                normalized,

            description:
                null,

            ip:
                null,

            mask:
                null,

            isUp:
                false,

            status:
                "down",

            isSubinterface:
                true,

            parentInterface:
                parent,

            subinterfaceId:
                Number(
                    normalized.split(".")[1]
                ),

            encapsulation: {

                enabled:
                    false,

                type:
                    null,

                vlanId:
                    null,

                native:
                    false

            }

        };

        router.activeInterface =
            normalized;

        appState.currentInterface =
            normalized;

        return true;

    }


    return false;

}


/*
=========================================================
HOSTNAME
=========================================================
*/

export function setRouterHostname(
    hostname
) {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    if (
        typeof hostname !== "string" ||
        hostname.trim() === ""
    ) {

        return false;

    }

    const clean =
        hostname.trim();

    const oldId =
        router.id;

    router.hostname =
        clean;

    router.id =
        clean;


    /*
    Atualiza referência do dispositivo.
    */

    const deviceReference =
        appState.devices.find(
            device =>
                device &&
                device.type === "router" &&
                device.id === oldId
        );

    if (deviceReference) {

        deviceReference.id =
            clean;

    }


    /*
    Atualiza referência da topologia.
    */

    const topologyReference =
        appState.topology.devices.find(
            device =>
                device &&
                device.type === "router" &&
                device.id === oldId
        );

    if (topologyReference) {

        topologyReference.id =
            clean;

    }


    /*
    Atualiza conexões que utilizam
    o ID antigo do Router.
    */

    if (
        Array.isArray(
            appState.topology.connections
        )
    ) {

        appState.topology.connections.forEach(
            connection => {

                if (!connection) {

                    return;

                }

                if (
                    connection.source === oldId
                ) {

                    connection.source =
                        clean;

                }

                if (
                    connection.target === oldId
                ) {

                    connection.target =
                        clean;

                }

            }
        );

    }


    appState.currentDeviceId =
        clean;

    return true;

}


/*
=========================================================
ENABLE SECRET
=========================================================
*/

export function setRouterEnableSecret(
    secret
) {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    if (
        secret === null ||
        secret === undefined
    ) {

        return false;

    }

    const value =
        String(secret).trim();

    if (!value) {

        return false;

    }

    router.enableSecret =
        value;

    return true;

}


/*
=========================================================
BANNER MOTD
=========================================================
*/

export function setRouterBanner(
    banner
) {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    if (
        banner === null ||
        banner === undefined
    ) {

        return false;

    }

    router.bannerMotd =
        String(banner);

    return true;

}


/*
=========================================================
PASSWORD ENCRYPTION
=========================================================
*/

export function enableRouterPasswordEncryption() {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    router.encryptionActive =
        true;

    return true;

}


export function disableRouterPasswordEncryption() {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    router.encryptionActive =
        false;

    return true;

}


/*
=========================================================
NO IP DOMAIN-LOOKUP
=========================================================
*/

export function disableIpDomainLookup() {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    router.ipDomainLookup =
        false;

    return true;

}


/*
=========================================================
IP DOMAIN-NAME
=========================================================
*/

export function setIpDomainName(
    domainName
) {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    if (
        typeof domainName !== "string" ||
        domainName.trim() === ""
    ) {

        return false;

    }

    router.domainName =
        domainName.trim();

    return true;

}


/*
=========================================================
DESCRIÇÃO DA INTERFACE
=========================================================
*/

export function setInterfaceDescription(
    description
) {

    const interfaceData =
        getCurrentRouterInterface();

    if (!interfaceData) {

        return false;

    }

    if (
        description === null ||
        description === undefined
    ) {

        return false;

    }

    interfaceData.description =
        String(description);

    return true;

}


/*
=========================================================
IP ADDRESS
=========================================================
*/

export function configureRouterInterfaceIP(
    ip,
    mask
) {

    const interfaceData =
        getCurrentRouterInterface();

    if (!interfaceData) {

        return false;

    }

    if (
        typeof ip !== "string" ||
        typeof mask !== "string"
    ) {

        return false;

    }

    if (
        ip.trim() === "" ||
        mask.trim() === ""
    ) {

        return false;

    }

    interfaceData.ip =
        ip.trim();

    interfaceData.mask =
        mask.trim();

    return true;

}


/*
=========================================================
NO IP ADDRESS
=========================================================
*/

export function removeRouterInterfaceIP() {

    const interfaceData =
        getCurrentRouterInterface();

    if (!interfaceData) {

        return false;

    }

    interfaceData.ip =
        null;

    interfaceData.mask =
        null;

    return true;

}


/*
=========================================================
NO SHUTDOWN
=========================================================
*/

export function enableRouterInterface() {

    const interfaceData =
        getCurrentRouterInterface();

    if (!interfaceData) {

        return false;

    }

    interfaceData.isUp =
        true;

    interfaceData.status =
        "up";

    return true;

}


/*
=========================================================
SHUTDOWN
=========================================================
*/

export function disableRouterInterface() {

    const interfaceData =
        getCurrentRouterInterface();

    if (!interfaceData) {

        return false;

    }

    interfaceData.isUp =
        false;

    interfaceData.status =
        "administratively down";

    return true;

}


/*
=========================================================
ENCAPSULATION DOT1Q
=========================================================
*/

export function configureDot1Q(
    vlanId,
    native = false
) {

    const interfaceData =
        getCurrentRouterInterface();

    if (!interfaceData) {

        return false;

    }

    /*
    Encapsulation 802.1Q somente
    faz sentido em subinterface.
    */

    if (
        !isSubinterface(
            interfaceData.name
        )
    ) {

        return false;

    }

    const vlan =
        Number(vlanId);

    if (
        !Number.isInteger(vlan) ||
        vlan < 1 ||
        vlan > 4094
    ) {

        return false;

    }

    if (
        !interfaceData.encapsulation ||
        typeof interfaceData.encapsulation !==
            "object"
    ) {

        interfaceData.encapsulation = {

            enabled:
                false,

            type:
                null,

            vlanId:
                null,

            native:
                false

        };

    }

    interfaceData.encapsulation.enabled =
        true;

    interfaceData.encapsulation.type =
        "dot1Q";

    interfaceData.encapsulation.vlanId =
        vlan;

    interfaceData.encapsulation.native =
        Boolean(native);

    return true;

}


/*
=========================================================
REMOVER ENCAPSULATION
=========================================================
*/

export function removeEncapsulation() {

    const interfaceData =
        getCurrentRouterInterface();

    if (!interfaceData) {

        return false;

    }

    if (
        !isSubinterface(
            interfaceData.name
        )
    ) {

        return false;

    }

    interfaceData.encapsulation = {

        enabled:
            false,

        type:
            null,

        vlanId:
            null,

        native:
            false

    };

    return true;

}


/*
=========================================================
OBTER ENCAPSULATION
=========================================================
*/

export function getInterfaceEncapsulation() {

    const interfaceData =
        getCurrentRouterInterface();

    if (!interfaceData) {

        return null;

    }

    if (
        !interfaceData.encapsulation
    ) {

        return {

            enabled:
                false,

            type:
                null,

            vlanId:
                null,

            native:
                false

        };

    }

    return structuredClone(
        interfaceData.encapsulation
    );

}


/*
=========================================================
OBTER INTERFACES
=========================================================
*/

export function getRouterInterfaces() {

    const router =
        getRouter();

    if (!router) {

        return {};

    }

    return structuredClone(
        router.interfaces
    );

}


/*
=========================================================
OBTER ROTAS ESTÁTICAS
=========================================================
*/

export function getStaticRoutes() {

    const router =
        getRouter();

    if (!router) {

        return [];

    }

    if (
        !router.routing ||
        !Array.isArray(
            router.routing.staticRoutes
        )
    ) {

        return [];

    }

    return structuredClone(
        router.routing.staticRoutes
    );

}


/*
=========================================================
ADICIONAR ROTA ESTÁTICA
=========================================================
*/

export function addStaticRoute(
    network,
    mask,
    nextHop
) {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    if (
        typeof network !== "string" ||
        typeof mask !== "string" ||
        typeof nextHop !== "string"
    ) {

        return false;

    }

    if (
        network.trim() === "" ||
        mask.trim() === "" ||
        nextHop.trim() === ""
    ) {

        return false;

    }

    if (
        !router.routing
    ) {

        router.routing = {

            staticRoutes:
                []

        };

    }

    if (
        !Array.isArray(
            router.routing.staticRoutes
        )
    ) {

        router.routing.staticRoutes =
            [];

    }

    const route = {

        network:
            network.trim(),

        mask:
            mask.trim(),

        nextHop:
            nextHop.trim()

    };

    const duplicate =
        router.routing.staticRoutes.some(
            item =>
                item &&
                item.network ===
                    route.network &&
                item.mask ===
                    route.mask &&
                item.nextHop ===
                    route.nextHop
        );

    if (duplicate) {

        return false;

    }

    router.routing.staticRoutes.push(
        route
    );

    return true;

}


/*
=========================================================
REMOVER ROTA ESTÁTICA
=========================================================
*/

export function removeStaticRoute(
    network,
    mask,
    nextHop
) {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    if (
        !router.routing ||
        !Array.isArray(
            router.routing.staticRoutes
        )
    ) {

        return false;

    }

    const originalLength =
        router.routing.staticRoutes.length;

    router.routing.staticRoutes =
        router.routing.staticRoutes.filter(
            route => {

                if (!route) {

                    return false;

                }

                return !(
                    route.network ===
                        network &&
                    route.mask ===
                        mask &&
                    route.nextHop ===
                        nextHop
                );

            }
        );

    return (
        router.routing.staticRoutes.length <
        originalLength
    );

}


/*
=========================================================
LIMPAR INTERFACE ATIVA
=========================================================
*/

export function clearRouterInterfaceContext() {

    const router =
        getRouter();

    if (!router) {

        return false;

    }

    router.activeInterface =
        null;

    appState.currentInterface =
        null;

    return true;

}


/*
=========================================================
ESTADO DO ROUTER
=========================================================
*/

export function getRouterState() {

    const router =
        getRouter();

    if (!router) {

        return null;

    }

    return structuredClone(
        router
    );

}
