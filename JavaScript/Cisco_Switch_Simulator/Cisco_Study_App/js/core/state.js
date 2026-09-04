/* CISCO STUDY SIMULATOR
   state.js

   Responsabilidade:
   Modelos e estado central do simulador.

   NÃO:
   - cria laboratórios
   - executa comandos
   - manipula DOM
   - contém regras específicas da CLI
*/


/* =====================================================
   SWITCH PORT SECURITY
   ===================================================== */

export function createPortSecurityEntry() {

    return {

        isEnabled: false,
        isSticky: false,
        authorizedMac: null,
        isViolated: false

    };

}


/* =====================================================
   SWITCH PORT
   ===================================================== */

export function createSwitchPort(name) {

    return {

        name: name,

        status: "connected",

        description: null,

        mode: "access",

        vlan: 1,

        nativeVlan: null,

        spanningTreePortfast: false,

        portSecurity:
            createPortSecurityEntry()

    };

}


export function createSwitchPorts(quantity = 5) {

    const ports = {};

    for (
        let i = 1;
        i <= quantity;
        i++
    ) {

        const name =
            "fa0/" + i;

        ports[name] =
            createSwitchPort(name);

    }

    return ports;

}


/* =====================================================
   SWITCH STATE
   ===================================================== */

export function createSwitchState(
    hostname = "Switch",
    portQuantity = 5
) {

    return {

        type: "switch",

        id: hostname,

        hostname: hostname,

        bannerMotd: null,

        enableSecret: null,

        encryptionActive: false,

        /*
        ---------------------------------------------
        DNS / DOMAIN
        ---------------------------------------------
        */

        ipDomainLookup: true,

        domainName: null,

        /*
        ---------------------------------------------
        CONSOLE
        ---------------------------------------------
        */

        console: {

            password: null,
            hasLogin: false

        },

        /*
        ---------------------------------------------
        VTY
        ---------------------------------------------
        */

        vty: {

            password: null,
            hasLogin: false

        },

        /*
        ---------------------------------------------
        MANAGEMENT VLAN
        ---------------------------------------------
        */

        vlan1: {

            ip: null,
            mask: null,
            isUp: false,

            description: null

        },

        /*
        ---------------------------------------------
        VLANS
        ---------------------------------------------
        */

        vlans: {

            1: "default"

        },

        activeVlanId: null,

        /*
        ---------------------------------------------
        PORTAS FÍSICAS
        ---------------------------------------------
        */

        ports:
            createSwitchPorts(
                portQuantity
            ),

        activePhysicalPort: null,

        /*
        ---------------------------------------------
        CONFIGURAÇÃO
        ---------------------------------------------
        */

        runningConfigExists: true

    };

}


/* =====================================================
   ROUTER INTERFACE
   ===================================================== */

export function createRouterInterface(
    name
) {

    return {

        name: name,

        description: null,

        ip: null,

        mask: null,

        isUp: false,

        status: "down",

        /*
        ---------------------------------------------
        SUBINTERFACE
        ---------------------------------------------
        */

        isSubinterface: false,

        parentInterface: null,

        subinterfaceId: null,

        /*
        ---------------------------------------------
        802.1Q
        ---------------------------------------------
        */

        encapsulation: {

            enabled: false,

            type: null,

            vlanId: null,

            native: false

        }

    };

}


export function createRouterInterfaces(
    quantity = 2
) {

    const interfaces = {};

    for (
        let i = 0;
        i < quantity;
        i++
    ) {

        const name =
            "g0/" + i;

        interfaces[name] =
            createRouterInterface(
                name
            );

    }

    return interfaces;

}


/* =====================================================
   ROUTER STATE
   ===================================================== */

