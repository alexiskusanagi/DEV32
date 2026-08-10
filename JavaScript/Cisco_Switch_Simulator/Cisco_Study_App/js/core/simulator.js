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
// =====================================================

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


appState.switch.hostname =
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


appState.switch.bannerMotd =
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


appState.switch.enableSecret =
    String(secret);


return true;


}

// =====================================================
// PASSWORD ENCRYPTION
// =====================================================

export function enablePasswordEncryption() {


appState.switch.encryptionActive =
    true;


return true;


}

// =====================================================
// VLAN
// =====================================================

export function createVlan(
id,
name = null
) {


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


appState.switch.vlan1.isUp =
    true;


return true;


}

// =====================================================
// DESATIVAR INTERFACE VLAN 1
// =====================================================

export function disableManagementInterface() {


appState.switch.vlan1.isUp =
    false;


return true;


}

// =====================================================
// SELECIONAR INTERFACE FÍSICA
// =====================================================

export function selectInterface(
interfaceName
) {


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


if (
    !portName
) {

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


return getCurrentSwitchPort();


}

// =====================================================
// SWITCHPORT MODE
// =====================================================

export function setPortMode(mode) {


const port =
    getCurrentPort();


if (
    !port
) {

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


const port =
    getCurrentPort();


if (
    !port
) {

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


const port =
    getCurrentPort();


if (
    !port
) {

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


const port =
    getCurrentPort();


if (
    !port
) {

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


const port =
    getCurrentPort();


if (
    !port
) {

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


if (
    !portName
) {

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


if (
    !portName
) {

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


const port =
    getCurrentPort();


if (
    !port
) {

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
