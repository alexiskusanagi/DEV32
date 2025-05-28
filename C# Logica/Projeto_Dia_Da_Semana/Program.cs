using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Dia_Da_Semana
{
    internal class Program
    {
        static void Main(string[] args)
        { /* dia da semana
           peça ao usuario para digitar um numero de 1 ate 7 e, usando switch - case, 
            exiba o nome do dia correspondente ( 1= domingo, 2 = segunda, etc) */

            int diaSemana;

            Console.WriteLine("Digite de um número de 1 até 7 para selecionar um dia da semana");
            diaSemana = Convert.ToInt32(Console.ReadLine());

            switch (diaSemana)
            {
                case 1:
                    Console.WriteLine("Domingo");
                    break;
                case 2:
                    Console.WriteLine("Segunda-Feira");
                    ; break;
                case 3:
                    Console.WriteLine("Terça-feira");
                    break;
                case 4:
                    Console.WriteLine("Quarta-feira");
                    break;
                case 5:
                    Console.WriteLine("Quinta-feira");
                    break;
                case 6:
                    Console.WriteLine("Sexta-feira");
                    break;
                case 7:
                    Console.WriteLine("Sábado");
                    break;
                default:
                    Console.WriteLine("Selecione uma opção válida");
                    break;

            }
            Console.ReadKey();

        }
    }
}
