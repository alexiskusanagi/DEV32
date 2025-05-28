using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    internal class ClasseContadorParImpar
    {
        public int EvenOddCounter()
        {
            Console.Clear();
            int operacao;
            Console.SetCursorPosition(15, 1);
            Console.WriteLine("Contador de números Pares ou Ímpares\nSelecione a opção desejada: \n1. Contador de números pares (do 0 ao 40) \n2. Contador de números ímpares (do 1 ao 41) \n0. Para retornar ao Menu Anterior");
            operacao = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();

            switch (operacao)
            {
                case 0:
                    Console.WriteLine("Retornando ao menu anterior. Presione qualquer tecla para continuar.");
                    return 0;

                case 1:
                    Console.WriteLine("Números pares do 0 ao 40");
                    for (int i = 0; i < 41; i += 2)
                    {
                        
                        Console.WriteLine(i);
                    }
                    break;
                
                case 2:
                    Console.WriteLine("Números ímpares do 1 ao 41");
                    for (int i = 1; i < 42; i += 2)
                    {
                        
                        Console.WriteLine(i);
                    }
                    break;

                default:
                    Console.WriteLine("Operação Inválida");
                    break;
            }

            return 0;
        }
    }
}
