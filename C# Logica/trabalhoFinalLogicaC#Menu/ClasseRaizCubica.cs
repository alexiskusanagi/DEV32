using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    internal class ClasseRaizCubica
    {
        public double CubicRoot()
        {
            Random random = new Random();

            Console.Clear();
            Console.SetCursorPosition(15, 0);
            Console.WriteLine("==============================================");
            Console.SetCursorPosition(15, 1);
            Console.WriteLine("| 0   1   2   3   4   5    6    7    8    9  |");
            Console.SetCursorPosition(15, 2);
            Console.WriteLine("| 0   1   8  27  64  125  216  343  512  729 |");
            Console.SetCursorPosition(15, 3);
            Console.WriteLine("==============================================");

            for (int i = random.Next(10, 99); i < 100;) // i++ não é necessário caso, não há nada a incrementar.
            {
                int cubo = i * i * i;
                Console.WriteLine($"A partir das informações acima, você consegue deduzir qual a Raíz Cúbica de: ");
                Console.WriteLine();
                Console.SetCursorPosition(33, 5);
                Console.WriteLine("=========");
                Console.SetCursorPosition(33, 6);
                Console.WriteLine("|");
                Console.SetCursorPosition(41, 6);
                Console.WriteLine("|");
                Console.SetCursorPosition(34, 6);
                Console.WriteLine(cubo.ToString("N0", new CultureInfo("pt-BR"))); //essa formatação ("N0", new CultureInfo("pt-BR"))
                                                                                  //foi aprendida no Copilot, onde N0 (N zero) indica um
                                                                                  //número formatado sem casas decimais (um número inteiro), e
                                                                                  //CultureInfo("pt-BR") garante que a separação de milhares
                                                                                  //seja feita de acordo com o padrão brasileiro (com ponto ao invés de vírgula).
                Console.SetCursorPosition(33, 7);
                Console.WriteLine("=========");
                Console.WriteLine("Resposta: ");
                Console.SetCursorPosition(10, 8);
                int resposta = Convert.ToInt32(Console.ReadLine());

                if (resposta == cubo / i / i)
                {
                    Console.WriteLine("Resposta Correta!");
                }
                else
                {
                    Console.WriteLine($"Não foi dessa vez, a resposta correta é: {cubo / i / i}");
                }

                break;

            }


            return 0;
        }

    }
}

