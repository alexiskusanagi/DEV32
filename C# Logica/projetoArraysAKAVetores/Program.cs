using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoArraysAKAVetores
{
    public class Program
    {
        static void Main(string[] args)
        {
            // trabalhando com vetores (a.k.a. arrays) em C#
            // objetivo: criando e eibindo valores de um array de inteiros

            int[] numeros = { 10, 20, 30, 40, 50 }; // posição de cada elemento - sempre começa com 0 - numero 10 está na posição 0, 20 = posição 1, 30 = posição 2, 40 = posição 3 e 50 = posição 4.

            Console.WriteLine(numeros[0]); // exibe o numero na posição 0, no caso é o numero 10. lembrando que os arrays sempre começam no 0

            // exibindo cada elemento do array usando um for

            Console.WriteLine("Os números do array são: ");
            for (int i = 0; i < numeros.Length; i++)
            {
                Console.WriteLine(numeros[i]); // exibe cada número
            }

            Console.ReadKey();
        }
    }
}
