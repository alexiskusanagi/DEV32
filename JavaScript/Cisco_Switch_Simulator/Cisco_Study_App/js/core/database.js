/*
CISCO STUDY SIMULATOR
Arquivo: database.js

Responsabilidade:

- Guardar o banco de comandos disponíveis por modo.

Não possui:

- appState
- NVRAM
- localStorage
- criação do laboratório
- reset do laboratório
- execução de comandos
- regras do switch
- CLI
- DOM

O estado pertence ao state.js.
A criação do laboratório pertence ao labFactory.js.
*/


/*
=================================================
BANCO DE COMANDOS
=================================================
*/

export const commandDatabase = {

    /*
    =============================================
    USER EXEC
    =============================================
    */

    user: {

        prompt: ">",

        commands: {

            "enable":
                "Entra no Modo Privilegiado",

            "exit":
                "Encerra a sessão"

        }

    },


    /*
    =============================================
    PRIVILEGED EXEC
    =============================================
    */

    privileged: {

        prompt: "#",

        commands: {

            "configure terminal":
                "Entra no modo de configuração global",

            "show vlan brief":
                "Mostra VLANs",

            "copy running-config startup-config":
                "Salva a configuração na NVRAM",

            "write":
                "Salva a configuração",

            "erase startup-config":
                "Apaga a startup-config",

            "clear":
                "Limpa informações",

            "exit":
                "Volta para o Modo User"

        }

    },


    /*
    =============================================
    GLOBAL CONFIGURATION
    =============================================
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

            "line console":
                "Entra na configuração do console",

            "line vty":
                "Entra na configuração das linhas VTY",

            "exit":
                "Volta para o modo privilegiado",

            "end":
                "Volta diretamente ao modo privilegiado"

        }

    },


    /*
    =============================================
    INTERFACE CONFIGURATION
    =============================================
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

            "switchport mode":
                "Configura o modo da porta",

            "switchport access vlan":
                "Atribui VLAN à porta",

            "switchport port-security":
                "Ativa Port Security",

            "switchport port-security mac-address sticky":
                "Ativa Sticky MAC",

            "switchport port-security mac-address":
                "Autoriza um MAC",

            "no switchport port-security":
                "Desativa Port Security",

            "exit":
                "Volta ao modo de configuração global",

            "end":
                "Volta diretamente ao modo privilegiado"

        }

    },


    /*
    =============================================
    LINE CONFIGURATION
    =============================================
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