import {
    appState,
    getCurrentSwitchPort,
    normalizeAppState
} from "./state.js";


// =====================================================
// CISCO STUDY SIMULATOR
// simulator.js
//
// Responsabilidade:
//
// Alterar o estado atual do laboratório.
//
// Não possui:
//
// - HTML
// - DOM
// - CLI
// - menus
// - missões
// - renderização
// - criação do Lab Factory
//
// O simulator recebe ações e modifica appState.
//
// IMPORTANTE:
//
// Recursos comuns podem operar no dispositivo ativo:
//
//     appState.currentDeviceType === "switch"
//         -> appState.switch
//
//     appState.currentDeviceType === "router"
//         -> appState.router
//
// Recursos exclusivos continuam separados:
//
//     VLAN / Port Security / portas
//         -> Switch
//
//     Interfaces / routing
//         -> Router
// =====================================================


// =====================================================
// OBTER DISPOSITIVO ATIVO
// =====================================================

function getActiveDevice() {

    if (
        appState.currentDeviceType === "router"
    ) {

        return appState.router || null;

    }


    return appState.switch || null;

}


// =====================================================
// VERIFICAR SE É SWITCH
// =====================================================

function isSwitch() {

    return (
        appState.currentDeviceType === "switch"
    );

}


// =====================================================
// VERIFICAR SE É ROUTER
// =====================================================

function isRouter() {

    return (
        appState.currentDeviceType === "router"
    );

}


// =====================================================
// HOSTNAME
// =====================================================

export function setHostname(nome) {

    if (
        typeof nome !== "string" ||
        nome.trim() === ""
    ) {

        return false;

    }


    const device =
        getActiveDevice();


    if (!device) {

        return false;

    }


    device.hostname =
        nome.trim();


    return true;

}


// =====================================================
// BANNER MOTD
// =====================================================

export function setBanner(texto) {

    if (
        texto === null ||
        texto === undefined
    ) {

        return false;

    }


    const device =
        getActiveDevice();


    if (!device) {

        return false;

    }


    device.bannerMotd =
        String(texto);


    return true;

}


// =====================================================
// ENABLE SECRET
// =====================================================

export function setEnableSecret(secret) {

    if (
        secret === null ||
        secret === undefined
    ) {

        return false;

    }


    if (
        String(secret).trim() === ""
    ) {

        return false;

    }


    const device =
        getActiveDevice();


    if (!device) {

        return false;

    }


    device.enableSecret =
        String(secret);


    return true;

}


// =====================================================
// PASSWORD ENCRYPTION
// =====================================================
//
// Recurso atualmente implementado para Switch.
// O cliExecutor já impede uso no Router.
// =====================================================

export function enablePasswordEncryption() {

    if (!isSwitch()) {

        return false;

    }


    appState.switch.encryptionActive =
        true;


    return true;

}


// =====================================================
// VLAN
// =====================================================
//
// Exclusivo do Switch.
// =====================================================

export function createVlan(
    id,
    name = null
) {

    if (!isSwitch()) {

        return false;

    }


    id =
        Number(id);


    if (
        !Number.isInteger(id) ||
        id < 2 ||
        id > 4094
    ) {

        return false;

    }


    if (
        Object.prototype.hasOwnProperty.call(
            appState.switch.vlans,
            id
        )
    ) {

        return false;

    }


    const vlanName =
        name === null ||
        name === undefined ||
        String(name).trim() === ""
            ? "VLAN" + id
            : String(name).trim();


    appState.switch.vlans[id] =
        vlanName;


    return true;

}


// =====================================================
// RENOMEAR VLAN
// =====================================================

export function renameVlan(
    id,
    name
) {

    if (!isSwitch()) {

        return false;

    }


    id =
        Number(id);


    if (
        !Object.prototype.hasOwnProperty.call(
            appState.switch.vlans,
            id
        )
    ) {

        return false;

    }


    if (
        typeof name !== "string" ||
        name.trim() === ""
    ) {

        return false;

    }


    appState.switch.vlans[id] =
        name.trim();


    return true;

}


