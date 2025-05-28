using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoForContagemRegressivo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // fazendo uma contagem regressiva. quando a estrutura possuir um decremento (1--), a condição
            //deverá analisar sendo > ou >= a algum valor
            int numero;
            Console.WriteLine("Digite um número: ");
            numero = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();// pulando uma linha

            for (int i = numero; i >=0; i--) //i-- é o mesmo que: i=i-1
            {
                Console.WriteLine(i);
            }
            Console.ReadKey();
        }
    }
}
