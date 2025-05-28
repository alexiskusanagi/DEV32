using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Menu_De_Opcoes
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* Menu de opções 
             * Crie um menu no console com opções
            1 exibir mensagem
            2 mostrar a data atual
            3 sair
            use switch-case para executar a opção desejada */

            int menu;
            
            Console.WriteLine("Escolha uma das seguintes opções \n1 para exibir mensagem \n2 para mostrar a data atual \n3 para sair");

            menu = Convert.ToInt32(Console.ReadLine());

            switch (menu)
            {
                case 1: Console.WriteLine("Exibindo mensagem: HADOUKEN");
                    break;
                case 2: Console.WriteLine("10/03/2025"); 
                    //+ DateTime.Now.ToLongDateString(   ))
                    break;
                case 3: Console.WriteLine("Precione qualquer tecla para sair");
                    //Environment.Exit(0);
                    break;
                default: Console.WriteLine("Operação inválida");
                    break;


            }


            Console.ReadKey();
        }
    }
}
