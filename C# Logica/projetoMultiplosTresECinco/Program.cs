using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace projetoMultiplosTresECinco
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* 3.Crie um projeto que conte quantos números são divisíveis por 3 e 5 existem em um intervalo(inicio e fim).
            Peça ao usuário dois números e exiba quantos números dentro desse intervalo são divisíveis por 3 e 5 ao mesmo tempo. */

            int numeroInicial, numeroFinal;
            int contador=0;

            Console.WriteLine("Digite um número incial");
            numeroInicial = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite um número final (Precisa ser maior que o número final)");
            numeroFinal = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();

            for (int i = numeroInicial; i <= numeroFinal; i++)
            {
                if (i % 3 == 0 && i % 5 == 0)
                {
                    contador++;

                    Console.WriteLine(i);
                }

            }
            Console.WriteLine();
            Console.WriteLine($"A quantidade de números divisíveis por 3 e 5 no intervalo de {numeroInicial} a {numeroFinal} é: {contador}");


            Console.ReadKey();
        }
    }
}
