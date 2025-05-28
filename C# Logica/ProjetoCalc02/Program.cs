using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoCalc02
{
    public class Program
    {
        static void Main(string[] args)
        {   //somar, subtrair, multiplicar e dividir 2 valores

            int val1, val2, valorsoma, valorsubtracao, valormultiplicacao, valordivisao;
            Console.WriteLine("Digite o valor 1 ");
            
            val1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("\nDigite o valor 2 ");
            val2 = Convert.ToInt32(Console.ReadLine());

            valorsoma = val1 + val2;

            valorsubtracao = val1 - val2;

            valormultiplicacao = val1 * val2;

            valordivisao = val1 / val2;

            Console.WriteLine("A soma de " + val1 + " + " + val2 + " é: " +valorsoma);
            Console.WriteLine("A subtração de " + val1 + " - " + val2 + " é: "+valorsubtracao);
            Console.WriteLine("A multiplicação de " + val1 + " x " + val2 + " é: " +valormultiplicacao);
            Console.WriteLine("A divisão de " + val1 + " / " + val2 + " é: " +valordivisao);

            Console.ReadKey();



        }
    }
}
