using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    internal class ClasseParImparPrimo
    {
        private double valorDigitado;


        public double evenOddPrime()
        {
            Console.Clear();

            Console.WriteLine();
            Console.WriteLine("Digite um número maior ou igual a 0 para saber se ele é par, ímpar e/ou primo");
            Console.WriteLine();
            Console.WriteLine("Número: ");
            Console.SetCursorPosition(8, 3);
            valorDigitado = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine();

            if (valorDigitado % 2 != 0 && valorDigitado != 1 && valorDigitado % 1 == 0 && valorDigitado % valorDigitado == 0 && valorDigitado % 3 != 0 && valorDigitado % 5 != 0 && valorDigitado % 7 != 0 && valorDigitado % 9 != 0)
            {
                Console.WriteLine($"{valorDigitado} é ímpar e é um número primo");
            }
            else if (valorDigitado == 2)
            {
                Console.WriteLine($"{valorDigitado} é par e é um número primo");
            }

            else if (valorDigitado == 3 || valorDigitado == 5 || valorDigitado == 7)
            {
                Console.WriteLine($"{valorDigitado} é ímpar e é um número primo");
            }

            else if (valorDigitado % 2 == 0 && valorDigitado != 2 || valorDigitado ==0)
            {
                Console.WriteLine($"{valorDigitado} é par e não é um número primo");
            }

            else
            {
                Console.WriteLine($"{valorDigitado} é ímpar e não é um número primo");
            }

            return 0;
        }
    }
}