// =====================================================
// INTERFACE VLAN 1
// =====================================================

export function configureManagementIP(
    ip,
    mask
) {

    if (!isSwitch()) {

        return false;

    }


    if (!ip || !mask) {

        return false;

    }


    if (
        !appState.switch.vlanInterfaces
    ) {

        appState.switch.vlanInterfaces = {};

    }


    if (
        !appState.switch.vlanInterfaces[1]
    ) {

        appState.switch.vlanInterfaces[1] = {

            ip: null,
            mask: null,
            isUp: false,
            description: null

        };

    }


    appState.switch.vlanInterfaces[1].ip =
        String(ip).trim();


    appState.switch.vlanInterfaces[1].mask =
        String(mask).trim();


    return true;

}


// =====================================================
// ATIVAR SVI VLAN 1
// =====================================================

export function enableManagementInterface() {

    if (!isSwitch()) {

        return false;

    }


    const svi =
        appState.switch.vlanInterfaces?.[1];


    if (!svi) {

        return false;

    }


    if (!svi.ip || !svi.mask) {

        return false;

    }


    svi.isUp =
        true;


    return true;

}


// =====================================================
// DESATIVAR SVI VLAN 1
// =====================================================

export function disableManagementInterface() {

    if (!isSwitch()) {

        return false;

    }


    const svi =
        appState.switch.vlanInterfaces?.[1];


    if (!svi) {

        return false;

    }


    svi.isUp =
        false;


    return true;

}


// export function configureManagementIP(
//     ip,
//     mask
// ) {

//     if (!isSwitch()) {

//         return false;

//     }


//     if (
//         !ip ||
//         !mask
//     ) {

//         return false;

//     }


//     appState.switch.vlan1.ip =
//         String(ip).trim();


//     appState.switch.vlan1.mask =
//         String(mask).trim();


//     return true;

// }


// // =====================================================
// // ATIVAR INTERFACE VLAN 1
// // =====================================================

// export function enableManagementInterface() {

//     if (!isSwitch()) {

//         return false;

//     }


//     appState.switch.vlan1.isUp =
//         true;


//     return true;

// }


// // =====================================================
// // DESATIVAR INTERFACE VLAN 1
// // =====================================================

// export function disableManagementInterface() {

//     if (!isSwitch()) {

//         return false;

//     }


//     appState.switch.vlan1.isUp =
//         false;


//     return true;

// }


// =====================================================
// SVI — INTERFACE VLAN DO SWITCH
// =====================================================
//
// Permite configurar interfaces VLAN para qualquer
// VLAN existente no Switch.
//
// Exemplos:
//
// interface vlan 10
// ip address 192.168.10.1 255.255.255.0
// no shutdown
//
// interface vlan 99
// ip address 192.168.99.1 255.255.255.0
// no shutdown
// =====================================================


export function createVlanInterface(
    vlanID
) {

    if (!isSwitch()) {

        return false;

    }


    vlanID =
        Number(vlanID);


    if (
        !Number.isInteger(vlanID) ||
        vlanID < 1 ||
        vlanID > 4094
    ) {

        return false;

    }


    /*
    A VLAN precisa existir no Switch.
    */

    if (
        !Object.prototype.hasOwnProperty.call(
            appState.switch.vlans,
            vlanID
        )
    ) {

        return false;

    }


    /*
    Não recriar uma SVI já existente.
    */

    if (
        appState.switch.vlanInterfaces?.[
            vlanID
        ]
    ) {

        return false;

    }


    if (
        !appState.switch.vlanInterfaces
    ) {

        appState.switch.vlanInterfaces = {};

    }


    appState.switch.vlanInterfaces[
        vlanID
    ] = {

        ip: null,
        mask: null,
        isUp: false,
        description: null

    };


    return true;

}


// =====================================================
// CONFIGURAR IP DA SVI
// =====================================================

