using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Switch_2
{
    internal class Program
    {
        static void Main(string[] args)
        {/* Ultilizando o comando  SWITCH - CASE, faça:
          
           Solicite ao usuário a seguinte informação:
            Escolha uma cor para sua camiseta
            1 - Azul
                exibir a mensagem: "Você escolheu a cor Azul"
            2 - Preto 
                exibir a mensagem: "Você escolheu a cor Preto"
            3 - Branco
                exibir a mensagem: "Você escolheu a cor Branco"
            4 - Vermelho
                exibir a mensagem: "Você escolheu a cor Vermelho"

            caso o usuário não escolha as opções acima, cairá no default (não esquecer do comando break) e
            dar a mensagem solicitando ao usuário que selecione uma opção válida.

          */

            int corCamiseta;

            Console.WriteLine("Selecione uma cor de camiseta \n 1 - Azul \n 2 - Preto \n 3 - Branco \n 4 - Vermelho");
            corCamiseta = Convert.ToInt32(Console.ReadLine());

            switch (corCamiseta)
            {
                case 1: Console.WriteLine("Você escolheu a camiseta na cor Azul");
                    break;
                case 2: Console.WriteLine("Você escolheu a camiseta na cor Preta");
                    break;
                case 3: Console.WriteLine("Você escolheu a camiseta na cor Branca");
                    break;
                case 4: Console.WriteLine("Você escolheu a camiseta na cor Vermelha");
                    break;
                default:
                    Console.WriteLine("Escolha uma opção de cor válida");
                    // não esquecer do comando break
                        break;

            }


            Console.ReadKey();


        }
    }
}