export function createRouterState(
    hostname = "Router",
    interfaceQuantity = 2
) {

    return {

        type: "router",

        id: hostname,

        hostname: hostname,

        bannerMotd: null,

        enableSecret: null,

        encryptionActive: false,

        /*
        ---------------------------------------------
        DNS / DOMAIN
        ---------------------------------------------
        */

        ipDomainLookup: true,

        domainName: null,

        /*
        ---------------------------------------------
        CONSOLE
        ---------------------------------------------
        */

        console: {

            password: null,
            hasLogin: false

        },

        /*
        ---------------------------------------------
        VTY
        ---------------------------------------------
        */

        vty: {

            password: null,
            hasLogin: false

        },

        /*
        ---------------------------------------------
        INTERFACES
        ---------------------------------------------
        */

        interfaces:
            createRouterInterfaces(
                interfaceQuantity
            ),

        activeInterface: null,

        /*
        ---------------------------------------------
        ROUTING
        ---------------------------------------------
        */

        routing: {

            staticRoutes: []

        },

        /*
        ---------------------------------------------
        CONFIGURAÇÃO
        ---------------------------------------------
        */

        runningConfigExists: true

    };

}


/* =====================================================
   PC
   ===================================================== */

function generateRandomMac() {

    const hex =
        "0123456789abcdef";

    let mac = "";

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        mac +=
            hex[
                Math.floor(
                    Math.random() * 16
                )
            ];

        if (
            i % 2 === 1 &&
            i !== 11
        ) {

            mac += ".";

        }

    }

    return mac;

}


export function createPCState(
    id,
    ip = null,
    connectedPort = null
) {

    return {

        type: "pc",

        id: id,

        hostname: id,

        ip: ip,

        mask: null,

        gateway: null,

        mac:
            generateRandomMac(),

        connectedPort:
            connectedPort,

        vlan: 1,

        status: "online"

    };

}


/* =====================================================
   REFERÊNCIA DE DISPOSITIVO
   ===================================================== */

function createDeviceReference(
    type,
    id
) {

    return {

        type: type,
        id: id

    };

}


/* =====================================================
   TOPOLOGIA
   ===================================================== */

export function createTopologyState() {

    return {

        devices: [],
        connections: []

    };

}


/* =====================================================
   ESTADO PRINCIPAL
   ===================================================== */

export const appState = {

    stateVersion: 3,

    activeLabId: null,

    activeLabName: null,

    topology:
        createTopologyState(),

    switch:
        createSwitchState(
            "Switch"
        ),

    router:
        createRouterState(
            "Router"
        ),

    pcs: [],

    devices: [],

    currentDeviceId: "Switch",

    currentDeviceType: "switch",

    currentInterface: null,

    runningConfigExists: true

};


/* =====================================================
   DISPOSITIVOS INICIAIS
   ===================================================== */

appState.topology.devices.push(

    createDeviceReference(
        "switch",
        appState.switch.id
    )

);

appState.topology.devices.push(

    createDeviceReference(
        "router",
        appState.router.id
    )

);


appState.devices.push(

    createDeviceReference(
        "switch",
        appState.switch.id
    )

);

appState.devices.push(

    createDeviceReference(
        "router",
        appState.router.id
    )

);


/* =====================================================
   NVRAM
   ===================================================== */

const NVRAM_KEY =
    "cisco-study-simulator-startup-config";


function getNvramKey(
    deviceType
) {

    return (
        NVRAM_KEY +
        "-" +
        deviceType
    );

}


function isValidDeviceType(
    deviceType
) {

    return (
        deviceType === "switch" ||
        deviceType === "router"
    );

}


function isLocalStorageAvailable() {

    try {

        const testKey =
            "__cisco_study_storage_test__";

        localStorage.setItem(
            testKey,
            "test"
        );

        localStorage.removeItem(
            testKey
        );

        return true;

    } catch (error) {

        console.warn(
            "NVRAM: localStorage indisponível."
        );

        return false;

    }

}


export function saveStartupConfig(
    deviceType
) {

    try {

        if (
            !isValidDeviceType(
                deviceType
            )
        ) {

            return false;

        }

        if (
            !isLocalStorageAvailable()
        ) {

            return false;

        }

        const device =
            deviceType === "switch"
                ? appState.switch
                : appState.router;

        if (!device) {

            return false;

        }

        const snapshot =
            JSON.stringify(
                device
            );


        localStorage.setItem(
            getNvramKey(deviceType),
            snapshot
        );

        return true;

    } catch (error) {

        console.error(
            "NVRAM: erro salvando startup-config.",
            error
        );

        return false;

    }

}


