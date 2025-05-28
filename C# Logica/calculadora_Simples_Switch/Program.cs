using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace calculadora_Simples_Switch
{
    internal class Program
    {
        static void Main(string[] args)
        {// calculadora simples com switch - case  +,-,*,/.    

            decimal valor1, valor2, operacao, soma, subtracao, multiplicacao, divisao;

            
            Console.WriteLine("Digite o primeiro número: ");
            valor1=Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine("Digite o segundo número: ");
            valor2 = Convert.ToDecimal(Console.ReadLine());

            Console.WriteLine("digite 1 para soma \ndigite 2 para subtração \ndigite 3 para multiplicação \ndigite 4 para divisão ");

            operacao = Convert.ToDecimal(Console.ReadLine());
            soma = valor1 + valor2;
            subtracao = valor1 - valor2;
            multiplicacao = valor1 * valor2;
            divisao = valor1 / valor2;


            switch (operacao)
            {
                case 1:
                    Console.WriteLine("A soma de " +valor1 +  " e " + valor2 + " é: " + soma );
                    break;
                    case 2:
                    Console.WriteLine("A subtração de " + valor1 + " e " + valor2 + " é: " + subtracao);
                    break;
                case 3:
                    Console.WriteLine("A multiplicação de " + valor1 + " e " + valor2 + " é: " + multiplicacao);
                    break;
                case 4:
                    Console.WriteLine("A divisão de " + valor1 + " e " + valor2 + " é: " + divisao);
                    break;
                default:
                    Console.WriteLine("Opção inválida \nEsse programa vai se autofechar em 1 clique");
                    break;
            }


            Console.ReadKey();






        }
    }
}
