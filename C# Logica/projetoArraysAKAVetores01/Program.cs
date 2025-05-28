using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoArraysAKAVetores01
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Preenchendo um array com entrada de valores do usuário

            //declaração do array (vetor) com o comprimento (length) do vetor

            int[] numeros = new int[3]; //array tem 3 posições. ou seja o tamanho dele é do 0 ao 2. E só cabem 3 elementos (qualquer numero)

            // vamos utilizar o for para percorrer o array e solicitar algo ao usuário
            for (int i = 0; i < numeros.Length; i++)
            {
                Console.WriteLine($"Digite um número para a posição {i}: ");
                numeros[i] = Convert.ToInt32(Console.ReadLine());
            }
            Console.WriteLine("Os números informados foram: ");
            foreach (int num in numeros)
            {
                Console.WriteLine(num);
            }
            Console.ReadKey();
        }
    }
}