export function hasStartupConfig(
    deviceType
) {

    try {

        if (
            !isValidDeviceType(
                deviceType
            )
        ) {

            return false;

        }

        if (
            !isLocalStorageAvailable()
        ) {

            return false;

        }

        return (
            localStorage.getItem(
                getNvramKey(deviceType)
            ) !== null
        );

    } catch (error) {

        console.error(
            "NVRAM: erro verificando startup-config.",
            error
        );

        return false;

    }

}


export function loadStartupConfig(
    deviceType
) {

    try {

        if (
            !isValidDeviceType(
                deviceType
            )
        ) {

            return false;

        }


        if (
            !isLocalStorageAvailable()
        ) {

            return false;

        }


        const saved =
            localStorage.getItem(
                getNvramKey(deviceType)
            );

            

        if (!saved) {

            return false;

        }


        const recovered =
            JSON.parse(
                saved
            );


        if (
            !recovered ||
            typeof recovered !== "object" ||
            Array.isArray(recovered)
        ) {

            return false;

        }


        /*
        =============================================
        SWITCH
        =============================================
        */

        if (
            deviceType === "switch"
        ) {

            appState.switch =
                recovered;


            ensureSwitchStructure(
                appState
            );

        }


        /*
        =============================================
        ROUTER
        =============================================
        */

        else {

            appState.router =
                recovered;

                

            ensureRouterStructure(
                appState
            );

        }


        /*
        Não alterar:
        appState.runningConfigExists

        Esse estado global mistura Switch e Router.
        A existência da NVRAM deve ser determinada
        pela chave específica de cada dispositivo.
        */


        return true;

    }
    catch (error) {

        console.error(
            "NVRAM: erro carregando startup-config.",
            error
        );


        return false;

    }

}



export function eraseStartupConfig(
    deviceType
) {

    try {

        if (
            !isValidDeviceType(
                deviceType
            )
        ) {

            return false;

        }

        if (
            !isLocalStorageAvailable()
        ) {

            return false;

        }

        localStorage.removeItem(
            getNvramKey(deviceType)
        );

        return true;

    } catch (error) {

        console.error(
            "NVRAM: erro apagando startup-config.",
            error
        );

        return false;

    }

}



export function exportConfig() {

    try {

        return JSON.stringify(
            appState,
            null,
            4
        );

    } catch (error) {

        console.error(
            "Erro exportando configuração:",
            error
        );

        return null;

    }

}


export function importConfig(
    json
) {

    try {

        if (
            typeof json !== "string"
        ) {

            return false;

        }

        const imported =
            JSON.parse(
                json
            );

        if (
            !isValidAppState(
                imported
            )
        ) {

            return false;

        }

        if (
            !normalizeAppState(
                imported
            )
        ) {

            return false;

        }

        Object.assign(
            appState,
            imported
        );

        return true;

    } catch (error) {

        console.error(
            "Erro importando configuração:",
            error
        );

        return false;

    }

}


export function createStateSnapshot() {

    try {

        return structuredClone(
            appState
        );

    } catch (error) {

        console.error(
            "Erro criando snapshot do estado:",
            error
        );

        return null;

    }

}


export function restoreStateSnapshot(
    snapshot
) {

    try {

        if (
            !isValidAppState(
                snapshot
            )
        ) {

            return false;

        }

        const restored =
            structuredClone(
                snapshot
            );

        if (
            !normalizeAppState(
                restored
            )
        ) {

            return false;

        }

        Object.assign(
            appState,
            restored
        );

        return true;

    } catch (error) {

        console.error(
            "Erro restaurando snapshot:",
            error
        );

        return false;

    }

}


/* =====================================================
   VALIDAÇÃO
   ===================================================== */

export function isValidAppState(
    state
) {

    if (
        !state ||
        typeof state !== "object" ||
        Array.isArray(state)
    ) {

        return false;

    }

    if (
        !state.switch ||
        typeof state.switch !== "object"
    ) {

        return false;

    }

    if (
        !state.router ||
        typeof state.router !== "object"
    ) {

        return false;

    }

    if (
        !state.topology ||
        typeof state.topology !== "object"
    ) {

        return false;

    }

    if (
        !Array.isArray(
            state.devices
        )
    ) {

        return false;

    }

    if (
        !Array.isArray(
            state.pcs
        )
    ) {

        return false;

    }

    return true;

}


/* =====================================================
   NORMALIZAÇÃO — TOPOLOGIA
   ===================================================== */

