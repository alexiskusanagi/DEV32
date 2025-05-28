using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Calculadora
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* calculadora - criar uma calculadora com as funções e opções - digite: "1.soma", "2.subtração", "3.multiplicação", "4.divisão"
            o valor2 não pode ser = 0 - P.S. op é abreviação de "Operação matemática" */



            decimal valor1, valor2;
            int op;

            Console.WriteLine("Digite o primeiro número ");
            valor1 = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine("Digite o segundo número ");
            valor2 = Convert.ToDecimal(Console.ReadLine());
            
            if (valor2 == 0)
            {
                Console.WriteLine("Operação inválida");
            }
            else 
            {
                Console.WriteLine("Para somar digite 1 \nPara subtrair digite 2 \nPara multiplicar digite 3 \nPara dividir digite 4 ");
            }
            
            op = Convert.ToInt32(Console.ReadLine());

            if (op == 1)
            {
                Console.WriteLine("A soma é: " + (valor1 + valor2));
            }

            else if (op == 2)
            {
                Console.WriteLine("A subtração é: " + (valor1 - valor2));
            }

            else if (op == 3)
            {
                Console.WriteLine("A multiplicação é: " + (valor1 * valor2));
            }

            else if (op == 4)
            {
                Console.WriteLine("A divisão é: " + (valor1 / valor2));
            }

            else 
            {
                Console.WriteLine("Operação inválida");
            } 

            
             

            // modo alternativo
            /*
            decimal valor1, valor2;
            int op;

            Console.WriteLine("Digite o primeiro número ");
            valor1 = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine("Digite o segundo número ");
            valor2 = Convert.ToDecimal(Console.ReadLine());

            Console.WriteLine("Para somar digite 1 \nPara subtrair digite 2 \nPara multiplicar digite 3 \nPara dividir digite 4 ");

            op = Convert.ToInt32(Console.ReadLine());

            if (op == 1)
            {
                decimal total;
                total = (valor1 + valor2);
                Console.WriteLine("A soma é: " + total);
            }

            else if (op == 2)
            {
                decimal total;
                total = (valor1 - valor2);
                Console.WriteLine("A subtração é: " + total);
            }

            else if (op == 3)
            {
                decimal total;
                total == (valor1 * valor2);
                Console.WriteLine("A multiplicação é: " + total);
            }

            else if (op == 4)
            {
                decimal total;
                total = (valor1 / valor2);
                Console.WriteLine("A divisão é: " + total);
            }

            else
            {
                Console.WriteLine("Operação inválida");
            }

            */
            Console.ReadKey();

        }
    }
}