export function configureVlanInterfaceIP(
    vlanID,
    ip,
    mask
) {

    if (!isSwitch()) {

        return false;

    }


    vlanID =
        Number(vlanID);


    if (
        !Number.isInteger(vlanID) ||
        vlanID < 1 ||
        vlanID > 4094
    ) {

        return false;

    }


    if (
        !ip ||
        !mask
    ) {

        return false;

    }


    /*
    A VLAN precisa existir.
    */

    if (
        !Object.prototype.hasOwnProperty.call(
            appState.switch.vlans,
            vlanID
        )
    ) {

        return false;

    }


    /*
    Criar a SVI automaticamente caso ainda
    não exista.
    */

    if (
        !appState.switch.vlanInterfaces?.[
            vlanID
        ]
    ) {

        if (
            !createVlanInterface(
                vlanID
            )
        ) {

            return false;

        }

    }


    const svi =
        appState.switch.vlanInterfaces[
            vlanID
        ];


    svi.ip =
        String(ip).trim();


    svi.mask =
        String(mask).trim();


    return true;

}


// =====================================================
// ATIVAR SVI
// =====================================================

export function enableVlanInterface(
    vlanID
) {

    if (!isSwitch()) {

        return false;

    }


    vlanID =
        Number(vlanID);


    if (
        !Number.isInteger(vlanID)
    ) {

        return false;

    }


    const svi =
        appState.switch.vlanInterfaces?.[
            vlanID
        ];


    if (!svi) {

        return false;

    }


    /*
    Uma SVI sem IP não deve ficar operacional
    neste simulador.
    */

    if (
        !svi.ip ||
        !svi.mask
    ) {

        return false;

    }


    svi.isUp =
        true;


    return true;

}


// =====================================================
// DESATIVAR SVI
// =====================================================

export function disableVlanInterface(
    vlanID
) {

    if (!isSwitch()) {

        return false;

    }


    vlanID =
        Number(vlanID);


    const svi =
        appState.switch.vlanInterfaces?.[
            vlanID
        ];


    if (!svi) {

        return false;

    }


    svi.isUp =
        false;


    return true;

}


// =====================================================
// DESCRIÇÃO DA SVI
// =====================================================

export function setVlanInterfaceDescription(
    vlanID,
    description
) {

    if (!isSwitch()) {

        return false;

    }


    vlanID =
        Number(vlanID);


    const svi =
        appState.switch.vlanInterfaces?.[
            vlanID
        ];


    if (!svi) {

        return false;

    }


    if (
        description === null ||
        description === undefined
    ) {

        svi.description =
            null;

        return true;

    }


    svi.description =
        String(description).trim();


    return true;

}




// =====================================================
// SELECIONAR INTERFACE FÍSICA
// =====================================================
//
// Exclusivo do Switch.
// =====================================================

export function selectInterface(
    interfaceName
) {

    if (!isSwitch()) {

        return false;

    }


    if (
        typeof interfaceName !== "string" ||
        interfaceName.trim() === ""
    ) {

        return false;

    }


    const normalizedName =
        interfaceName
            .trim()
            .toLowerCase();


    const portName =
    Object.keys(
        appState.switch.ports
    ).find(
        name => {

            const normalizedPortName =
                name.toLowerCase();

            if (
                normalizedPortName ===
                normalizedName
            ) {

                return true;

            }

            if (
                normalizedPortName.startsWith(
                    "gigabitethernet"
                )
            ) {

                const shortName =
                    normalizedPortName.replace(
                        "gigabitethernet",
                        "g"
                    );

                return (
                    shortName ===
                    normalizedName
                );

            }

            return false;

        }
    );


    if (!portName) {

        return false;

    }


    appState.switch.activePhysicalPort =
        portName;


    appState.currentInterface =
        portName;


    return true;

}


// =====================================================
// OBTER PORTA ATUAL
// =====================================================

function getCurrentPort() {

    if (!isSwitch()) {

        return null;

    }


    return getCurrentSwitchPort();

}


