using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    internal class ClasseConversaoCambio
    {
        private double valorConversao;

        public double CurrencyExchange()
        {
            Console.Clear();
            double[] cambio = new double[6]; //criando um vetor/array
            cambio[0] = 7.14; // 1 euro = 7,14 reais
            cambio[1] = 0.14; // 1 real = 14 centavos de euro
            cambio[2] = 7.69; // 1 franco-suiço = 7,69 reais
            cambio[3] = 0.13; // 1 real = 13 centavos de francos-suíços
            cambio[4] = 0.0411; // 1 iene = 4 centavos de reais
            cambio[5] = 24.32; // 1 real = 24,32 ienes

            Console.SetCursorPosition(15, 1);
            Console.WriteLine("Sistema para conversão de Câmbio\n1. Euro para Real\n2. Real para Euro\n3. Franco-Suíço para Real\n4. Real para Franco-Suíço\n5. Iene para Real\n6. Real para Iene \n0. Para retornar ao Menu Anterior ");
            int operacao = Convert.ToInt32(Console.ReadLine());

            switch (operacao)
            {
                case 0:
                    Console.WriteLine("Retornando ao menu anterior. Presione qualquer tecla para continuar.");
                    return 0;

                case 1:
                    double euroReal = 7.14 /*1 euro = 7,14 reais*/, realEuro = 0.14 /*1 real = 0,14 euros*/, euro, real;

                    Console.WriteLine("Cotação: 1 Euro = 7.14 reais\nCotação: 1 Real = 0,14 Euros");
                    Console.WriteLine("Digite o valor em Euro para convertê-lo em Reais: ");
                    euro = Convert.ToDouble(Console.ReadLine());
                    valorConversao = euro * cambio[0]; //número de euros multiplicado pelo valor do euro em reais (7,14)
                    Console.WriteLine($"{euro} euros convertidos são {valorConversao} reais");

                    break;

                case 2:
                    Console.WriteLine("Cotação: 1 Real = 0,14 Euros\nCotação: 1 Euro = 7.14 reais");
                    realEuro = 0.14; // 1 real = 14 centavos de euro.
                    Console.WriteLine("Digite o valor em Real para convertê-lo em Euros: ");
                    real = Convert.ToDouble(Console.ReadLine());
                    valorConversao = real * realEuro; //número de reais multiplicado pelo valor de reais em euro (0,14)
                    Console.WriteLine($"{real} reais convertidos são {valorConversao.ToString("F2")} euros");

                    break;

                case 3:
                    Console.WriteLine("Cotação: 1 Franco-Suíço = 7.69 Reais\nCotação: 1 Real = 0.13 Francos-Suíços");
                    double francoSuicoReal = 7.69 /* reais */, realFrancoSuico = 0.13 /* francos-suíços*/, francoSuico;
                    Console.WriteLine("Digite o valor em Franco-Suíço para convertê-lo em Reais: ");
                    francoSuico = Convert.ToDouble(Console.ReadLine());
                    valorConversao = francoSuico * francoSuicoReal;
                    Console.WriteLine($"{francoSuico} francos-suíços convertidos são {valorConversao} reais ");

                    break;
                case 4:
                    Console.WriteLine("Cotação: 1 Real = 0.13 Francos-Suíços\nCotação: 1 Franco-Suíço = 7.69 Reais");
                    realFrancoSuico = 0.13; //1 real = 13 centavos de franco-suíço
                    Console.WriteLine("Digite o valor em Real para convertê-lo em Francos-Suíços: ");
                    real = Convert.ToDouble(Console.ReadLine());
                    valorConversao = real * realFrancoSuico;
                    Console.WriteLine($"{real} reais convertidos são {valorConversao.ToString("F2")} francos-suiços");

                    break;

                case 5:
                    Console.WriteLine("Cotação: 1 Iene = 0.0411 reais\nCotação: 1 Real = 24,32 Ienes");
                    double realIene = 24.32, iene, ieneReal = 0.0411; // 1 iene = 4 centavos de real
                    Console.WriteLine("Digite o valor em Iene para convertê-lo em Reais: ");
                    iene = Convert.ToDouble(Console.ReadLine());
                    valorConversao = iene * ieneReal; //número de ienes multiplicado pelo valor do iene em reais (0.0411)
                    Console.WriteLine($"{iene} ienes convertidos são {valorConversao.ToString("F2")} reais");

                    break;

                case 6:
                    Console.WriteLine("Cotação: 1 Real = 24,32 Ienes\nCotação: 1 Iene = 0.0411 reais");
                    realIene = 24.32;
                    Console.WriteLine("Digite o valor em Real para convertê-lo em Iene: ");
                    real = Convert.ToDouble(Console.ReadLine());
                    valorConversao = real * realIene; // número de reais multiplicado pelo valor do real em iene (24,32)
                    Console.WriteLine($"{real} reais convertidos são {valorConversao} ienes");

                    break;

                    default:
                    Console.WriteLine("Operação Inválida");
                    break;
            }

            return 0;
        }
    }
}