function ensureTopologyStructure(
    state
) {

    if (
        !state.topology ||
        typeof state.topology !== "object" ||
        Array.isArray(state.topology)
    ) {

        state.topology =
            createTopologyState();

    }

    if (
        !Array.isArray(
            state.topology.devices
        )
    ) {

        state.topology.devices = [];

    }

    if (
        !Array.isArray(
            state.topology.connections
        )
    ) {

        state.topology.connections = [];

    }

}


/* =====================================================
   NORMALIZAÇÃO — COLEÇÕES
   ===================================================== */

function ensureDeviceCollections(
    state
) {

    if (
        !Array.isArray(
            state.devices
        )
    ) {

        state.devices = [];

    }

    if (
        !Array.isArray(
            state.pcs
        )
    ) {

        state.pcs = [];

    }

}


/* =====================================================
   NORMALIZAÇÃO — SWITCH
   ===================================================== */

function ensureSwitchStructure(
    state
) {

    if (
        !state.switch ||
        typeof state.switch !== "object"
    ) {

        state.switch =
            createSwitchState(
                "Switch"
            );

        return;

    }


    /* VLAN */

    if (
        !state.switch.vlans ||
        typeof state.switch.vlans !== "object"
    ) {

        state.switch.vlans = {

            1: "default"

        };

    }

    if (
        !state.switch.vlans[1]
    ) {

        state.switch.vlans[1] =
            "default";

    }


    /* PORTAS */

    if (
        !state.switch.ports ||
        typeof state.switch.ports !== "object"
    ) {

        state.switch.ports =
            createSwitchPorts(
                5
            );

    }


    /* VLAN 1 */

    if (
        !state.switch.vlan1 ||
        typeof state.switch.vlan1 !== "object"
    ) {

        state.switch.vlan1 = {

            ip: null,
            mask: null,
            isUp: false,
            description: null

        };

    }

    if (
        !Object.prototype.hasOwnProperty.call(
            state.switch.vlan1,
            "description"
        )
    ) {

        state.switch.vlan1.description =
            null;

    }


    /* CONSOLE */

    if (
        !state.switch.console ||
        typeof state.switch.console !== "object"
    ) {

        state.switch.console = {

            password: null,
            hasLogin: false

        };

    }


    /* VTY */

    if (
        !state.switch.vty ||
        typeof state.switch.vty !== "object"
    ) {

        state.switch.vty = {

            password: null,
            hasLogin: false

        };

    }


    /* PORTAS */

    Object.entries(
        state.switch.ports
    ).forEach(
        function ([name, port]) {

            if (
                !port ||
                typeof port !== "object"
            ) {

                state.switch.ports[name] =
                    createSwitchPort(name);

                return;

            }


            if (
                !port.name
            ) {

                port.name =
                    name;

            }


            if (
                typeof port.status !== "string"
            ) {

                port.status =
                    "connected";

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    port,
                    "description"
                )
            ) {

                port.description =
                    null;

            }


            if (
                typeof port.mode !== "string"
            ) {

                port.mode =
                    "access";

            }


            if (
                typeof port.vlan !== "number"
            ) {

                port.vlan =
                    1;

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    port,
                    "nativeVlan"
                )
            ) {

                port.nativeVlan =
                    null;

            }


            if (
                typeof port.spanningTreePortfast !==
                "boolean"
            ) {

                port.spanningTreePortfast =
                    false;

            }


            if (
                !port.portSecurity ||
                typeof port.portSecurity !== "object"
            ) {

                port.portSecurity =
                    createPortSecurityEntry();

            }


            if (
                typeof port.portSecurity.isEnabled !==
                "boolean"
            ) {

                port.portSecurity.isEnabled =
                    false;

            }


            if (
                typeof port.portSecurity.isSticky !==
                "boolean"
            ) {

                port.portSecurity.isSticky =
                    false;

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    port.portSecurity,
                    "authorizedMac"
                )
            ) {

                port.portSecurity.authorizedMac =
                    null;

            }


            if (
                typeof port.portSecurity.isViolated !==
                "boolean"
            ) {

                port.portSecurity.isViolated =
                    false;

            }

        }
    );


    /* HOSTNAME */

    if (
        typeof state.switch.hostname !== "string"
    ) {

        state.switch.hostname =
            "Switch";

    }


    if (
        typeof state.switch.id !== "string"
    ) {

        state.switch.id =
            state.switch.hostname;

    }


    /* ENCRYPTION */

    if (
        typeof state.switch.encryptionActive !==
        "boolean"
    ) {

        state.switch.encryptionActive =
            false;

    }


    /* DNS */

    if (
        typeof state.switch.ipDomainLookup !==
        "boolean"
    ) {

        state.switch.ipDomainLookup =
            true;

    }


    if (
        !Object.prototype.hasOwnProperty.call(
            state.switch,
            "domainName"
        )
    ) {

        state.switch.domainName =
            null;

    }


    /* RUNNING CONFIG */

    if (
        typeof state.switch.runningConfigExists !==
        "boolean"
    ) {

        state.switch.runningConfigExists =
            true;

    }

}


