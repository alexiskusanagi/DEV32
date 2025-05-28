using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoPositivoNegativoZero
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* 2. Crie um projeto que solicite 10 números inteiros ao usuário. Para cada 
             * número digitado, determine se ele é positivo, negativo ou zero.
                     Regras:
                     Números positivos são maiores que zero.
                     Números negativos são menores que zero.
                     Zero é neutro. */

            int numero;

            Console.WriteLine("Quando solicitado, digite um número inteiro \nEsse processo se repetirá 10 vezes" );

            for (int i = 0; i < 10; i++)

            {
                Console.WriteLine("Digite um número inteiro: ");
                numero = Convert.ToInt32( Console.ReadLine() );

                if (numero >= 1)
                {
                    Console.WriteLine(numero + " é positivo");
                }

                else if (numero < 0)
                {
                    Console.WriteLine(numero + " é negativo");
                }

                else 
                {
                    Console.WriteLine(numero + " é neutro");
                
                }


            }

            Console.ReadKey();
        }
    }
}
