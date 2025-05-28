using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoArraysAKAVetores03
{
    public class Program
    {
        static void Main(string[] args)
        {
            // somando os valores de um array de números

            // declarar e sinalizar um array
            int[] numero = { 5, 10, 15, 20, 25 };
            int soma = 0;

            //vai percorrer cada elemento do array (vetor) e somá-los.
            foreach (int valor in numero) 
            {
                soma += valor; //soma dos valores no vetor (array)
            }
            Console.WriteLine($"A soma dos valores do array (vetor) é: {soma}");
            Console.ReadKey();

        }
    }
}