/* =====================================================
   NORMALIZAÇÃO — ROUTER
   ===================================================== */

function ensureRouterStructure(
    state
) {

    if (
        !state.router ||
        typeof state.router !== "object"
    ) {

        state.router =
            createRouterState(
                "Router"
            );

        return;

    }


    /* HOSTNAME */

    if (
        typeof state.router.hostname !== "string"
    ) {

        state.router.hostname =
            "Router";

    }


    if (
        typeof state.router.id !== "string"
    ) {

        state.router.id =
            state.router.hostname;

    }


    /* DNS */

    if (
        typeof state.router.ipDomainLookup !==
        "boolean"
    ) {

        state.router.ipDomainLookup =
            true;

    }


    if (
        !Object.prototype.hasOwnProperty.call(
            state.router,
            "domainName"
        )
    ) {

        state.router.domainName =
            null;

    }


    /* CONSOLE */

    if (
        !state.router.console ||
        typeof state.router.console !== "object"
    ) {

        state.router.console = {

            password: null,
            hasLogin: false

        };

    }


    /* VTY */

    if (
        !state.router.vty ||
        typeof state.router.vty !== "object"
    ) {

        state.router.vty = {

            password: null,
            hasLogin: false

        };

    }


    /* INTERFACES */

    if (
        !state.router.interfaces ||
        typeof state.router.interfaces !== "object"
    ) {

        state.router.interfaces =
            createRouterInterfaces(
                2
            );

    }


    Object.entries(
        state.router.interfaces
    ).forEach(
        function ([name, interfaceData]) {

            if (
                !interfaceData ||
                typeof interfaceData !== "object"
            ) {

                state.router.interfaces[name] =
                    createRouterInterface(
                        name
                    );

                return;

            }


            if (
                !interfaceData.name
            ) {

                interfaceData.name =
                    name;

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    interfaceData,
                    "description"
                )
            ) {

                interfaceData.description =
                    null;

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    interfaceData,
                    "ip"
                )
            ) {

                interfaceData.ip =
                    null;

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    interfaceData,
                    "mask"
                )
            ) {

                interfaceData.mask =
                    null;

            }


            if (
                typeof interfaceData.isUp !==
                "boolean"
            ) {

                interfaceData.isUp =
                    false;

            }


            if (
                typeof interfaceData.status !==
                "string"
            ) {

                interfaceData.status =
                    "down";

            }


            /* SUBINTERFACE */

            if (
                typeof interfaceData.isSubinterface !==
                "boolean"
            ) {

                interfaceData.isSubinterface =
                    false;

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    interfaceData,
                    "parentInterface"
                )
            ) {

                interfaceData.parentInterface =
                    null;

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    interfaceData,
                    "subinterfaceId"
                )
            ) {

                interfaceData.subinterfaceId =
                    null;

            }


            /* ENCAPSULATION */

            if (
                !interfaceData.encapsulation ||
                typeof interfaceData.encapsulation !==
                "object"
            ) {

                interfaceData.encapsulation = {

                    enabled: false,
                    type: null,
                    vlanId: null,
                    native: false

                };

            }


            if (
                typeof interfaceData.encapsulation.enabled !==
                "boolean"
            ) {

                interfaceData.encapsulation.enabled =
                    false;

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    interfaceData.encapsulation,
                    "type"
                )
            ) {

                interfaceData.encapsulation.type =
                    null;

            }


            if (
                !Object.prototype.hasOwnProperty.call(
                    interfaceData.encapsulation,
                    "vlanId"
                )
            ) {

                interfaceData.encapsulation.vlanId =
                    null;

            }


            if (
                typeof interfaceData.encapsulation.native !==
                "boolean"
            ) {

                interfaceData.encapsulation.native =
                    false;

            }

        }
    );


    /* ROUTING */

    if (
        !state.router.routing ||
        typeof state.router.routing !== "object"
    ) {

        state.router.routing = {

            staticRoutes: []

        };

    }


    if (
        !Array.isArray(
            state.router.routing.staticRoutes
        )
    ) {

        state.router.routing.staticRoutes = [];

    }


    /* RUNNING CONFIG */

    if (
        typeof state.router.runningConfigExists !==
        "boolean"
    ) {

        state.router.runningConfigExists =
            true;

    }

}


