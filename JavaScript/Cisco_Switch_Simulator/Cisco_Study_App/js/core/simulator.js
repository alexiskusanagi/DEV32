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


    if (
        !ip ||
        !mask
    ) {

        return false;

    }


    appState.switch.vlan1.ip =
        String(ip).trim();


    appState.switch.vlan1.mask =
        String(mask).trim();


    return true;

}


// =====================================================
// ATIVAR INTERFACE VLAN 1
// =====================================================

export function enableManagementInterface() {

    if (!isSwitch()) {

        return false;

    }


    appState.switch.vlan1.isUp =
        true;


    return true;

}


// =====================================================
// DESATIVAR INTERFACE VLAN 1
// =====================================================

export function disableManagementInterface() {

    if (!isSwitch()) {

        return false;

    }


    appState.switch.vlan1.isUp =
        false;


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
            name =>
                name.toLowerCase() ===
                normalizedName
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