// =====================================================
// SWITCHPORT MODE
// =====================================================

export function setPortMode(mode) {

    if (!isSwitch()) {

        return false;

    }


    const port =
        getCurrentPort();


    if (!port) {

        return false;

    }


    if (
        typeof mode !== "string"
    ) {

        return false;

    }


    const normalizedMode =
        mode.trim().toLowerCase();


    if (
        normalizedMode !== "access" &&
        normalizedMode !== "trunk"
    ) {

        return false;

    }


    port.mode =
        normalizedMode;


    return true;

}


// =====================================================
// ATRIBUI VLAN À PORTA
// =====================================================

export function assignPortVlan(
    vlanID
) {

    if (!isSwitch()) {

        return false;

    }


    const port =
        getCurrentPort();


    if (!port) {

        return false;

    }


    vlanID =
        Number(vlanID);


    if (
        !Number.isInteger(vlanID)
    ) {

        return false;

    }


    if (
        !Object.prototype.hasOwnProperty.call(
            appState.switch.vlans,
            vlanID
        )
    ) {

        return false;

    }


    if (
        port.mode === "trunk"
    ) {

        return false;

    }


    port.vlan =
        vlanID;


    return true;

}


// =====================================================
// PORT SECURITY
// =====================================================

export function enablePortSecurity() {

    if (!isSwitch()) {

        return false;

    }


    const port =
        getCurrentPort();


    if (!port) {

        return false;

    }


    if (
        port.mode === "trunk"
    ) {

        return false;

    }


    port.portSecurity.isEnabled =
        true;


    return true;

}


// =====================================================
// STICKY MAC
// =====================================================

export function enableStickyMac() {

    if (!isSwitch()) {

        return false;

    }


    const port =
        getCurrentPort();


    if (!port) {

        return false;

    }


    if (
        !port.portSecurity.isEnabled
    ) {

        return false;

    }


    port.portSecurity.isSticky =
        true;


    return true;

}


// =====================================================
// AUTORIZAR MAC MANUALMENTE
// =====================================================

export function authorizePortMac(
    mac
) {

    if (!isSwitch()) {

        return false;

    }


    const port =
        getCurrentPort();


    if (!port) {

        return false;

    }


    if (
        !port.portSecurity.isEnabled
    ) {

        return false;

    }


    if (
        typeof mac !== "string" ||
        mac.trim() === ""
    ) {

        return false;

    }


    port.portSecurity.authorizedMac =
        mac.trim().toLowerCase();


    return true;

}


// =====================================================
// REGISTRAR VIOLAÇÃO DE PORT SECURITY
// =====================================================

export function triggerViolation(
    interfaceName
) {

    if (!isSwitch()) {

        return false;

    }


    if (
        typeof interfaceName !== "string" ||
        interfaceName.trim() === ""
    ) {

        return false;

    }


    const normalizedName =
        interfaceName
            .trim()
            .toLowerCase();


    const portName =
        Object.keys(
            appState.switch.ports
        ).find(
            name =>
                name.toLowerCase() ===
                normalizedName
        );


    if (!portName) {

        return false;

    }


    const port =
        appState.switch.ports[
            portName
        ];


    if (
        !port.portSecurity.isEnabled
    ) {

        return false;

    }


    port.portSecurity.isViolated =
        true;


    port.status =
        "err-disabled";


    return true;

}


// =====================================================
// LIMPAR VIOLAÇÃO
// =====================================================

export function clearViolation(
    interfaceName
) {

    if (!isSwitch()) {

        return false;

    }


    if (
        typeof interfaceName !== "string" ||
        interfaceName.trim() === ""
    ) {

        return false;

    }


    const normalizedName =
        interfaceName
            .trim()
            .toLowerCase();


    const portName =
        Object.keys(
            appState.switch.ports
        ).find(
            name =>
                name.toLowerCase() ===
                normalizedName
        );


    if (!portName) {

        return false;

    }


    const port =
        appState.switch.ports[
            portName
        ];


    port.portSecurity.isViolated =
        false;


    port.status =
        "connected";


    return true;

}