/* =====================================================
   NORMALIZAÇÃO PRINCIPAL
   ===================================================== */

export function normalizeAppState(
    state = appState
) {

    try {

        if (
            !state ||
            typeof state !== "object" ||
            Array.isArray(state)
        ) {

            return false;

        }


        if (
            typeof state.stateVersion !== "number"
        ) {

            state.stateVersion =
                3;

        }


        if (
            !Object.prototype.hasOwnProperty.call(
                state,
                "activeLabId"
            )
        ) {

            state.activeLabId =
                null;

        }


        if (
            !Object.prototype.hasOwnProperty.call(
                state,
                "activeLabName"
            )
        ) {

            state.activeLabName =
                null;

        }


        ensureTopologyStructure(
            state
        );

        ensureDeviceCollections(
            state
        );

        ensureSwitchStructure(
            state
        );

        ensureRouterStructure(
            state
        );


        if (
            !Object.prototype.hasOwnProperty.call(
                state,
                "currentDeviceId"
            )
        ) {

            state.currentDeviceId =
                state.switch.id ||
                "Switch";

        }


        if (
            !Object.prototype.hasOwnProperty.call(
                state,
                "currentDeviceType"
            )
        ) {

            const currentDevice =
                state.devices.find(
                    function (device) {

                        return (
                            device &&
                            device.id ===
                            state.currentDeviceId
                        );

                    }
                );

            state.currentDeviceType =
                currentDevice ?
                currentDevice.type :
                "switch";

        }


        if (
            !Object.prototype.hasOwnProperty.call(
                state,
                "currentInterface"
            )
        ) {

            state.currentInterface =
                null;

        }


        if (
            typeof state.runningConfigExists !==
            "boolean"
        ) {

            state.runningConfigExists =
                true;

        }


        /* SWITCH */

        const switchExists =
            state.devices.some(
                function (device) {

                    return (
                        device &&
                        device.type === "switch" &&
                        device.id ===
                            state.switch.id
                    );

                }
            );

        if (
            !switchExists &&
            state.switch.id
        ) {

            state.devices.push(

                createDeviceReference(
                    "switch",
                    state.switch.id
                )

            );

        }


        /* ROUTER */

        const routerExists =
            state.devices.some(
                function (device) {

                    return (
                        device &&
                        device.type === "router" &&
                        device.id ===
                            state.router.id
                    );

                }
            );

        if (
            !routerExists &&
            state.router.id
        ) {

            state.devices.push(

                createDeviceReference(
                    "router",
                    state.router.id
                )

            );

        }


        /* TOPOLOGIA — SWITCH */

        const topologySwitchExists =
            state.topology.devices.some(
                function (device) {

                    return (
                        device &&
                        device.type === "switch" &&
                        device.id ===
                            state.switch.id
                    );

                }
            );

        if (
            !topologySwitchExists &&
            state.switch.id
        ) {

            state.topology.devices.push(

                createDeviceReference(
                    "switch",
                    state.switch.id
                )

            );

        }


        /* TOPOLOGIA — ROUTER */

        const topologyRouterExists =
            state.topology.devices.some(
                function (device) {

                    return (
                        device &&
                        device.type === "router" &&
                        device.id ===
                            state.router.id
                    );

                }
            );

        if (
            !topologyRouterExists &&
            state.router.id
        ) {

            state.topology.devices.push(

                createDeviceReference(
                    "router",
                    state.router.id
                )

            );

        }


        return true;

    } catch (error) {

        console.error(
            "Erro normalizando appState:",
            error
        );

        return false;

    }

}


