using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoWhile02
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* ter 3 tentativas para acertar a senha correta, caso contrpario o acesso será negado
             * utilizando estrutura de repetição...  */

            string senhaCorreta = "1234";
            string senhaDigitada;
            int tentativas = 3;

            while (tentativas > 0)
            {
                Console.WriteLine("Digite a senha: ");
                senhaDigitada = Console.ReadLine();
                // verificar se a senha digitada é igual a senha correta

                if (senhaDigitada == senhaCorreta)
                { 
                    Console.WriteLine("Acesso permitido. \nBem-Vindo.");
                    Console.ReadKey();
                    return; // ao inserira senha correta, o return faz sair do programa
                }   

                else 
                {
                    tentativas--; //decrementador
                    Console.WriteLine("Senha inválida\n" + $"Tentativas restantes: {tentativas} ");
                    Console.WriteLine();

                }
            }

            Console.ReadKey();


        }
    }
}