// =====================================================
// DESATIVAR PORT SECURITY
// =====================================================

export function disablePortSecurity() {

    if (!isSwitch()) {

        return false;

    }


    const port =
        getCurrentPort();


    if (!port) {

        return false;

    }


    port.portSecurity.isEnabled =
        false;


    port.portSecurity.isSticky =
        false;


    port.portSecurity.authorizedMac =
        null;


    port.portSecurity.isViolated =
        false;


    if (
        port.status === "err-disabled"
    ) {

        port.status =
            "connected";

    }


    return true;

}

// =====================================================
// REDE / CONECTIVIDADE
// =====================================================

function normalizeIp(value) {

    return typeof value === "string"
        ? value.trim()
        : "";

}


function isInterfaceUp(iface) {

    if (!iface) {

        return false;

    }

    if (
        iface.status === "down" ||
        iface.status === "administratively down"
    ) {

        return false;

    }

    if (
        Object.prototype.hasOwnProperty.call(
            iface,
            "isUp"
        ) &&
        iface.isUp === false
    ) {

        return false;

    }

    return true;

}


function getRouterInterfaceByIp(ip) {

    const target =
        normalizeIp(ip);

    const interfaces =
        appState.router?.interfaces || {};

    return Object.entries(
        interfaces
    ).find(
        ([, iface]) =>
            iface &&
            normalizeIp(iface.ip) === target &&
            isInterfaceUp(iface)
    ) || null;

}


function getSwitchVlanInterface(vlanId) {

    if (!appState.switch) {

        return null;

    }

    /*
    VLAN 1 continua usando a SVI existente.
    */

    if (
        Number(vlanId) === 1
    ) {

        const vlan1 =
            appState.switch.vlan1;

        if (
            vlan1 &&
            vlan1.ip &&
            vlan1.isUp !== false
        ) {

            return vlan1;

        }

    }

    /*
    Futuras SVIs podem ser armazenadas
    em switch.vlanInterfaces.
    */

    const vlanInterfaces =
        appState.switch.vlanInterfaces || {};

    const iface =
        vlanInterfaces[
            Number(vlanId)
        ];

    if (
        iface &&
        iface.ip &&
        iface.isUp !== false
    ) {

        return iface;

    }

    return null;

}


function findDeviceByIp(ip) {

    const target =
        normalizeIp(ip);


    // ---------------------------------------------
    // ROUTER
    // ---------------------------------------------

    const routerInterface =
        getRouterInterfaceByIp(target);

    if (routerInterface) {

        return {

            type: "router",

            interfaceName:
                routerInterface[0],

            interface:
                routerInterface[1]

        };

    }


    // ---------------------------------------------
    // SWITCH
    // ---------------------------------------------

    if (appState.switch) {

        const vlan1 =
            getSwitchVlanInterface(1);

        if (
            vlan1 &&
            normalizeIp(vlan1.ip) === target
        ) {

            return {

                type: "switch",

                interfaceName: "vlan1",

                vlanId: 1,

                interface: vlan1

            };

        }


        const vlanInterfaces =
            appState.switch.vlanInterfaces || {};

        for (
            const [vlanId, iface]
            of Object.entries(vlanInterfaces)
        ) {

            if (
                iface &&
                normalizeIp(iface.ip) === target &&
                iface.isUp !== false
            ) {

                return {

                    type: "switch",

                    interfaceName:
                        "vlan" + vlanId,

                    vlanId:
                        Number(vlanId),

                    interface: iface

                };

            }

        }

    }


    // ---------------------------------------------
    // PCS
    // ---------------------------------------------

    const pc =
        Array.isArray(appState.pcs)
            ? appState.pcs.find(
                item =>
                    item &&
                    normalizeIp(item.ip) === target
            )
            : null;


    if (pc) {

        return {

            type: "pc",

            device: pc

        };

    }


    return null;

}