normalizeAppState(
    appState
);


/* =====================================================
   DISPOSITIVOS
   ===================================================== */

export function getDeviceById(
    id
) {

    if (!id) {

        return null;

    }

    if (
        appState.switch &&
        appState.switch.id === id
    ) {

        return appState.switch;

    }

    if (
        appState.router &&
        appState.router.id === id
    ) {

        return appState.router;

    }

    const pc =
        appState.pcs.find(
            function (computer) {

                return (
                    computer &&
                    computer.id === id
                );

            }
        );

    if (pc) {

        return pc;

    }

    const device =
        appState.devices.find(
            function (item) {

                return (
                    item &&
                    item.id === id
                );

            }
        );

    if (device) {

        return device;

    }

    return null;

}


export function getAllDevices() {

    const devices = [];

    if (
        appState.switch
    ) {

        devices.push(
            appState.switch
        );

    }

    if (
        appState.router
    ) {

        devices.push(
            appState.router
        );

    }

    appState.pcs.forEach(
        function (pc) {

            if (
                !pc ||
                !pc.id
            ) {

                return;

            }

            const exists =
                devices.some(
                    function (device) {

                        return (
                            device.id === pc.id
                        );

                    }
                );

            if (!exists) {

                devices.push(
                    pc
                );

            }

        }
    );

    appState.devices.forEach(
        function (device) {

            if (
                !device ||
                !device.id
            ) {

                return;

            }

            const exists =
                devices.some(
                    function (existing) {

                        return (
                            existing.id ===
                            device.id
                        );

                    }
                );

            if (!exists) {

                devices.push(
                    device
                );

            }

        }
    );

    return devices;

}


export function setCurrentDevice(
    deviceId
) {

    const device =
        getDeviceById(
            deviceId
        );

    if (!device) {

        return false;

    }

    appState.currentDeviceId =
        deviceId;

    appState.currentDeviceType =
        device.type;

    appState.currentInterface =
        null;

    return true;

}


export function getCurrentDevice() {

    return getDeviceById(
        appState.currentDeviceId
    );

}


export function getCurrentDeviceType() {

    const device =
        getCurrentDevice();

    if (!device) {

        return null;

    }

    return device.type;

}


/* =====================================================
   PCs
   ===================================================== */

export function addPC(
    id,
    ip = null,
    connectedPort = null
) {

    if (!id) {

        return null;

    }

    if (
        getDeviceById(id)
    ) {

        return null;

    }

    const pc =
        createPCState(
            id,
            ip,
            connectedPort
        );

    appState.pcs.push(
        pc
    );

    appState.devices.push(

        createDeviceReference(
            "pc",
            id
        )

    );

    appState.topology.devices.push(

        createDeviceReference(
            "pc",
            id
        )

    );

    if (
        connectedPort
    ) {

        const port =
            appState.switch.ports[
                connectedPort
            ];

        if (
            port
        ) {

            port.status =
                "connected";

            addTopologyConnection(
                id,
                appState.switch.id,
                null,
                connectedPort
            );

        }

    }

    return pc;

}


export function removePC(
    id
) {

    if (!id) {

        return false;

    }

    const pcIndex =
        appState.pcs.findIndex(
            function (pc) {

                return (
                    pc &&
                    pc.id === id
                );

            }
        );

    if (
        pcIndex === -1
    ) {

        return false;

    }

    appState.pcs.splice(
        pcIndex,
        1
    );

    appState.devices =
        appState.devices.filter(
            function (device) {

                return (
                    !device ||
                    device.id !== id
                );

            }
        );

    appState.topology.devices =
        appState.topology.devices.filter(
            function (device) {

                return (
                    !device ||
                    device.id !== id
                );

            }
        );

    appState.topology.connections =
        appState.topology.connections.filter(
            function (connection) {

                if (
                    !connection ||
                    typeof connection !== "object"
                ) {

                    return false;

                }

                return !(
                    connection.source === id ||
                    connection.target === id ||
                    connection.sourceId === id ||
                    connection.targetId === id
                );

            }
        );

    return true;

}


