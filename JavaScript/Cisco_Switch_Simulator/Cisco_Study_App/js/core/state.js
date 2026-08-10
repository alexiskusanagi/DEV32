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

export function createPortSecurityEntry() {

    return {

        isEnabled: false,
        isSticky: false,
        authorizedMac: null,
        isViolated: false

    };

}


export function createSwitchPort(name) {

    return {

        name: name,
        status: "connected",
        mode: "access",
        vlan: 1,
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

        console: {

            password: null,
            hasLogin: false

        },

        vty: {

            password: null,
            hasLogin: false

        },

        vlan1: {

            ip: null,
            mask: null,
            isUp: false

        },

        vlans: {

            1: "default"

        },

        activeVlanId: null,

        ports:
            createSwitchPorts(
                portQuantity
            ),

        activePhysicalPort: null,

        runningConfigExists: true

    };

}


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


function createDeviceReference(
    type,
    id
) {

    return {

        type: type,
        id: id

    };

}


export function createTopologyState() {

    return {

        devices: [],
        connections: []

    };

}


export const appState = {

    stateVersion: 1,

    activeLabId: null,

    activeLabName: null,

    topology:
        createTopologyState(),

    switch:
        createSwitchState(
            "Switch"
        ),

    pcs: [],

    devices: [],

    currentDeviceId: "Switch",

    currentInterface: null,

    runningConfigExists: true

};


appState.topology.devices.push(

    createDeviceReference(
        "switch",
        appState.switch.id
    )

);


appState.devices.push(

    createDeviceReference(
        "switch",
        appState.switch.id
    )

);


/* =====================================================
   NVRAM
   ===================================================== */

const NVRAM_KEY =
    "cisco-study-simulator-startup-config";


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


export function saveStartupConfig() {

    try {

        if (
            !isLocalStorageAvailable()
        ) {

            return false;

        }

        const snapshot =
            JSON.stringify(
                appState
            );

        localStorage.setItem(
            NVRAM_KEY,
            snapshot
        );

        appState.runningConfigExists =
            true;

        return true;

    } catch (error) {

        console.error(
            "NVRAM: erro salvando startup-config.",
            error
        );

        return false;

    }

}


export function hasStartupConfig() {

    try {

        if (
            !isLocalStorageAvailable()
        ) {

            return false;

        }

        return (
            localStorage.getItem(
                NVRAM_KEY
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


export function loadStartupConfig() {

    try {

        if (
            !isLocalStorageAvailable()
        ) {

            return false;

        }

        const saved =
            localStorage.getItem(
                NVRAM_KEY
            );

        if (!saved) {

            return false;

        }

        const recovered =
            JSON.parse(
                saved
            );

        if (
            !isValidAppState(
                recovered
            )
        ) {

            console.warn(
                "NVRAM: startup-config inválida."
            );

            return false;

        }

        if (
            !normalizeAppState(
                recovered
            )
        ) {

            return false;

        }

        Object.assign(
            appState,
            recovered
        );

        appState.runningConfigExists =
            true;

        return true;

    } catch (error) {

        console.error(
            "NVRAM: erro carregando startup-config.",
            error
        );

        return false;

    }

}


export function eraseStartupConfig() {

    try {

        if (
            !isLocalStorageAvailable()
        ) {

            return false;

        }

        localStorage.removeItem(
            NVRAM_KEY
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


export function factoryReset(
    factoryState
) {

    try {

        if (
            !factoryState ||
            typeof factoryState !== "object" ||
            Array.isArray(factoryState)
        ) {

            return false;

        }

        const cleanState =
            structuredClone(
                factoryState
            );

        if (
            !normalizeAppState(
                cleanState
            )
        ) {

            return false;

        }

        eraseStartupConfig();

        Object.assign(
            appState,
            cleanState
        );

        appState.runningConfigExists =
            false;

        return true;

    } catch (error) {

        console.error(
            "NVRAM: erro executando factory reset.",
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
   VALIDAÇÃO E NORMALIZAÇÃO
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

    if (
        !state.switch.ports ||
        typeof state.switch.ports !== "object"
    ) {

        state.switch.ports =
            createSwitchPorts(
                5
            );

    }

    if (
        !state.switch.vlan1 ||
        typeof state.switch.vlan1 !== "object"
    ) {

        state.switch.vlan1 = {

            ip: null,
            mask: null,
            isUp: false

        };

    }

    if (
        !state.switch.console ||
        typeof state.switch.console !== "object"
    ) {

        state.switch.console = {

            password: null,
            hasLogin: false

        };

    }

    if (
        !state.switch.vty ||
        typeof state.switch.vty !== "object"
    ) {

        state.switch.vty = {

            password: null,
            hasLogin: false

        };

    }

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

    if (
        typeof state.switch.encryptionActive !==
        "boolean"
    ) {

        state.switch.encryptionActive =
            false;

    }

    if (
        typeof state.switch.runningConfigExists !==
        "boolean"
    ) {

        state.switch.runningConfigExists =
            true;

    }

}


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
                1;

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

    return true;

}


export function getCurrentDevice() {

    return getDeviceById(
        appState.currentDeviceId
    );

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

    appState.activeLabId =
        null;

    appState.activeLabName =
        null;

    return true;

}


/* =====================================================
   CONTEXTO
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

    appState.currentInterface =
        null;

}


export function clearActivePhysicalPort() {

    if (
        !appState.switch
    ) {

        return false;

    }

    appState.switch.activePhysicalPort =
        null;

    appState.currentInterface =
        null;

    return true;

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
        isUp: false

    };

    return true;

}