function getPcConnectedPort(pc) {

    if (!pc) {

        return null;

    }


    if (
        pc.connectedPort &&
        appState.switch?.ports?.[
            pc.connectedPort
        ]
    ) {

        return appState.switch.ports[
            pc.connectedPort
        ];

    }


    return null;

}


function canPcReachRouter(pc, router) {

    if (
        !pc ||
        !router ||
        !pc.ip ||
        !pc.mask
    ) {

        return null;

    }


    const pcPort =
        getPcConnectedPort(pc);


    if (!pcPort) {

        return null;

    }


    /*
    -------------------------------------------------
    ACCESS
    -------------------------------------------------

    PC pertence à VLAN configurada na porta.
    */

    if (
        pcPort.mode === "access"
    ) {

        const vlanId =
            Number(pcPort.vlan ?? 1);


        const routerInterface =
            Object.entries(
                router.interfaces || {}
            ).find(
                ([, iface]) => {

                    if (
                        !iface ||
                        !iface.ip ||
                        !iface.mask ||
                        !isInterfaceUp(iface)
                    ) {

                        return false;

                    }


                    /*
                    Interface física sem dot1Q:
                    rede diretamente conectada.
                    */

                    if (
                        !iface.encapsulation?.enabled
                    ) {

                        return (
                            sameNetwork(
                                pc.ip,
                                pc.mask,
                                iface.ip,
                                iface.mask
                            )
                        );

                    }


                    /*
                    Subinterface dot1Q:
                    VLAN precisa corresponder.
                    */

                    return (
                        Number(
                            iface.encapsulation.vlanId
                        ) === vlanId &&
                        sameNetwork(
                            pc.ip,
                            pc.mask,
                            iface.ip,
                            iface.mask
                        )
                    );

                }
            );


        return routerInterface || null;

    }


    /*
    -------------------------------------------------
    TRUNK
    -------------------------------------------------

    O PC não deve estar diretamente conectado
    a uma porta trunk neste simulador.
    */

    return null;

}


function canRouterReachPc(router, pc) {

    if (
        !router ||
        !pc ||
        !pc.ip ||
        !pc.mask
    ) {

        return null;

    }


    const result =
        canPcReachRouter(
            pc,
            router
        );


    if (!result) {

        return null;

    }


    return result;

}


/**
 * Verifica conectividade entre o dispositivo atual
 * e um IP dentro do laboratório.
 */