/* =====================================================
   TOPOLOGIA
   ===================================================== */

export function addTopologyConnection(
    source,
    target,
    sourcePort = null,
    targetPort = null
) {

    if (
        !source ||
        !target
    ) {

        return false;

    }

    if (
        !getDeviceById(source) ||
        !getDeviceById(target)
    ) {

        return false;

    }

    const duplicate =
        appState.topology.connections.some(
            function (connection) {

                if (!connection) {

                    return false;

                }

                const sameDirection =
                    connection.source === source &&
                    connection.target === target &&
                    connection.sourcePort === sourcePort &&
                    connection.targetPort === targetPort;

                const reverseDirection =
                    connection.source === target &&
                    connection.target === source &&
                    connection.sourcePort === targetPort &&
                    connection.targetPort === sourcePort;

                return (
                    sameDirection ||
                    reverseDirection
                );

            }
        );

    if (duplicate) {

        return false;

    }

    appState.topology.connections.push({

        source: source,

        target: target,

        sourcePort: sourcePort,

        targetPort: targetPort

    });

    return true;

}


export function removeTopologyConnection(
    source,
    target
) {

    const originalLength =
        appState.topology.connections.length;

    appState.topology.connections =
        appState.topology.connections.filter(
            function (connection) {

                if (!connection) {

                    return false;

                }

                const sameDirection =
                    connection.source === source &&
                    connection.target === target;

                const reverseDirection =
                    connection.source === target &&
                    connection.target === source;

                return (
                    !sameDirection &&
                    !reverseDirection
                );

            }
        );

    return (
        appState.topology.connections.length <
        originalLength
    );

}


export function getTopologyConnections() {

    return appState.topology.connections.map(
        function (connection) {

            return structuredClone(
                connection
            );

        }
    );

}


export function clearTopology() {

    appState.devices = [];

    if (
        appState.switch
    ) {

        appState.devices.push(

            createDeviceReference(
                "switch",
                appState.switch.id
            )

        );

    }

    if (
        appState.router
    ) {

        appState.devices.push(

            createDeviceReference(
                "router",
                appState.router.id
            )

        );

    }

    appState.pcs = [];

    appState.topology.connections = [];

    appState.topology.devices = [];

    if (
        appState.switch
    ) {

        appState.topology.devices.push(

            createDeviceReference(
                "switch",
                appState.switch.id
            )

        );

    }

    if (
        appState.router
    ) {

        appState.topology.devices.push(

            createDeviceReference(
                "router",
                appState.router.id
            )

        );

    }

    appState.activeLabId =
        null;

    appState.activeLabName =
        null;

    return true;

}


/* =====================================================
   CONTEXTO — SWITCH
   ===================================================== */

export function getCurrentSwitchPort() {

    const portName =
        appState.switch &&
        appState.switch.activePhysicalPort;

    if (!portName) {

        return null;

    }

    return (
        appState.switch.ports &&
        appState.switch.ports[portName]
    ) || null;

}


export function clearCurrentInterface() {

    if (
        appState.switch
    ) {

        appState.switch.activePhysicalPort =
            null;

    }

    if (
        appState.router
    ) {

        appState.router.activeInterface =
            null;

    }

    appState.currentInterface =
        null;

}


export function clearActivePhysicalPort() {

    if (
        appState.switch
    ) {

        appState.switch.activePhysicalPort =
            null;

    }

    if (
        appState.router
    ) {

        appState.router.activeInterface =
            null;

    }

    appState.currentInterface =
        null;

    return true;

}


/* =====================================================
   CONTEXTO — ROUTER
   ===================================================== */

export function getCurrentRouterInterface() {

    const interfaceName =
        appState.router &&
        appState.router.activeInterface;

    if (!interfaceName) {

        return null;

    }

    return (
        appState.router.interfaces &&
        appState.router.interfaces[
            interfaceName
        ]
    ) || null;

}


/* =====================================================
   UTILIDADES
   ===================================================== */

export function resetManagementInterface() {

    if (
        !appState.switch
    ) {

        return false;

    }

    appState.switch.vlan1 = {

        ip: null,
        mask: null,
        isUp: false,
        description: null

    };

    return true;

}
