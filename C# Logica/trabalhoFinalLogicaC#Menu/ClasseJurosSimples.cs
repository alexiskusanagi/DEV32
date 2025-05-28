using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    internal class ClasseJurosSimples
    {
        private decimal valor;

        public decimal simpleInterestRate()
            {
            int operacao, operacaoPeriodo;
            double valor;

            Console.Clear();
            Console.SetCursorPosition(6, 1);
            Console.WriteLine("Sistema para cálculo de juros simples.\nSelecione a operação desejada.\n1. Juros por atraso de pagamento de boletos\n2. Juros taxa Selic\n3. Juros do rotativo do cartão de crédito\n4. Juros de rentabilidade na poupança\n0. Para retornar ao Menu Anterior ");
            operacao = Convert.ToInt32(Console.ReadLine());

            switch (operacao)
            {
                case 0:
                    Console.WriteLine("Retornando ao Menu Anterior. Presione qualquer tecla para continuar.");
                    return 0;

                case 1:
                    Console.Clear();
                    Console.SetCursorPosition(6, 1);
                    Console.WriteLine("Juros por atraso de pagamento de boletos");
                    Console.WriteLine("Selecione o cálculo desejado.\n1. Taxa de juros ao dia\n2. Taxa de juros ao mês\n3. Taxa de juros ao ano");
                    operacaoPeriodo = Convert.ToInt32(Console.ReadLine());
                    switch (operacaoPeriodo)
                    {
                        case 1:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosDia = (((1d / 100) / 30) * valor); //numero "d" significa numero double ex. 1d ou 5d etc é a mesma coisa que 1.0 ou 5.0
                            double valorTotalComJuros = valor + (((1d / 100) / 30) * valor);
                            Console.WriteLine($"O valor dos juros é: {valorJurosDia.ToString("C")} e o valor total com juros acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;
                        case 2:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosMes = ((1.0 / 100) * valor); // ((1.0 / 100) * valor) essa linha calcula o juros em cima do valor digitado pelo usuário
                            valorTotalComJuros = valor + ((1d / 100) * valor);
                            Console.WriteLine($"O valor dos juros é: {valorJurosMes.ToString("C")} e o valor total com juros acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        case 3:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosAno = (((1d / 100) * 12) * valor);
                            valorTotalComJuros = valor + (((1d / 100) * 12) * valor);
                            Console.WriteLine($"O valor dos juros é: {valorJurosAno.ToString("C")} e o valor total com juros acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        default:
                            Console.WriteLine("Operação Inválida");
                            break;
                    }

                    break;
                case 2:
                    Console.Clear();
                    Console.SetCursorPosition(6, 1);
                    Console.WriteLine("Juros taxa Selic");
                    Console.WriteLine("Selecione o cálculo desejado.\n1. Taxa de juros ao dia\n2. Taxa de juros ao mês\n3. Taxa de juros ao ano");
                    operacaoPeriodo = Convert.ToInt32(Console.ReadLine());

                    switch (operacaoPeriodo)
                    {
                        case 1:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosDia = ((((14.25 / 100) / 12) / 30) * valor); // 1 dividido por 100 =1%
                                                                                          // 14 dividido por 100= 14%
                            double valorTotalComJuros = valor + ((((14.25 / 100) / 12) / 30) * valor);
                            Console.WriteLine($"O valor dos juros é: {valorJurosDia.ToString("C")} e o valor total com juros acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        case 2:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosMes = (((14.25 / 100) / 12) * valor);
                            valorTotalComJuros = valor + (((14.25 / 100) / 12) * valor);
                            Console.WriteLine($"O valor dos juros é: {valorJurosMes.ToString("C")} e o valor total com juros acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        case 3:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosAno = ((14.25 / 100) * valor);
                            valorTotalComJuros = valor + ((14.25 / 100) * valor);
                            Console.WriteLine($"O valor dos juros é: {valorJurosAno.ToString("C")} e o valor total com juros acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        default:
                            Console.WriteLine("Operação Inválida");
                            break;
                    }
                    break;

                case 3:
                    Console.Clear();
                    Console.SetCursorPosition(6, 1);
                    Console.WriteLine("Juros do rotativo do cartão de crédito");
                    Console.WriteLine("Selecione o cálculo desejado.\n1. Taxa de juros do rotativo ao dia\n2. Taxa de juros do rotativo ao mês\n3. Taxa de juros do rotativo ao ano");
                    operacaoPeriodo = Convert.ToInt32(Console.ReadLine());

                    switch (operacaoPeriodo)
                    {
                        case 1:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosDia = ((((431.6 / 100) / 12) / 30) * valor); 
                            double valorTotalComJuros = valor + ((((431.6 / 100) / 12) / 30) * valor);
                            Console.WriteLine($"O valor dos juros é: {valorJurosDia.ToString("C")} e o valor total com juros acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        case 2:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosMes = (((431.6 / 100) / 12) * valor);
                            valorTotalComJuros = valor + (((431.6 / 100) / 12) * valor);
                            Console.WriteLine($"O valor dos juros é: {valorJurosMes.ToString("C")} e o valor total com juros acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        case 3:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosAno = ((431.6 / 100) * valor);
                            valorTotalComJuros = valor + ((431.6 / 100) * valor);
                            Console.WriteLine($"O valor dos juros é: {valorJurosAno.ToString("C")} e o valor total com juros acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        default:
                            Console.WriteLine("Operação Inválida");
                            break;
                    }
                    break;

                case 4:
                    Console.Clear();
                    Console.SetCursorPosition(6, 1);
                    Console.WriteLine("Juros de Rentabilidade da Poupança");
                    Console.WriteLine("Selecione o cálculo desejado.\n1. Taxa de juros de rentabilidade ao dia\n2. Taxa de juros de rentabilidade ao mês\n3. Taxa de juros de rentabilidade ao ano");
                    operacaoPeriodo = Convert.ToInt32(Console.ReadLine());

                    switch (operacaoPeriodo)
                    {
                        case 1:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosDia = ((((6.17 / 100) / 12) / 30) * valor); 
                            double valorTotalComJuros = valor + ((((6.17 / 100) / 12) / 30) * valor);
                            Console.WriteLine($"O valor da rentabilidade por dia é: {valorJurosDia.ToString("C")} e o valor total com juros de rentabilidade acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        case 2:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosMes = (((6.17 / 100) / 12) * valor);
                            valorTotalComJuros = valor + (((6.17 / 100) / 12) * valor);
                            Console.WriteLine($"O valor da rentabilidade por mês é: {valorJurosMes.ToString("C")} e o valor total com juros de rentabilidade acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        case 3:
                            Console.WriteLine("Digite o valor a ser calculado: ");
                            valor = Convert.ToDouble(Console.ReadLine());
                            double valorJurosAno = ((6.17 / 100) * valor);
                            valorTotalComJuros = valor + ((6.17 / 100) * valor);
                            Console.WriteLine($"O valor da rentabilidade por ano é: {valorJurosAno.ToString("C")} e o valor total com juros de rentabilidade acrescido é: {valorTotalComJuros.ToString("C")}");
                            break;

                        default:
                            Console.WriteLine("Operação Inválida");
                            break;
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