export function checkConnectivity(
    targetIp
) {

    const target =
        normalizeIp(targetIp);


    if (!target) {

        return {

            reachable: false,

            reason:
                "Destino não informado."

        };

    }


    const destination =
        findDeviceByIp(target);


    if (!destination) {

        return {

            reachable: false,

            reason:
                "Destino não encontrado."

        };

    }


    // =================================================
    // ROUTER
    // =================================================

    if (
        appState.currentDeviceType === "router"
    ) {

        const router =
            appState.router;


        /*
        Destino é outro IP do próprio Router.
        */

        if (
            destination.type === "router"
        ) {

            return {

                reachable: true,

                sourceInterface:
                    destination.interfaceName,

                destination

            };

        }


        /*
        Destino é PC.
        */

        if (
            destination.type === "pc"
        ) {

            const source =
                canRouterReachPc(
                    router,
                    destination.device
                );


            if (!source) {

                return {

                    reachable: false,

                    reason:
                        "Nenhuma interface do Router possui conectividade com a VLAN do PC."

                };

            }


            return {

                reachable: true,

                sourceInterface:
                    source[0],

                destination

            };

        }


        /*
        Destino é Switch.
        */

        if (
            destination.type === "switch"
        ) {

            const source =
                Object.entries(
                    router.interfaces || {}
                ).find(
                    ([, iface]) => {

                        return (
                            isInterfaceUp(iface) &&
                            sameNetwork(
                                iface.ip,
                                iface.mask,
                                destination.interface?.ip,
                                destination.interface?.mask
                            )
                        );

                    }
                );


            if (!source) {

                return {

                    reachable: false,

                    reason:
                        "Nenhuma interface do Router possui conectividade com a interface do Switch."

                };

            }


            return {

                reachable: true,

                sourceInterface:
                    source[0],

                destination

            };

        }

    }


    // =================================================
    // SWITCH
    // =================================================

    if (
        appState.currentDeviceType === "switch"
    ) {

        /*
        Switch -> próprio Switch.
        */

        if (
            destination.type === "switch"
        ) {

            return {

                reachable: true,

                sourceInterface:
                    destination.interfaceName,

                destination

            };

        }


        /*
        Switch -> Router.
        */

        if (destination.type === "router") {

    const connections =
        appState.topology?.connections || [];

    const connection =
        connections.find(
            conn =>
                (
                    conn.source === "Switch" &&
                    conn.target === "Router"
                ) ||
                (
                    conn.source === "Router" &&
                    conn.target === "Switch"
                )
        );

    if (!connection) {

        return {
            reachable: false,
            reason:
                "Switch e Router não estão conectados na topologia."
        };

    }

    const switchPortName =
        connection.source === "Switch"
            ? connection.sourcePort
            : connection.targetPort;

    const switchPort =
        appState.switch.ports?.[switchPortName];

    if (!switchPort) {

        return {
            reachable: false,
            reason:
                "A porta do Switch conectada ao Router não existe."
        };

    }

    if (
        switchPort.status === "down" ||
        switchPort.status === "err-disabled"
    ) {

        return {
            reachable: false,
            reason:
                "A porta do Switch conectada ao Router está indisponível."
        };

    }

    return {
        reachable: true,
        sourceInterface: switchPortName,
        destination
    };

}



        /*
        Switch -> PC.

        A conectividade depende da mesma VLAN.
        */

        if (
            destination.type === "pc"
        ) {

            const pc =
                destination.device;


            const pcPort =
                getPcConnectedPort(
                    pc
                );


            if (!pcPort) {

                return {

                    reachable: false,

                    reason:
                        "PC não está conectado a uma porta do Switch."

                };

            }


            const pcVlan =
                Number(
                    pcPort.vlan ?? 1
                );


            /*
            Switch consegue alcançar o PC
            se houver SVI correspondente.
            */

            const svi =
                getSwitchVlanInterface(
                    pcVlan
                );


            if (!svi) {

                return {

                    reachable: false,

                    reason:
                        "A VLAN do PC não possui interface de gerenciamento configurada."

                };

            }


            return {

                reachable: true,

                sourceInterface:
                    "vlan" + pcVlan,

                destination

            };

        }

    }


    return {

        reachable: false,

        reason:
            "Dispositivo de origem inválido."

    };

}


// =====================================================
// RESET DO LABORATÓRIO
// =====================================================
//
// Recebe um estado de fábrica pronto.
//
// O simulator não decide qual laboratório
// deve ser criado.
//
// Isso pertence ao labFactory.js.
// =====================================================

export function resetLab(
    factoryState
) {

    if (
        !factoryState ||
        typeof factoryState !== "object" ||
        Array.isArray(factoryState)
    ) {

        return false;

    }


    try {

        const cleanState =
            structuredClone(
                factoryState
            );


        Object.assign(
            appState,
            cleanState
        );


        normalizeAppState(
            appState
        );


        return true;

    } catch (error) {

        console.error(
            "Erro ao resetar laboratório:",
            error
        );


        return false;

    }

}


// =====================================================
// OBTER ESTADO ATUAL
// =====================================================
//
// Retorna uma cópia independente.
//
// O código externo não deve modificar
// diretamente o objeto retornado.
// =====================================================

export function getSimulatorState() {

    try {

        return structuredClone(
            appState
        );

    } catch (error) {

        console.error(
            "Erro obtendo estado do simulador:",
            error
        );


        return null;

    }

}
