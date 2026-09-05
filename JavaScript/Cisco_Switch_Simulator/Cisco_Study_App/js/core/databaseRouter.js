/*
=====================================================
CISCO STUDY SIMULATOR
Arquivo: databaseRouter.js
=====================================================

Responsabilidade:

- Guardar o banco de comandos disponíveis para o Router.
- Organizar comandos por contexto CLI.
- Servir de fonte para Help e Command Tree do Router.

Não possui:

- appState
- NVRAM
- localStorage
- criação do laboratório
- reset do laboratório
- execução de comandos
- regras do Switch
- DOM

A execução pertence ao cliExecutor.js.
As regras de estado pertencem ao simulator.js/state.js.
=====================================================
*/


/*
=====================================================
BANCO DE COMANDOS DO ROUTER
=====================================================
*/

export const routerCommandDatabase = {


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

            "no ip domain-lookup":
                "Desativa a busca automática de nomes DNS",

            "ip domain-name":
                "Configura o nome de domínio do dispositivo",

            "interface":
                "Entra na configuração de uma interface",

            "ip route":
                "Configura uma rota estática",

            "no ip route":
                "Remove uma rota estática",

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

            "description":
                "Define uma descrição para a interface",

            "ip address":
                "Configura endereço IP e máscara",

            "no ip address":
                "Remove endereço IP",

            "shutdown":
                "Desativa a interface",

            "no shutdown":
                "Ativa a interface",

            "encapsulation dot1Q":
                "Configura encapsulamento 802.1Q em uma subinterface",

            "no encapsulation":
                "Remove o encapsulamento da subinterface",

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