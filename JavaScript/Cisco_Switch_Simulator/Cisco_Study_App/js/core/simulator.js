// =====================================================
// CISCO STUDY SIMULATOR
// simulator.js
//
// Responsabilidade:
// Alterar o estado do laboratório.
//
// Não cria modelos.
// Não manipula HTML.
// Não conhece CLI.
// =====================================================


import {
    appState
} from "./database.js";




// =====================================================
// HOSTNAME
// =====================================================

export function setHostname(nome) {


    if (!nome || nome.trim() === "") {

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


    appState.switch.bannerMotd =
        texto;


}





// =====================================================
// ENABLE SECRET
// =====================================================

export function setEnableSecret(secret) {


    appState.switch.enableSecret =
        secret;


}





// =====================================================
// PASSWORD ENCRYPTION
// =====================================================

export function enablePasswordEncryption() {


    appState.switch.encryptionActive =
        true;


}




// =====================================================
// VLAN
// =====================================================

export function createVlan(id, name = null) {


    id = Number(id);



    if (
        id < 2 ||
        id > 4094
    ) {

        return false;

    }



    if (
        !appState.switch.vlans[id]
    ) {


        appState.switch.vlans[id] =
            name || `VLAN${id}`;


    }


    return true;

}





export function renameVlan(id, name) {


    if (
        !appState.switch.vlans[id]
    ) {

        return false;

    }



    appState.switch.vlans[id] =
        name;



    return true;

}





// =====================================================
// INTERFACE VLAN 1
// =====================================================

export function configureManagementIP(
    ip,
    mask
) {


    appState.switch.vlan1.ip =
        ip;


    appState.switch.vlan1.mask =
        mask;


}




export function enableManagementInterface() {


    appState.switch.vlan1.isUp =
        true;


}




export function disableManagementInterface() {


    appState.switch.vlan1.isUp =
        false;


}





// =====================================================
// INTERFACE FÍSICA
// =====================================================

export function selectInterface(interfaceName) {


    if (
        !appState.switch.ports[interfaceName]
    ) {

        return false;

    }


    appState.switch.activePhysicalPort =
        interfaceName;



    return true;

}





function getCurrentPort() {


    const name =
        appState.switch.activePhysicalPort;



    if (!name) {

        return null;

    }



    return appState.switch.ports[name];


}





// =====================================================
// SWITCHPORT MODE
// =====================================================

export function setPortMode(mode) {


    const port =
        getCurrentPort();



    if (!port) {

        return false;

    }



    if (
        mode !== "access" &&
        mode !== "trunk"
    ) {

        return false;

    }



    port.mode =
        mode;



    return true;

}





// =====================================================
// VLAN NA PORTA
// =====================================================

export function assignPortVlan(vlanID) {


    const port =
        getCurrentPort();



    if (!port) {

        return false;

    }



    vlanID =
        Number(vlanID);



    if (
        !appState.switch.vlans[vlanID]
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





export function enableStickyMac() {


    const port =
        getCurrentPort();



    if (!port) {

        return false;

    }



    port.portSecurity.isSticky =
        true;



    return true;

}





// =====================================================
// RESET
// =====================================================

export function resetLab(factoryState) {


    Object.assign(

        appState,

        structuredClone(factoryState)

    );


}