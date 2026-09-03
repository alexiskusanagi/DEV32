/*
=====================================================
CISCO STUDY SIMULATOR
Arquivo: database.js
=====================================================

Responsabilidade:

- Guardar o banco de comandos disponíveis por modo.
- Organizar comandos por contexto CLI.
- Servir de fonte para Help e Command Tree.

Não possui:

- appState
- NVRAM
- localStorage
- criação do laboratório
- reset do laboratório
- execução de comandos
- regras do Switch
- regras do Router
- DOM

A execução pertence ao cliExecutor.js.
As regras de estado pertencem ao simulator.js/state.js.
=====================================================
*/


/*
=====================================================
BANCO DE COMANDOS
=====================================================
*/

export const commandDatabase = {


    /*
    =================================================
    USER EXEC
    =================================================
    */

    user: {

        prompt: ">",

        commands: {

            "enable":
                "Entra no modo privilegiado",

            "ping":
                "Testa conectividade com um endereço IP",

            "exit":
                "Encerra a sessão"

        }

    },


    /*
    =================================================
    PRIVILEGED EXEC
    =================================================
    */

    privileged: {

        prompt: "#",

        commands: {

            "configure terminal":
                "Entra no modo de configuração global",

            "show running-config":
                "Mostra a configuração atual",

            "show ip interface brief":
                "Mostra resumo das interfaces e endereços IP",

            "show interfaces status":
                "Mostra o status das interfaces",

            "show mac address-table":
                "Mostra a tabela de endereços MAC",

            "show vlan brief":
                "Mostra resumo das VLANs",

            "copy running-config startup-config":
                "Salva a configuração na startup-config",

            "write memory":
                "Salva a configuração",

            "write":
                "Salva a configuração",

            "wr":
                "Atalho para write",

            "erase startup-config":
                "Apaga a startup-config",

            "reload":
                "Reinicia o dispositivo",

            "clear":
                "Limpa informações",

            "exit":
                "Volta ao modo User"

        }

    },


    /*
    =================================================
    GLOBAL CONFIGURATION
    =================================================
    */

    global: {

        prompt: "(config)#",

        commands: {

            "hostname":
                "Configura o hostname",

            "banner motd":
                "Configura o banner MOTD",

            "enable secret":
                "Configura a senha secreta",

            "service password-encryption":
                "Ativa criptografia de senhas",

            "no service password-encryption":
                "Desativa criptografia de senhas",

            "vlan":
                "Cria ou configura uma VLAN",

            "interface":
                "Entra na configuração de uma interface",

            "line console 0":
                "Entra na configuração do console",

            "line vty 0 15":
                "Entra na configuração das linhas VTY",

            "exit":
                "Volta ao modo privilegiado",

            "end":
                "Volta diretamente ao modo privilegiado"

        }

    },


    /*
    =================================================
    INTERFACE CONFIGURATION
    =================================================
    */

    interface: {

        prompt: "(config-if)#",

        commands: {

            "ip address":
                "Configura endereço IP",

            "no ip address":
                "Remove endereço IP",

            "shutdown":
                "Desativa a interface",

            "no shutdown":
                "Ativa a interface",

            "switchport mode access":
                "Configura a porta como access",

            "switchport mode trunk":
                "Configura a porta como trunk",

            "switchport mode":
                "Configura o modo da porta",

            "switchport access vlan":
                "Atribui VLAN à porta",

            "switchport port-security":
                "Ativa Port Security",

            "switchport port-security mac-address sticky":
                "Ativa Sticky MAC",

            "switchport port-security mac-address":
                "Autoriza um endereço MAC",

            "no switchport port-security":
                "Desativa Port Security",

            "name":
                "Define o nome da interface ou VLAN",

            "exit":
                "Volta ao modo de configuração global",

            "end":
                "Volta diretamente ao modo privilegiado"

        }

    },


    /*
    =================================================
    LINE CONFIGURATION
    =================================================
    */

    line: {

        prompt: "(config-line)#",

        commands: {

            "password":
                "Configura senha da linha",

            "login":
                "Ativa autenticação da linha",

            "no login":
                "Desativa autenticação da linha",

            "exit":
                "Volta ao modo de configuração global",

            "end":
                "Volta diretamente ao modo privilegiado"

        }

    }

};